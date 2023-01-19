import React from "react";
import Heading from "./Components/Heading";
import "./App.css";
import Card from "./Components/Card";
import Images from "./Components/Images";

const App = () => {


  return (
    <>
      <div id="wrapper">

        <Heading />
        <div className="gallery">
          {Images.map((val) => {
            return (
              <Card
                image={val.imgsrc}
              />
            )

          })}

        </div>
      </div>
    </>
  );
}

export default App;