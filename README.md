Expense Tracker - Full Stack Project
🚀 Project Overview

Expense Tracker is a full-stack web application developed using:

Java
Spring Boot
MySQL
HTML
CSS
JavaScript

This project helps users:

Add expenses
View expenses
Update expenses
Delete expenses

The application follows proper backend architecture using:

Controller Layer
Service Layer
Repository Layer
Entity Layer
🛠️ Technologies Used
Backend
Java
Spring Boot
Spring Data JPA
Maven
Database
MySQL
Frontend
HTML
CSS
JavaScript
API Testing
Postman
Version Control
GitHub
📂 Project Structure
src/main/java/com/example/taskmanager
│
├── controller
│   └── ExpenseController.java
│
├── service
│   ├── ExpenseService.java
│   └── ExpenseServiceImpl.java
│
├── repository
│   └── ExpenseRepository.java
│
├── entity
│   └── Expense.java
│
├── exception
│   ├── ErrorResponse.java
│   ├── GlobalExceptionHandler.java
│   └── ResourceNotFoundException.java
│
└── TaskmanagerApplication.java
📌 Features
✅ CRUD Operations
Create Expense

Users can add expenses.

Read Expenses

Users can view all expenses.

Update Expense

Users can edit existing expenses.

Delete Expense

Users can remove expenses.

🗄️ Database Configuration
application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/taskdb
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
🧠 Backend Architecture

The project follows layered architecture:

Controller → Service → Repository → MySQL Database
📌 API Endpoints
➕ Add Expense
POST
/api/expenses
Request Body
{
  "name": "Adarsh",
  "title": "Food",
  "amount": 500,
  "category": "Lunch",
  "date": "2026-05-25"
}
📋 Get All Expenses
GET
/api/expenses
✏️ Update Expense
PUT
/api/expenses/{id}
❌ Delete Expense
DELETE
/api/expenses/{id}
🌐 Frontend

The frontend is developed using:

HTML
CSS
JavaScript

Files:

src/main/resources/static
│
├── index.html
├── style.css
└── script.js

Frontend communicates with backend APIs using:

fetch()
🔥 How The Project Works
Step 1

User enters expense details in frontend.

Step 2

JavaScript sends API request to Spring Boot backend.

Step 3

Controller receives request.

Step 4

Service layer processes business logic.

Step 5

Repository layer interacts with MySQL database.

Step 6

Data is stored and returned as JSON response.

🧩 Important Concepts Used
Spring Boot Annotations
Annotation	Purpose
@RestController	Creates REST APIs
@Service	Business logic
@Repository	Database layer
@Entity	Database table mapping
@GetMapping	GET API
@PostMapping	POST API
@PutMapping	UPDATE API
@DeleteMapping	DELETE API
🧠 ORM Concept

The project uses:

Spring Data JPA
Hibernate ORM

ORM means:

Java Object ↔ Database Table

This removes the need for writing most SQL queries manually.

▶️ How To Run Project
Step 1

Clone repository:

git clone https://github.com/webwizard-08/ExpenseTracking-SpringBoot.git
Step 2

Open project in:

Visual Studio Code
or
IntelliJ IDEA
Step 3

Create MySQL database:

CREATE DATABASE taskdb;
Step 4

Update database password in:

application.properties
Step 5

Run application:

.\mvnw.cmd spring-boot:run
🌐 Open In Browser
http://localhost:8080
🎯 Learning Outcomes

Through this project, the following concepts were learned:

REST API Development
CRUD Operations
Spring Boot Architecture
MySQL Database Integration
JPA & Hibernate
Frontend and Backend Integration
API Testing using Postman
Git & GitHub
🚀 Future Improvements
User Authentication
JWT Security
Expense Analytics
Monthly Reports
Dashboard Charts
Budget Tracking
👨‍💻 Author

Developed by:

webwizard-08

Using:

Java
Spring Boot
MySQL
HTML/CSS/JavaScript
