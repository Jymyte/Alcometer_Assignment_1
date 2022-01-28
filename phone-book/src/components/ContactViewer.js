import React from 'react';
import Contact from './Contact';

export default function ContactViewer({contacts}) {
  console.log(contacts, "nyaa");

  return (
  <div>
    {contacts.map((contact) => 
      <Contact name={contact.name} number={contact.number} key={contact.id}/>
    )}
  </div>)
}
