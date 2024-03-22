import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Entry item={data[0]} />
      <h1>
        Hello World
      </h1>
    </>
  )
}

