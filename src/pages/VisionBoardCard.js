// import "./VisionBoardCard.module.css"; // add flip effect styling

// function VisionBoardCard({ goal, index, onDelete, onMarkAchieved }) {
//   return (
//     <div
//       className="vision-card"
//       style={{ "--rotation": `${index % 2 === 0 ? -3 : 3}deg` }}
//     >
//       <div className="vision-card-inner">
//         {/* FRONT */}
//         <div className="vision-card-front">
//           {goal.image && (
//             <img src={goal.image} alt={goal.title} className="vision-card-img" />
//           )}
//           <div className="vision-card-caption">{goal.title}</div>
//         </div>

//         {/* BACK */}
//         <div className="vision-card-back">
//           <p className="fw-bold">Why this matters?</p>
//           <p>{goal.reason || "No reason provided"}</p>
//         </div>
//       </div>

//       {/* Action buttons (outside flip) */}
//       <div className="mt-2 text-center">
//         {goal.status !== "Achieved" && (
//           <button
//             className="btn btn-sm btn-success me-2"
//             onClick={() => onMarkAchieved(goal.id)}
//           >
//             ✅
//           </button>
//         )}
//         <button
//           className="btn btn-sm btn-outline-danger"
//           onClick={() => onDelete(goal.id)}
//         >
//           🗑️
//         </button>
//       </div>
//     </div>
//   );
// }

// export default VisionBoardCard;






// import React from "react";
// import styles from "./VisionBoardCard.module.css";

// function VisionBoardCard({ goal, imageUrl, why }) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.cardInner}>
//         {/* Front side */}
//         <div className={styles.cardFront}>
//           <img src={imageUrl} alt={goal} className={styles.image} />
//           <div className={styles.caption}>{goal}</div>
//         </div>

//         {/* Back side */}
//         <div className={styles.cardBack}>
//           <h4>Why?</h4>
//           <p>{why || "No reason given yet 😅"}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VisionBoardCard;
