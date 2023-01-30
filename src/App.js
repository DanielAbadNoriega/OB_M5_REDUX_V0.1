import "./App.css";
import UserForm from "./components/forms/userForm";
import Users from "./components/pure/users";

// 1. Create the actions (events) in userActions.js
 
// 2. Create reducer & import in userReducer.js

export function App() {

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
      <h1 className="text-center mt-2"> Redux </h1>
      <UserForm></UserForm>
      <Users></Users>
    </div>
  );
}
