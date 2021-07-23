import React, {FC} from "react";
import styled from '@emotion/styled';

export type Coords = [number,number];

export interface CellProps{
    coordinates : Coords,
    onClick : (coordinates: Coords) => void;
}

export const Cell : FC<CellProps> = ({coordinates,onClick,children}) =>
    <button
        onClick={()=>onClick(coordinates)}
    >
        {children}
    </button>;