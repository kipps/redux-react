import React from 'react';
import {connect} from "react-redux";
import { Field, reduxForm, reset } from 'redux-form';

import store from '../../redux/store/storeConfiguration';
import { addUserAction } from "../../redux/actions/index";

const addUserFunction = values => {
   values = { ...values, id:`f${(~~(Math.random()*1e8)).toString(16)}`}
   store.dispatch(reset('AddUser'));
   store.dispatch(addUserAction(values));
}

const renderInput = ({input, type, name, value, placeholder, className}) =>
  <input type={type} name={name} className={className} placeholder={placeholder}  value={value} {...input}/>

let AddUser = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(addUserFunction)}>
      
      <Field name='name' type='input' placeholder='Name' component={renderInput}/>
      <Field name='age' type='number' placeholder='Age' component={renderInput}/>
     
      <button type="submit">Add user</button>
    </form>
  )
}


const mapStateToProps = state => {
   return {
     users: state.userState.users
   }
}
 
AddUser = reduxForm({
   form: 'AddUser',
   destroyOnUnmount: false
})(AddUser)
 
export default connect(mapStateToProps)(AddUser);
