import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './About.module.scss';
import src from '../../assets/03.jpg';

const AboutEsp = () => {
  return (
    <div className={styles.about}>
      <NavBar />
      <Link to="/AboutEng" className={styles.translate}>
        <em>see this page in English</em>
      </Link>
      <div className={styles.section1}>
        <div className={styles.blurb}>
          <h1>Nuestra Misión</h1>

          <h5>
            Incrementando la equidad y promoviendo el bienestar para las
            comunidades LGBTQ+ Latines en el Sur.
          </h5>

          <h5>Llevamos a cabo nuestra misión:</h5>
          <ul>
            <li>A través de servicios directos</li>
            <li>
              Facilitando información, educación y sesiones de capacitación para
              individuos y grupos interesados en expandir nuestra misión de
              avanzar mayor equidad para la comunidad LGBTQ.
            </li>
          </ul>
        </div>
        <img src={src} alt="" className={styles.mainPic} />
      </div>
      <br />
      <div className={styles.section2}>
        <h1>Visión</h1>
        <p style={{ textAlign: 'center' }}>
          Latino LinQ es una organización sin fines de lucre en Georgia que
          aboga por un mundo en el que las personas Latinx LGTBQ+ y sus familias
          puedan vivir auténticamente, con dignidad y respeto.
        </p>
      </div>
      <div className={styles.section3}>
        <h1>Quienes Somos</h1>
        <div className={styles.blurbs}>
          <div>
            <p>
              Desde sus inicios en el año 2015, los voluntarios de Latino LinQ
              se han enfocado en servir a la comunidad Latinx en Georgia. Latino
              LinQ fue establecido para brindarle apoyo a una comunidad rica en
              diversidad en cuanto a identidad de género, recalcando la
              importancia de crear espacios acogedores.
            </p>
          </div>
          <div>
            <p>
              Con el paso del tiempo nuestra misión no ha cambiado, sino que
              hemos alineado nuestra declaración de misión con el trabajo
              realizado hasta el momento y para reflejar nuestro enfoque – la
              comunidad LGBTQ. Nuestra declaración de misión lee así: Latino
              LinQ promueve equidad para la comunidad LGBTQ facilitando
              servicios de apoyo a personas Latinxs LGBTQ y a sus familias, en
              las áreas de cuidado de salud y asistencia legal. Llevamos a cabo
              nuestra misión proporcionando servicios directos, brindando
              información, educación, y facilitando sesiones de capacitación
              para individuos y grupos interesados en expandir nuestra misión de
              promover equidad para la comunidad LGBTQ.
            </p>
          </div>
          <div>
            <p>
              Y como una organización liderada por Latinxs, Latino LinQ
              concentra sus esfuerzos en crear consciencia en la comunidad
              Latinx acerca de la desigualdad que nuestrxs hermanxs LGBTQ siguen
              enfrentando.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutEsp;
