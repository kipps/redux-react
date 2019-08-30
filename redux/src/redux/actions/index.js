export const addUserAction = user => {
    console.log('ACTION RUN!', user);
    return {
      type: 'ADD_USER',
      payload: user
    }
  }

export const addBookAction = book => {
    console.log('ACTION RUN!', book);
    return {
      type: 'ADD_BOOK',
      payload: book
    }
}