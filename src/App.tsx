import Header from './components/Header';
import Card from './components/Card';
import { data } from './main';

export default function App() {
  return (
    <>
      <Header />
      {
        data.map(item => {
          return (
            <Card 
              title={item.title} 
              paragraph={item.paragraph} 
              srcIconImg={item.srcIcon} 
            />
          )
        })
      }
    </>
  );
}
