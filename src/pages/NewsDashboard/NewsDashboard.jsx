import React, { useState, useEffect } from 'react';
import styles from './NewsDashboard.module.css';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { Container } from 'react-bootstrap';
import NewsCard from '../../components/NewsCard/NewsCard';
import SearchBar from '../../components/SearchBar/SearchBar';

const NewsDashboard = () => {
  const [news, setNews] = useState([]);
  const newsCollectionRef = collection(db, 'News');

  useEffect(() => {
    const fetchNews = async () => {
      const newsSnapshot = await getDocs(newsCollectionRef);
      const newsList = newsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNews(newsList);
    }
    fetchNews();
  }, []);

  const [newsCategories, setNewsCategories] = useState([]);
  const newsCategoriesCollectionRef = collection(db, 'NewsCategories');

  useEffect(() => {
    const fetchNewsCategories = async () => {
      const newsCategoriesSnapshot = await getDocs(newsCategoriesCollectionRef);
      const newsCategoriesList = newsCategoriesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNewsCategories(newsCategoriesList);
    }
    fetchNewsCategories();
  }, []);

  const verifyCategoryName = (newsItem) => {
    const category = newsCategories.find(category => category.id === newsItem.news_category_id);
    const categoryName = category ? category.name : '';
    return categoryName;
  }

  const [newsSubcategories, setNewsSubcategories] = useState([]);
  const newsSubcategoriesCollectionRef = collection(db, 'NewsSubcategories');

  useEffect(() => {
    const fetchNewsSubcategories = async () => {
      const newsSubcategoriesSnapshot = await getDocs(newsSubcategoriesCollectionRef);
      const newsSubcategoriesList = newsSubcategoriesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNewsSubcategories(newsSubcategoriesList);
    }
    fetchNewsSubcategories();
  }, []);

  const verifySubcategoriesNames = (newsItem) => {
    let subcategoriesNames = [];
    for (const subcategory_id of newsItem.news_subcategory_ids) {
      const subcategory = newsSubcategories.find(subcategory => subcategory.id === subcategory_id);
      const subcategoryName = subcategory ? subcategory.name : '';
      subcategoriesNames.push(subcategoryName);
    }
    return subcategoriesNames;
  }

  return (
    <Container fluid className={`${styles.newsDashboardContainer} w-100 p-2 d-flex justify-content-center align-content-start align-items-start flex-wrap`}>
      <SearchBar />
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} categoryName={verifyCategoryName(newsItem)} subcategoriesNames={verifySubcategoriesNames(newsItem)} />
      ))}
    </Container>
  )
}

export default NewsDashboard;
