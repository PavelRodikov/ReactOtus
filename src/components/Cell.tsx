import React, {FC} from "react";
import styled from '@emotion/styled';

export type Coords = number[];

export interface CellProps{
    coordinates : Coords,
    onClick : (coordinates: Coords) => void;
}

export const Cell : FC<CellProps> = ({coordinates,onClick}) =>
    <button
        onClick={()=>onClick(coordinates)}
    >
        {coordinates[0]}
    </button>;