import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import languages from "./data/languages";
import TypeOfLanguages from "./components/Languages";


function App() {
  const [selectLanguage, setSelectLanguage] = useState(languages[0]);

  return (
    <>
    <section>
      <TypeOfLanguages languages={languages} setSelectLanguage={setSelectLanguage}/>
    </section>
    <section>
      <div className="w-50 m-3">
        <div className="card">
          <h2>{selectLanguage.title}</h2>
          <p>{selectLanguage.description}</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default App

