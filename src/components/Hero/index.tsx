import Button from "../Button";
import LinesOfBusiness from "../LinesOfBusiness";
import { Wrapper } from "./style";

export default function Hero() {
  return (
    <Wrapper>
      <div>
        <h1
          style={{
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "30px",
            lineHeight: "140%",
            display: "flex",
            alignItems: "center",
          }}
        >
          Openly Insurance
        </h1>
        <div>
          <LinesOfBusiness items={[]} numberOfItemsToDisplay={8} />
        </div>
        <Button text="View Details" color="white" action={() => {}} />
      </div>
      <div>
        <Button text="View Details" color="white" action={() => {}} />
      </div>
    </Wrapper>
  );
}
