import React, {useState, useEffect} from 'react';
import axios from 'axios'



const API_URL = "http://api.exchangeratesapi.io/v1/latest?access_key=";
const API_KEY = process.env.REACT_APP_EXCHANGE_RATES_API_KEY

const API_ADDRESS = API_URL + API_KEY
//useffectillä haku
function App() {
  const [rates, setRates] = useState([]);
  const [euros, setEuros] = useState(0);
  const [conversion, setConversion] = useState(0);

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
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const temp = euros * rates.GBP;
    setConversion(temp)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="double" onChange={(e) => setEuros(e.target.value)}></input>
        <label> x {rates.GBP}</label>
        <button type="submit">Calculate</button>
      </form>
      <label>{conversion} GBP</label>
    </div>
  );
}

export default App;
