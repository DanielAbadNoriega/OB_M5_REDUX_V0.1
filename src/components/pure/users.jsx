import React from "react";
// REDUX - HOOKS
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { getUserId } from "../../store/actions/userActions";

const Users = () => {
  const users = useSelector((state) => {
    console.log("[ Users ] State: ", state);
    return state.userState;
  });
  const dispatch = useDispatch();

  const getUser = (id) => {
    dispatch(getUserId(id));
  };

  return (
    <div className="container col-8 col-md-8 d-flex flex-column align-items-center justify-content-center">
      {users.length !== 0 ? <h2>Users</h2> : ""}
      <ul className="col-6 col-md-6 col-lg-8 list-group list-group-lg ">
        {/* USERS LIST */}
        {users.length !== 0 ? (
          users.map((user) => (
            <li key={user.id} className="list-group-item">
              <div className="card">
                <div className="card-body">
                  <div
                    className="card-title text-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => getUser(user.id)}
                  >
                    <span className="fw-bold">{user.id} -</span>{" "}
                    {user.firstname} {user.lastname}
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li
            className="list-group-item text-center"
            style={{ listStyle: "none" }}
          >
            No Users yet
          </li>
        )}
      </ul>
    </div>
  );
};

export default Users;
