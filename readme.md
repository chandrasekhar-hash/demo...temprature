# 🌡️ Temperature & Humidity Management System

A full-stack temperature monitoring web application divided into **4 complete vertical feature slices** (Database + Backend + Frontend per person) for true team collaboration.

---

## 👥 4-Developer Feature Division (Full-Stack Per Person)

Each team member owns a complete feature end-to-end across **Database**, **Backend API**, and **Frontend UI**:

### 👤 Person 1: Location Management Feature
* **Database**: [`database/01_locations_table.sql`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/database/01_locations_table.sql) — Room & ESP32 location SQL table definition.
* **Backend API**: [`backend/controllers/locationController.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/backend/controllers/locationController.js) & [`backend/routes/locationRoutes.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/backend/routes/locationRoutes.js) — Location fetching routes & database handlers.
* **Frontend UI**: [`frontend/src/components/LocationsGrid.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/components/LocationsGrid.jsx), [`frontend/src/components/LocationCard.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/components/LocationCard.jsx), [`frontend/src/services/locationService.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/services/locationService.js) & [`frontend/src/utils/locationHelpers.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/utils/locationHelpers.js) — Grid cards & optimal/warm badge helpers.

### 👤 Person 2: Sensor Ingestion & Live Metrics Feature
* **Database**: [`database/02_readings_table.sql`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/database/02_readings_table.sql) — Sensor readings history table & time-series index.
* **Backend API**: [`backend/controllers/readingController.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/backend/controllers/readingController.js) & [`backend/routes/readingRoutes.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/backend/routes/readingRoutes.js) — Sensor POST ingestion & historical log endpoints.
* **Frontend UI**: [`frontend/src/components/HeroStats.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/components/HeroStats.jsx), [`frontend/src/components/MinMaxSection.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/components/MinMaxSection.jsx), [`frontend/src/services/readingService.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/services/readingService.js) & [`frontend/src/utils/readingHelpers.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/utils/readingHelpers.js) — Live campus averages & min/max record badges.

### 👤 Person 3: Trend Analytics & Visualization Feature
* **Database**: [`database/03_analytics_seed.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/database/03_analytics_seed.js) — Historical 24h temperature trend data populator.
* **Backend API**: [`backend/controllers/analyticsController.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/backend/controllers/analyticsController.js) & [`backend/routes/analyticsRoutes.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/backend/routes/analyticsRoutes.js) — Trend analytics query endpoint `/api/analytics/trends`.
* **Frontend UI**: [`frontend/src/components/HistoryChart.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/components/HistoryChart.jsx), [`frontend/src/services/analyticsService.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/services/analyticsService.js) & [`frontend/src/utils/chartHelpers.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/utils/chartHelpers.js) — Interactive Chart.js graph component & dataset generator.

### 👤 Person 4: Core Shell, Sky Theme & Infrastructure
* **Database**: [`database/db_config.json`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/database/db_config.json) & [`database/setup.sql`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/database/setup.sql) — Database master runner & configuration.
* **Backend API**: [`backend/server.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/backend/server.js) & [`backend/config/db.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/backend/config/db.js) — Express core app server & PostgreSQL pool.
* **Frontend UI**: [`frontend/src/App.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/App.jsx), [`frontend/src/components/Header.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/components/Header.jsx), [`frontend/src/components/Background.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/components/Background.jsx), [`frontend/src/components/Footer.jsx`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/components/Footer.jsx), [`frontend/src/styles/main.css`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/styles/main.css) & [`frontend/src/utils/timeHelpers.js`](file:///Users/cs/Documents/Default%20Project/Temprature%20Management%20System/frontend/src/utils/timeHelpers.js) — Main App shell, header clock, dynamic sky themes & layout design system.

---

## 🛠️ Complete Directory Structure

```
Temprature Management System/
├── 🗄️ database/
│   ├── 01_locations_table.sql     (Person 1)
│   ├── 02_readings_table.sql      (Person 2)
│   ├── 03_analytics_seed.js       (Person 3)
│   ├── setup.sql                  (Person 4)
│   ├── seed.js                    (Person 4)
│   └── db_config.json             (Person 4)
│
├── ⚙️ backend/
│   ├── config/
│   │   └── db.js                  (Person 4)
│   ├── controllers/
│   │   ├── locationController.js  (Person 1)
│   │   ├── readingController.js   (Person 2)
│   │   └── analyticsController.js (Person 3)
│   ├── routes/
│   │   ├── locationRoutes.js      (Person 1)
│   │   ├── readingRoutes.js       (Person 2)
│   │   └── analyticsRoutes.js     (Person 3)
│   ├── server.js                  (Person 4)
│   └── package.json
│
└── 🎨 frontend/
    ├── src/
    │   ├── components/
    │   │   ├── LocationsGrid.jsx  (Person 1)
    │   │   ├── LocationCard.jsx   (Person 1)
    │   │   ├── HeroStats.jsx      (Person 2)
    │   │   ├── MinMaxSection.jsx  (Person 2)
    │   │   ├── HistoryChart.jsx   (Person 3)
    │   │   ├── Header.jsx         (Person 4)
    │   │   ├── Background.jsx     (Person 4)
    │   │   └── Footer.jsx         (Person 4)
    │   ├── services/
    │   │   ├── locationService.js (Person 1)
    │   │   ├── readingService.js  (Person 2)
    │   │   └── analyticsService.js(Person 3)
    │   ├── utils/
    │   │   ├── locationHelpers.js (Person 1)
    │   │   ├── readingHelpers.js  (Person 2)
    │   │   ├── chartHelpers.js    (Person 3)
    │   │   └── timeHelpers.js     (Person 4)
    │   ├── styles/
    │   │   └── main.css           (Person 4)
    │   ├── App.jsx                (Person 4)
    │   └── main.jsx               (Person 4)
    └── package.json
```

---

## 🚀 How to Run

### 1. Database Setup
```bash
psql -U postgres -d temperature_db -f database/setup.sql
node database/seed.js
```

### 2. Backend Server
```bash
cd backend
npm install
npm start
# http://localhost:3000
```

### 3. Frontend Dashboard
```bash
cd frontend
npm install
npm run dev
# http://localhost:5173
```