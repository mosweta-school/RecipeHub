import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Footer from './Components/Footer';
import RecipeList from './Components/RecipeList';

const recipes = [
  {
    id: 1, 
    title: "Swedish Meatballs", 
    ingredients: ['Ground beef', 'breadcrumbs', 'egg', 'onion', 'garlic', 'allspice', 'beef broth', 'heavy cream', 'Dijon mustard'],
    instructions: [
      'Mix beef, breadcrumbs, egg, onion, garlic, and allspice in a bowl; roll into balls.',
      'Brown meatballs in a skillet over medium heat until cooked through, then set aside.',
      'In the same pan, whisk beef broth, heavy cream, and Dijon mustard to create a sauce.',
      'Return meatballs to the pan and simmer until the sauce thickens.'
    ]
  },
  {
    id: 2, 
    title: "Cajun-Inspired Rice Pot", 
    ingredients: ['Spanish sausage', 'sweet peppers', 'tomatoes', 'rice', 'spices'],
    instructions: [
      'Brown the sliced sausage in a large pot.',
      'Add chopped peppers and cook until softened.',
      'Stir in the rice, tomatoes, and Cajun spices.',
      'Add water or broth, cover, and simmer until the rice is tender and liquid is absorbed.'
    ]
  },
  {
    id: 3, 
    title: "Spiced Carrot & Lentil Soup", 
    ingredients: ['Carrots', 'lentils', 'spices', 'vegetable broth'],
    instructions: [
      'Sauté chopped carrots and spices in a pot until fragrant.',
      'Add lentils and vegetable broth, then bring to a boil.',
      'Reduce heat and simmer for 20-25 minutes until lentils are soft.',
      'Blend until smooth using an immersion blender.'
    ]
  },
  {
    id: 4, 
    title: "Teriyaki Salmon Quinoa Bowls", 
    ingredients: ['Salmon', 'mushrooms', 'quinoa', 'garlic', 'ginger', 'honey', 'soy sauce'],
    instructions: [
      'Cook quinoa according to package directions.',
      'Whisk soy sauce, honey, garlic, and ginger to make a teriyaki glaze.',
      'Sauté mushrooms and salmon in a pan, brushing the salmon with the glaze.',
      'Assemble bowls by topping quinoa with the salmon, mushrooms, and extra sauce.'
    ]
  },
  {
    id: 5, 
    title: "Spinach and Feta Stuffed Chicken", 
    ingredients: ['Chicken breast', 'spinach', 'feta cheese', 'seasonings'],
    instructions: [
      'Mix chopped spinach and feta in a small bowl.',
      'Cut a pocket into each chicken breast and stuff with the spinach mixture.',
      'Season the outside of the chicken and sear in a pan.',
      'Transfer to the oven and bake at 375°F (190°C) until fully cooked.'
    ]
  },
  {
    id: 6, 
    title: "Smoky Veggie Chili", 
    ingredients: ['Sweet potatoes', 'black beans', 'tomatoes', 'corn', 'garlic', 'Cajun seasoning'],
    instructions: [
      'Sauté cubed sweet potatoes and garlic in a large pot.',
      'Add beans, tomatoes, corn, and Cajun seasoning.',
      'Simmer on low heat for 30-40 minutes until potatoes are tender.',
      'Serve warm, optionally topped with avocado or cilantro.'
    ]
  }
];


function App() {


  return (
    <div className='App'>
      <h1 style={{textAlign: 'center'}}>RecipeHub</h1>
      <RecipeList recipes={recipes}/>
      <Footer/>
    </div>
  )
}

export default App

