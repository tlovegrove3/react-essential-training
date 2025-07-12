import { useState } from 'react'
import './App.css'
import three from '/images/books.png'

const [ , , third] = ['tardigrade', 'dolphin', 'dog'];
console.log(third);


let language = 'JavaScript';
let symbol = '🌚';

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s React App</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const courses = [
  'SDEV255',
  'SDEV272',
  'IVYT111'
];

const courseObjects = courses.map((course, i) => ({
    id: i,
    title: course
}));

function Main({ courses }) {
  return (
    <>
    <div>
      <h2>Welcome to the Course List</h2>
    </div>
    <main>
      <img src={three} alt="Smiling face"/>
      <div>
        <h2>
          {language} is a good language to learn {symbol}<br />
          List of courses:
        </h2>
        <ol>
          {courses.map((course) => (
            <li key={course.id} style=
            {{
              listStyleType: 'none'
            }}
            >{course.title}</li>
          ))}
        </ol>
      </div>
    </main>
    </>
  );
}


function App() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>The course is currently {status ? "Open" : "Closed"}</h1>
      <button onClick={() =>  setStatus(!status)}>
        { status ? 'Close' : 'Open' } Course
      </button>

      <Header name="TJ" year={2025}/>
        <Main courses={courseObjects} openStatus={status}/>
    </div>
    
  )
}

export default App
