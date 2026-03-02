🌱 AgriXAI – Smart Soil. Smart Crops.

AgriXAI is a multilingual AI-powered agricultural assistant that helps farmers make better crop decisions using soil images, soil parameters, and climatic conditions. The system predicts the most suitable crop and explains the reasoning behind the recommendation using Explainable AI (XAI).

🚀 Project Overview

AgriXAI integrates:
Soil Image Classification (Computer Vision)
location-Based Climate Fetching
Crop Recommendation Model
Explainable AI (XAI) for transparent reasoning
Multilingual Farmer-Friendly Interface

The goal is to make smart farming decisions simple, accessible, and explainable.

🏗️ System Workflow

User selects language
user allows live location (or enters manually)
User uploads soil image
Model classifies soil type
Climate data is fetched using location API
Crop recommendation model predicts best crop
XAI module explains why that crop is suggested
Results displayed in simple dashboard

🧠 Machine Learning Components
1️⃣ Soil Image Classification

Dataset: Scraped soil texture images
Model: MobileNetV2 (Transfer Learning)
Output: Soil Type (Black, Laterite, Yellow)

2️⃣ Crop Recommendation Model

Dataset: Soil parameter dataset (N, P, K, pH, Temperature, Humidity, Rainfall)

Models:
Random Forest
XGBoost (Evaluation & Comparison)
Output: Recommended Crop

3️⃣ Explainable AI (XAI)

Feature Importance (Random Forest)
SHAP values (if implemented)
Displays reasoning behind prediction

🛠️ Tech Stack
Frontend
HTML
CSS
JavaScript

Multilingual UI Support

Backend

Python
Flask (for API integration)

Machine Learning
NumPy
Pandas
Matplotlib / Seaborn
Scikit-learn
XGBoost
TensorFlow / Keras (Image Model)

APIs
OpenWeatherMap API (Climate data)
Geolocation API (Live location)

📂 Folder Structure
AgriXAI/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   └── image_model.h5
│
├── dataset/
│   ├── soil_images/
│   └── soil_parameters.csv
│
├── notebooks/
│   ├── EDA.ipynb
│   ├── Crop_Model_Training.ipynb
│   └── Soil_Image_Model.ipynb
│
└── README.md
🎯 Expected Outcome

Accurate soil classification

Reliable crop recommendation

Transparent AI explanations

Farmer-friendly user interface

Language accessibility

🌍 Target Audience

Farmers who:

Have soil images or soil test reports

Want to know the best crop for their land

Prefer simple explanations in their regional language

🔮 Future Improvements

Real-time soil sensor integration

Government scheme suggestions

Fertilizer recommendation module

Disease detection using leaf images

Mobile application version

👥 Team Contribution

ML Model Development

Image Classification Pipeline

Crop Prediction Model

Explainable AI Integration

Frontend Development

Backend Integration

💡 Project Theme

Agritech
