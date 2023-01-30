import { Button } from '../../components/Button';

import Header from '../../components/Header';
import { Heading } from '../../components/Heading';
import imgDesktop from '../../assets/image-hero-desktop.png';
import * as S from './styles';
import Card from '../../components/Card';

export const data = [
  {
    title: 'Animation',
    paragraph:
      'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    srcIcon: '/icons/icon-animation.svg'
  },
  {
    title: 'Design',
    paragraph:
      'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    srcIcon: '/icons/icon-design.svg'
  },
  {
    title: 'Photography',
    paragraph:
      'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    srcIcon: '/icons/icon-photography.svg'
  },
  {
    title: 'Crypto',
    paragraph:
      'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    srcIcon: '/icons/icon-crypto.svg'
  },
  {
    title: 'Business',
    paragraph:
      'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    srcIcon: '/icons/icon-business.svg'
  }
];

const Home = () => {
  return (
    <>
      <S.Container>
        <Header />
        <div>
          <Heading>Maximize skill, minimize budget</Heading>
          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <Button variant="dark">Get Started</Button>
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Get Started</Button>
        </div>
        <div>
          <S.Image src={imgDesktop} alt="" />
        </div>
      </S.Container>
      <S.Grid>
        {data.map((item) => {
          return (
            <Card
              key={item.title}
              title={item.title}
              paragraph={item.paragraph}
              srcIconImg={item.srcIcon}
            />
          );
        })}
      </S.Grid>
    </>
  );
};

export default Home;
