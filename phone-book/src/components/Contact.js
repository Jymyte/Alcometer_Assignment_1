import React from 'react';
import contactsCrud from '../services/contacts-crud';

export default function Contact({name, setContactsToShow, number, id, setContacts, contacts}) {

  const handleClick = () => {
    contactsCrud.remove(id)
    const temp = contacts.filter(contact => contact.id !== id)
    setContacts(temp)
    setContactsToShow(temp);
    console.log(temp);
  }

  return (
    <div>
      <div>
        <p>{name} {number} <button onClick={handleClick}>delete</button></p>
      </div>
    </div>
  )
}
