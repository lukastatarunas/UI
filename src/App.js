import React, { Component } from 'react'

class App extends Component {
  state = {
    LRT: []
  }
  
  componentDidMount() {
    fetch(`http://localhost:5500/api/v1/lrtlive`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ LRT: data.tvprog.items })
    })
  }

  render() {
    return (
       <div className='container'>
        <div className='col-xs-12'>
        <h1 className='tc'>LRT</h1>
        {this.state.LRT.map((LRT, i) => (
          <div key={ i } className='card'>
            <div className='card-body bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
              <h6 className='card-title'>{ LRT.channel }</h6>
              <h6 className='card-title'>{ `${ LRT.time_start } - ${ LRT.time_end }` }</h6>
              <h1 className='card-title'>{ LRT.title }</h1>
            </div>
          </div>
        ))}
        </div>
       </div>
    )
  }
}

export default App