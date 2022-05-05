import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./Navbar";

test("NavBar", () => {
  render(<NavBar />, { wrapper: MemoryRouter });
  expect(screen.getByText("ACCUEIL")).toBeInTheDocument();
  expect(screen.getByText("PRODUITS")).toBeInTheDocument();
  expect(screen.getByText("CONTACT")).toBeInTheDocument();
});
