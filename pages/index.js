// import { useAuth } from '../utils/context/authContext';
import Head from 'next/head';

function Home() {
  // const { user } = useAuth();

  return (
    <div>
      <Head>
        <title>Mend it like Westwood</title>
      </Head>
      <div>
        <img src="https://www.mothermag.com/wp-content/uploads/2020/04/How-To-Mend-Your-Clothes.jpg" alt="mending" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default Home;
