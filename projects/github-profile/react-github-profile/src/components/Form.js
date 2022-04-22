import React, { useState } from "react";

export const Form = ({ search }) => {
  const [inputValue, setInputValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("请输入Github User");
      return;
    }
    search(inputValue);
    setInputValue("");
  };

  return (
    <form className="user-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search a Github User"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
};
