import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Head from "./components/Head";
import { Provider } from "react-redux";
import Body from "./components/Body";
import { AppStore } from "./utils/appStore";

function App() {
  return (
    <Provider store={AppStore}>
      <Router>
        <div className="App">
          <Head />
          <Body/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

