import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

// import InputPage from "./components/inputPage";
import { Root } from "./pages/root/Root";

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<App />, rootElement);
