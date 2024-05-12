import { useState, useEffect } from 'react'
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // setCounter(100);
    alert(`You've changed the counter to ` + counter)
  }, [counter]);

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}














// const Person = (props) => {
//   return (
//     <>
//       <h3>First Name: {props.Fname}</h3>
//       <h3>Last Name: {props.Lname}</h3>
//       <h3>Age: {props.age}</h3>
//     </>
//   )
// }
//
// function App() {
//   return (
//     <div className='App'>
//       <Person
//         Fname={'Rosh'}
//         Lname={'Brew'}
//         age={22}
//       />
//       <Person Fname={'Euclea'} Lname={'Euclid'} age={3 + 3} />
//       <Person />
//     </div>
//   )
// }




// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
