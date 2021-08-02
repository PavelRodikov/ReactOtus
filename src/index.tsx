import React from "react";
import ReactDOM from "react-dom";
import {Field} from "./components/Field";


const MyField = () => (
    <Field countCell={5}></Field>
)

ReactDOM.render(<MyField />, document.getElementById("root"));
