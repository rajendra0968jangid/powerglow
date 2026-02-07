
# ⚡ PowerGlow Backend

PowerGlow Backend is a Node.js + Express API server built with SQLite for lightweight data storage.
This backend is designed to power mobile or web applications with fast, simple REST APIs.

---

## 🚀 Features

* Express.js REST API
* SQLite database
* CORS enabled
* Environment variables support
* Nodemon for development auto-reload
* Clean project structure

---

## 🛠 Tech Stack

* Node.js
* Express.js
* SQLite3
* dotenv
* cors
* nodemon

---

## 📁 Project Structure

```
powerglow-backend/
│
├── node_modules/
├── index.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/powerglow-backend.git
```

Go inside folder:

```bash
cd powerglow-backend
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Server

### Development mode (with auto reload):

```bash
npm run dev
```

### Production mode:

```bash
npm start
```

---

## 🔐 Environment Setup

Create a `.env` file:

```
PORT=3000
```

---

## 📡 Example API

Test server:

```
http://localhost:3000
```

Sample Express starter:

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("PowerGlow Backend Running 🚀");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

---

## 💡 Future Plans

* Authentication (JWT)
* User APIs
* Admin panel
* Location/GPS based analytics
* Mobile app integration

---

## 🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first.

---

## 📜 License

ISC License
First Commit:
git add .
git commit -m "Initial commit: setup PowerGlow backend project"
After adding Express server:
git commit -m "Add basic Express server"

After SQLite integration:
git commit -m "Integrate SQLite database"
After environment setup:
git commit -m "Add dotenv configuration"
After adding README:
git commit -m "Add project README documentation"
After adding nodemon / dev scripts:
git commit -m "Configure nodemon for development"


Example FULL flow
git init
git add .
git commit -m "Initial commit: PowerGlow backend setup"
git branch -M main
git remote add origin https://github.com/rajendra0968jangid/powerglow-backend.git
git push -u origin main
