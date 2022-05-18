import { ReactNode } from "react";
import "./styles.scss";

interface Props {
  children: string | ReactNode;
}

export default function H1({ children }: Props) {
  return <h1 className="H1">{children}</h1>;
}
