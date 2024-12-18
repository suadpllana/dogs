import React from 'react'

const Tips = () => {
    const tips = [
        {
          title: "Nutrition",
          list: [
            "Feed your dog high-quality, age-appropriate dog food.",
            "Avoid giving human foods like chocolate, onions, or grapes, as they can be toxic.",
            "Always provide fresh, clean water.",
          ],
        },
        {
          title: "Exercise",
          list: [
            "Ensure regular walks and playtime to maintain their physical and mental health.",
            "Tailor exercise to your dog’s breed and age.",
          ],
        },
        {
          title: "Grooming",
          list: [
            "Brush your dog regularly to reduce shedding and prevent matting.",
            "Bathe as needed using dog-specific shampoo.",
            "Trim their nails and check their paws for injuries.",
          ],
        },
        {
          title: " Vet Visits",
          list: [
            "Schedule regular check-ups and keep vaccinations up to date.",
            "Use flea, tick, and worm prevention treatments.",
          ],
        },
        {
          title: "Dental Care",
          list: [
            "Brush your dog’s teeth regularly with dog-safe toothpaste.",
            "Provide chew toys to help maintain dental hygiene.",
          ],
        },
        {
          title: " Safe Environment",
          list: [
            "Keep harmful items (cleaning products, medications) out of reach.",
            "Provide a safe, comfortable space for your dog to rest.",
          ],
        },
      ];
    
  return (
    <div>
      <h2>Dogs Care tips</h2>
      <div className="care-tips-container">
        {tips.map((tip, index) => (
          <div key={index}>
            <h3>
              {index + 1}. {tip.title}
            </h3>
            <ul>
              {tip.list.map((item) => (
                <li key={Math.random()}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tips
