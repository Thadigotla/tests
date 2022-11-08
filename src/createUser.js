import React from "react";

export const CreateUser = ({ setcUser }) => {
  return (
    <form onSubmit={setcUser}>
      <label htmlFor="firstName">First Name </label>
      <input id="firstName" name="first_name" type="text" required />
      <br />
      <label htmlFor="lastName">Last Name </label>
      <input id="lastName" name="last_name" type="text" required />
      <br />
      <label htmlFor="email">First Name </label>
      <input id="email" name="email" type="email" required />
      <button type="submit">Add</button>
    </form>
  );
};
