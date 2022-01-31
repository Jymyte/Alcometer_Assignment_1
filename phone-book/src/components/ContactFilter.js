import React, {useState} from 'react'

export default function ContactFilter({setContactsToShow, contacts}) {
  const [filter, setFilter] = useState('');

  //try updating in real time maybe?

  const handleChange = (e) => {
    e.preventDefault()
    console.log(setContactsToShow);
    const temp = contacts.filter(contact => 
      contact.name.includes(filter)
    )
    
    console.log(temp, "Filtered contacts")
    setContactsToShow(temp)
  }

  return (
    <div>
      <h3>Search</h3> (case sensitive)
      <form onSubmit={handleChange}>
      <input type="text" onChange={(e) => setFilter(e.target.value)}></input>
      <button type='submit'>Search</button>
      </form>
    </div>
  )
}
