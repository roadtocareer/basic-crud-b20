# Basic CRUD Operations with Node.js & Sequelize

A beginner-friendly Node.js project demonstrating fundamental CRUD (Create, Read, Update, Delete) and search operations using **Sequelize ORM** with **MySQL**.

---

## 🚀 Features

- **Database Connection & Synchronization**: Automatic table creation and synchronization using Sequelize.
- **User Registration (Create)**: Creates a new user record with validation to avoid duplicate email entries.
- **List Users (Read)**: Retrieves all user records from the database in formatted JSON.
- **Update User (Update)**: Updates multiple fields (e.g., `firstName`, `lastName`) for a given user ID.
- **User Search (Query)**: Searches user records across multiple columns (`firstName`, `lastName`, `email`) using Sequelize's `Op.or` operator.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Database**: [MySQL](https://www.mysql.com/)
- **ORM**: [Sequelize](https://sequelize.org/) (v6)
- **Driver**: `mysql2`
- **Environment Management**: `dotenv`

---

## 📁 Project Structure

```text
basic-crud-b20/
├── .env.example        # Sample environment variables
├── .gitignore          # Git ignore rules (node_modules, .env)
├── db.js               # Database connection setup & User model definition
├── main.js             # Entry point script executing database operations
├── package.json        # Dependencies and metadata
├── README.md           # Project documentation
└── userController.js   # CRUD & search controller functions
```

---

## 📋 Prerequisites

- **Node.js** (v16 or higher recommended)
- **MySQL Server** installed and running locally or remotely

---

## ⚙️ Installation & Setup

### 1. Clone the repository and navigate to the project folder:
```bash
cd basic-crud-b20
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Configure environment variables:
Create a `.env` file in the root directory by copying `.env.example`:
```bash
cp .env.example .env
```

Update `.env` with your MySQL database credentials:
```env
DB_NAME=userdb_b20
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
```

> **Note**: Make sure the database specified in `DB_NAME` exists in your MySQL server before running the script:
> ```sql
> CREATE DATABASE IF NOT EXISTS userdb_b20;
> ```

---

## 🗄️ Database Schema

The `User` model defines a `users` table with the following schema:

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `INTEGER` | Primary Key, Auto Increment | Unique user identifier |
| `firstName` | `STRING` | Not Null | User's first name |
| `lastName` | `STRING` | Nullable | User's last name |
| `email` | `STRING` | Not Null, Unique | User's email address |
| `phoneNumber`| `STRING` | Nullable | Contact number |
| `password` | `STRING` | Not Null | User account password |
| `createdAt` | `DATE` | Auto-generated | Record creation timestamp |
| `updatedAt` | `DATE` | Auto-generated | Last update timestamp |

---

## 💻 Usage

Run the main execution script using Node.js:

```bash
node main.js
```

### Available Controller Functions

All controller functions are exported from `userController.js`:

```javascript
import { 
  userRegistration, 
  userList, 
  updateUser, 
  userSearch 
} from "./userController.js";

// Register a new user
await userRegistration("John", "Doe", "john@example.com", "0123456789", "password123");

// List all users
await userList();

// Update user details (pass multiple fields in an object)
await updateUser(1, { firstName: "Karim", lastName: "Mia" });

// Search user by keyword across firstName, lastName, or email
await userSearch("Karim");
```

---

## 📄 License

This project is licensed under the [ISC License](package.json).
