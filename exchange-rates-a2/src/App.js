import React, {useState, useEffect} from 'react';
import axios from 'axios'



const API_URL = "http://api.exchangeratesapi.io/v1/latest?access_key=";
const API_KEY = process.env.REACT_APP_EXCHANGE_RATES_API_KEY

const API_ADDRESS = API_URL + API_KEY
//useffectillä haku
function App() {
  const [rates, setRates] = useState([]);

  /* const promise = axios.get(API_ADDRESS)
  console.log(promise); */

  useEffect(() => {
    axios.get(API_ADDRESS)
    .then(response => {
      console.log("promise fulfilled")
      setRates(response.data.rates)
    })
  }, []);

  console.log(rates);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
