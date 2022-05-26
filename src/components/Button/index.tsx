import Style from "./style";

interface Props {
  text: string;
  color: "white" | "gray" | "orange";
  action: () => void;
}

export default function Button({ text, action, color }: Props) {
  return (
    <Style onClick={action} variant={color}>
      {text}
    </Style>
  );
}
