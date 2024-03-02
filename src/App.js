

import './App.css';
import { useState } from 'react'
import Title from "./components/Title"

function App() {
  const [showContent, setShowContent] = useState(true)

  const [events, setEvents] = useState([
    {title: "Hello my name is John", id: 1},
    {title: "John birthday 2000", id: 2},
    {title: "John last name is Doe", id: 3},
  ])

 

  const handleDelete = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id
    })
    setEvents(filteredEvents)
  }
  return (
    <div className="App">
    <Title/>   
      {showContent && <button onClick={() => setShowContent(false)}>Toggle</button>}
      {!showContent && <button onClick={() => setShowContent(true)}>Toggle</button>}
      {showContent && events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
