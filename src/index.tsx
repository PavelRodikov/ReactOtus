import React, { FC } from "react";
import ReactDOM from "react-dom";
import {Field} from "./components/Field";
/*
interface FullNameProps{
    name : string;
    surname : string;
    showSurname? : boolean;
}

export interface LevelProps{
    optionNames:string[];
}

const FullName: FC<FullNameProps> = (props) => <h2>{props.name} {props.showSurname && props.surname}</h2>;

export const Select: FC<LevelProps> = ({optionNames}) => (
    <select >
        {optionNames.map((item:string) => (
            <option key={item} value={item}>
                {item}
            </option>
            )
        )}
    </select>
);

const HelloWorld = () => (
    <div>
        <h1>Hello <FullName showSurname name="Pavel" surname="Rodikov"/>!</h1>
        <Select optionNames={["admin","user","maintainer"]}></Select>
    </div>

);
*/
const MyField = () => (
    <Field countCell={5}></Field>
)

ReactDOM.render(<MyField />, document.getElementById("root"));
