import { Container } from "./styles";

interface ButtonsProps {
  label: string;
  type: "primary" | "secondary" | "tertiary";
}

const Buttons = ({ label, type }: ButtonsProps) => {
  return (
    <Container>
      <button className={type}>{label}</button>
    </Container>
  );
};

export default Buttons;
