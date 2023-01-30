import "./App.css";
import UserForm from "./components/forms/userForm";

//Actions
import { createUser, getUserId } from "./store/actions/userActions";

//Reducer
import { userStore } from "./store/config/storeConfig";

// 1. Create the actions, like events

// 2. Create reducer & import

// 3. Create the store with the reducer, dispatching calls
var users = [];

userStore.subscribe(() => {
  users = userStore.getState();
  console.log("[ userSubscribe ] Users: ", users);
});

export function App() {
  // 3. Llamadas
  const getUsers = () => {
    userStore.getState();
  };

  const getUser = (id) => {
    //updateReducer(users, getUserId(0));
    userStore.dispatch(getUserId(id));
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
      {getUsers()}
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
