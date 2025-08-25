import { Link } from 'react-router-dom';               // Pulls in React Router’s <Link> component so you can navigate to /vision without reloading the page
import styles from './HomePage.module.css';                           //imports css like js object                               Any class you define in HomePage.module.css becomes a property on styles (e.g., styles.homepageContainer), which prevents class-name clashes across the app.                                             Dream it. Pin it. Achieve it.

export function HomePage() {            // Title + subtitle for context.

  const samples = [
  { src: 'https://static.vecteezy.com/system/resources/previews/000/477/147/original/vector-travel-cartoon-set.jpg', 
    caption: 'See the World', rotation: '-3deg', alt: 'Travel' },
  { src: 'https://tse3.mm.bing.net/th/id/OIP.egXXp8Womk5JN9LJPlAWowHaJ1?rs=1&pid=ImgDetMain&o=7&rm=3',                 // All your card data is in one place. Easy to add/remove/update items without touching JSX.
    caption: 'Read More',     rotation: '2deg',  alt: 'Books' },
  { src: 'https://img.freepik.com/premium-vector/cute-man-lifting-dumbbell-fitness-gym-cartoon-vector-icon-illustration-people-sport-icon-isolated_138676-5450.jpg?w=1480',    
    caption: 'Stay Fit',      rotation: '-1deg', alt: 'Fitness' }
];


  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageHero}>
        <h1 className={styles.homepageTitle}> Your Vision Board</h1>
        <p className={styles.homepageSubtitle}>
          Pin your dreams. Track your journey. Celebrate your wins.                
        </p>
        <Link to="/vision" className={styles.startBtn}>
           Start Dreaming
        </Link>
      </div>

      <div className={styles.homepagePolaroids}>
        {samples.map((p, i) => (
          <div key={i} className={styles.polaroid} style={{ '--rotation': p.rotation }}>
            <img src={p.src} alt={p.alt} />
            <div className={styles.polaroidCaption}> {p.caption}</div>
          </div>
        ))}
      </div>

    </div>
  );                                // mapping through the array on the top ----- the sample conts
}

// export default HomePage;
























// import { Link } from 'react-router-dom';               // Pulls in React Router’s <Link> component so you can navigate to /vision without reloading the page
// import styles from './HomePage.module.css';                           //imports css like js object                               Any class you define in HomePage.module.css becomes a property on styles (e.g., styles.homepageContainer), which prevents class-name clashes across the app.                                             Dream it. Pin it. Achieve it.

// export function HomePage() {            // Title + subtitle for context.
//   return (
//     <div className={styles.homepageContainer}>
//       <div className={styles.homepageHero}>
//         <h1 className={styles.homepageTitle}> Your Vision Board</h1>
//         <p className={styles.homepageSubtitle}>
//           Pin your dreams. Track your journey. Celebrate your wins.                
//         </p>
//         <Link to="/vision" className={styles.startBtn}>
//            Start Dreaming
//         </Link>
//       </div>

//       <div className={styles.homepagePolaroids}>
//         <div className={styles.polaroid} style={{ '--rotation': '-3deg' }}>
//           <img
//             src="https://static.vecteezy.com/system/resources/previews/000/477/147/original/vector-travel-cartoon-set.jpg"
//             alt="Travel"
//           />
//           <div className={styles.polaroidCaption}> See the World</div>
//         </div>
//         <div className={styles.polaroid} style={{ '--rotation': '2deg' }}>
//           <img
//             src="https://tse3.mm.bing.net/th/id/OIP.egXXp8Womk5JN9LJPlAWowHaJ1?rs=1&pid=ImgDetMain&o=7&rm=3"
//             alt="Books"
//           />
//           <div className={styles.polaroidCaption}> Read More</div>
//         </div>
//         <div className={styles.polaroid} style={{ '--rotation': '-1deg' }}>
//           <img
//             src="https://img.freepik.com/premium-vector/cute-man-lifting-dumbbell-fitness-gym-cartoon-vector-icon-illustration-people-sport-icon-isolated_138676-5450.jpg?w=1480"
//             alt="Fitness"
//           />
//           <div className={styles.polaroidCaption}> Stay Fit</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default HomePage;
