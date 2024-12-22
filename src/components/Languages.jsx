import languages from "../data/languages";

function TypeOfLanguages ( {languages} ) {

    const newArrayTypeOf = [];
  
    languages.forEach(currLanguages => {
        if (!newArrayTypeOf.includes(currLanguages.title)) {
          newArrayTypeOf.push(currLanguages.title);
        }
      
      
    });
  
    return (
      <div className="nav-button">
        {newArrayTypeOf.map((currTitle, index) => (
          <button key={index} className={`badge rounded-pill mx-1 p-2 ${currTitle}`}>{currTitle}</button>
        ))}
  
      </div>
    )
  }

export default TypeOfLanguages;