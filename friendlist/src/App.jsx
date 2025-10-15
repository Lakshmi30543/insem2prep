import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [friend, setFriend] = useState({
    name: '',
    email: '',
    phone: '',
    met_at: ''
  });

  const [friendsList, setFriendsList] = useState([]);

  // Fetch all friends from backend
  const fetchFriends = async () => {
    try {
      const res = await axios.get('http://localhost:7777/friendapi/all');
      setFriendsList(res.data);
    } catch (err) {
      console.error('Error fetching friends', err);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7777/friendapi/add', friend);
      alert('Friend added successfully!'); 
      setFriend({ name: '', email: '', phone: '', met_at: '' });
      fetchFriends(); 
    } catch (err) {
      console.error('Error adding friend', err);
      alert('Error adding friend!');
    }
  };


  return (
    <div className="container">
      <h2>Add a Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={friend.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={friend.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={friend.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="met_at"
          placeholder="Where you met"
          value={friend.met_at}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Friend</button>
      </form>

      <div className="friend-list">
        {friendsList.map((f) => (
          <div className="friend-item" key={f.id}>
            <strong>{f.name}</strong><br />
            Email: {f.email}<br />
            Phone: {f.phone}<br />
            Met At: {f.met_at}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
