# TaskFlow
Smooth and efficient task management.

## Tech Stack
* **Frontend:** HTML5, CSS3 (Modern Dark Glassmorphism UI)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT, Bcrypt

## Project Structure
```text
TaskFlow/
├── frontend/
│   └── index.html
└── backend/
    └── src/
        ├── config/
        ├── controllers/
        ├── middlewares/
        ├── models/
        ├── routes/
        ├── utils/
        ├── app.js
        └── server.js
```

## Setup Instructions

* **Install dependencies:** 
  ```bash
  cd backend && npm install
  ```

* **Environment Variables:** Create a `.env` file in the `backend` directory with:
  ```env
  PORT=5000
  MONGO_URI=<your-mongodb-uri>
  JWT_SECRET=<your-secret-key>
  ```
