import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';        // Dream it. Pin it. Achieve it.

function HomePage() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageHero}>
        <h1 className={styles.homepageTitle}>🌟 Your Vision Board</h1>
        <p className={styles.homepageSubtitle}>
          Pin your dreams. Track your journey. Celebrate your wins.                
        </p>
        <Link to="/vision" className={styles.startBtn}>
          🚀 Start Dreaming
        </Link>
      </div>

      <div className={styles.homepagePolaroids}>
        <div className={styles.polaroid} style={{ '--rotation': '-3deg' }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/477/147/original/vector-travel-cartoon-set.jpg"
            alt="Travel"
          />
          <div className={styles.polaroidCaption}>🌍 See the World</div>
        </div>
        <div className={styles.polaroid} style={{ '--rotation': '2deg' }}>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.egXXp8Womk5JN9LJPlAWowHaJ1?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Books"
          />
          <div className={styles.polaroidCaption}>📚 Read More</div>
        </div>
        <div className={styles.polaroid} style={{ '--rotation': '-1deg' }}>
          <img
            src="https://img.freepik.com/premium-vector/cute-man-lifting-dumbbell-fitness-gym-cartoon-vector-icon-illustration-people-sport-icon-isolated_138676-5450.jpg?w=1480"
            alt="Fitness"
          />
          <div className={styles.polaroidCaption}>💪 Stay Fit</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
