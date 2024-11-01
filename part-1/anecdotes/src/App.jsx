import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const highestVote = Math.max(...votes) 
  console.log(highestVote)

  const mostVoted = votes.findIndex((element) => element === highestVote)
  

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleVote = (index) => {
    const copy = [...votes]
    copy[index] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={() => handleVote(selected)}>Vote</button>
      <button onClick={handleRandom}>Next anecdote</button>
      <hr />
      <h2>Anecdote with most votes</h2>
      {highestVote > 0 
      ? ( 
        <div>
          {anecdotes[mostVoted]}
          <p>has {votes[mostVoted]} votes</p>
        </div>
        )
      : 'no votes yet'
      }
   
      
    </div>
  )
}

export default App