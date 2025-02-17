# Irrigo-codefinity

# Predictive Irrigation System using ESP32 

## 📌 Project Overview

This project is a **Smart Irrigation System** that uses ** AI Models ** to predict whether irrigation is needed based on real-time **sensor data**. It features a **Node.js Backend**, a **React Frontend**, and an **ESP32-based Edge AI model **.

## 🚀 Features

- **Real-time Data Collection** (Temperature, Humidity, Soil Moisture)
- **Machine Learning Model** for irrigation prediction
- **Wi-Fi & Local AI Support** (Works with and without internet)
- **Backend API** for data storage and remote control
- **Interactive UI** for visualization and manual control

---

## 🛠️ System Architecture

1. **ESP32 with TensorFlow Lite**: Reads sensor data and predicts irrigation needs.
2. **Backend (Node.js + Express + MongoDB)**: Stores sensor data and AI decisions.
3. **Frontend (React.js)**: Displays real-time data and allows manual pump control.

---

## ⚙️ Hardware Requirements

- **ESP32 DOIT DevKit V1**
- **DHT11/DHT22 Sensor** (Temperature & Humidity)
- **Soil Moisture Sensor**
- **Relay Module** (For controlling the water pump)
- **Water Pump**

---

## 📌 ESP32 Setup

### 3️⃣ Upload Code to ESP32

1. Clone this repository.
2. Open the project in **VS Code**.
3. Connect ESP32 via USB.
4. Run:
   Arduino code



## 🌐 Backend Setup (Node.js + Express + MongoDB)

### 1️⃣ Install Dependencies

```sh
git clone <repo-url>
cd backend
npm install
```

### 3️⃣ Start Server

```sh
npm start
```

### 4️⃣ API Endpoints

- **POST `/data`** → Receives sensor data from ESP32.
- **GET `/control`** → Sends irrigation status to ESP32.

---

## 💻 Frontend Setup (React.js)

### 1️⃣ Install Dependencies

```sh
git clone <repo-url>
cd frontend
npm install
```

### 2️⃣ Run Frontend

```sh
npm run dev
```

### 3️⃣ Features

- **Live Sensor Data Dashboard**
- **Manual Pump Control**
- **Historical Data Visualization**

---

## 🔧 Troubleshooting

### ESP32 Issues

- **Wi-Fi Not Connecting** → Check SSID & Password in code.

### Frontend Issues

- **API Not Responding** → Check if the backend server is running on the correct port.

---
