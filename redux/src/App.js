import React from 'react';
import {connect} from "react-redux";

class App extends React.Component {
   render() {
     return (
       <div className="App">
         <p>
           <b>Value: </b>{this.props.valueState}
         </p>
       </div>
     );
   }
}

const mapStateToProps = store => {
  return {
    valueState: store

  }
}

export default connect(mapStateToProps)(App)
