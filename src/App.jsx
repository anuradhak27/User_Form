import { useReducer } from "react";
import Person from "./Person/Person";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { userDetailsContext, person } from "./Context";
import reducer from "./reducer";
import Display from "./Display";

function App() {
  const [new_person, dispatch] = useReducer(reducer, person);
  return (
    <div className="App">
      <userDetailsContext.Provider value={{ new_person, dispatch }}>
        <Routes>
          <Route path="" element={<Person />}></Route>
          <Route path="/display" element={<Display />} />
        </Routes>
      </userDetailsContext.Provider>
    </div>
  );
}

export default App;
