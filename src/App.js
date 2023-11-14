import React from "react";
import NavigationBar from "./componentsHolder/navigation/NavigationBar";
import Heading from "./componentsHolder/headingHolder/Heading";
import Cards from "./componentsHolder/cardsHolder/Cards";
import Forms from "./componentsHolder/formsHolder/Forms";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Heading />
      <Cards />
      <Forms />
    </>
  );
};

export default App;
