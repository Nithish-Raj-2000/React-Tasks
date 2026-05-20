import React from "react";
import FormProvider from "./FormContext";
import FormComponent from "./Formcomponents";
import "./App.css";

const App = () => {
  return (
    <FormProvider>
      <FormComponent />
    </FormProvider>
  );
};

export default App;