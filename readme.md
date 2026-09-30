# 🌡️ Temperature & Humidity Management System

A full-stack temperature monitoring system split into clear, modular components for seamless multi-developer collaboration.

---

## 📁 Project Architecture & Directory Division

```
Temprature Management System/
├── 🗄️ database/                  --> Database Schemas & Seed Data
│   ├── setup.sql                --> PostgreSQL tables initialization
│   ├── seed.js                  --> Sample data generator script
│   └── db_config.json           --> Database metadata & configuration
│
├── ⚙️ backend/                   --> Node.js & Express API Server
│   ├── server.js                --> Express server entrypoint
│   ├── package.json             --> Backend npm packages & scripts
│   ├── .env                     --> Database & server environment configuration
│   ├── config/
│   │   └── db.js                --> PostgreSQL connection pool
│   ├── controllers/
│   │   ├── locationController.js--> Location API handlers
│   │   └── readingController.js --> Sensor reading API handlers
│   └── routes/
│       ├── locationRoutes.js    --> Location routes (/api/locations)
│       └── readingRoutes.js     --> Reading routes (/api/readings)
│
└── 🎨 frontend/                  --> React + Vite User Interface
    ├── package.json             --> Frontend dependencies
    ├── vite.config.js           --> Vite bundler configuration
    ├── index.html               --> HTML entrypoint
    └── src/
        ├── main.jsx             --> React root rendering
        ├── App.jsx              --> Main Dashboard orchestrator
        ├── services/
        │   └── apiService.js    --> Backend API integration service
        ├── data/
        │   └── initialLocations.js --> Static fallback location data
        ├── utils/
        │   └── helpers.js       --> Time, theme, chart & calculation helpers
        ├── styles/
        │   └── main.css         --> Dashboard CSS design system
        └── components/
            ├── Background.jsx   --> Dynamic sky theme background
            ├── Header.jsx       --> Navbar with live IST clock
            ├── HeroStats.jsx    --> Campus live average hero section
            ├── LocationsGrid.jsx--> Grid layout for sensor cards
            ├── LocationCard.jsx --> Individual location live card
            ├── MinMaxSection.jsx--> Daily min & max record badges
            ├── HistoryChart.jsx --> 24h temperature trend chart
            └── Footer.jsx       --> Dashboard footer
```

---

## 👥 4-Developer Group Task Division

| Developer | Assigned Folder / Files | Responsibility |
| :--- | :--- | :--- |
| **Developer 1 (Database Lead)** | `database/setup.sql`<br>`database/seed.js`<br>`database/db_config.json`<br>`backend/config/db.js` | Database setup, schema design, seeding initial data, and connection pool management. |
| **Developer 2 (Backend API Dev)** | `backend/server.js`<br>`backend/controllers/*`<br>`backend/routes/*` | Writing Express server endpoints, route controllers, and handling API requests. |
| **Developer 3 (Frontend Core & State)** | `frontend/src/App.jsx`<br>`frontend/src/services/apiService.js`<br>`frontend/src/utils/helpers.js`<br>`frontend/src/data/*` | State management, live clock updates, background state calculations, and API integration. |
| **Developer 4 (Frontend UI Components)** | `frontend/src/components/*`<br>`frontend/src/styles/main.css` | Building UI components (Header, HeroStats, LocationsGrid, HistoryChart, Footer) & styling. |

---

## 🚀 How to Run the Project

### 1. Database Setup
```bash
# Initialize PostgreSQL schema
psql -U postgres -d temperature_db -f database/setup.sql

# Seed initial data
node database/seed.js
```

### 2. Start Backend Server
```bash
cd backend
npm install
npm run dev
# Server will run on http://localhost:3000
```

### 3. Start Frontend App
```bash
cd frontend
npm install
npm run dev
# Vite server will run on http://localhost:5173
```