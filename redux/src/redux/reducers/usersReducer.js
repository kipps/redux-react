const initialState = {
    users: [
      {
        id: 1,
        name: 'John',
        age: 34
      }
    ],
    loading: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER":
              return Object.assign({}, state, {
                  users: [
                  ...state.users,
                    {
                      id: action.number,
                      name: action.name,
                      age: action.age
                    }
                  ]
              })
        default:
            return state
    }
}
