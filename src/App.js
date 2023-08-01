import React, { useState } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Flex,
    Heading,
    Text,
    TextField,
    View,
    withAuthenticator,
  } from "@aws-amplify/ui-react";
const App = ({ signOut }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  });

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selected options (e.g., send to API)
    console.log(selectedOptions);
  };

  return (
    <div className="App">
      <h1>Fancy Parts for planes</h1>
      <form onSubmit={handleSubmit}>
        <select name="option1" onChange={handleOptionChange}>
          <option value="">Select Option 1</option>
          <option value="Part 1">Option 1 Value 1</option>
          <option value="Part 2">Option 1 Value 2</option>
          {/* Add more options as needed */}
        </select>
        <select name="option2" onChange={handleOptionChange}>
          <option value="">Select Option 2</option>
          <option value="Part1">Option 2 Value 1</option>
          <option value="Part2">Option 2 Value 2</option>
          {/* Add more options as needed */}
        </select>
        {/* Add three more select elements for option3, option4, and option5 */}
        <button type="submit">Submit</button>
      </form>
      <h2>Parts</h2>
      {/* Display your current notes here */}
      <ul>
        <li>
          <strong>Option 1:</strong> {selectedOptions.option1}
        </li>
        <li>
          <strong>Option 2:</strong> {selectedOptions.option2}
        </li>
        <li>
        </li>
      </ul>
    </div>
  );
};

export default withAuthenticator(App);
