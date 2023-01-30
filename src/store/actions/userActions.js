let userID = 0;

export const createUser = (firstname, lastname) => {
  return {
    type: "@create/user",
    payload: {
      firstname,
      lastname,
      id: userID++,
    },
  };
};

export const getUserId = (id) => {
  return {
    type: "@get/user",
    payload: {
      id,
    },
  };
};