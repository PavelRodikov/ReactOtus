import React from "react";
import { render, screen } from "@testing-library/react";

import { Cell } from "./Cell";

describe("Cell", () => {
  it("render Cell", () => {
    render(<Cell coordinates={[1, 2]} />);
    screen.debug();
  });
});
