const initialState = {
    books: [],
    loading: false
}

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK":
          return Object.assign({}, state, {
              books: [
              ...state.books,
                {
                  id: action.payload.id,
                  title: action.payload.title,
                  age: action.payload.pages
                }
              ]
          });       
    default:
        return state;
}
}
