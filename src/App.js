import React, { useState } from 'react'
import './App.css'
function App() {
  const [principal, setpricipal] = useState()
  const [interestrate, setinterestrate] = useState()
  const [time, settime] = useState()
  //const [message,setmessage] = useState()
  const [simpleinterest, setsimpleinterest] = useState()
  const [iscalculated, setiscalculated] = useState(false)

  let calinterest = (event) => {
    event.preventDefault()
    if (principal === 0 || interestrate === 0 || time === 0) {
      setsimpleinterest(0)
    } else {
      setsimpleinterest((principal * interestrate * time) / 100)
    }

    if (principal === '' || interestrate === '' || time === '') {
      setiscalculated(false)
    }

    setiscalculated(true)
  }

  const reload = () => {
    setiscalculated(true)
    setinterestrate('')
    setpricipal('')
    settime('')
    setsimpleinterest('')
    
  }
  return (
    <div className="app">
      <div className="container">
        <h1>Simple Interest Calculator</h1>
        <form onSubmit={calinterest}>
          <div>
            <label>Principal Amount</label>
            <input
              type="text"
              placeholder="Enter  the pricipal amount"
              value={principal}
              onChange={(e) => setpricipal(e.target.value)}
            />
          </div>

          <div>
            <label>Interest Rate(%)</label>
            <input
              type="text"
              placeholder="Enter  the Interest Rate"
              value={interestrate}
              onChange={(e) => setinterestrate(e.target.value)}
            />
          </div>
          <div>
            <label>Time in Yr</label>
            <input
              type="text"
              placeholder="Enter  the time in Yr"
              value={time}
              onChange={(e) => settime(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn" onClick={reload}>
              Reload
            </button>
          </div>
          {iscalculated && (
            <div>
              <p>Your calculated Simple Interest is :{simpleinterest}</p>
            </div>
          )}
          
        </form>
      </div>
    </div>
  )
}

export default App
