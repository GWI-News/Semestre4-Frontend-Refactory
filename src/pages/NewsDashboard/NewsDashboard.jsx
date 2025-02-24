import React, { useState, useEffect } from 'react';
import styles from './NewsDashboard.module.css';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { Container } from 'react-bootstrap';
import NewsCard from '../../components/NewsCard/NewsCard';

const NewsDashboard = () => {
  const [news, setNews] = useState([]);
  const newsCollectionRef = collection(db, 'News');

  useEffect(() => {
    const fetchNews = async () => {
      const newsSnapshot = await getDocs(newsCollectionRef);
      const newsList = newsSnapshot.docs.map(doc => doc.data());
      setNews(newsList);
    }
    fetchNews();
  }, []);

  return (
    <Container fluid className={`${styles.newsDashboardContainer} w-100 p-2 d-flex justify-content-center align-items-start flex-wrap`}>
      {news.map((newsItem, index) => (
        <NewsCard key={index} newsItem={newsItem} />
      ))}
    </Container>
  )
}

export default NewsDashboard;
