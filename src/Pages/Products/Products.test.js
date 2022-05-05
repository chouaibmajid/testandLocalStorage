import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Products from "./Products";

test("Product", () => {
  render(<Products />, { wrapper: MemoryRouter });
  const image = screen.getAllByRole("img");
  expect(image).toHaveLength(12);
});
