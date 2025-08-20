// import React, { Component } from 'react'

// export default class Welcome extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome {this.props.name}</h1>
//       </div>
//     )
//   }
// }
import React from 'react'
import { db } from './Greet'

const Welcome = () => {
  return (
    <div>
      Welcome {db.name} your age is {db.age}
    </div>
  )
}

export default Welcome
