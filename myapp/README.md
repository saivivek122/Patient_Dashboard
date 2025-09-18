# 🏥 Jarurat Care - Patient Records Dashboard

A simple React web application built as part of the internship assignment.  
The dashboard allows you to view, search, and manage patient records.

---

## 🚀 Features
- **Landing Page**
  - Header with "Jarurat Care" logo/name.
  - Navigation bar with links: Home, Patients, About.
- **Patients Page**
  - Fetches patient data from a public API (`JSONPlaceholder`).
  - Displays patients in a responsive grid layout (Name, Age, Contact).
  - Search bar to filter patients by name.
  - "View Details" button (modal/page view can be added).
  - **Add Patient Form** – Add new patients locally (no backend).
  - Handles loading & error states.
- **State Management**
  - Managed using React Hooks (`useState`, `useEffect`).
- **UI & Styling**
  - Responsive design (desktop + mobile).
  - Styled with CSS.
- **Bonus**
  - Add patient toggle (button → expands form).

---

## 🛠️ Tech Stack
- [React (Create React App)](https://create-react-app.dev/)
- React Hooks (`useState`, `useEffect`)
- Fetch API for data retrieval
- CSS for styling

---

## 📦 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/jarurat-care.git
cd jarurat-care

2. Install dependencies
npm install

3. Run the project
npm start


This will run the app on http://localhost:3000/

4. Build for production
npm run build