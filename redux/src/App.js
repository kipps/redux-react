import React from 'react';
import {connect} from "react-redux";

import AddUser from './components/AddUser/AddUser';
import AddBook from './components/AddBook/AddBook';

import './App.scss';

class App extends React.Component {

   render() {
     const {users} = this.props.userStore;
     const {books} = this.props.bookStore;

     return (
       <div className='App' style={{padding: 40}}>
          <section style={{clear: 'both'}}>
            <AddUser style={{marginBottom: 32}} />
            <AddBook />
          </section>
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
                  <li key={item.id}>{item.title}</li>
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
