import React, {useState} from 'react'

export default function Alcometer() {
  const [weight, setWeight] = useState()
  const [time, setTime] = useState()
  const [gender, setGender] = useState("male")
  const [cans, setCans] = useState()
  const [result, setResult] = useState(0)

  const HandleSubmit = (e) => {
    e.preventDefault()
    let litres = 0.33 * cans
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    if (gender === "male") {
      setResult(gramsLeft / (weight * 0.7))
    } else {
      setResult(gramsLeft / (weight * 0.6))
    }
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label>Weight: </label>
        <input type="double" onChange={(e) => setWeight(e.target.value)}/><br/>
        <label>Number of beers drunk: </label>
        <input type="number" onChange={(e) => setCans(e.target.value)}/><br/>
        <label>Time since you drank them: </label>
        <input type="number" onChange={(e) => setTime(e.target.value)}/><br/>
        <div>
          Male <input type="radio" value="male" name="gender" onChange={(e) => setGender(e.target.value)} /> 
          Female <input type="radio" value="female" name="gender" onChange={(e) => setGender(e.target.value)} />
        </div>
        <button type="submit">Calculate</button>
        <output>{result.toFixed(2)}</output>
      </form>
    </div>
  )
}
