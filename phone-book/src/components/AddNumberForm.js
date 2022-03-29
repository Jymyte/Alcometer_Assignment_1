import React, {useState} from 'react'
import contactsCrud from '../services/contacts-crud';

export default function AddNumberForm({setContacts, setContactsToShow, contacts}) {
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
        const temp = contacts.concat(newContact)
        setContacts(temp)
        setContactsToShow(temp)
        setName('')
        setNumber('')
      })
  }

  return (
  <div>
    <h3>Add a contact</h3>
    <form onSubmit={handleSubmit}>
      <div><input type="text" onChange={(e) => setName(e.target.value)}></input></div>
      <input type="text" onChange={(e) => setNumber(e.target.value)}></input>
      <button type='Submit'>Submit</button>
    </form>
  </div>)
}
