//import Person from './components/Person'
import BMIForm from "./components/BMIForm"

const App = () => {
  /* const person = {
    fname: 'Elli',
    lname: 'Esimerkki',
    address: {
      street: 'hood 1',
      zip: '90666',
      city: 'Kaupunni'
    }
  } */

  ;(function(p){
    console.log(p)
  }(7))

  return (
    <div>
      <BMIForm/>
    </div>
  )
}

export default App;
