import { Wrapper, Item } from "./style";

interface Props {
  items: string[];
  numberOfItemsToDisplay: number;
}

export default function LinesOfBusiness({ items, numberOfItemsToDisplay }: Props) {
  const itemsToRender = items.slice(0, numberOfItemsToDisplay);
  const numberOfHiddenItems = items.length - numberOfItemsToDisplay;

  return (
    <Wrapper data-testid="lines-of-business">
      {itemsToRender.map((item) => (
        <Item data-testid="lines-of-business-single-item" key={item}>
          {item}
        </Item>
      ))}
      {numberOfHiddenItems > 0 && (
        <Item data-testid="lines-of-business-num-of-hidden">+ {numberOfHiddenItems}</Item>
      )}
    </Wrapper>
  );
}
