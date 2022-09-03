import { FaArrowAltCircleUp } from 'react-icons/fa';
import Hero from '../components/Hero';
import ListFacts from '../components/ListFacts';

function Home() {
  return (
    <div className='relative'>
      <Hero />
      <ListFacts />
      <a
        href='#top'
        className='goToTop z-10 flex flex-col items-center fixed right-4 bottom-8'
      >
        <FaArrowAltCircleUp />
        Go to top
      </a>
    </div>
  );
}

export default Home;
