import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../redux/store";
import FloatingCart from "./FloatingCart";

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter>{children}</MemoryRouter>
  </Provider>
);
test("FloatingCart", () => {
  render(<FloatingCart />, { wrapper: ReduxWrapper });
  expect(screen.getByText(0)).toBeInTheDocument();
  expect(screen.getByText(0)).toHaveClass("notif");
  const link = screen.getByRole("link", { name: "Votre Panier icône cadi 0" });
  expect(link).toBeInTheDocument();

  expect(screen.getByText(/Panier/i)).toBeInTheDocument();

  const image = screen.getAllByRole("img");
  expect(image).toHaveLength(1);
  expect(image[0].alt).toBe("icône cadi");
});
