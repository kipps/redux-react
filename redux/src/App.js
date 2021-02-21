import React from 'react';
import MoviesList from './components/MoviesList/MoviesList';

import './App.scss';

class App extends React.Component {

   render() {

     return (
       <div className='App' style={{padding: 40}}>
         <MoviesList />
       </div>
     );
   }
}

export default App;
