import { Container, Cards } from "./styles"
import Btn from "../GetStartedButton"
import logoImg from "../../assets/logo-dark.svg"
import Card from "../Card"

export default function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Logo" />

      <a href="#" target="_blank">
        <Btn />
      </a>
    </Container>
  )
}