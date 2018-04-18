import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 200px;
  height: 80px;
`

const App = props => {
  return (
    <div>
      hello App
      <Button onClick={() => console.log('pressed') || props.history.push('/test')}>Go to</Button>
    </div>
  )
}

export default App
