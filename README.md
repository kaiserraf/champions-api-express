# 🎮 Players API — Express + TypeScript

A RESTful API for managing football players and their statistics, built with **Node.js**, **Express** and **TypeScript**.

> Developed during the **Node.js course by Felipe Aguiar**.

---

## 📁 Project Structure

```
src/
├── controllers/      # Request handlers
├── models/           # TypeScript interfaces
├── repositories/     # In-memory database & data access
├── routes/           # API route definitions
├── services/         # Business logic layer
└── utils/            # HTTP response helpers
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
npm install
```

### Environment

Create a `.env` file at the root of the project:

```env
PORT=3000
```

### Running the server

```bash
# Development
npm run start:dev

# Development with watch mode
npm run start:watch

# Production build
npm run start:dist
```

---

## 📡 API Endpoints

Base URL: `/api`

| Method   | Endpoint           | Description              |
|----------|--------------------|--------------------------|
| `GET`    | `/players`         | Get all players          |
| `GET`    | `/players/:id`     | Get a player by ID       |
| `POST`   | `/players`         | Create a new player      |
| `DELETE` | `/players/:id`     | Delete a player by ID    |
| `PATCH`  | `/players/:id`     | Update player statistics |

### Example — Create a Player (`POST /api/players`)

```json
{
  "id": 20,
  "name": "Pedri",
  "club": "Barcelona",
  "nationality": "Spain",
  "position": "Midfielder",
  "statistics": {
    "Overall": 87,
    "Pace": 79,
    "Shooting": 75,
    "Passing": 88,
    "Dribbling": 91,
    "Defending": 72,
    "Physical": 68
  }
}
```

### Example — Update Statistics (`PATCH /api/players/:id`)

```json
{
  "Overall": 90,
  "Pace": 80,
  "Shooting": 78,
  "Passing": 90,
  "Dribbling": 93,
  "Defending": 74,
  "Physical": 70
}
```

---

## 🛠️ Tech Stack

| Tool         | Purpose                        |
|--------------|--------------------------------|
| Node.js      | Runtime environment            |
| Express 5    | Web framework                  |
| TypeScript   | Type safety                    |
| tsx          | Run TS directly in development |
| tsup         | Bundle for production          |
| dotenv       | Environment variable management|

---

## 📝 Notes

- The database is **in-memory**, meaning data resets on every server restart.
- The architecture follows a layered pattern: **Routes → Controllers → Services → Repositories**.