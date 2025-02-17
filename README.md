# Irrigo-codefinity

# Predictive Irrigation System using ESP32 and TensorFlow Lite

## 📌 Project Overview
This project is a **Smart Irrigation System** that uses **Edge AI on ESP32** to predict whether irrigation is needed based on real-time **sensor data**. It features a **Node.js Backend**, a **React Frontend**, and an **ESP32-based Edge AI model using TensorFlow Lite**.

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

## 📌 ESP32 Setup (PlatformIO + TensorFlow Lite)

### 1️⃣ Install **PlatformIO** in VS Code
1. Install **VS Code**.
2. Install **PlatformIO extension** from the marketplace.

### 2️⃣ Configure `platformio.ini`
Create or modify `platformio.ini`:
```ini
[env:esp32doit-devkit-v1]
platform = espressif32
board = esp32doit-devkit-v1
framework = arduino
monitor_speed = 115200
lib_deps =
    tensorflow/tflite-micro
    adafruit/DHT sensor library@^1.4.6
    bblanchon/ArduinoJson@^7.3.0
    https://github.com/tensorflow/tflite-micro-esp-examples.git
    tanakamasayuki/TensorFlowLite_ESP32@^1.0.0
```

### 3️⃣ Upload Code to ESP32
1. Clone this repository.
2. Open the project in **VS Code**.
3. Connect ESP32 via USB.
4. Run:
   ```sh
   pio run --target upload
   ```

### 4️⃣ TensorFlow Lite Model
1. Train a TinyML model using **Google Colab / Edge Impulse**.
2. Convert the model to **TensorFlow Lite (.tflite)**.
3. Include `model_data.h` in the ESP32 project.

---

## 🌐 Backend Setup (Node.js + Express + MongoDB)

### 1️⃣ Install Dependencies
```sh
git clone <repo-url>
cd backend
npm install
```

### 2️⃣ Configure `.env` File
Create a `.env` file in the backend folder:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/irrigation
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
npm start
```

### 3️⃣ Features
- **Live Sensor Data Dashboard**
- **Manual Pump Control**
- **Historical Data Visualization**

---

## 🔧 Troubleshooting
### ESP32 Issues
- **Compilation Error (TensorFlow Lite)** → Ensure correct `platformio.ini` configuration.
- **Wi-Fi Not Connecting** → Check SSID & Password in code.

### Backend Issues
- **MongoDB Connection Fails** → Ensure MongoDB is running locally or provide a correct cloud URI.

### Frontend Issues
- **API Not Responding** → Check if the backend server is running on the correct port.

---


