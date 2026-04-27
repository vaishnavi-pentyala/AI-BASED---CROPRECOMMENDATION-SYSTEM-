/* ===========================
   AgriXAI — app.js
   =========================== */

// ---- TRANSLATIONS ----
// ---- PAGE NAVIGATION CONFIG ----

// 1. PAGE CONFIGURATION
const pageSequence = ["home", "phone", "otp", "location","choice", "upload", "manual","analyzing", "results","suggestions"];
let currentPageIndex = 0;

const translations = {
  en: {
    tagline: "Smart Soil. Smart Crops.",
    subtitle: "AI-powered crop recommendations for every farmer",
    startBtn: "🚀 Start Analysis",
    locationTitle: "Your Location",
    locationDesc: "We need your location to fetch live climate data",
    allowLocation: "📍 Use My Location",
    manualLocation: "Or enter manually",
    locationPlaceholder: "e.g. Hyderabad, Telangana",
    continueBtn: "Continue →",
    uploadTitle: "Upload Soil Image",
    uploadDesc: "Take a clear photo of your soil sample",
    uploadBtn: "📁 Choose Image",
    cameraBtn: "📷 Use Camera",
    analyzeBtn: "🔬 Analyze Soil",
    resultsTitle: "Your Results",
    soilType: "Soil Type",
    soilParams: "Soil Parameters",
    climate: "Climate Conditions",
    cropRec: "✨ Recommended Crop",
    whyCrop: "Why this crop?",
    confidence: "Confidence",
    temp: "Temperature",
    humidity: "Humidity",
    rainfall: "Rainfall",
    startOver: "🔄 Start New Analysis",
    about: "About Project",
    contact: "Contact",
    team: "Team",
    footer: "AgriXAI — Empowering farmers with AI",
    detecting: "Analyzing your soil...",
    cropRotation: "Crop Rotation",
    phoneTitle: "Verify Identity",
    phoneDesc: "Enter your phone number to continue",
    getOtpBtn: "Get OTP",
    otpTitle: "Enter OTP",
    otpDesc: "Enter the 4-digit code sent to your phone",
    verifyBtn: "Verify & Continue"
  },
  te: {
    tagline: "తెలివైన మట్టి. తెలివైన పంటలు.",
    subtitle: "ప్రతి రైతుకు AI-ఆధారిత పంట సిఫార్సులు",
    startBtn: "🚀 విశ్లేషణ ప్రారంభించండి",
    locationTitle: "మీ స్థానం",
    locationDesc: "వాతావరణ డేటా కోసం మీ స్థానం అవసరం",
    allowLocation: "📍 నా స్థానం ఉపయోగించు",
    manualLocation: "లేదా మస్తీగా నమోదు చేయండి",
    locationPlaceholder: "ఉదా: హైదరాబాద్",
    continueBtn: "కొనసాగించు →",
    uploadTitle: "మట్టి చిత్రం అప్‌లోడ్",
    uploadDesc: "మట్టి నమూనా యొక్క స్పష్టమైన ఫోటో తీయండి",
    uploadBtn: "📁 చిత్రం ఎంచుకోండి",
    cameraBtn: "📷 కెమెరా ఉపయోగించు",
    analyzeBtn: "🔬 మట్టి విశ్లేషణ",
    resultsTitle: "మీ ఫలితాలు",
    soilType: "మట్టి రకం",
    soilParams: "మట్టి పారామితులు",
    climate: "వాతావరణ పరిస్థితులు",
    cropRec: "✨ సిఫార్సు చేసిన పంట",
    whyCrop: "ఈ పంట ఎందుకు?",
    confidence: "నమ్మకం",
    temp: "ఉష్ణోగ్రత",
    humidity: "తేమ",
    rainfall: "వర్షపాతం",
    startOver: "🔄 కొత్త విశ్లేషణ",
    about: "ప్రాజెక్ట్ గురించి",
    contact: "సంప్రదించండి",
    team: "బృందం",
    footer: "AgriXAI — AI తో రైతులను శక్తివంతం చేయడం",
    detecting: "మీ మట్టిని విశ్లేషిస్తోంది...",
    phoneTitle: "గుర్తింపును ధృవీకరించండి",
    phoneDesc: "కొనసాగించడానికి మీ ఫోన్ నంబర్‌ను నమోదు చేయండి",
    getOtpBtn: "OTP పొందండి",
    otpTitle: "OTP నమోదు చేయండి",
    otpDesc: "మీ ఫోన్‌కు పంపిన 4 అంకెల కోడ్‌ను నమోదు చేయండి",
    verifyBtn: "ధృవీకరించండి & కొనసాగించండి",
    cropRotation: "పంట మార్పిడి",
  },
  hi: {
    tagline: "स्मार्ट मिट्टी। स्मार्ट फसलें।",
    subtitle: "हर किसान के लिए AI-आधारित फसल सिफारिशें",
    startBtn: "🚀 विश्लेषण शुरू करें",
    locationTitle: "आपका स्थान",
    locationDesc: "मौसम डेटा के लिए आपका स्थान चाहिए",
    allowLocation: "📍 मेरा स्थान उपयोग करें",
    manualLocation: "या मैन्युअल दर्ज करें",
    locationPlaceholder: "जैसे: हैदराबाद, तेलंगाना",
    continueBtn: "जारी रखें →",
    uploadTitle: "मिट्टी की तस्वीर अपलोड करें",
    uploadDesc: "अपने मिट्टी के नमूने की स्पष्ट तस्वीर लें",
    uploadBtn: "📁 तस्वीर चुनें",
    cameraBtn: "📷 कैमरा उपयोग करें",
    analyzeBtn: "🔬 मिट्टी का विश्लेषण करें",
    resultsTitle: "आपके परिणाम",
    soilType: "मिट्टी का प्रकार",
    soilParams: "मिट्टी के मापदंड",
    climate: "मौसम की स्थिति",
    cropRec: "✨ सुझाई गई फसल",
    whyCrop: "यह फसल क्यों?",
    confidence: "नम्मी",
    temp: "तापमान",
    humidity: "नमी",
    rainfall: "वर्षा",
    startOver: "🔄 नया विश्लेषण",
    about: "प्रोजेक्ट के बारे में",
    contact: "संपर्क",
    team: "टीम",
    footer: "AgriXAI — AI से किसानों को सशक्त बनाना",
    detecting: "आपकी मिट्टी का विश्लेषण हो रहा है...",
    phoneTitle: "पहचान सत्यापित करें",
    phoneDesc: "जारी रखने के लिए अपना फोन नंबर दर्ज करें",
    getOtpBtn: "ओटीपी प्राप्त करें",
    otpTitle: "ओटीपी दर्ज करें",
    otpDesc: "अपने फोन पर भेजा गया 4 अंकों का कोड दर्ज करें",
    verifyBtn: "सत्यापित करें और जारी रखें",
    cropRotation: "फसल चक्र",
  },
};

const dummyResults = {
  soilType: "Black Cotton Soil",
  soilColor: "#3d2b1f",
  ph: 7.8,
  nitrogen: 42,
  phosphorus: 28,
  potassium: 65,
  temperature: "28°C",
  humidity: "72%",
  rainfall: "850 mm/yr",
  crop: "Cotton",
  cropEmoji: "🌿",
  confidence: 87,
  explanation: "Black cotton soil has high clay content and excellent water retention. Its slightly alkaline pH (7.8) and moderate nitrogen levels are ideal for cotton cultivation.",
};

// ---- STATE ----
let currentLang = "en";
let generatedOTP = null;
let currentPage = "home";
let locDetected = false;

// ---- LANGUAGE CHANGE ----
function changeLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll("[data-key-placeholder]").forEach(el => {
    const key = el.getAttribute("data-key-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  if (locDetected) {
    document.getElementById("locBtn").textContent = "✅ Location Detected!";
  }
}

// ---- NAVIGATION (With Browser History) ----
function goTo(page, pushToHistory = true) {
  const idx = pageSequence.indexOf(page);
  if (idx !== -1) {
    currentPageIndex = idx;
    currentPage = page;
  }

  // Record change in browser history so browser arrows work
  if (pushToHistory) {
    history.pushState({ page: page }, "", "#" + page);
  }

  // Hide all pages, show target
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById("page-" + page);
  if (target) {
    target.classList.add("active");
    target.classList.add("fade-in");
    setTimeout(() => target.classList.remove("fade-in"), 500);
  }
  

  // Manage Step Dots
  const stepDots = document.getElementById("stepDots");
  const dotMap = { location: 0, upload: 1, results: 2 };
  if (["home", "phone", "otp", "analyzing"].includes(page)) {
    stepDots.style.display = "none";
  } else {
    stepDots.style.display = "flex";
    document.querySelectorAll(".step-dots .dot").forEach((d, i) => {
      d.classList.toggle("active", i === dotMap[page]);
    });
  }

  updateNavButtons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// ---- NAVIGATION-----
function goTo(page, pushToHistory = true) {
  const idx = pageSequence.indexOf(page);
  if (idx !== -1) {
    currentPageIndex = idx;
    currentPage = page;
  }

  // Record change in browser history
  if (pushToHistory) {
    history.pushState({ page: page }, "", "#" + page);
  }

  // 1. Hide ALL pages first
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  // 2. Show the target page
  const target = document.getElementById("page-" + page);
  if (target) {
    target.classList.add("active");
    target.classList.add("fade-in");
    // Remove animation class after it plays
    setTimeout(() => target.classList.remove("fade-in"), 500);
  }

  // 3. Manage Step Dots
  const stepDots = document.getElementById("stepDots");
  const dotMap = { location: 0, upload: 1, results: 2 };
  if (["home", "phone", "otp", "analyzing"].includes(page)) {
    stepDots.style.display = "none";
  } else {
    stepDots.style.display = "flex";
    document.querySelectorAll(".step-dots .dot").forEach((d, i) => {
      d.classList.toggle("active", i === dotMap[page]);
    });
  }

  updateNavButtons();
  
  // This line ensures that when we change pages, we start at the top
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function navTo(target) {
  if (target === 'home') {
    goTo('home');
  } 
  else if (target === 'features') {
    goTo('home'); 
    setTimeout(() => {
      document.getElementById('features-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  } 
  else if (target === 'about') { // THIS PART HANDLES THE ABOUT SCROLL
    goTo('home'); // Ensure we are on the home page first
    setTimeout(() => {
      const element = document.getElementById('about-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  } 
  else if (target === 'footer') {
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}




// ---- UI ARROW BUTTONS ----
function goBack() {
  window.history.back(); // Triggers the same thing as browser back arrow
}

function goForward() {
  window.history.forward(); // Triggers the same thing as browser forward arrow
}

function updateNavButtons() {
  const backBtn = document.getElementById('backBtn');
  const forwardBtn = document.getElementById('forwardBtn');
  if (backBtn && forwardBtn) {
    backBtn.disabled = (currentPageIndex === 0);
    forwardBtn.disabled = (currentPageIndex === pageSequence.length - 1 || currentPage === "analyzing");
  }
}

// ---- PHONE & OTP LOGIC ----
function handleSendOTP() {
  const phone = document.getElementById('phoneNumber').value;
  if (/^\d{10}$/.test(phone)) {
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    alert("AgriXAI: Your verification code is " + generatedOTP);
    goTo('otp');
  } else {
    alert("Please enter a valid 10-digit phone number");
  }
}

function handleVerifyOTP() {
  let userEnteredOtp = "";
  document.querySelectorAll('.otp-input').forEach(input => { userEnteredOtp += input.value; });
  if (userEnteredOtp === generatedOTP) {
    alert("Phone Verified Successfully!");
    goTo('location');
  } else {
    alert("Invalid OTP! Try again.");
    document.querySelectorAll('.otp-input').forEach(input => input.value = "");
    document.querySelectorAll('.otp-input')[0].focus();
  }
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
    setTimeout(() => { document.getElementById("manualLoc").style.borderColor = ""; }, 1500);
    return;
  }
  goTo("upload");
}

// ---- IMAGE PREVIEW ----
// --- NEW: Helper for the Split-Screen Steps ---
function updateStep(stepNumber) {
    const step = document.getElementById('s' + stepNumber);
    if (step) {
        document.querySelectorAll('.step-item').forEach(el => el.classList.remove('active'));
        step.classList.add('active');
    }
}

// --- UPDATED: Replaces your old previewImage ---
function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  // Trigger Step 2 immediately when they pick a file
  updateStep(2);

  const reader = new FileReader();
  reader.onload = function(e) {
    const preview = document.getElementById("imgPreview");
    const placeholder = document.getElementById("uploadPlaceholder");
    preview.src = e.target.result;
    preview.style.display = "block";
    placeholder.style.display = "none";
    
    const btn = document.getElementById("analyzeBtn");
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
    
    // Trigger Step 3: Now the user sees the "Analyze" button is ready
    updateStep(3);
  };
  reader.readAsDataURL(file);
}


function startAnalysis() {
  if (currentPage === 'upload') updateStep(4);
  goTo("analyzing");
  animateProgress();
}



// --- Step control for Manual Page ---
function updateManualStep(stepNumber) {
    // Remove active class from all manual steps (m1, m2, m3, m4)
    for(let i=1; i<=4; i++){
        const el = document.getElementById('m' + i);
        if(el) {
            el.classList.remove('active');
        }
    }
    // Add active class to current step
    const current = document.getElementById('m' + stepNumber);
    if(current) {
        current.classList.add('active');
    }
}

// --- Specific Start for Manual Path ---
function startManualAnalysis() {
    updateManualStep(4); // Highlight the final step (Submit)
    
    // Tiny delay so user sees step 4 light up
    setTimeout(() => {
        goTo("analyzing");
        animateProgress();
    }, 400);
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

function showResults() {
  const d = dummyResults;
  document.getElementById("soilColorBox").style.background = d.soilColor;
  document.getElementById("soilTypeVal").textContent = d.soilType;
  document.getElementById("confFill").style.width    = d.confidence + "%";
  document.getElementById("confPct").textContent     = d.confidence + "%";
  document.getElementById("cropEmoji").textContent   = d.cropEmoji;
  document.getElementById("cropName").textContent    = d.crop;
  document.getElementById("xaiText").textContent     = d.explanation;
  goTo("results");
}

function startOver() {
  document.getElementById("imgPreview").style.display = "none";
  document.getElementById("uploadPlaceholder").style.display = "block";
  document.getElementById("analyzeBtn").style.opacity = "0.5";
  document.getElementById("analyzeBtn").style.pointerEvents = "none";
  document.getElementById("soilImg").value = "";
  locDetected = false;
  document.getElementById("locBtn").textContent = translations[currentLang].allowLocation;
  document.getElementById("locBtn").classList.remove("blue-btn");
  document.getElementById("manualLoc").value = "";
  goTo("home");
}
function handleExpertSubmit() {
  const name = document.getElementById('expertName').value;
  const sug = document.getElementById('expertSug').value;

  if (name.trim() !== "" && sug.trim() !== "") {
    alert("Thank you, " + name + "! Your suggestion has been successfully submitted to the AgriXAI team.");
    
    // Clear the inputs
    document.getElementById('expertName').value = "";
    document.getElementById('expertSug').value = "";
    
    // Go back to home page
    goTo('home');
  } else {
    alert("Please fill in both your name and your suggestion.");
  }
}


// ---- SLIDESHOW SCRIPT ----
let slideIndex = 0;
function showSlides(){
  let slides = document.getElementsByClassName("slide");
  let dots = document.querySelectorAll(".dots .dot");
  for(let i=0; i<slides.length; i++){ slides[i].style.display = "none"; }
  slideIndex++;
  if(slideIndex > slides.length) { slideIndex = 1; }
  for(let i=0; i<dots.length; i++){ dots[i].className = dots[i].className.replace(" active", ""); }
  if(slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
  if(dots[slideIndex-1]) dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

function currentSlide(n){
  slideIndex = n - 1;
  showSlides();
}

// ---- INITIALIZATION & BROWSER LISTENERS ----
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial page load handling
  const initialPage = window.location.hash.replace("#", "") || "home";
  history.replaceState({ page: initialPage }, "", "#" + initialPage);
  goTo(initialPage, false);
  changeLang("en");
  showSlides();

  // 2. OTP Input auto-focus logic
  const otpInputs = document.querySelectorAll('.otp-input');
  otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < otpInputs.length - 1) otpInputs[index + 1].focus();
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) otpInputs[index - 1].focus();
    });
  });
});

// 3. This listens specifically for Browser Back/Forward buttons
window.onpopstate = function(event) {
  if (event.state && event.state.page) {
    goTo(event.state.page, false); 
  } else {
    goTo("home", false);
  }
};