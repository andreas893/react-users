import { useState } from "react";
import { useEffect } from "react";

export default function User({ user }) {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  useEffect(() => {
    console.log("Likes:", likes);
  }, [likes]);
  
  useEffect(() => {
    if (likes === 10) alert("Du har nået 10 likes!");
  }, [likes]);
  
  

  return (
    <div className="user-card">
      <img src={user.image} alt={user.name} />
      {
      showDetails && 
      <div className="details">
       <h2>{user.name}</h2>
      <p>Mail: {user.mail}</p>
      <p>Title: {user.title}</p>
      </div>
       }
    
      <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>
      <button onClick={() => setLikes(0)}>Reset likes</button>
      <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Skjul" : "Vis"} detaljer</button>
      <button onClick={() => onDelete(user.id)}>Slet bruger</button>
    </div>
  );
}
