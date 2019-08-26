import React from 'react';
import {connect} from "react-redux";

class App extends React.Component {
   render() {

     const {users} = this.props.userStore;
     const {books} = this.props.bookStore;

     return (
       <div className="App">
          <div style={{float:'left', padding: 20}}>
            <header>
              <h3>Users:</h3>
            </header>
            <ul>
              {
                users.map(item => {
                  return (
                    <li key={item.id}>{item.name}</li>
                  )
                })
              }
            </ul>
          </div>
          <div style={{float:'left', padding: 20}}>
            <header>
              <h3>Books:</h3>
            </header>
            <ul>
            {
              books.map(item => {
                return (
                  <li key={item.id}>{item.name}</li>
                )
              })
            }
            </ul>
          </div> 

       </div>
     );
   }
}

const mapStateToProps = state => {
  return {
    userStore: state.userState,
    bookStore: state.bookState
  }
}

export default connect(mapStateToProps)(App)
