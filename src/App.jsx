import languages from "./data/languages"
import TypeOfLanguages from "./components/Languages"


function App() {
  return (
    <>
    <section>
      <TypeOfLanguages languages={languages}/>
    </section>
    </>
  )
}

export default App

