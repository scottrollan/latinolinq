import React, { useState, useEffect } from 'react';
import { fetchServices, Client } from '../../api/client';
import imageUrlBuilder from '@sanity/image-url';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Services.module.scss';

const ServicesEng = () => {
  const builder = imageUrlBuilder(Client);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const [services, setServices] = useState([]);

  const fetchData = async () => {
    let theseServices = [];
    const service = await fetchServices;

    service.forEach((s) => {
      const imageObj = s.serviceImage;
      const imageUrl = urlFor(imageObj).url().toString();
      let currentService = {
        id: s._id,
        description: s.descriptionEsp,
        title: s.titleEsp,
        src: imageUrl,
      };
      theseServices.push(currentService);
    });
    setServices(theseServices);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.services}>
      <NavBar />
      <Link to="/ServicesEng" className={styles.translate}>
        <em className={styles.translate}>see this page in English</em>
      </Link>
      <h1>Servicios Directos</h1>
      <div className={styles.columns}>
        {services.map((i, index) => {
          return (
            <div key={`${i._id}${index}`} className={styles.singleColumn}>
              <div
                className={
                  index === 1 //the middle column gets another class (middleBlock)
                    ? [` ${styles.imageWrapper} ${styles.middleBlock}`]
                    : styles.imageWrapper
                }
                style={{
                  background: `url(${i.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundOrigin: 'content-box',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h3>{i.title}</h3>
              <div>
                {i.description.map((dp) => (
                  <p key={dp._key}>{dp.children[0].text}</p>
                ))}
              </div>{' '}
            </div>
          );
        })}
      </div>
      <a href="tel:678-744-5467" className={styles.contactButton}>
        {' '}
        Call Us Now
      </a>
      <a href="mailto:latinolinq@gmail.com" className={styles.contactButton}>
        Email Us
      </a>
      <Footer />
    </div>
  );
};

export default ServicesEng;
