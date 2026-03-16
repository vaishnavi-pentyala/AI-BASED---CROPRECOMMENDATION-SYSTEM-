/* ===========================
   AgriXAI — app.js
   =========================== */

// ---- TRANSLATIONS ----
const translations = {
  en: {
    tagline:            "Smart Soil. Smart Crops.",
    subtitle:           "AI-powered crop recommendations for every farmer",
    startBtn:           "🚀 Start Analysis",
    locationTitle:      "Your Location",
    locationDesc:       "We need your location to fetch live climate data",
    allowLocation:      "📍 Use My Location",
    manualLocation:     "Or enter manually",
    locationPlaceholder:"e.g. Hyderabad, Telangana",
    continueBtn:        "Continue →",
    uploadTitle:        "Upload Soil Image",
    uploadDesc:         "Take a clear photo of your soil sample",
    uploadBtn:          "📁 Choose Image",
    cameraBtn:          "📷 Use Camera",
    analyzeBtn:         "🔬 Analyze Soil",
    resultsTitle:       "Your Results",
    soilType:           "Soil Type",
    soilParams:         "Soil Parameters",
    climate:            "Climate Conditions",
    cropRec:            "✨ Recommended Crop",
    whyCrop:            "Why this crop?",
    confidence:         "Confidence",
    temp:               "Temperature",
    humidity:           "Humidity",
    rainfall:           "Rainfall",
    startOver:          "🔄 Start New Analysis",
    about:              "About Project",
    contact:            "Contact",
    team:               "Team",
    footer:             "AgriXAI — Empowering farmers with AI",
    detecting:          "Analyzing your soil...",
  },
  te: {
    tagline:            "తెలివైన మట్టి. తెలివైన పంటలు.",
    subtitle:           "ప్రతి రైతుకు AI-ఆధారిత పంట సిఫార్సులు",
    startBtn:           "🚀 విశ్లేషణ ప్రారంభించండి",
    locationTitle:      "మీ స్థానం",
    locationDesc:       "వాతావరణ డేటా కోసం మీ స్థానం అవసరం",
    allowLocation:      "📍 నా స్థానం ఉపయోగించు",
    manualLocation:     "లేదా మస్తీగా నమోదు చేయండి",
    locationPlaceholder:"ఉదా: హైదరాబాద్",
    continueBtn:        "కొనసాగించు →",
    uploadTitle:        "మట్టి చిత్రం అప్‌లోడ్",
    uploadDesc:         "మట్టి నమూనా యొక్క స్పష్టమైన ఫోటో తీయండి",
    uploadBtn:          "📁 చిత్రం ఎంచుకోండి",
    cameraBtn:          "📷 కెమెరా ఉపయోగించు",
    analyzeBtn:         "🔬 మట్టి విశ్లేషణ",
    resultsTitle:       "మీ ఫలితాలు",
    soilType:           "మట్టి రకం",
    soilParams:         "మట్టి పారామితులు",
    climate:            "వాతావరణ పరిస్థితులు",
    cropRec:            "✨ సిఫార్సు చేసిన పంట",
    whyCrop:            "ఈ పంట ఎందుకు?",
    confidence:         "నమ్మకం",
    temp:               "ఉష్ణోగ్రత",
    humidity:           "తేమ",
    rainfall:           "వర్షపాతం",
    startOver:          "🔄 కొత్త విశ్లేషణ",
    about:              "ప్రాజెక్ట్ గురించి",
    contact:            "సంప్రదించండి",
    team:               "బృందం",
    footer:             "AgriXAI — AI తో రైతులను శక్తివంతం చేయడం",
    detecting:          "మీ మట్టిని విశ్లేషిస్తోంది...",
  },
  hi: {
    tagline:            "स्मार्ट मिट्टी। स्मार्ट फसलें।",
    subtitle:           "हर किसान के लिए AI-आधारित फसल सिफारिशें",
    startBtn:           "🚀 विश्लेषण शुरू करें",
    locationTitle:      "आपका स्थान",
    locationDesc:       "मौसम डेटा के लिए आपका स्थान चाहिए",
    allowLocation:      "📍 मेरा स्थान उपयोग करें",
    manualLocation:     "या मैन्युअल दर्ज करें",
    locationPlaceholder:"जैसे: हैदराबाद, तेलंगाना",
    continueBtn:        "जारी रखें →",
    uploadTitle:        "मिट्टी की तस्वीर अपलोड करें",
    uploadDesc:         "अपने मिट्टी के नमूने की स्पष्ट तस्वीर लें",
    uploadBtn:          "📁 तस्वीर चुनें",
    cameraBtn:          "📷 कैमरा उपयोग करें",
    analyzeBtn:         "🔬 मिट्टी का विश्लेषण करें",
    resultsTitle:       "आपके परिणाम",
    soilType:           "मिट्टी का प्रकार",
    soilParams:         "मिट्टी के मापदंड",
    climate:            "मौसम की स्थिति",
    cropRec:            "✨ सुझाई गई फसल",
    whyCrop:            "यह फसल क्यों?",
    confidence:         "विश्वास",
    temp:               "तापमान",
    humidity:           "नमी",
    rainfall:           "वर्षा",
    startOver:          "🔄 नया विश्लेषण",
    about:              "प्रोजेक्ट के बारे में",
    contact:            "संपर्क",
    team:               "टीम",
    footer:             "AgriXAI — AI से किसानों को सशक्त बनाना",
    detecting:          "आपकी मिट्टी का विश्लेषण हो रहा है...",
  },
};

// ---- DUMMY RESULTS DATA ----
const dummyResults = {
  soilType:    "Black Cotton Soil",
  soilColor:   "#3d2b1f",
  ph:          7.8,
  nitrogen:    42,
  phosphorus:  28,
  potassium:   65,
  temperature: "28°C",
  humidity:    "72%",
  rainfall:    "850 mm/yr",
  crop:        "Cotton",
  cropEmoji:   "🌿",
  confidence:  87,
  explanation: "Black cotton soil has high clay content and excellent water retention. Its slightly alkaline pH (7.8) and moderate nitrogen levels are ideal for cotton cultivation. The current temperature and humidity conditions in your region further support cotton's growth cycle. Cotton can tolerate dry spells after establishment, matching your local rainfall pattern.",
};

// ---- STATE ----
let currentLang = "en";
let currentPage = "home";
let locDetected  = false;

// ---- LANGUAGE CHANGE ----
function changeLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all data-key text nodes
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update placeholders
  document.querySelectorAll("[data-key-placeholder]").forEach(el => {
    const key = el.getAttribute("data-key-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update loc button if location already detected
  if (locDetected) {
    document.getElementById("locBtn").textContent = "✅ Location Detected!";
  }
}

// ---- NAVIGATION ----
function goTo(page) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  // Show target
  const target = document.getElementById("page-" + page);
  if (target) {
    target.classList.add("active");
    target.classList.add("fade-in");
    setTimeout(() => target.classList.remove("fade-in"), 500);
  }

  // Manage step dots
  const stepDots = document.getElementById("stepDots");
  const dotMap = { location: 0, upload: 1, results: 2 };

  if (page === "home" || page === "analyzing") {
    stepDots.style.display = "none";
  } else {
    stepDots.style.display = "flex";
    document.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === dotMap[page]);
    });
  }

  currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---- LOCATION DETECTION ----
function detectLocation() {
  const btn = document.getElementById("locBtn");
  btn.textContent = "⏳ Detecting...";
  btn.disabled = true;

  setTimeout(() => {
    locDetected = true;
    document.getElementById("manualLoc").value = "";
    document.getElementById("manualLoc").placeholder = "Hyderabad, Telangana (Live)";
    btn.textContent = "✅ Location Detected!";
    btn.classList.add("blue-btn");
    btn.disabled = false;
  }, 1200);
}

function goToUpload() {
  const manual = document.getElementById("manualLoc").value.trim();
  if (!locDetected && !manual) {
    document.getElementById("manualLoc").style.borderColor = "#ef5350";
    document.getElementById("manualLoc").focus();
    setTimeout(() => {
      document.getElementById("manualLoc").style.borderColor = "";
    }, 1500);
    return;
  }
  goTo("upload");
}

// ---- IMAGE PREVIEW ----
function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const preview = document.getElementById("imgPreview");
    const placeholder = document.getElementById("uploadPlaceholder");
    preview.src = e.target.result;
    preview.style.display = "block";
    placeholder.style.display = "none";

    // Enable analyze button
    const btn = document.getElementById("analyzeBtn");
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
  };
  reader.readAsDataURL(file);
}

// ---- START ANALYSIS ----
function startAnalysis() {
  goTo("analyzing");
  animateProgress();
}

function animateProgress() {
  let pct = 0;
  const fill  = document.getElementById("progressFill");
  const label = document.getElementById("progressLabel");

  const interval = setInterval(() => {
    pct += Math.floor(Math.random() * 8) + 3;
    if (pct >= 100) {
      pct = 100;
      clearInterval(interval);
      setTimeout(showResults, 400);
    }
    fill.style.width  = pct + "%";
    label.textContent = pct + "%";
  }, 120);
}

// ---- POPULATE + SHOW RESULTS ----
function showResults() {
  const d = dummyResults;

  document.getElementById("soilColorBox").style.background = d.soilColor;
  document.getElementById("soilTypeVal").textContent = d.soilType;
  document.getElementById("confFill").style.width    = d.confidence + "%";
  document.getElementById("confPct").textContent     = d.confidence + "%";
  document.getElementById("phVal").textContent       = d.ph;
  document.getElementById("nVal").textContent        = d.nitrogen + " kg/ha";
  document.getElementById("pVal").textContent        = d.phosphorus + " kg/ha";
  document.getElementById("kVal").textContent        = d.potassium + " kg/ha";
  document.getElementById("tempVal").textContent     = d.temperature;
  document.getElementById("humVal").textContent      = d.humidity;
  document.getElementById("rainVal").textContent     = d.rainfall;
  document.getElementById("cropEmoji").textContent   = d.cropEmoji;
  document.getElementById("cropName").textContent    = d.crop;
  document.getElementById("xaiText").textContent     = d.explanation;

  goTo("results");
}

// ---- START OVER ----
function startOver() {
  // Reset upload UI
  document.getElementById("imgPreview").style.display    = "none";
  document.getElementById("uploadPlaceholder").style.display = "block";
  document.getElementById("analyzeBtn").style.opacity    = "0.5";
  document.getElementById("analyzeBtn").style.pointerEvents = "none";
  document.getElementById("soilImg").value               = "";

  // Reset location
  locDetected = false;
  document.getElementById("locBtn").textContent  = translations[currentLang].allowLocation;
  document.getElementById("locBtn").classList.remove("blue-btn");
  document.getElementById("locBtn").disabled     = false;
  document.getElementById("manualLoc").value     = "";
  document.getElementById("manualLoc").placeholder = translations[currentLang].locationPlaceholder;

  // Reset progress bar
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("progressLabel").textContent = "0%";

  goTo("home");
}

     //slideshow script
let slideIndex = 0;
showSlides();

function showSlides(){

let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

for(let i=0;i<slides.length;i++){
slides[i].style.display="none";
}

slideIndex++;

if(slideIndex>slides.length){
slideIndex=1;
}

for(let i=0;i<dots.length;i++){
dots[i].className=dots[i].className.replace(" active","");
}
slides[slideIndex-1].style.display="block";
dots[slideIndex-1].className += " active";

setTimeout(showSlides,2000);

}

function currentSlide(n){
slideIndex=n-1;
showSlides();
}


// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  goTo("home");
  changeLang("en");
});