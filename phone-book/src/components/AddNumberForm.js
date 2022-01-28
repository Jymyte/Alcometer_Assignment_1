import React, {useState} from 'react'
import contactsCrud from '../services/contacts-crud';

export default function AddNumberForm({setContacts, contacts}) {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    const newNumber = {
      name,
      number
    }

    contactsCrud.push(newNumber)
      .then((newContact) => {
        setContacts(contacts.concat(newContact))
        setName('')
        setNumber('')
      })
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <div><input type="text" onChange={(e) => setName(e.target.value)}></input></div>
      <div><input type="text" onChange={(e) => setNumber(e.target.value)}></input></div>
      <button type='Submit'>Submit</button>
    </form>
  </div>)
}
