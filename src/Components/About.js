import styles from './About.module.css';
import {Link} from 'react-router-dom';

const About = () =>{
  return (
    <section className={styles.about}>
      <div className={styles.programsAbout}>
        <span>Arts in Creation</span>
        <h2>CreateDesign</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis sunt dolorum nobis impedit consequuntur velit reiciendis est fuga dignissimos.</p>
        <Link to="*">Get Started</Link>
      </div>
      <div className={styles.cardsProgram}>
        <div className={styles.contentCard}>
          <div className={styles.card}>
            <div className={styles.cardIcons}>
            </div>
            <h3>UX/UI Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit distinctio facilis autem quia rem enim placeat fugiat commodi iure exercitationem a</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcons}/>
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit distinctio facilis autem quia rem enim placeat fugiat commodi iure exercitationem a</p>
          </div>
        </div>
        <div className={styles.contentCard}>
          <div className={styles.card}>
            <div className={styles.cardIcons}/>
            <h3>Marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit distinctio facilis autem quia rem enim placeat fugiat commodi iure exercitationem a</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcons}/>
            <h3> Brand Identify</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit distinctio facilis autem quia rem enim placeat fugiat commodi iure exercitationem a</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;