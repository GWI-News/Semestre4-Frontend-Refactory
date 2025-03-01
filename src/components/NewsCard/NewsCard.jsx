import React from 'react';
import styles from './NewsCard.module.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const NewsCard = ({ newsItem, categoryName, subcategoriesNames }) => {
    return (
        <Card className={`${styles.newsCard} p-2 m-1`}>
            <Link to={`/categorias/${categoryName}/subcategorias/${subcategoriesNames}/noticia/${newsItem.id}`} className={`${styles.newsCardLinkTitle} text-decoration-none`}>
                <Card.Img src={newsItem.url_image} />
                <Card.Body>
                    <Card.Title>{newsItem.title}</Card.Title>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default NewsCard;
