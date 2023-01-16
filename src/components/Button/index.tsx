import * as S from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark';
}

export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
}
