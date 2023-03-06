// import { useAuth } from '../utils/context/authContext';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getCategories } from '../api/categoryData';
import CategoryCard from '../components/CategoryCard';

function Home() {
  const [categories, setCategories] = useState([]);
  // const { user } = useAuth();

  const getAllCategories = () => {
    getCategories().then(setCategories);
  };

  useEffect(() => {
    getAllCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex flex-wrap text-center my-4" style={{ marginTop: '100px' }}>
      <Head>
        <title>Mend it like Westwood</title>
      </Head>
      <img
        src="https://www.mothermag.com/wp-content/uploads/2020/04/How-To-Mend-Your-Clothes.jpg
"
        alt="hero"
        style={{ width: '100%' }}
      />
      {categories.map((category) => (
        <CategoryCard key={category.firebaseKey} categoryObj={category} onUpdate={getAllCategories} />
      ))}
    </div>
  );
}

export default Home;
