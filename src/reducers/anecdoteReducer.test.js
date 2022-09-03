import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'


describe('anecdote reducer', () => {
  const initialState = anecdoteReducer(undefined, {type: 'DO_NOTHING'})

  test('Voting increments votes', () => {

    const action = {
      type: 'VOTE',
      data: { id: initialState[0].id }
    }
    deepFreeze(initialState)
    //console.log(initialState)

    let newState = anecdoteReducer(initialState, action)
    newState = anecdoteReducer(newState, action)
    newState = anecdoteReducer(newState, action)
    expect(newState[0].votes).toBe(3)
  })

  
})