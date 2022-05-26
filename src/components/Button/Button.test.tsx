import { render, screen } from "@testing-library/react";
import Button from "./index";

const text = "Submit";
const action = jest.fn();
const color = "white";

const selectButton = () => {
  render(<Button text={text} action={action} color={color} />);
  return screen.getByText(text);
};

describe("<Button />", () => {
  it("should render given text", () => {
    const button = selectButton();
    expect(button).toBeInTheDocument();
  });

  it("should have appropriate CSS class based on given color", () => {
    const button = selectButton();
    expect(button.className).toMatch(/variant-white/);
  });

  it("should invoke given function when clicked", () => {
    const button = selectButton();
    button.click();
    expect(action).toBeCalledTimes(1);
  });
});
