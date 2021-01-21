export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user);
      return {
        ...state,
        users: [...state.users, action.user]
      };
      case 'GET_COUNT_OF_USERS':
      return Object.assign({}, state, {
        users: state.users.concat(state.users.length + 1)
      });

    default:
      return state;
  }
};
