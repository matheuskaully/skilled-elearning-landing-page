import * as S from "./styles"

interface CardProps {
  title: string;
  paragraph: string;
  srcIconImg: string;
}

export default function Card({title, paragraph, srcIconImg}: CardProps) {
  return (
    <S.Container>
      <span>{title}</span>
      <p>{paragraph}</p>
      <a href="#">Get Started</a>
      <img 
        src={srcIconImg} 
        alt={`${title} icon`} 
      />
    </S.Container>
  )
}