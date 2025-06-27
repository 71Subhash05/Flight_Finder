# Flight Booking App

This project is a full-stack flight booking application with a React frontend and a Node.js/Express/MongoDB backend.

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally

---

## Backend Setup

1. Open a terminal and navigate to the `server` folder:

    ```
    cd server
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. (Optional, for testing/demo) **Seed the database with sample flights:**

    ```
    node seed.js
    ```

    > This step is optional. You can use the website to add flights as an operator. The `seed.js` script is provided to quickly populate the database with sample data for testing or demo purposes.

4. Start the backend server:

    ```
    npm start
    ```

---

## Frontend Setup

1. Open a new terminal and navigate to the `client` folder:

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

## Seeding the Database

(Optional) To insert sample flight data into MongoDB for testing or demo purposes, run the following in the `server` folder:

```
node seed.js
```

You can also add flights directly through the website after logging in as an operator. The `seed.js` script is just for convenience during development or testing.

---

---

## User Roles

- **Operator:**  
  After logging in as an operator, you can add new flights directly through the website interface.

- **Admin:**  
  When logged in as an admin, you can view all flight bookings and manage them.

> Note: The `seed.js` script is optional and mainly for testing/demo purposes. In real usage, operators add flights via the website, and admins manage bookings through the admin dashboard.

---

## Project Structure

- `client/` - React frontend
- `server/` - Node.js/Express backend
    - `models/Flight.js` - Mongoose model for flights
    - `seed.js` - Script to seed sample flight data

---

## Media

### Screenshots

![Home Page](https://github.com/71Subhash05/FlightFinder/ProjectFiles/client/public/media/Home.png)
![Booking Page](.client/public/media/Bookings.png)

### Demo Video

[![Watch the demo](https://github.com/71Subhash05/Flight_Finder/blob/main/Video%20Demo/FlightFinder%20Video.mp4)

---

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

---

## Troubleshooting

- Make sure MongoDB is running locally on the default port (`27017`).
- If you have issues with seeding, check that your `Flight` model exists at `server/models/Flight.js`.

---

Happy coding!
