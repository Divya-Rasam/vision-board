// import { useState, useEffect } from "react";
// import GoalForm from "../components/GoalForm";
// import VisionBoardCard from "./VisionBoardCard";

// function VisionBoardPage() {
//   const [goals, setGoals] = useState(() => {
//     const saved = localStorage.getItem("goals");
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [filter, setFilter] = useState("All");

//   useEffect(() => {
//     localStorage.setItem("goals", JSON.stringify(goals));
//   }, [goals]);

//   const handleAddGoal = (goal) => {
//     setGoals([goal, ...goals]);
//   };

//   const handleDelete = (id) => {
//     setGoals(goals.filter((goal) => goal.id !== id));
//   };

//   const handleMarkAchieved = (id) => {
//     setGoals(
//       goals.map((goal) =>
//         goal.id === id ? { ...goal, status: "Achieved" } : goal
//       )
//     );
//   };

//   const filteredGoals =
//     filter === "All" ? goals : goals.filter((goal) => goal.status === filter);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4 text-center">🧠 Your Vision Board</h2>

//       {/* Filter Buttons */}
//       <div className="text-center mb-4">
//         {["All", "Dreaming", "In Progress", "Achieved"].map((status) => (
//           <button
//             key={status}
//             className={`btn mx-1 ${
//               filter === status ? "btn-primary" : "btn-outline-primary"
//             }`}
//             onClick={() => setFilter(status)}
//           >
//             {status}
//           </button>
//         ))}
//       </div>

//       {/* Layout */}
//       <div className="vision-board-container">
//         {/* Left column: form */}
//         <div className="vision-form-column">
//           <GoalForm onAddGoal={handleAddGoal} />
//         </div>

//         {/* Right column: Polaroid grid */}
//         <div className="vision-goals-column">
//           {filteredGoals.length === 0 ? (
//             <p className="text-muted text-center">
//               No dreams found for this category 💭
//             </p>
//           ) : (
//             filteredGoals.map((goal, index) => (
//               <VisionBoardCard
//                 key={goal.id}
//                 goal={goal}
//                 index={index}
//                 onDelete={handleDelete}
//                 onMarkAchieved={handleMarkAchieved}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VisionBoardPage;

























import { useState, useEffect } from "react";
import GoalForm from "../components/GoalForm";

// import VisionBoardCard from "../components/VisionBoardCard";

function VisionBoardPage() {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = (goal) => {
    setGoals([goal, ...goals]);
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const handleMarkAchieved = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, status: "Achieved" } : goal
      )
    );
  };

  const filteredGoals =
    filter === "All" ? goals : goals.filter((goal) => goal.status === filter);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center" style={{color: "orange"}}> Your Vision Board</h2>

      {/* Filter Buttons */}
      <div className="text-center mb-4">
        {["All", "Dreaming", "In Progress", "Achieved"].map((status) => (
          <button
            key={status}
            className={`btn mx-1 ${
              filter === status ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div className="vision-board-container">
        {/* Left column: form */}
        <div className="vision-form-column">
          <GoalForm onAddGoal={handleAddGoal} />
        </div>

        {/* Right column: Polaroid grid */}
        <div className="vision-goals-column">
          {filteredGoals.length === 0 ? (
            <p className="text-muted text-center">
              No dreams found for this category 💭
            </p>
          ) : (
            filteredGoals.map((goal, index) => (
              <div
                key={goal.id}
                className="polaroid"
                style={{
                  "--rotation": `${index % 2 === 0 ? -3 : 3}deg`,
                }}
              >
                {goal.image && <img src={goal.image} alt={goal.title} />}
                <div className="polaroid-caption">{goal.title}</div>
                <div className="mt-2">
                  {goal.status !== "Achieved" && (
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => handleMarkAchieved(goal.id)}
                    >
                      {/* ✅ */} Achieved
                    </button>
                  )}
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(goal.id)}
                  >
                    {/* 🗑️ */} Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default VisionBoardPage;
