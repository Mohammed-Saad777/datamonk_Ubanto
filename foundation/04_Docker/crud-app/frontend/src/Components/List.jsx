import Button from "../Components/Button";

function List({ users, onEdit, onDelete }) {
  if (!users.length) {
    return (
      <p className="text-neutral-400 text-center">No users found. Add one above!</p>
    );
  }

  return (
    <ul className="space-y-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex justify-between items-center bg-neutral-800 border border-neutral-700 rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow"
        >
          <div>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-neutral-400">{user.email}</p>
          </div>
          <div className="flex gap-3">
            <Button text="Edit" onClick={() => onEdit(user)} />
            <Button text="Delete" onClick={() => onDelete(user.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
