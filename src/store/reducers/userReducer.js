// 2. Create reducer

  let initialState = [];

  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "@create/user":
        initialState = [
          ...initialState,
          {
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
            id: action.payload.id,
            role: "user",
          },
        ];
        console.log("[ Reducer - create/user ] Users: ", initialState);
        return initialState;

      case "@get/user":
        /* return state.map((user) =>
          user.id === action.payload.id
            ? (console.log(user), { ...user })
            : user
        ); */

        return state.map((user) => {
          if (user.id === action.payload.id) {
            console.log("[ getUser - userReducer ] User: ", user);
          }
          return { ...user };
        });

      default:
        return state;
    }
  };