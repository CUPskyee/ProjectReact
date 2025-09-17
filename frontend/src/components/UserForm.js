import React, { useState, useEffect } from "react";
import { addUser, updateUser } from "../services/api";

const UserForm = ({ fetchUsers, editingUser, setEditingUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingUser) {
      await updateUser(editingUser.id, { name, email });
      setEditingUser(null);
    } else {
      await addUser({ name, email });
    }
    setName("");
    setEmail("");
    fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="input-text"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input-email"
      />
      <button type="submit" className="add-button">
        {editingUser ? "Update" : "Tambah"}
      </button>
    </form>
  );
};

export default UserForm;
