import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


export default function App() {
  const [count, setCount] = useState(0)
  const entryItems = data.map(entry => {
    return (
      <Entry
        key={entry.id}
        item={entry}
      />
    )
  })
    
  return (
    <>
      <Header />
      {entryItems}
    </>
  )
}

