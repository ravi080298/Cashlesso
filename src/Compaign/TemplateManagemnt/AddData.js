import React, { useState } from "react";

export const AddData = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

const Form = () => {
  const [id, setID] = useState();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {};
  //console.log(id + " " + type + " " + name + " " + status);
  return (
    <div className="form-container">
      <p>Search Template</p>
      <form>
        <label htmlFor="template-id" className="label">
          Template Id:
        </label>
        <input
          id="template-id"
          type="text"
          class="input-feild"
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
        <label htmlFor="template-type">Template Type</label>
        <select
          id="template-type"
          class="input-feild"
          onChange={(e) => setType(e.target.value)}
        >
          <option defaultValue>Template Type</option>
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
        </select>
        <label htmlFor="template-name">Template name</label>
        <input
          type="text"
          value={name}
          id="template-name"
          className="input-feild"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="status">Status</label>
        <select
          id="status"
          class="input-feild"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option defaultValue>Select Status</option>
          <option value="Active">Active</option>
          <option value="InActive">InActive</option>
        </select>
        <input
          type="button"
          value="Add"
          className="button"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
