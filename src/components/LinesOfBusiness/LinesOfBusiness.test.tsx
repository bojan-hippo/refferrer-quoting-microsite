import { render, screen } from "@testing-library/react";
import LinesOfBusiness from "./index";

const items = ["Home", "Flood", "Auto", "Pet", "Life", "Cyber", "Warranty"];

describe("<LinesOfBusiness />", () => {
  it("should render all given items when number of items is less than numberOfItemsToDisplay", () => {
    render(<LinesOfBusiness items={items} numberOfItemsToDisplay={15} />);
    const numberOfHiddenItems = screen.queryByTestId("lines-of-business-num-of-hidden");
    const singleItems = screen.queryAllByTestId("lines-of-business-single-item");

    expect(singleItems.length).toBe(items.length);
    expect(numberOfHiddenItems).not.toBeInTheDocument();
  });

  it("should render correct number of items if number of items is greater than numberOfItemsToDisplay", () => {
    const numberOfItemsToDisplay = 3;
    render(<LinesOfBusiness items={items} numberOfItemsToDisplay={numberOfItemsToDisplay} />);
    const singleItems = screen.queryAllByTestId("lines-of-business-single-item");
    const numberOfHiddenItems = screen.queryByTestId("lines-of-business-num-of-hidden");

    expect(singleItems.length).toBe(numberOfItemsToDisplay);
    expect(numberOfHiddenItems).toBeInTheDocument();
  });

  it("should render correct number of hidden items", () => {
    const numberOfItemsToDisplay = 3;
    render(<LinesOfBusiness items={items} numberOfItemsToDisplay={numberOfItemsToDisplay} />);
    const numberOfHiddenItems = screen.queryByTestId("lines-of-business-num-of-hidden");

    expect(numberOfHiddenItems).toBeInTheDocument();
    expect(numberOfHiddenItems).toHaveTextContent("+ 4");
  });
});
