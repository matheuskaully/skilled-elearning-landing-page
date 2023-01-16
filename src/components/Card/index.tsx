import * as S from './styles';

interface CardProps {
  title: string;
  paragraph: string;
  srcIconImg: string;
}

export default function Card({ title, paragraph, srcIconImg }: CardProps) {
  return (
    <S.Container>
      <img src={srcIconImg} alt={title} />
      <span>{title}</span>
      <p>{paragraph}</p>
      <a href="#">Get Started</a>
    </S.Container>
  );
}
