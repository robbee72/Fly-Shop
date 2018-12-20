import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import awsMobile from "./aws-exports";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
Amplify.configure(awsMobile);

const AppWithAuth = withAuthenticator(AppRouter);
ReactDOM.render(<AppWithAuth />, document.getElementById("root"));
