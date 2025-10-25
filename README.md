# Instruction Injection Interactive Introduction

**ICATT INFO** - Menselijk digitaal

Een interactieve demo en presentatie over Instruction Injection aanvallen voor educatieve doeleinden.

## Overzicht

Deze repository bevat een volledige demo-applicatie die laat zien hoe instruction injection aanvallen werken in AI-systemen. Het project is ontwikkeld voor ICATT INFO om awareness te creëren over AI-beveiligingsrisico's in de overheidssector.

## Features

- **Homepage met ICATT Branding**: Replica van www.icatt.nl design met purple branding
- **Instruction Injection POC**: Live demonstratie van een injection aanval
- **Real-time Data Collection**: API endpoint die geëxfiltreerde data verzamelt
- **Admin Panel**: Dashboard om verzamelde data te monitoren
- **Interactieve Presentatie**: HTML-presentatie met ICATT styling
- **Educatieve Inhoud**: Uitgebreide uitleg over instruction injection

## Architectuur

```
┌─────────────────────────────────────┐
│         Homepage (index.html)       │
│  - ICATT branding                   │
│  - Injection POC embedded           │
│  - User interaction tracking        │
└──────────────┬──────────────────────┘
               │
               ↓
┌──────────────────────────────────────┐
│      Node.js/Express Server          │
│      API Endpoint (/api/collect)     │
│  - Receives exfiltrated data         │
│  - Stores in-memory                  │
└──────────────┬───────────────────────┘
               │
               ↓
┌──────────────────────────────────────┐
│     Admin Panel (admin.html)         │
│  - Visualizes collected data         │
│  - Statistics dashboard              │
│  - Real-time updates                 │
└──────────────────────────────────────┘
```

## Installatie

### Vereisten

- Node.js 14.x of hoger
- npm of yarn

### Setup

1. Clone de repository:
```bash
git clone <repository-url>
cd instruction-injection-interactive-introduction
```

2. Installeer dependencies:
```bash
npm install
```

3. Start de server:
```bash
npm start
```

4. Open in browser:
```
http://localhost:3000
```

## Gebruik

### Demo Flow

1. **Start de applicatie**
   ```bash
   npm start
   ```

2. **Bezoek de homepage**
   - Open `http://localhost:3000`
   - De instruction injection wordt automatisch geactiveerd
   - Browser console toont injection activiteit

3. **Vul het formulier in**
   - Voer naam, email en bericht in
   - Data wordt onderschept en verzonden naar API

4. **Bekijk verzamelde data**
   - Open `http://localhost:3000/admin`
   - Zie alle geëxfiltreerde informatie
   - Real-time updates elke 5 seconden

5. **Bekijk de presentatie**
   - Open `http://localhost:3000/presentation.html`
   - Gebruik pijltjestoetsen of buttons om te navigeren

## Project Structuur

```
instruction-injection-interactive-introduction/
├── server.js                 # Express server met API endpoints
├── package.json             # Project dependencies
├── presentation-content.md  # Presentatie inhoud (markdown)
├── README.md               # Deze file
└── public/
    ├── index.html          # Homepage met ICATT design + injection POC
    ├── admin.html          # Admin panel voor data monitoring
    ├── presentation.html   # Interactieve HTML presentatie
    └── styles.css          # ICATT branding CSS
```

## API Endpoints

### POST /api/collect
Verzamelt geëxfiltreerde data van de injection POC.

**Request Body:**
```json
{
  "event": "page_load|form_submission|user_interaction",
  "timestamp": "2024-10-25T12:00:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "platform": "Linux",
  "screenResolution": "1920x1080",
  ...
}
```

**Response:**
```json
{
  "success": true,
  "message": "Data received successfully",
  "id": 1
}
```

### GET /api/data
Haalt alle verzamelde data op.

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

### DELETE /api/data
Wist alle verzamelde data.

**Response:**
```json
{
  "success": true,
  "message": "Cleared 10 entries"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-10-25T12:00:00.000Z",
  "dataCount": 10
}
```

## Instruction Injection POC

De homepage bevat een verborgen script dat demonstreert hoe instruction injection werkt:

### Wat wordt verzameld?

1. **Page Load Events**
   - Browser informatie (userAgent, platform)
   - Schermresolutie
   - Taal en tijdzone
   - Referrer en URL

2. **Form Submissions**
   - Alle formulier velden
   - Timestamp van verzending
   - Systeem informatie

3. **User Interactions**
   - Click events (elke 5 clicks)
   - Target elements
   - Interaction counts

### Hoe het werkt

```javascript
// Data exfiltratie functie
const exfiltrateData = async (data) => {
    await fetch('/api/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
};

// Automatisch bij page load
exfiltrateData({
    event: 'page_load',
    ...systemInfo
});
```

## Presentatie

De presentatie is beschikbaar in meerdere formaten:

1. **HTML Presentatie** (`/presentation.html`)
   - Interactief in de browser
   - ICATT branding
   - Navigatie met toetsenbord/buttons

2. **Markdown Content** (`presentation-content.md`)
   - Volledige tekst inhoud
   - 21 slides met uitgebreide uitleg
   - Kan geconverteerd worden naar PowerPoint

### Presentatie Inhoud

- Wat is Instruction Injection?
- Waarom is dit belangrijk?
- Hoe werkt het?
- Types aanvallen
- Demo architectuur
- Live demo
- Verdedigingsstrategieën
- Best practices
- ICATT aanpak
- Q&A

## Beveiliging

Deze applicatie is **uitsluitend bedoeld voor educatieve doeleinden** en demonstreert:

- Hoe instruction injection aanvallen werken
- Waarom input validation belangrijk is
- Hoe data exfiltratie kan plaatsvinden
- Defensieve maatregelen

**Waarschuwing**: Gebruik deze code niet in productie zonder adequate beveiligingsmaatregelen!

## ICATT Branding

Het project gebruikt de officiële ICATT branding:

- **Primary Color**: Purple (#663399)
- **Dark Purple**: #4a2470
- **Light Purple**: #8855bb
- **Tagline**: "Menselijk digitaal"
- **Motto**: "Common ground, transparant en open"

## Development

### Development Mode

```bash
npm run dev
```

### Testing

Open drie browser tabs:
1. Homepage (`http://localhost:3000`)
2. Admin Panel (`http://localhost:3000/admin`)
3. Browser Console (F12)

Voer acties uit op de homepage en bekijk de data in het admin panel.

### Logs

Server logs tonen alle ontvangen data:
```
[2024-10-25T12:00:00.000Z] Data collected: { id: 1, event: 'page_load', ... }
```

## Export naar PowerPoint

Om de HTML presentatie naar PowerPoint te converteren:

1. Open `presentation.html` in browser
2. Print naar PDF (Ctrl+P)
3. Gebruik een converter tool (bijv. Adobe Acrobat, online tools)
4. Of gebruik `presentation-content.md` met een markdown-to-pptx converter

## License

MIT License - Zie LICENSE file voor details.

## Contact

**ICATT INFO**
- Website: www.icatt.nl
- Email: info@icatt.nl
- Locatie: Amsterdam

**Contactpersonen:**
- Hanneke van der Horst
- Hoite Polkamp

## Acknowledgments

- ICATT INFO voor het initiatief
- Common Ground community
- We Code For NL
- Open source security community

## Disclaimer

Deze software is ontwikkeld voor educatieve en onderzoeksdoeleinden. De makers zijn niet verantwoordelijk voor misbruik van deze demonstratie-applicatie. Gebruik deze kennis uitsluitend voor defensieve beveiligingsdoeleinden.
