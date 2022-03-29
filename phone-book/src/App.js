import React, {useState, useEffect} from "react"
import contactsCrud from "./services/contacts-crud";
import AddNumberForm from "./components/AddNumberForm"
import ContactViewer from "./components/ContactViewer"
import ContactFilter from "./components/ContactFilter";

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactsToShow, setContactsToShow] = useState([]);
  // Maybe bring the filter word here
  // and make a function for updating contactsToshow so
  // the contact list can be kept updated even when deleting or submitting

  useEffect(() => {
    contactsCrud.getAll()
      .then(contacts => {
        setContacts(contacts)
        setContactsToShow(contacts)
      })
  }, []);
  

  return (
    <div className="App">
      <h2>Phone book</h2>
      <AddNumberForm setContacts={setContacts} setContactsToShow={setContactsToShow} contacts={contacts} />
      <ContactFilter setContactsToShow={setContactsToShow} contacts={contacts} />
      <ContactViewer contactsToShow={contactsToShow} setContactsToShow={setContactsToShow} setContacts={setContacts} contacts={contacts}/>
    </div>
  );
}

export default App;
