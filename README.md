# Sprocket Factory API

This project is a Node.js API for managing sprocket factories and sprockets. It uses MongoDB as the database and follows the Clean Architecture principles.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Endpoints](#endpoints)
  - [Get All Sprocket Factory Data](#get-all-sprocket-factory-data)
  - [Get Factory Data by ID](#get-factory-data-by-id)
  - [Get Sprocket by ID](#get-sprocket-by-id)
  - [Create New Sprocket](#create-new-sprocket)
  - [Update Sprocket by ID](#update-sprocket-by-id)
- [Swagger Documentation](#swagger-documentation)

## Prerequisites

- Docker and Docker Compose installed on your machine

## Installation

### 1. Clone the repository:
   ```bash
   git clone https://github.com/juan9222/sprocket-factory.git
   cd sprocket-factory
   ```
### 2. Install dependencies:

```bash
   npm install
```
### 3. Running the Application

Build and start the Docker containers:

```bash
   docker-compose up --build
```

Create a parallel terminal instance

   Windows/Linux: Ctrl + Shift + (backtick)
   Mac: Cmd + Shift + (backtick)

Run the container that seeds the DB
```bash
   docker-compose run --rm seed
```

The API will be running at http://localhost:9000.

## Endpoints

### Get All Sprocket Factory Data
URL: /api/v1/factories

Method: GET

Description: Returns all sprocket factory data.

Response Example:

```json
   [
        {
            "id": "60c72b2f4f1a2c001c8e4b3a",
            "factory": {
            "chart_data": {
                "sprocket_production_actual": [32, 29, 31, 30, 32],
                "sprocket_production_goal": [32, 30, 31, 29, 32],
                "time": [1611194818, 1611194878, 1611194938, 1611194998, 1611195058]
            }
            }
        }
    ]
```

### Get Factory Data by ID
URL: /api/v1/factories/:id

Method: GET

Description: Returns factory data for a given factory ID.

Response Example:

```json
   {
    "id": "60c72b2f4f1a2c001c8e4b3a",
    "factory": {
            "chart_data": {
            "sprocket_production_actual": [32, 29, 31, 30, 32],
            "sprocket_production_goal": [32, 30, 31, 29, 32],
            "time": [1611194818, 1611194878, 1611194938, 1611194998, 1611195058]
            }
        }
    }
```

### Get Sprocket by ID
URL: /api/v1/sprockets/:id

Method: GET

Description: Returns sprocket data for a given ID.


Response Example:

```json
{
  "id": "60c72b2f4f1a2c001c8e4b3a",
  "teeth": 10,
  "pitch_diameter": 5,
  "outside_diameter": 7,
  "pitch": 2
}
```

### Create New Sprocket
URL: /api/v1/sprockets

Method: POST

Description: Creates a new sprocket.

Request Example:

```json
    {
        "teeth": 15,
        "pitch_diameter": 8,
        "outside_diameter": 12,
        "pitch": 3
    }
```

Response Example:

```json
    {
        "id": "60c72b2f4f1a2c001c8e4b3a",
        "teeth": 15,
        "pitch_diameter": 8,
        "outside_diameter": 12,
        "pitch": 3
    }
```

### Update Sprocket by ID

URL: /api/v1/sprockets/:id

Method: PUT

Description: Updates a sprocket for a given ID.

Request Example:

```json
    {
        "teeth": 20,
        "pitch_diameter": 10,
        "outside_diameter": 14,
        "pitch": 4
    }
```

Response Example:

```json
    {
        "id": "60c72b2f4f1a2c001c8e4b3a",
        "teeth": 20,
        "pitch_diameter": 10,
        "outside_diameter": 14,
        "pitch": 4
    }
```

### Swagger Documentation

The API documentation can be accessed at:

```bash
http://localhost:9000/api-docs
```