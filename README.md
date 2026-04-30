## 🍳 RecipeHub
A sleek, responsive React application built with Vite that displays a curated list of tasty dishes. This project demonstrates parent-child component architecture and dynamic data rendering using props. 

## 🚀 Features
- Dynamic Recipe Cards: Displays ingredients and step-by-step instructions.
- Parent-Child Architecture:
- RecipeList (Parent) manages the data array.
- RecipeCard (Child) handles the presentation of individual recipes.
- Modern Styling: Uses React inline styles for a clean, centered layout.
- Fast Performance: Powered by Vite for near-instant Hot Module Replacement (HMR).
  
## 🛠️ Project Structure
RecipeHub/
├── 📄 index.html          
├── 📁 src/
    ├── 📁 Assets
    ├── 📄 main.jsx        
    ├── 📄 App.jsx         # Grandparent component & Data source
    ├── 📄 index.css 
    ├── 📄 App.css
    └── 📁 Components/     # Reusable UI Components
        └──📄 RecipeList.jsx # Parent: Maps through recipes
            └── 📄 RecipeCard.jsx # Child: Displays individual recipe details

## 💻 Tech Stack
- React (Functional Components & Hooks)
- Vite (Build Tool)
- JavaScript (ES6+)
- CSS3 (Inline styles & App.css)
  
## 🛠️ Installation & Setup
1. Fork the repository
2. Clone the repository
```bash
git clone https://github.com/your-username/RecipeHub.git
```
3. Install dependencies
```bash
npm install
```
4. Start the development server
```bash
npm run dev
```
Note: Open the link provided in the terminal (usually http://localhost:5173). Do not use Live Server (port 5500) as it does not support JSX.

## 📖 Component Logic
The application follows a strict top-down data flow:
- App.jsx passes the recipes array to RecipeList.
- RecipeList iterates over the array using .map() and renders a RecipeCard for each item.
- Each RecipeCard receives a recipe object as a prop and displays its contents.
