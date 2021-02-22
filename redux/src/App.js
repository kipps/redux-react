import React from 'react';
import ContactFormPage from "./components/ContactForm/ContactFormPage";
import InitializeFromStateForm from "./components/InitializeStateForm/InitializeStateForm";
import Validation from "./components/Validation/Validation";
import showResults from './components/InitializeStateForm/showResults';
import './App.scss';

class App extends React.Component {
   render() {
     return (
       <div className='App' style={{padding: 40}}>
         <ContactFormPage />
         <InitializeFromStateForm onSubmit={showResults} />
         <Validation />
       </div>
     );
   }
}

export default App;
