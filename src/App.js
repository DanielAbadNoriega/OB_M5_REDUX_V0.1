import "./App.css";
import UserForm from "./components/forms/userForm";

/**
 * 1. Create the actions (events) in userActions.js
 */
// ACTIONS
import { getUserId } from "./store/actions/userActions";

// 2. Create reducer & import in userReducer.js

// 3. Hooks to use the state and store.dispatch actions
import { useSelector, useDispatch } from "react-redux";

export function App() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  // 3. Llamadas
  const getUser = (id) => {
    dispatch(getUserId(id));
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
      <h1 className="text-center mt-2"> Redux </h1>

      {users.length !== 0 ? <h2>Users</h2> : ""}
      <ul className="col-6 col-md-6 col-lg-8 list-group list-group-lg">
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
      <UserForm></UserForm>
    </div>
  );
}
