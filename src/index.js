import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageWrapper from "./components/LanguageWrapper";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from './serviceWorker';

import './static/css/index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageWrapper>
      <App />
    </LanguageWrapper>
  </React.StrictMode>
);

serviceWorker.unregister();
reportWebVitals();