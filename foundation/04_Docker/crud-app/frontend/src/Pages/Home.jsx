import { useEffect, useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";


function Home() {
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState(null);
  const API_URL = "http://localhost:8080/api/user";

  const fetchUsers = () => {
    fetch(API_URL).then(res => res.json()).then(setUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = (name, email) => {
    if (editData) {
      fetch(`${API_URL}/${editData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      }).then(() => { setEditData(null); fetchUsers(); });
    } else {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      }).then(fetchUsers);
    }
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(fetchUsers);
  };

  return (
     <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <div className="max-w-2xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center tracking-tight ">
          CRUD App
        </h2>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg">
          <Form onSave={handleSave} editData={editData} />
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg">
          <List users={users} onEdit={setEditData} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Home;
