import React, {FC} from "react";
import {Cell} from "./Cell";
import Repeat from 'react-repeat-component';

export interface FieldProps{
    countCell : number
}

export const Field : FC<FieldProps> = ({countCell}) =>
    <div>
        <table>
            <tbody>
            {[...Array(countCell)].map((item, indexRow) =>
                <tr key={indexRow}>
                    {[...Array(countCell)].map((item, indexCell) =>
                        <td key={indexCell}>
                            <Cell coordinates={[indexCell,indexRow]} onClick={(coordinates)=>console.log(coordinates)} />
                        </td>
                    )}
                </tr>
            )}
            </tbody>
        </table>
    </div>

export const FieldNew : FC<FieldProps> = ({countCell}) =>
    <div>
        <table>
            <tbody>
            {[...Array(countCell)].map((item, indexRow) =>
                <tr key={indexRow}>
                    {[...Array(countCell)].map((item, indexCell) =>
                        <td key={indexCell}>
                            <Cell coordinates={[indexCell,indexRow]} onClick={(coordinates)=>console.log(coordinates)} />
                        </td>
                    )}
                </tr>
            )}
            </tbody>
        </table>
    </div>