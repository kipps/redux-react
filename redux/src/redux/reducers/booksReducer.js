const initialState = {
    books: [
      {
        id: 0,
        name: 'The Book Thief',
        pages: 350
      },
      {
        id: 1,
        name: 'The Great Alone',
        pages: 440
      },
      {
        id: 2,
        name: 'The Outsider',
        pages: 590
      },
      {
        id: 3,
        name: 'Circe',
        pages: 678
      },
    ],
    loading: false
}

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_BOOK":
              return Object.assign({}, state, {
                  books: [
                  ...state.books,
                    {
                      id: action.number,
                      name: action.name,
                      pages: action.pages
                    }
                  ]
              })
        default:
            return state
    }
}
