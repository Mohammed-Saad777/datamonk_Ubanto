import { useState, useEffect } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";

function Form({ onSave, editData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setEmail(editData.email);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(name, email);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex justify-center">
        <Button text={editData ? "Update" : "Create"} type="submit" />
      </div>
    </form>
  );
}

export default Form;
