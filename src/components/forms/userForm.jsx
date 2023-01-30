import React from "react";
import { useDispatch } from "react-redux";
/* import { userStore } from "../../store/config/storeConfig"; */
import { createUser } from "../../store/actions/userActions";

const UserForm = () => {
  const dispatch = useDispatch()

  const newUser = (e) => {
    e.preventDefault();
    const { name, lastname } = e.target;
    if (name.value === "" || lastname.value === "") {
      alert("Intro new user.");
    } else {
      dispatch(createUser(name.value, lastname.value));
      name.value = "";
      lastname.value = "";
    }
  };

  return (
    <div>
      <form
        className="form d-flex flex-column align-items-center justify-content-center"
        onSubmit={newUser}
      >
        <input
          className="form-control form-control-lg text-center mb-1 "
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="form-control form-control-lg text-center mb-1"
          type="text"
          name="lastname"
          placeholder="Lastname"
        />
        <button className="btn btn-success btn-lg" type="submit">
          {" "}
          NEW USER
        </button>
      </form>
    </div>
  );
};

export default UserForm;
