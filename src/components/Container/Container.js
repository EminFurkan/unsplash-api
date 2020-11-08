import { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { Alert } from '../Alert/Alert';
import { Loader } from '../Loader/Loader';
import { getCollections, getImages } from '../../services/unsplash';
import './container.scss';

export const Container = () => {
  const [images, setImages] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [query, setQuery] = useState({
    collectionId: null,
    key: 'Istanbul'
  });

  useEffect(() => {
    setLoading(true);
    const { key, collectionId } = query;
    getImages(key, collectionId).then(chunk => {
      if (!collectionId) {
        if (chunk.data.results) {
          setImages(chunk.data.results);
          setAlert(false);
        } else {
          setAlert(true);
        }
      } else {
        if (chunk.data) {
          setImages(chunk.data);
          setAlert(false);
        } else {
          setAlert(true);
        }
      }
      setLoading(false);
    });
  }, [query]);

  useEffect(() => {
    getCollections().then(chunk => {
      let collectionData = [];

      chunk.data.forEach(c => {
        let collection = {
          id: c.id,
          title: c.title
        };

        collectionData.push(collection);
      });

      setCollections(collectionData);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header
        collections={collections}
        setQuery={setQuery}
      />
      {
        loading ? <Loader /> :
        !alert ?
        <main>
          <section>
            {
              images?.map(image =>
                <a
                  key={image.id}
                  href={image.links.html}
                  rel="noreferrer"
                  target="_blank">
                  <img src={image.urls.raw} alt={image.description} />
                </a>
              )
            }
          </section>
        </main> : <Alert />
      }
    </>
  );
}