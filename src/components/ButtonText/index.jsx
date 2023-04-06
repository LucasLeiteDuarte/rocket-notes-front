import { Container } from "./styles";

export function ButtonText({ title, isActive = false, ...rest }) {
  // o valor padrão da propriedade isActive caso não seja informdo é false

  return (
    <Container type="button" isActive={isActive}>
      {title}
    </Container>
  );
}
