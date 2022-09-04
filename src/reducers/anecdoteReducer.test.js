import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'


describe('anecdote reducer', () => {
  const initialState = anecdoteReducer(undefined, {type: 'DO_NOTHING'})

  test('Create anecdote', () => {
    const state = []
    const action = {
      type: 'anecdotes/createAnecdote',
      payload: 'Test anecdote 1'
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState.map(s => s.content)).toContainEqual(action.payload)
  })

  test('Voting increments votes', () => {

    const state = [ 
      { content: 'Nothing should happen here', id: 0, votes: 1 },
      { content: 'Anecdote to vote', id: 1, votes: 3 }
    ]

    const action = {
      type: 'anecdotes/voteAnecdote',
      payload: 1 }

    deepFreeze(state)

    let newState = anecdoteReducer(state, action)
    newState = anecdoteReducer(newState, action)
    newState = anecdoteReducer(newState, action)

    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(state[0])
    expect(newState).toContainEqual(
      {content: 'Anecdote to vote', id: 1, votes: 6 }
    )
    
  })

  
})