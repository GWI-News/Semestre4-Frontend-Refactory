import React, { useState, useEffect } from 'react'
import styles from './NewsPage.module.css'
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { Container, Col } from 'react-bootstrap'

const NewsPage = () => {
    const { newsCategory, newsSubcategories, newsId } = useParams();

    console.log(newsCategory, newsSubcategories, newsId)

    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        const fetchNewsItem = async () => {
            const newsDocRef = doc(db, 'News', newsId)
            const newsDoc = await getDoc(newsDocRef)
            if (newsDoc.exists()) {
                setNewsItem({ id: newsDoc.id, ...newsDoc.data() })
                console.log('Document data:', newsDoc.data())
            } else {
                console.log('No such document!')
            }
        }
        fetchNewsItem()
    }, [])

    const formatDate = (timestamp) => {
        const date = new Date(timestamp.seconds * 1000)
        return date.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const splitTextContent = (text_content) => {
        const sentences = text_content.split('. ')
        const paragraphs = []
        for (let i = 0; i < sentences.length; i += 3) {
            const paragraph = sentences.slice(i, i + 3).join('. ')
            paragraphs.push(paragraph.endsWith('.') ? paragraph : paragraph + '.')
        }
        return paragraphs
    }

    return (
        <Container fluid className={`${styles.newsPageContainer} w-100 p-2 d-flex justify-content-center align-items-start`}>
            <Col xs={12} md={9} lg={8} xl={6} className="justify-content-center text-center">
                {newsItem ?
                    (
                        <>
                            <h1>{newsItem.title}</h1>
                            <h4 className={`${styles.newsSubtitle}`}>{newsItem.subtitle}</h4>
                            {splitTextContent(newsItem.text_content).map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    <p className={`${styles.newsParagraph}`}>{paragraph}</p>
                                    {index === 0 && <img src={newsItem.url_image} alt={newsItem.alt_image} className="w-75 img-fluid mt-2 mb-3" />}
                                </React.Fragment>
                            ))}
                            <p className={`${styles.newsMetaInfo}`}>{`Categoria: ${newsCategory}.`}</p>
                            <p className={`${styles.newsMetaInfo}`}>{`Subcategorias: ${newsSubcategories}.`}</p>
                            <p className={`${styles.newsMetaInfo}`}>{`Escrito por ${newsItem.author}.`}</p>
                            <p className={`${styles.newsMetaInfo}`}>{`Editado e Publicado por ${newsItem.editor}.`}</p>
                            <p className={`${styles.newsMetaInfo}`}>{`Última atualização em ${formatDate(newsItem.publication_date)}.`}</p>
                        </>
                    ) :
                    (
                        <h1>Carregando...</h1>
                    )
                }
            </Col>
        </Container>
    )
}

export default NewsPage
