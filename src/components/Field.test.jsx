import React from "react";
import {render,screen} from "@testing-library/react";

import {Field} from "./Field";

describe("Field", () => {
    it("render Field", () => {
        render(<Field countCell={2} />);
        screen.debug();
    })
})