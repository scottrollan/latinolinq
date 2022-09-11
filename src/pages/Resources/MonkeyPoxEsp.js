import React from 'react';
import Pox from '../../assets/pox.png';
import NavBar from '../../components/NavBar';
import styles from './MonkeyPox.module.scss';

export default function MonkeyPoxEsp() {
  return (
    <div className={styles.monkeyPox}>
      <NavBar />
      <h3>RECURSOS DE SALUD PARA PROTEGERSE CONTRA LA VIRUELA SÍMICA</h3>
      <div className={styles.twoColumns}>
        <div className={styles.column1}>
          <h4 className={styles.red}>INFORMACIÓN EN GENERAL</h4>
          <p>
            Se presenta como sarpullido en cualquier parte del cuerpo,
            comúnmente en el área genital o en el ano. Otros síntomas menos
            comunes incluyen: fiebre, escalofríos, ganglios linfáticos
            inflamados, agotamiento,dolores musculares o de cabeza.
          </p>
          <p>
            Se transmite por contacto prolongado piel a piel con las lesiones
            (ej. relaciones sexuales, besos, etc.) pero tambien puede
            transmitirse, aunque menos comúnmente, por contacto con objetos, o
            ropa que hayan sido usados por personas con viruela simica y por
            contacto con secreciones respiratorias. ¿Cómo disminuir mi riesgo?:{' '}
            <a
              href="https://www.cdc.gov/poxvirus/monkeypox/pdf/Monkeypox-and-safer-sex-Spanish-version.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              La viruela símica o del mono y las relaciones sexuales más seguras
            </a>
          </p>
          <p style={{ textAlign: 'left' }}>
            Más información:{' '}
            <a
              href="https://espanol.cdc.gov/poxvirus/monkeypox/index.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fspanish%2Fmonkeypox%2Findex.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.cdc.gov/Spanish/monkeypox/
            </a>
          </p>
          <img src={Pox} alt="" className={styles.poxPic} />

          <h4 className={styles.red}>PRUEBAS</h4>
          <p>
            La Junta de Salud del Condado de Fulton ofrece visitas sin cita
            previa para hacerse la prueba hasta las{' '}
            <span className={styles.bold}>2 p.m.</span> Dirección:{' '}
            <span className={styles.bold}>10 Park Place en el 5to piso</span>.
            Llame al <span className={styles.bold}>(404) 613-8150</span> para
            obtener una evaluación para la prueba, pida conversar con Edna
            Belgrave.
          </p>
          <p>
            Si desea obtener un kit casero gratuito para realizarse OTRAS
            pruebas de enfermedades de transmision sexual como VIH, gonorrea y
            clamidia visite este sitio:{' '}
            <a
              href="https://orders.poweredbyash.com/ashwellness/form/TestingMyWayATL75Revision/formperma/6pcbqscTe7zMLOptPYOcuGGicTCfnITdDFJV-wNBMF8"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.TestingMyWayATL.com
            </a>
          </p>
        </div>
        <div className={styles.column2}>
          <h4 className={styles.red}>TRATAMIENTO</h4>
          <p>
            En este momento, el único medicamento en investigación para tratar
            la viruela símica es Tecovirimat o TPOXX. Existe un riguroso
            procedimiento para obtenerlo y necesita prescripción y seguimiento
            médico intenso. Este medicamento está reservado para casos severos
            (ej. Lesiones en todo el cuerpo, ojos, boca o genitales), casos en
            personas inmunosuprimidas (ej. Personas que viven con VIH, o padecen
            cáncer, o han tenido trasplante de órgano, etc.)
          </p>
          <p>
            Si usted piensa que califica para recibir tratamiento llame a la
            Junta de Salud del Condado de Fulton{' '}
            <span className={styles.bold}>(404) 613-8150</span> para obtener más
            información sobre cómo recibir tratamiento, pida conversar con Edna
            Belgrave.
          </p>
          <h4 className={styles.red}>VACUNACIÓN</h4>
          <p>
            Usted puede recibir la vacuna contra la viruela símica si tiene más
            de 18 años, con cualquier identidad de género u orientación sexual y
            cualquiera de los siguientes:
          </p>
          <ol type="a">
            <li>
              Múltiples parejas sexuales o relaciones sexuales anónimas con
              hombres que tienen relaciones sexuales con hombres en los últimos
              14 días
            </li>
            <li>
              Ha tenido contacto piel con piel o íntimo (por ejemplo, besos,
              abrazos) con personas que han tenido una erupción cutánea o se
              sospecha que han tenido viruela del mono en los últimos 14 días.
            </li>
            <li>
              Ha tenido contacto piel con piel o íntimo (por ejemplo, besos,
              abrazos) con personas en lugares o eventos grandes en los últimos
              14 días.
            </li>
            <li>
              Haber tenido relaciones sexuales comerciales y / o transaccionales
              en los últimos 14 días (por ejemplo, sexo a cambio de dinero,
              refugio, alimentos y otros bienes o necesidades)
            </li>
            <li>
              Son VIH positivos, o están en PrEP por VIH, o diagnosticados con
              una infección de transmisión sexual (ITS) en los últimos 90 días.
            </li>
          </ol>
          <div style={{ textAlign: 'left' }}>
            Georgia - obtenga una cita para su vacunación aquí:{' '}
            <a
              href="https://gta-vras.powerappsportals.us/es-ES/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://gta-vras.powerappsportals.us/es-ES/
            </a>{' '}
          </div>
          <div style={{ textAlign: 'left' }}>
            Otros lugares:{' '}
            <a
              href="https://mpoxvaxmap.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mpoxvaxmap.org/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
