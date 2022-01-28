import React from 'react';

export default function Contact({name, number}) {
  return (
    <div>
      <div>
        <p>{name} {number}</p>
      </div>
    </div>
  )
}
