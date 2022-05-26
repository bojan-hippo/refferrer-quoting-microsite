import Button from "../Button";

export default function Hero() {
  return (
    <div>
      <Button text="View Details" color="white" action={() => console.log("CLICK")} />
    </div>
  );
}
