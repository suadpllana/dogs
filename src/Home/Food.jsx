import React from 'react'

const Food = () => {
    const food = [
        "Royal Canin - Offers breed-specific and health-targeted formulas.",
    "Hill's Science Diet - Known for its veterinary-approved, science-based nutrition.",
    "Blue Buffalo - Features natural ingredients with options for various life stages.",
    "Purina Pro Plan - Provides tailored nutrition based on age, size, and health.",
    "Pedigree - Affordable brand offering dry and wet food options.",
    "Orijen - High-protein, grain-free dog food made with fresh ingredients.",
    "Wellness - Known for high-quality, natural ingredients, with grain-free options.",
    "Nutro - Focuses on clean ingredients and various formula types.",
    "Merrick - Offers grain-free recipes with high-quality protein.",
    "Canidae - Features recipes with whole foods and free from fillers."
      ]
  return (
    <>
          <h2>Best food for dogs</h2>
       <ul className="food">
        {food.map((item , index) => (
          <>
            <li key={index}><strong>{item}</strong></li> <br />
          </>
        
        ) )}
        </ul>
        <footer>@Suad Pllana</footer>
    </>
  )
}

export default Food
