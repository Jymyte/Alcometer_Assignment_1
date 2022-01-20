import React , {useState} from 'react'

export default function BMIForm() {
  const [height, setheight] = useState()
  const [weight, setweight] = useState()
  const [BMI, setBMI] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempBMI = weight / (height * height)
    setBMI(tempBMI)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Height:</label>
        <input type="double" value={height} onChange={e => setheight(e.target.value)}/>
        <label>Weight:</label>
        <input type="double" value={weight} onChange={e => setweight(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      <output>BMI: {BMI.toFixed(1)}</output>
    </div>
  )
}
