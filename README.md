# 💆‍♀️ SkinAI – Personalized Skincare Advisor

**SkinAI** is an intelligent skincare recommendation platform built for Pakistani and Asian audiences. Users get **personalized skincare routines** in **Roman Urdu**, powered by **Gemini AI**, with **budget-friendly, local product suggestions**.

---

## 🖼️ Live Demo

🌐 **Frontend (Vercel):** [Click to Visit]([(https://skinai-frontend.vercel.app/])  

> 🔁 Backend runs on Replit and can be pinged using services like [cron-job.org](https://cron-job.org) to stay alive.

---

## 🧪 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React (Vite)       |
| Backend     | FastAPI            |
| AI Model    | Gemini 1.5 Flash   |
| Styling     | Pure CSS (Futuristic UI) |
| Deployment  | Vercel (frontend), Replit (backend) |

---

## 📸 Screenshots

> _(Add your own screenshots or hosted images here using markdown)_



yaml
Copy
Edit

---

## 🧠 Features

- 📝 Dynamic form to collect skincare details (like skin type, age group, sensitivity, etc.)
- 💬 Gemini API response in **Roman Urdu** with clear skincare advice
- 🧴 Uses **local Pakistani/Asian brands** in suggestions
- 💰 Recommends **budget-friendly skincare routines**
- ⚠️ Adds medical disclaimers and gentle guidance
- ⏳ Loading states (e.g. “Gemini soch raha hai...”) for better UX

---

## 🔮 Future Roadmap

Planned features for v2+:

- 📷 **Image-based skin analysis** (upload a selfie to detect acne, dryness, etc.)
- 🔍 **Custom RAG (Retrieval-Augmented Generation)** from dermatology knowledge base
- 📥 **Download skincare recommendation as PDF**
- 👥 User authentication (track progress, save preferences)
- 🌐 Language toggle (Roman Urdu ↔ English ↔ Urdu script)
- 📱 Mobile responsive PWA / App version
- 💬 Chat-style skin consultation using Gemini

---

## 🔧 How to Run Locally

### 1. Clone this Repository
```bash
git clone https://github.com/your-username/skinai.git
cd skinai
2. Start Backend (FastAPI)
Make sure your .env contains your Gemini API key

bash
Copy
Edit
cd backend/
uvicorn main:app --reload
3. Start Frontend (React + Vite)
bash
Copy
Edit
cd frontend/
npm install
npm run dev
🛡️ License
This project is open-source and MIT licensed. Use freely, just give credit if reused.

🙌 Credits
👤 Developed by: Hamza Zubair

💡 AI Model: Gemini 1.5 Flash by Google

🇵🇰 Inspired by Pakistani skincare needs & accessibility

📫 Contact / Suggestions?
Have ideas, suggestions, or want to collaborate? Reach out via Issues or email: youremail@example.com
