import React, {FC} from "react";
import {Cell} from "./Cell";

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
                            <Cell coordinates={[indexCell,indexRow]} onClick={(coordinates)=>console.log(coordinates)} children={(indexRow*countCell)+indexCell+1} />
                        </td>
                    )}
                </tr>
            )}
            </tbody>
        </table>
    </div>
