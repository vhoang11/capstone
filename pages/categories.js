import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import { useAuth } from '../utils/context/authContext';
import { getCategories } from '../api/categoryData';
import CategoryCard from '../components/CategoryCard';

export default function ShowCategories() {
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
    <div className="text-center my-4" style={{ marginTop: '100px' }}>
      <Head>
        <title>Categories</title>
      </Head>
      <img src="https://images.squarespace-cdn.com/content/v1/5ef1e060a980b2706df431b2/1614221884088-WT9LW6ZX8I5YGOH1V0EF/File_000+%283%29.jpeg" alt="hero" style={{ width: '100%' }} />
      <h2>Categories</h2>
      <div id="categories-section">
        {categories.map((category) => (
          <CategoryCard key={category.firebaseKey} categoryObj={category} onUpdate={getAllCategories} />
        ))}
      </div>

    </div>
  );
}
