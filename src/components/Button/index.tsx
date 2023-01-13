import * as S from './styles';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  hoverColor: string;
}

export function Button({ children, backgroundColor, hoverColor }: ButtonProps) {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      {children}
    </S.Button>
  );
}
