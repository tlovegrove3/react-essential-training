import './App.css'

let language = 'JavaScript';
let symbol = '🌚';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s React App</h1>
      <p>Copyright {props.year}</p>
    </header>
  );
}

function App() {

  return (
    <div>
      <Header name="TJ" year={2025}/>
      <main>
        <h2>
          {language} is a good language to learn {symbol}
        </h2>
      </main>
    </div>
    
  )
}

export default App
