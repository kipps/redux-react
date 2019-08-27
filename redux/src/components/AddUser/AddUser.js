import React from 'react';

class AddUser extends React.Component {
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

export default AddUser;