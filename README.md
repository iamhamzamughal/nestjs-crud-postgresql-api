# NestJS PostgreSQL Book API

This is a simple NestJS REST API for managing books stored in a PostgreSQL database using TypeORM.

---

## Features

- Create, read, update, delete (CRUD) operations for books
- Uses PostgreSQL as the database
- Configured with TypeORM and environment variables
- Auto-synchronizes database schema

---

## Database Schema

### Database: `bookDB`

### Table: `book`

| Column          | Type    | Constraints                 | Description                 |
| --------------- | ------- | --------------------------- | --------------------------- |
| `id`            | integer | Primary Key, Auto-generated | Unique book identifier      |
| `title`         | varchar | Not Null                    | Title of the book           |
| `author`        | varchar | Not Null                    | Author name                 |
| `publishedDate` | date    | Not Null                    | Date the book was published |
| `isAvailable`   | boolean | Default: true               | Availability status         |

---

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=username
DB_PASSWORD=password
DB_NAME=bookDB
```

---

## Installation

1. Clone the repository

   ```bash
   git clone <your-repo-url>
   cd your-project-name
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Setup `.env` file as shown above
4. Run the application

   ```bash
   npm run start
   ```

---

## Usage

- The API will run on `http://localhost:3000`
- Use REST clients like Postman or cURL to interact with endpoints (CRUD for books)

---

## Code Highlights

- `BooksService` handles all business logic for books CRUD using TypeORM repository
- Uses DTOs (`CreateBookDto` and `UpdateBookDto`) for input validation (not shown here)
- Database connection configured in `AppModule` using environment variables

---

If you want, I can also help you add API endpoint docs or example requests!
