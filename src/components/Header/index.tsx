import * as S from './styles';
import { Button } from '../Button';
import logoImg from '../../assets/logo-dark.svg';
import { theme } from '../../styles/theme';

export default function Header() {
  return (
    <S.Container>
      <img src={logoImg} alt="skilled" />

      <Button
        backgroundColor={theme.colors.secondary}
        hoverColor={theme.colors.lightPurple}
      >
        Get Started
      </Button>
    </S.Container>
  );
}
