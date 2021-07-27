import './App.css';
import {useState, useEffect } from 'react'

function App() {

  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [flag, setFlag ] = useState(false)


  useEffect(() => {
    const fetchPerson = async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      setPerson(data.results[0])
      setLoading(false)
    }

    const url = 'https://api.randomuser.me/'
    fetchPerson(url)
  }, [flag])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!person) {
    return <div>Didn't get a Person from the API</div>
  }
  return (
    <div className="main">
      <div><strong>{`Person Name is : ${person.name.title}. ${person.name.first} ${person.name.last}`}</strong></div>
      <img className='image' src={person.picture.large} alt="" />
      <button onClick={() => setFlag((state) => !state)}>Fetch Another</button>
    </div>
  );
}

export default App;
