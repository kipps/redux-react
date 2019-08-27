import React from 'react';
import {connect} from "react-redux";

class AddBook extends React.Component {
    render() {
        return (
            <form>
                <input placeholder='Name' type='text' />
                <input placeholder='Count of pages' type='number' />
   
                <button>Add book</button>
            </form>
        );
    }

}


export default AddBook;