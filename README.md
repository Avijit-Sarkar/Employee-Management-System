# Employee Management System

## Overview
The **Employee Management System** is a full-stack application developed using **Java Spring Boot** for the backend and **React** for the frontend. This application allows users to manage employee data effectively, including adding, editing, deleting, and viewing employee details.

## Features
- **CRUD Operations**: Create, Read, Update, and Delete employee records.
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS.
- **RESTful API**: Backend services built with Spring Boot providing a RESTful API.
- **Database Management**: Utilizes MYSQL for data storage and retrieval.

## Tech Stack
- **Frontend**: 
  - React
  - Tailwind CSS
  - React Router
  
- **Backend**: 
  - Java
  - Spring Boot
  - MYSQL

- **Tools**: 
  - Node.js
  - npm
  - Maven
  - Postman (for API testing)

## Getting Started

### Prerequisites
- Java 11 or higher
- Node.js and npm
- MYSQL

### Installation

#### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Avijit-Sarkar/Employee-Management-System.git
   cd Employee-Management-System/backend
2. Install the required dependencies:
   ```bash
   mvn install
3. Configure the application.properties file for MongoDB connection settings:
    ```bash
    spring.data.mongodb.uri=mongodb://localhost:27017/employee_db
4. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
2. Install the required dependencies:
   ```bash
   npm install
3. Start the React application:
   ```bash
   npm start

### Usage
  * Open your web browser and navigate to http://localhost:3000 to access the application.
  * Use the navigation to add, edit, delete, or view employee records.

### Contributing
  Contributions are welcome! Please feel free to submit a pull request or open an issue.

### License
  This project is licensed under the MIT License. See the LICENSE file for more details.

### Acknowledgments
  Thanks to the developers and contributors of the Spring Boot and React libraries.
