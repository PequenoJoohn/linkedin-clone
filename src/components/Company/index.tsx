import { Container } from "./styles";

interface CompanyProps {
  image: string;
  name: string;
}

const Company = ({ image, name }: CompanyProps) => {
  return (
    <Container>
      <img src={image} alt={name} />
      <p>{name}</p>
    </Container>
  );
};

export default Company;
