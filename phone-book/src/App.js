import React, {useState, useEffect} from "react"
import contactsCrud from "./services/contacts-crud";
import AddNumberForm from "./components/AddNumberForm"
import ContactViewer from "./components/ContactViewer"
import ContactFilter from "./components/ContactFilter";

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactsToShow, setContactsToShow] = useState([]);

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
      <AddNumberForm setContacts={setContacts} contacts={contacts} />
      <ContactFilter setContactsToShow={setContactsToShow} contacts={contacts} />
      <ContactViewer contactsToShow={contactsToShow} setContacts={setContacts} contacts={contacts}/>
    </div>
  );
}

export default App;
