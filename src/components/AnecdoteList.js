import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => 
    //[...state.anecdotes]
    state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()
  
  console.log(anecdotes)

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
    dispatch(setNotification(`you voted '${anecdotes.find(a => a.id === id).content}'`, 5000))
  }

  return (
    <>
    {anecdotes
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      </>
  )
}

export default AnecdoteList