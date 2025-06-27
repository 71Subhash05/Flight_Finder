# Project Report: Flight Booking App

## 1. Introduction

The Flight Booking App is a full-stack web application designed to allow users to search for flights, view details, and make bookings. The project utilizes a React frontend and a Node.js/Express backend with MongoDB for data storage.

---

## 2. Objectives

- Provide a user-friendly interface for searching and booking flights.
- Implement a RESTful API for managing flight data.
- Store and retrieve flight information using MongoDB.
- Demonstrate full-stack development skills.

---

## 3. Technologies Used

- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Other:** npm, Git

---

## 4. Features

- Search for available flights.
- View flight details.
- Book flights.
- Seed database with sample flight data.
- Responsive UI.

---

## 5. Project Structure

- `client/` - React frontend
- `server/` - Node.js/Express backend
    - `models/Flight.js` - Mongoose model for flights
    - `seed.js` - Script to seed sample flight data

---

## 6. Setup Instructions

### Backend

1. Navigate to the `server` folder:
    ```
    cd server
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. (Optional) Seed the database:
    ```
    node seed.js
    ```
4. Start the backend server:
    ```
    npm start
    ```

### Frontend

1. Navigate to the `client` folder:
    ```
    cd client
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the React app:
    ```
    npm start
    ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 7. Screenshots

- Home Page  
  ![Home Page](./client/public/media/Home.png)
- Booking Page  
  ![Booking Page](./client/public/media/Bookings.png)

---

## 8. Conclusion

This project demonstrates the integration of a modern frontend with a RESTful backend and a NoSQL database. It provides a foundation for further enhancements such as authentication, payment integration, and more advanced search features.

---

## 9. Team Members

- **M. Subhash** – Full Stack Developer
- **S. Madhu Pavan** – Frontend Developer
- **T. Lakshmi Sravani** – Backend Developer
- **S. Srinija** – Database Administrator

---

## 10. References

- [React Documentation](https://reactjs.org/)
- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
