import React, { useReducer } from "react";

// Initial state
const initialState = {
  CollegeName: "",
  EstablishedYear: "",
  Address: {
    building: "",
    street: "",
    cityname: "",
    pinCode: "",
  },
  state: "",
  CoursesOffered: [],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "CollegeName":
    case "EstablishedYear":
    case "state":
      return { ...state, [action.type]: action.payload };

    case "building":
    case "street":
    case "cityname":
    case "pinCode":
      return {
        ...state,
        Address: {
          ...state.Address,
          [action.type]: action.payload,
        },
      };

    case "AddCourse":
      return {
        ...state,
        CoursesOffered: [...state.CoursesOffered, action.payload],
      };

    default:
      return state; // Always return state for unknown action types
  }
};

// Action creator function
const updateState = (e) => {
  return {
    type: e.target.id,
    payload: e.target.value,
  };
};

const UpdatedForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { CollegeName, EstablishedYear, Address, CoursesOffered } = state;
  const { building, street, cityname, pinCode } = Address;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const courseInput = document.getElementById("CourseInput");
    if (courseInput.value) {
      dispatch({ type: "AddCourse", payload: courseInput.value });
      courseInput.value = ""; // Clear the input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <hr />
      <input
        id="CollegeName"
        type="text"
        placeholder="Enter college name"
        value={CollegeName}
        onChange={(e) => dispatch(updateState(e))}
      />
      <br />
      <input
        id="EstablishedYear"
        type="date"
        placeholder="Select established year"
        value={EstablishedYear}
        onChange={(e) => dispatch(updateState(e))}
      />
      <br />
      <input
        id="building"
        type="text"
        placeholder="Enter Your Building"
        value={building}
        onChange={(e) => dispatch(updateState(e))}
      />
      <br />
      <input
        id="street"
        type="text"
        placeholder="Enter Your Street"
        value={street}
        onChange={(e) => dispatch(updateState(e))}
      />
      <br />
      <input
        id="cityname"
        type="text"
        placeholder="Enter Your City"
        value={cityname}
        onChange={(e) => dispatch(updateState(e))}
      />
      <br />
      <input
        id="pinCode"
        type="text"
        placeholder="Enter Your PinCode"
        value={pinCode}
        onChange={(e) => dispatch(updateState(e))}
      />
      <br />
      <input type="text" id="CourseInput" placeholder="Add a course" />
      <button onClick={handleAddCourse}>Add Course</button>
      <button type="submit">Submit</button>
      <hr />
      <h2>Address Details</h2>
      <p>Building: {building}</p>
      <p>Street: {street}</p>
      <p>City: {cityname}</p>
      <p>PinCode: {pinCode}</p>
      <h2>Courses Offered</h2>
      <ul>
        {CoursesOffered.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </form>
  );
};

export default UpdatedForm;
