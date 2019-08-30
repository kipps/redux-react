const initialState = {
    users: [],
    loading: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER":
              return Object.assign({}, state, {
                  users: [
                  ...state.users,
                    {
                      id: action.payload.id,
                      name: action.payload.name,
                      age: action.payload.age
                    }
                  ]
              });       
        default:
            return state;
    }
}
