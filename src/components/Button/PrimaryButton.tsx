import "./styles.scss";

interface Props {
  text: string;
  onClick: () => void;
}

export default function PrimaryButton({ text, onClick }: Props) {
  return (
    <button onClick={onClick} className="PrimaryButton">
      {text}
    </button>
  );
}
