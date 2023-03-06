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
    <div className="d-flex flex-wrap text-center my-4" style={{ marginTop: '100px' }}>
      <Head>
        <title>Categories</title>
      </Head>
      <img src="http://cdn.shopify.com/s/files/1/1395/5787/articles/FCN_lead.jpg?v=1628791560" alt="hero" style={{ width: '100%' }} />
      {categories.map((category) => (
        <CategoryCard key={category.firebaseKey} categoryObj={category} onUpdate={getAllCategories} />
      ))}
    </div>
  );
}
