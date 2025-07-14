import { useEffect, useReducer } from "react";
import "./App.css";
import three from "/images/books.png";

const [, , third] = ["tardigrade", "dolphin", "dog"];
console.log(third);

let language = "JavaScript";
let symbol = "🌚";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s React App</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const courses = ["SDEV255", "SDEV272", "IVYT111"];

const courseObjects = courses.map((course, i) => ({
  id: i,
  title: course,
}));

function Main({ courses, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={onStatus}>
          {openStatus ? "Close" : "Open"} Course
        </button>
        <h2>
          Welcome to the Course List. --- {openStatus ? "Open" : "Closed"}
        </h2>
      </div>
      <main>
        <img
          src={three}
          alt="Smiling face"
        />
        <div>
          <h2>
            {language} is a good language to learn {symbol}
            <br />
            List of courses:
          </h2>
          <ul>
            {courses.map((course) => (
              <li
                key={course.id}
                style={{ listStyleType: "none" }}
              >
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

function App() {
  // <button onClick={() => onStatus(true)}>I want to be open</button>;
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The course is currently ${status ? "Open" : "Closed"}.`, [
      status,
    ]);
  });
  return (
    <div>
      <h1>The course is currently {status ? "Open" : "Closed"}</h1>
      <button onClick={toggle}>{status ? "Close" : "Open"} Course</button>
      <Header
        name="TJ"
        year={2025}
      />
      <Main
        courses={courseObjects}
        openStatus={status}
        onStatus={toggle}
      />
    </div>
  );
}

export default App;
