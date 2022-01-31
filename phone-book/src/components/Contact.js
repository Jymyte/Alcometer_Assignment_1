import React from 'react';
import contactsCrud from '../services/contacts-crud';

export default function Contact({name, number, id, setContacts, contacts}) {

  const handleClick = () => {
    contactsCrud.remove(id)
    const temp = contacts.filter(contact => contact.id !== id)
    setContacts(temp)
  }

  return (
    <div>
      <div>
        <p>{name} {number} <button onClick={handleClick}>delete</button></p>
      </div>
    </div>
  )
}
