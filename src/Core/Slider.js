import React, { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
  // Create a curr state indicating what's the current slide's index
  const [curr, setCurr] = useState(0);
  const { length } = slides;
  
  const goToNext = () => {
    // Check if we've reached the final slide in the array
    // If so, go back to 0, else curr + 1
    setCurr(curr === length - 1 ? 0 : curr + 1);
  }
  
  // useEffect will run at every re-render
  useEffect(() => {
    // At every render, set a new timeout to go to the next slide
    setTimeout(goToNext, 3000);
    // And, when unmounting <Slider />, clear the timeout
    // See the reactjs.org docs on hooks for more info
    return function() {
      clearTimeout(goToNext);
    }
  })
  
  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }
  
  return (
    <section className="slider">
      {slides.map((s, i) => (
        <div
          // if active slide, include the "active" class
          className={i === curr ? "slide active" : "slide"}
          key={s.title}
          // if not active, hide from screen readers for accessibility
          aria-hidden={i !== curr}
        >
          <div className="slides-head">
            <h1>{s.title}</h1>
          </div>
          {i === curr && (
            <img className="image" src={s.image} alt={`Image for ${s.title}`} />
          )}
        </div>
      ))}
    </section>
  );  
}
export default Slider;

// const Main = () => {
//   return (
//     // Pretending I'm using dynamic slides as props
//     <main>
//       <Slider slides={defaultSlides} />
//     </main>
//   );
// }

// ReactDOM.render(<Main />, document.getElementById('root'));