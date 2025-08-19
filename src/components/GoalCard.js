// function GoalCard({ goal, onDelete, onMarkAchieved }) {
//   return (
//     <div className="card mb-3">
//       {goal.image && (
//         <img
//           src={goal.image}
//           alt={goal.title}
//           className="card-img-top"
//           style={{ objectFit: 'cover', height: '200px' }}
//         />
//       )}
//       <div className="card-body">
//         <h5 className="card-title">{goal.title}</h5>
//         <p className="card-text">{goal.reason}</p>
//         <span className={`badge bg-${
//           goal.status === 'Achieved'
//             ? 'success'
//             : goal.status === 'In Progress'
//             ? 'warning text-dark'
//             : 'secondary'
//         }`}>
//           {goal.status}
//         </span>

//         <div className="mt-3 d-flex gap-2">
//           {goal.status !== 'Achieved' && (
//             <button
//               className="btn btn-sm btn-success"
//               onClick={() => onMarkAchieved(goal.id)}
//             >
//               ✅ Mark as Achieved
//             </button>
//           )}
//           <button
//             className="btn btn-sm btn-outline-danger"
//             onClick={() => onDelete(goal.id)}
//           >
//             🗑️ Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GoalCard;


