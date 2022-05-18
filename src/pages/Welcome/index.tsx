import PrimaryButton from "../../components/Button/PrimaryButton";
import { H1, P } from "../../typography";

export default function Welcome() {
  return (
    <>
      <H1>
        Welcome Jim, <br /> let’s get your customer a quote
      </H1>
      <P>
        Filling this form will return insurance estimates for your customer.
        <br />
        By proceeding you confirm that you have your customer’s consent to enter their information
        <br />
        and for their insurance score to be pulled for the purpose of these estimates.
      </P>
      <PrimaryButton text="Get a Quote" onClick={() => {}} />
    </>
  );
}
