import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTask({ onCreate }) {
  const input = useInputValue("");

  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear()
      // setValue("");
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add task</button>
    </form>
  );
}

AddTask.prototype = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTask;
