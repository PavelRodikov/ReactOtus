import React, {FC} from "react";
import styled from '@emotion/styled';

export type Coords = [number,number];

export interface CellProps{
    coordinates : Coords
}

const Button = styled.button`
    background-color: lightgreen;
    border-radius: 10px;
    color: black;
    padding: 10px 20px 20px 10px;
    width: 15px;
    height: 15px;
`

export const Cell : FC<CellProps> = ({coordinates,children}) =>
    <Button
        onClick={()=>console.log(coordinates)}
    >
        {children}
    </Button>;