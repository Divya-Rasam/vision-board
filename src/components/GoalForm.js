import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [title, setTitle] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("Dreaming");
  const [imageLink, setImageLink] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !reason) {
      alert("Please fill in all fields!");
      return;
    }

    const newGoal = {
      id: Date.now(),
      title,
      reason,
      status,
      image: imagePreview || imageLink || "", // always string
    };

    onAddGoal(newGoal);

    // Reset form
    setTitle("");
    setReason("");
    setStatus("Dreaming");
    setImageLink("");
    setImagePreview("");
  };

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <h5 style={{ color: "darkorange", fontWeight: "bold" }}>
        Add a New Dream
      </h5>

      <input
        className="form-control mb-2"
        placeholder="Your Dream Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Why is this important to you?"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <select
        className="form-select mb-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Dreaming</option>
        <option>In Progress</option>
        <option>Achieved</option>
      </select>

      <label className="form-label">Image URL (optional):</label>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Paste image link"
        value={imageLink}
        onChange={(e) => {
          setImageLink(e.target.value);
          setImagePreview(e.target.value); // sync with preview
        }}
      />

      <div className="text-center text-muted mb-2">— OR —</div>

      <label className="form-label">Upload Image from Device:</label>
      <input
        type="file"
        accept="image/*"
        className="form-control mb-2"
        onChange={handleFileChange}
      />

      {imagePreview && (
        <div className="text-center mt-3">
          <p className="mb-1">Image Preview:</p>
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxHeight: "150px", borderRadius: "8px" }}
          />
        </div>
      )}

      <button className="btn btn-primary mt-3">Add Dream</button>
    </form>
  );
}

export default GoalForm;







// import { useState } from 'react';

// function GoalForm({ onAddGoal }) {
//   const [title, setTitle] = useState('');
//   const [reason, setReason] = useState('');
//   const [status, setStatus] = useState('Dreaming');
//   const [imageLink, setImageLink] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !reason) {
//       alert('Please fill in all fields!');
//       return;
//     }

//     const image = imageFile || imageLink;

//     const newGoal = {
//       id: Date.now(),
//       title,
//       reason,
//       status,
//       image,
//     };

//     onAddGoal(newGoal);

//     // Reset form
//     setTitle('');
//     setReason('');
//     setStatus('Dreaming');
//     setImageLink('');
//     setImageFile(null);
//   };

//   return (
//     <form className="card p-3 mb-4" onSubmit={handleSubmit}>
//       <h5 style={{color: "dark-orange"}}>Add a New Dream </h5>

//       <input
//         className="form-control mb-2"
//         placeholder="Your Dream Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <textarea
//         className="form-control mb-2"
//         placeholder="Why is this important to you?"
//         value={reason}
//         onChange={(e) => setReason(e.target.value)}
//       />

//       <select
//         className="form-select mb-2"
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//       >
//         <option>Dreaming</option>
//         <option>In Progress</option>
//         <option>Achieved</option>
//       </select>

//       <label className="form-label">Image URL (optional):</label>
//       <input
//         type="text"
//         className="form-control mb-2"
//         placeholder="Paste image link"
//         value={imageLink}
//         onChange={(e) => setImageLink(e.target.value)}
//       />

//       <div className="text-center text-muted mb-2">— OR —</div>

//       <label className="form-label">Upload Image from Device:</label>
//       <input
//         type="file"
//         accept="image/*"
//         className="form-control mb-2"
//         onChange={(e) => {
//           const file = e.target.files[0];
//           if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//               setImageFile(reader.result); // base64
//             };
//             reader.readAsDataURL(file);
//           }
//         }}
//       />

//       {(imageLink || imageFile) && (
//         <div className="text-center mt-3">
//           <p className="mb-1"> Image Preview:</p>
//           <img
//             src={imageFile || imageLink}
//             alt="Preview"
//             style={{ maxHeight: '150px', borderRadius: '8px' }}
//           />
//         </div>
//       )}

//       <button className="btn btn-primary mt-3">Add Dream</button>
//     </form>
//   );
// }

// export default GoalForm;
