import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'react-use';
import { db } from '../../firebase/config';
import { getDocs, collection, query, where, orderBy, limit } from 'firebase/firestore';
import styles from './SearchBar.module.css';
import { Container, Button, Form } from 'react-bootstrap';
import { Search, XLg } from 'react-bootstrap-icons';
import NewsCard from '../NewsCard/NewsCard';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [resultSearch, setResultSearch] = useState(true);
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 750, [searchTerm]);

  const normalizeString = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  };

  const [searchNews, setSearchNews] = useState([]);
  const searchNewsCollectionRef = collection(db, 'News');

  useEffect(() => {
    const fetchNews = async () => {
      if (debouncedSearchTerm) {
        const normalizedSearchTerm = normalizeString(debouncedSearchTerm);
        const q = query(
          searchNewsCollectionRef,
          where('normalized_title', '>=', normalizedSearchTerm),
          where('normalized_title', '<=', normalizedSearchTerm + '\uf8ff'),
          orderBy('normalized_title'),
          limit(10)
        );
        const searchNewsSnapshot = await getDocs(q);
        const searchNewsList = searchNewsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        if (searchNewsList.length > 0) {
          setSearchNews(searchNewsList);
          setResultSearch(true);
        } else {
          setSearchNews([]);
          setResultSearch(false);
        }
      } else {
        setSearchNews([]);
        setResultSearch(true);
      }
    };
    fetchNews();
  }, [debouncedSearchTerm]);

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
    };
    fetchNewsCategories();
  }, []);

  const verifyCategoryName = (newsItem) => {
    const category = newsCategories.find(category => category.id === newsItem.news_category_id);
    const categoryName = category ? category.name : '';
    return categoryName;
  };

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
    };
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
  };

  const [searchBarDisplay, setSearchBarDisplay] = useState(false);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setSearchBarDisplay(false);
      }
    };

    if (searchBarDisplay) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBarDisplay]);

  return (
    <Container fluid ref={searchBarRef} className={searchBarDisplay ? `${styles.searchBarContainerOpened} ${styles.searchBarContainer}` : `${styles.searchBarContainerClosed} ${styles.searchBarContainer}`}>
      <Form>
        <Form.Group className="d-flex align-items-center justify-content-around flex-wrap">
          {searchBarDisplay && (
            <Form.Control
              type="text"
              placeholder="Busque por Notícias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`${styles.searchBarFormControl}`}
            />
          )}
          <Button className={styles.searchBarFormButton} onClick={searchBarDisplay ? () => setSearchBarDisplay(false) : () => setSearchBarDisplay(true)}>
            {searchBarDisplay ? <XLg size={20} /> : <Search size={24} />}
          </Button>
        </Form.Group>
      </Form>
      {searchBarDisplay &&
        debouncedSearchTerm &&
        searchNews.map((newsItem) => (
          <Container fluid className={`${styles.searchBarResultsContainer} w-100 d-flex justify-content-center align-content-start align-items-start flex-wrap`}>
            <NewsCard key={newsItem.id} newsItem={newsItem} categoryName={verifyCategoryName(newsItem)} subcategoriesNames={verifySubcategoriesNames(newsItem)} />
          </Container>
        ))
      }
      {searchBarDisplay &&
        debouncedSearchTerm &&
        !resultSearch && (
          <Container fluid className={`${styles.searchBarResultsContainer} w-100 d-flex justify-content-center align-content-start align-items-start flex-wrap`}>
            <h4 className="pt-2 text-center">Nenhum Resultado Encontrado.</h4>
          </Container>
        )
      }
    </Container>
  );
};

export default SearchBar;