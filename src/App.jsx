import 'bootstrap/dist/css/bootstrap.min.css';
import languages from "./data/languages"
import TypeOfLanguages from "./components/Languages"


function App() {
  return (
    <>
    <section>
      <TypeOfLanguages languages={languages}/>
    </section>
    <section>
      <div className="w-50 m-3">
        <div className="card">
          <h2>{languages[0].title}</h2>
          <p>{languages[0].description}</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default App

