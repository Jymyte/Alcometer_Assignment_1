import React, {useState, useEffect} from "react"
import contactsCrud from "./services/contacts-crud";
import AddNumberForm from "./components/AddNumberForm"
import ContactViewer from "./components/ContactViewer"

function App() {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    contactsCrud.getAll()
      .then(contacts => setContacts(contacts))
  }, []);
  

  return (
    <div className="App">
      <h2>Phone book</h2>
      <AddNumberForm setContacts={setContacts} contacts={contacts}/>
      <ContactViewer contacts={contacts}/>
    </div>
  );
}

export default App;
