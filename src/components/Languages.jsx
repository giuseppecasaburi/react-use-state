import languages from "../data/languages";

function TypeOfLanguages ( {languages, setSelectLanguage} ) {

    const newArrayTypeOf = [];
  
    languages.forEach(currLanguages => {
        if (!newArrayTypeOf.includes(currLanguages.title)) {
          newArrayTypeOf.push(currLanguages.title);
        }
      
      
    });

    return (
      <div className="nav-button">
        {newArrayTypeOf.map((currTitle, index) => {
          const currLanguage = languages.find(lang => lang.title === currTitle);
          return (
            <button key={index} className="badge rounded-pill mx-1 p-2 text-bg-primary" onClick={() => setSelectLanguage(currLanguage)}>
              {currTitle}
            </button>
          );
        })}
      </div>
    );
  }

export default TypeOfLanguages;