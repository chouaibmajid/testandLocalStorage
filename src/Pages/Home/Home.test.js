import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
test("home", () => {
  render(<Home />);
  const image = screen.getAllByRole("img");
  expect(image).toHaveLength(1);
  expect(image[0].alt).toBe("accueil shop");
});
