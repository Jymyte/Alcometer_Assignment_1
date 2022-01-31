import React from 'react';
import Contact from './Contact';

export default function ContactViewer({contactsToShow, setContacts, contacts}) {
  console.log(contactsToShow, "nyaa");

  return (
  <div>
    <h3>Contacts</h3>
    {contactsToShow.map((contact) => 
      <Contact name={contact.name} number={contact.number} id={contact.id} setContacts={setContacts} contacts={contacts} key={contact.id}/>
    )}
  </div>)
}
