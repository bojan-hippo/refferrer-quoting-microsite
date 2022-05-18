import { ReactNode } from "react";
import "./styles.scss";

interface Props {
  children: string | ReactNode;
}

export default function P({ children }: Props) {
  return <p className="P">{children}</p>;
}
