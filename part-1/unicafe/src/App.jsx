import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 


  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button name='good' handleClick={() => setGood(good+1)} />
        <Button name='neutral' handleClick={() => setNeutral(neutral+1)} />
        <Button name='bad' handleClick={() => setBad(bad+1)} />
      </div>      
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App