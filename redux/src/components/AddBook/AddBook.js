import React from 'react';
import {connect} from "react-redux";

class AddBook extends React.Component {
    render() {
        return (
            <form>
                <input placeholder='Name' type='text' />
                <input placeholder='Age' type='number' />
   
                <button>Add user</button>
            </form>
        );
    }

}


export default AddBook;