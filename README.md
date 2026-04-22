# TaskFlow
Smooth and efficient task management.

## Setup Instructions

1. **Install dependencies:**
   `cd backend && npm install`

2. **Environment Variables:**
   Create a `.env` file in the `backend` directory with:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```

3. **Start the server:**
   `npm run dev`

## API Endpoints
- `POST /api/auth/register` - Register a user
- `POST /api/auth/login` - Login a user
- `GET /api/tasks` - Get user tasks (Protected)
- `POST /api/tasks` - Create a task (Protected)
