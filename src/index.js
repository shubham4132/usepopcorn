import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="violet" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={25}
      size={5}
      color="purple"
      message={["Terrible", "Bad", "okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      size={5}
      color="red"
      className="test"
      message={["Terrible", "Bad", "okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      size={24}
      color="blue"
      className="test"
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
