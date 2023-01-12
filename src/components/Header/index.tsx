import * as S from './styles';
import { Button } from '../GetStartedButton';
import logoImg from '../../assets/logo-dark.svg';

export default function Header() {
  return (
    <S.Container>
      <img src={logoImg} alt="skilled" />

      <Button>Get Started</Button>
    </S.Container>
  );
}
