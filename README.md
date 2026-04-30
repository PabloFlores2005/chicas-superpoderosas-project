# Node.js REST API Boilerplate

This project is a REST API boilerplate built with Node.js, Express, and SQLite, using Sequelize as the ORM.It follows a strict layered architecture and uses ECMAScript modules.

## Project Structure

The source code is organized inside the `src` directory following a layered architecture pattern:

- `src/controllers/`: Handles HTTP requests and responses.
- `src/services/`: Contains business logic and rules.
- `src/repositories/`: Direct queries to the SQLite database using Sequelize.
- `src/models/`: Definition of the database tables (e.g., Products).
- `src/config/`: Database configuration and environment variables setup.
- `src/routes/`: API endpoint definitions and routing.

## Setup Instructions

### Prerequisites

- Node.js (version 20 or higher recommended)

### Environment Variables

Copy the example environment file to create your local configuration:

```sh
cp .env.example .env
```

### Running Locally

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server (the SQLite database will be created automatically):
   ```sh
   npm run dev
   ```

3. The API will be available at `http://localhost:8080`.

## API Endpoints

The following endpoint is available for the Products API:

- `POST /api/v1/products`: Create a new product. Requires `name` and `price` in the request body.
