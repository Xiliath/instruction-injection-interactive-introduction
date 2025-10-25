const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage for collected data
let collectedData = [];

// API endpoint to receive and store data
app.post('/api/collect', (req, res) => {
  const timestamp = new Date().toISOString();
  const dataEntry = {
    id: collectedData.length + 1,
    timestamp: timestamp,
    data: req.body,
    headers: {
      'user-agent': req.headers['user-agent'],
      'referer': req.headers['referer'] || 'Direct',
      'ip': req.ip || req.connection.remoteAddress
    }
  };

  collectedData.push(dataEntry);

  console.log(`[${timestamp}] Data collected:`, dataEntry);

  res.json({
    success: true,
    message: 'Data received successfully',
    id: dataEntry.id
  });
});

// API endpoint to retrieve all collected data
app.get('/api/data', (req, res) => {
  res.json({
    success: true,
    count: collectedData.length,
    data: collectedData
  });
});

// API endpoint to clear all data
app.delete('/api/data', (req, res) => {
  const count = collectedData.length;
  collectedData = [];
  res.json({
    success: true,
    message: `Cleared ${count} entries`
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    dataCount: collectedData.length
  });
});

// Serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`\n===========================================`);
  console.log(`Instruction Injection Demo Server`);
  console.log(`===========================================`);
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Homepage: http://localhost:${PORT}/`);
  console.log(`Admin Panel: http://localhost:${PORT}/admin`);
  console.log(`API Endpoint: http://localhost:${PORT}/api/collect`);
  console.log(`===========================================\n`);
});
