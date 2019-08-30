import React from 'react';
import {connect} from "react-redux";
import { Field, reduxForm, reset } from 'redux-form';

import store from '../../redux/store/storeConfiguration';
import { addBookAction } from "../../redux/actions/index";

const addBookFunction = values => {
   values = { ...values, id:`f${(~~(Math.random()*1e8)).toString(16)}`}
   store.dispatch(reset('AddBook'));
   store.dispatch(addBookAction(values));
}

const renderInput = ({input, meta, type, name, value, className, placeholder}) =>
  <input type={type} name={name} className={className} placeholder={placeholder} value={value} {...input}/>

let AddBook = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(addBookFunction)}>
      
      <Field name='title' type='input' placeholder='Title' component={renderInput}/>
      <Field name='pages' type='number' placeholder='Pages' component={renderInput}/>
     
      <button type="submit">Add book</button>
    </form>
  )
}


const mapStateToProps = state => {
   return {
     books: state.bookState.books
   }
}
 
AddBook = reduxForm({
   form: 'AddBook',
   destroyOnUnmount: false
})(AddBook)
 
export default connect(mapStateToProps)(AddBook);