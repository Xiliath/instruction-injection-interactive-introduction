# Quick Start Guide

## Instruction Injection Interactive Introduction

Snelle start handleiding voor het draaien van de demo.

## 🚀 Snel aan de slag

### 1. Installatie (2 minuten)

```bash
# Installeer dependencies
npm install

# Start de server
npm start
```

De applicatie draait nu op `http://localhost:3000`

### 2. Demo Stappen (5 minuten)

#### Stap 1: Homepage bezoeken
- Open: `http://localhost:3000`
- ✅ Injection wordt automatisch geactiveerd
- 🔍 Check browser console voor logging

#### Stap 2: Formulier invullen
- Scroll naar "Instruction Injection Interactieve Demo"
- Vul je naam, email en bericht in
- Klik "Verzenden"
- ✅ Data wordt onderschept en opgeslagen

#### Stap 3: Data bekijken
- Open: `http://localhost:3000/admin`
- 📊 Zie alle verzamelde informatie
- 🔄 Auto-refresh elke 5 seconden

#### Stap 4: Presentatie bekijken
- Open: `http://localhost:3000/presentation.html`
- ⌨️ Gebruik arrow keys om te navigeren
- 📱 Ook mobile-friendly

## 📋 Wat te verwachten

### Homepage
- ICATT branded design (purple theme)
- Contact formulier
- Verborgen instruction injection script
- Warning banners

### Admin Panel
- Real-time statistieken
- Volledige data tabel
- Event types: page_load, form_submission, user_interaction
- Clear data functie

### Presentatie
- 12 slides over Instruction Injection
- ICATT branding
- Interactieve navigatie
- Printbaar naar PDF

## 🎯 Demo Scenario's

### Scenario 1: Basis Demo (5 min)
1. Start server
2. Open homepage
3. Show console logging
4. Open admin panel in second tab
5. Fill form on homepage
6. Show data appearing in admin panel

### Scenario 2: Presentatie (20 min)
1. Open presentation.html
2. Walk through all slides
3. Demo live application bij slide 7
4. Show collected data
5. Explain defense strategies

### Scenario 3: Technical Deep Dive (30 min)
1. Show code in index.html (injection POC)
2. Show server.js (API endpoints)
3. Demonstrate data flow
4. Test different scenarios
5. Discuss prevention techniques

## 🔍 Wat wordt gedemonstreerd?

### Injection Techniques
- Embedded malicious scripts
- Data exfiltration via fetch()
- Form data interception
- User interaction tracking

### Security Risks
- Invisible to user
- Complete data capture
- Browser fingerprinting
- Session information leakage

### Defense Strategies
- Input validation importance
- Output filtering
- Monitoring and alerting
- Security best practices

## 📱 URLs

| Pagina | URL | Doel |
|--------|-----|------|
| Homepage | http://localhost:3000/ | Demo + Injection POC |
| Admin Panel | http://localhost:3000/admin | Data monitoring |
| Presentatie | http://localhost:3000/presentation.html | Slides |
| API Collect | http://localhost:3000/api/collect | Data endpoint |
| API Data | http://localhost:3000/api/data | Get all data |
| Health Check | http://localhost:3000/api/health | Server status |

## 🛠️ Troubleshooting

### Server start niet
```bash
# Check of port 3000 vrij is
lsof -i :3000

# Kill process indien nodig
kill -9 <PID>

# Of gebruik andere port
PORT=8080 npm start
```

### Geen data zichtbaar
1. Check browser console voor errors
2. Refresh admin panel (Ctrl+R)
3. Clear browser cache
4. Check server logs in terminal

### Presentatie laadt niet
1. Check of server draait
2. Open direct: http://localhost:3000/presentation.html
3. Check browser console voor errors

## 📝 Tips voor Presenteren

### Voorbereiding
- [ ] Test alles 15 minuten voor start
- [ ] Open alle tabs (homepage, admin, presentation)
- [ ] Clear oude data (🗑️ Wis Alles in admin panel)
- [ ] Test formulier invullen
- [ ] Check dat console logging werkt

### Tijdens Presentatie
- [ ] Start met presentatie slides (context)
- [ ] Switch naar live demo bij slide 7
- [ ] Show browser console logging
- [ ] Fill form met demo data
- [ ] Show admin panel real-time updates
- [ ] Explain code snippets
- [ ] Discuss defense strategies

### Afsluiting
- [ ] Samenvatting belangrijkste punten
- [ ] Verwijs naar GitHub repository
- [ ] Q&A sessie
- [ ] Contact info delen

## 🎓 Learning Points

### Voor Developers
1. Never trust user input
2. Always validate and sanitize
3. Monitor AI system behavior
4. Log all interactions
5. Implement rate limiting

### Voor Security Teams
1. Assess AI system risks
2. Implement monitoring
3. Create incident response plans
4. Regular security audits
5. User education programs

### Voor Management
1. Understand AI security risks
2. Budget for security measures
3. Compliance requirements (GDPR, AI Act)
4. Cost of prevention vs breach
5. Transparency and trust

## 📚 Aanvullende Resources

- Volledige README: `README.md`
- Presentatie content: `presentation-content.md`
- Source code: `server.js`, `public/`
- ICATT website: https://www.icatt.nl

## 🆘 Support

Bij vragen of problemen:
- Email: info@icatt.nl
- Website: www.icatt.nl
- Contact: Hanneke van der Horst, Hoite Polkamp

---

**ICATT INFO** - Menselijk digitaal
Common ground, transparant en open
