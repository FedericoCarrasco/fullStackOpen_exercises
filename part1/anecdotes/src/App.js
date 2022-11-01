import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState('No votes yet')
  
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setMostVoted(anecdotes[getMaxIndexOfArr(copy)])
    setVotes(copy)
  }

  const selectRandomAnecdote = () => {
    const min = 0
    const max = anecdotes.length
    const random = Math.floor(Math.random() * (max - min) + min)
    if (random === selected) selectRandomAnecdote()
    else setSelected(random)
  }

  const getMaxIndexOfArr = (arr) => {
    let max = arr[0]
    let maxIndex = 0
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i
        max = arr[i]
      }
    }
    return maxIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={vote}>Vote</button>
      <button onClick={selectRandomAnecdote}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{mostVoted}</p>
    </div>
  )
}

export default App