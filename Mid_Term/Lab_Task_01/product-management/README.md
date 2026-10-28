# Product Management API

## Student Information

- **Name:** [MD SHIHAB ARMAN]
- **Student ID:** [23-53398-3]
- **Section:** [B]
- **Lab Task:** 01 — Advanced Web Technology

## Project Description

A built with NestJS, TypeScript, PostgreSQL, and TypeORM to manage products and employees. The API supports creating, retrieving, updating, and deleting records.

## Technologies Used

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- class-validator
- pnpm
- Postman

## Prerequisites

Install Node.js, pnpm, and PostgreSQL before running the project.

## Installation

```bash
pnpm install
```

## Environment Configuration

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_local_postgres_password
DB_DATABASE=product_management
PORT=3000
```

Replace the database password with your local PostgreSQL password. Do not commit the `.env` file.

## Database Setup

1. Start PostgreSQL.
2. Create a database named `product_management`.
3. Configure the `.env` file with the database connection details.

## Running the Application

Development mode:

```bash
pnpm run start:dev
```

Build the project:

```bash
pnpm run build
```

The API runs at `http://localhost:3000`.

## Product Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

Product fields: `id`, `name`, `category`, `price`, and `quantity`.

## Employee Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Retrieve all employees |
| GET | `/employees/:id` | Retrieve an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

Employee fields: `id`, `name`, `email`, `phone`, `password`, `age`, and `yearsOfWorking`.

## Validation and Error Handling

Request DTOs validate incoming data. Invalid IDs are rejected by the integer parsing pipe, and missing records return a not-found response.

## Screenshots

Postman screenshots will be stored in the `screenshots/` directory.

## Notes

- PostgreSQL is used for persistent storage.
- The `.env` file and `node_modules` directory must not be committed.
- The employee password field is included to meet the lab requirements; use dummy credentials for testing.
