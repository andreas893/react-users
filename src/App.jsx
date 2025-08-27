import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import UserList from "./components/Userlist";
import Footer from "./components/Footer";
import AppInfo from "./components/Appinfo";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json");
      const data = await response.json();

      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length === 0) alert("Ingen brugere!");
  }, [users]);

  function handleDeleteUser(id) {
    setUsers(users.filter(user => user.id !== id));
  }
  
  if (loading) {
    return (
      <div className="page">
        <h1>Users</h1>
        <p>Loading...</p>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      id: crypto.randomUUID(),
      name: form.name.value,
      mail: form.mail.value,
      title: form.title.value,
      image: form.image.value,
      age: form.age.value
    };
    setUsers([...users, newUser]);
    form.reset();
  }


  return (
    <div className="page">
      <h1>Users</h1>
          
      <section className="grid">
       {/* Ved at bruge {id, mail, name, title, image} laver vi destructuring, hvis ikke vi brugte dette ville vi skulle skrive props.id, props.name. */}

        {users.map(user => (
          <User key={user.id} user={user} onDelete={handleDeleteUser} />
        ))}
      </section>

      <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Navn" />
      <input name="mail" placeholder="Mail" />
      <input name="title" placeholder="Titel" />
      <input name="image" placeholder="Billede-URL" />
      <input name="age" placeholder="Alder" />
      <button type="submit">Tilføj bruger</button>
      </form>
    </div>
  );
}

export default App;
