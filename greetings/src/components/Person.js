import React from 'react'

export default function Person(props) {
  const person = props.person //Destructuring
  
  return (

    <div>
      <p>Hello {person.fname} {person.lname}</p> {/* Thanks to destructuring we don't have to use props.person.fname */}
    </div>
  )
}
