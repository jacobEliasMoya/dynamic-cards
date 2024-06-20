import { useState } from 'react'
import Card from './components/Card'

function App() {

  return (
    <div className='container'>
      <div className="row container-fluid">
          <Card
            cardClass='col-md-3'
            cardTitle='Card 1'
            cardText='test'
          />
          <Card
            cardClass='col-md-3'
            cardTitle='Card 2'
            cardText='test'
          />
          <Card
            cardClass='col-md-3'
            cardTitle='Card 3'
            cardText='test'
          />  
          <Card
            cardClass='col-md-3'
            cardTitle='Card 4'
            cardText='test'
          />
      </div>
    </div>
  )
}

export default App
