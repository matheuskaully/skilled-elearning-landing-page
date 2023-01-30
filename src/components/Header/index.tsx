import { Button } from '../Button';
import logoImg from '../../assets/logo-dark.svg';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <img src={logoImg} alt="skilled" />

      <Button>Get Started</Button>
    </S.Container>
  );
}
