import React from "react";

const FilterUsers = () => {
  const filterSelected = (value) => {
    console.log("[ FilterUsers - filterSelected ] Filer: ", value);
  };

  return (
    <div className="container col-4 col-md-4 d-flex flex-column justify-content-center align-items-start gap-2">
    {/* ALL */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="filter"
          id="ALL_FILTER"
          onChange={() => filterSelected("ALL")}
        />
        <label className="form-check-label" htmlFor="filter">
          ALL
        </label>
      </div>

    {/* USER */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="filter"
          id="USER_FILTER"
          onChange={() => filterSelected("USER")}
        />
        <label className="form-check-label" htmlFor="filter">
          USER
        </label>
      </div>

      {/* ADMIN */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="filter"
          id="ADMIN_FILTER"
          onChange={() => filterSelected("ADMIN")}
        />
        <label className="form-check-label" htmlFor="filter">
        ADMIN
        </label>
      </div>
      
    </div>
  );
};

export default FilterUsers;
