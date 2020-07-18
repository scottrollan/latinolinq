import React from 'react';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Humberto from '../../assets/humberto.jpg';
import Dianne from '../../assets/dianne.jpg';
import Coti from '../../assets/cotiPE.jpg';
import Edric from '../../assets/edricF.jpg';
import JulianaH from '../../assets/julianaH.jpg';
import JulianaR from '../../assets/julianaR.png';
import styles from './Board.module.scss';

const BoardEng = () => {
  const directory = [
    {
      name: 'Humberto Orozco',
      title: 'President',
      image: Humberto,
      bio: [
        {
          paragraph:
            'Humberto Orozco grew up in Gainesville, Georgia and comes from a humble, hardworking family with roots in Mexico. Humberto was born in Michoacán, Mexico and, at eight years of age, his family moved to the U.S. As he grew older, Humberto noticed the injustices faced by the immigrant community, which prompted him to get involved in the fight to combat those injustices. As a result, inclusion and fairness played an integral role in the trajectory of his life. Equity has not only influenced his volunteering experience, but it has shaped his life’s trajectory more broadly.  In fact, equity describes why Humberto’s parents felt inclined to make the difficult decision to uproot their six children and emigrate to an unknown country and leave behind loved ones in Mexico. His parents were looking to give their children a better life and an opportunity for a quality education. They never let Humberto and his siblings forget why they brought them to the U.S. and, for Humberto, that constant reminder helped him remain focused and motivated to earn a college degree. He completed his B.A. in Geography at the University of Georgia and has remained involved as a volunteer with nonprofit organizations whose mission aligns with his personal mission of helping marginalized communities. For a couple of years, Humberto volunteered with GALEO and Jerusalem House. He has been with Latino LinQ for three years, first as a volunteer and then as part of the Board of Directors.',
        },
      ],
    },
    {
      name: 'Dianne Roman-Gonzalez',
      title: 'Secretary',
      image: Dianne,
      bio: [
        {
          paragraph:
            "Dianne Roman-Gonzalez grew up in Manati, Puerto Rico. Being the youngest of three, she comes from a background of divorced parents and always took note of her mother's arduous work ethic to raise her and her siblings. Her family supported them and she learned something from all of them and this shaped her to become independent and mature at an early age. During her youth, she became involved in many extracurricular activities, demonstrating her leadership skills, while always focusing on helping others. Volunteerism has been central to her life. Her family's support has always been key in her unrelenting determination in moving forward and inspiring others to reach their goals. Her work ethic, both professionally and personally, is a testament to her upbringing and the education she obtained as a Biology major. While she neared the end of her undergraduate studies, she fell in love with Public Health and decided to pursue a Master's degree. After completing the MPH program at the University of Puerto Rico, she moved to Georgia  to expand her horizons with her husband, Armando and their two dogs Napoleon and Ocean. Now, she always is looking for ways to support the Latino community.",
        },
      ],
    },
    {
      name: 'Edric Figueroa',
      title: 'Treasurer',
      image: Edric,
      bio: [
        {
          paragraph:
            'Edric Figueroa is a queer, first generation Peruvian-American born in New York and raised in Georgia currently serving as the ACT NOW: END AIDS Coalition Coordinator. Edric’s work has built the self-determination of individuals, embraced the intersections of identity, and addressed the structural determinants of health that create the conditions for multiple forms of violence to continue. Before relocating back home to Atlanta in the summer of 2019, Edric spent just under six years supporting LGBTQ survivors, families and youth in Seattle as a Program Manager for the Northwest Network of Bisexual, Trans, Lesbian & Gay Survivors of Abuse, Program Coordinator for Seattle Young People’s Project, and Mentor for The Service Board.  His previous vocations include working as a Program Coordinator at AID Atlanta and Organizing Fellow with the National Gay and Lesbian Task Force. Edric has been recognized as a 2013-2014 United States Conference on AIDS, Youth Scholar, a 2014 Seattle Youth Ambassador for National Youth HIV & AIDS Awareness Day, a 2015 Greater Than AIDS Ambassador for the #SpeakOutHIV campaign, and a 2017-2018 Ambassador for the ViiV Youth and Community Summit. Edric is grateful to have grown resilient in the South through grassroots organizing with groups like MondoHomo Queer Music and Arts Festival and is excited to build community with Latinx folks in Atlanta through his role on the Latino LinQ Board and as an organizer with La Choloteca. ',
        },
      ],
    },
    {
      name: 'Coti Pérez-Espinoza',
      title: 'Member',
      image: Coti,
      bio: [
        {
          paragraph:
            'Coti Pérez-Espinoza was born in Lima, Peru, and emigrated to the United States in 1986. She graduated from the University of Alabama at Birmingham with bachelor’s degrees in international studies and Spanish. For much of her career Ms. Pérez-Espinoza has specialized in planning and implementing prevention and education programs about HIV/AIDS in the Latino and African American communities. Currently, she works at a non-profit organization as a community outreach advocate providing support and advocacy for survivors of domestic violence. From 2015 through 2018 she served as the Prevention Project Director for the Atlanta Latino Prevention Project at CETPA, a non-profit organization that is the only behavioral health provider for Latinos in Georgia. The project was a collaboration between Georgia State University’s School of Social Work and CETPA. She has held similar positions for Positive Impact, the State of Georgia and the Fulton County Department of Health and Wellness. Earlier in her career she worked as a Medical Interpreter for the University of Alabama at Birmingham Medical Center. Ms. Pérez-Espinoza has also served as a board member of the Hispanic Health Coalition of Georgia.',
        },
      ],
    },
    {
      name: 'Juliana Henao',
      title: 'Member',
      image: JulianaH,
      bio: [
        {
          paragraph:
            'Juliana Henao, originally from Medellin, Colombia, has made Atlanta her home for the past 17 years.  She holds a bachelor’s degree in Social Work from Universidad Pontificia Bolivariana and an MBA in Project Management from Brenau University. Juliana has also conducted studies in education with children and youth at high risk physically, socially, and morally. She is certified in Waldorf Education, Anger Management, Life Coaching, and Mentoring. ',
        },
        {
          paragraph:
            'Juliana has worked with different nonprofit and private organizations including support groups for victims of domestic violence, anger management groups, and groups for alcohol and drug abuse within Hispanic men. She has provided workshops on sexual and reproductive education. She has experience as a community support individual and has worked as a mentor offering individual life skills coaching sessions.',
        },
        {
          paragraph:
            'Juliana has had different roles as a volunteer in the Atlanta community such as interpreter for Park Street Elementary School, Kidsave Summer Miracles, and the South Georgia Farmworker Health Project at Emory School of Medicine. She held leadership roles such as being in the Hospitality Committee Chair for the Georgia Ballet, One Billion Rising Atlanta Core Committee, Leadership Development Committee Chair for the Georgia Association of Latino Elected Officials (GALEO), and Advisory Council Member of Region 1 for Georgia Department of Behavioral Health and Developmental Disabilities. Currently, she serves on the board of Women’s League of Voters.',
        },
        {
          paragraph:
            "Juliana was recognized by the Boy Scouts of America with the Whitney Young Award in 2012 for her work with disadvantaged youth by developing Scouting in challenging communities. In 2013, she received the honor of  Soy Poderosa, ' I'm powerful ' as part of her job in Lifting Latina Voices by National Latina Institute for Reproductive Health. In 2019, she was recognized as “9to5 Shero” (9to5 Georgia Chapter during the month of March recognizes/celebrates the contributions of women in society) in 9to5’s Annual Women's History Brunch.",
        },
      ],
    },
    {
      name: 'Juliana Ramírez',
      title: 'Member',
      image: JulianaR,
      bio: [
        {
          paragraph:
            "Juliana Ramírez is an immigrant from Colombia who has been living in the United States for over 17 years. She completed her B.A. in political science and international affairs in her hometown of Bogotá and an MA in women's, gender, and sexuality studies at Georgia State University.",
        },
        {
          paragraph:
            'For more than 15 years, Juliana has worked in the non-profit sector, including organizations dedicated to the protection of rural communities affected by internal displacement, the elderly, people with disabilities, popular leaders and more recently managing a sexual and reproductive justice education program.',
        },
        {
          paragraph:
            "Juliana is also passionate about language justice and is one of the founders of the 'Somos Sur Language Justice Crew.' Her identity as a Latina immigrant permeates all aspects of her life and informs the ways in which she navigates the world and approaches the complex intersection of race, class, and gender. ",
        },
      ],
    },
  ];

  return (
    <div className={styles.board}>
      <NavBar />
      <Link to="/BoardEsp" className={styles.translate}>
        <em className={styles.translate}>ver esta página en español</em>
      </Link>
      <h1>Board of Directors</h1>
      <div className={styles.directory}>
        {directory.map((p, index) => {
          return (
            <div
              className={styles.person}
              key={p.name}
              style={{
                backgroundColor: index % 2 === 0 ? 'var(--lightest-gray)' : '',
              }}
            >
              <h3
                style={{
                  alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
                }}
              >
                {p.name}, {p.title}
              </h3>
              <div
                className={styles.imageBio}
                style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                <div className={styles.imageWrapper}>
                  <img src={p.image} alt="" />
                </div>
                <div className={styles.bio}>
                  {p.bio.map((paragraph) => (
                    <p key={paragraph.paragraph.substr(0, 25)}>
                      {paragraph.paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default BoardEng;
