import { Container } from "./styles"
import businessImg from "../../assets/icon-business.svg"

export default function Card() {
  return (
    <Container>
      <span>Animation</span>
      <p>
        Learn the latest animation techniques to 
        create stunning motion design and captivate 
        your audience.
      </p>
      <a href="#">Get Started</a>
      <img src={businessImg} alt="business icon" />
    </Container>
  )
}