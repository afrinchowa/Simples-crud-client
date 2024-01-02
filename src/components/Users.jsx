import { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)

  const handleDelete = (_id) => {
    console.log( 'Delete', _id);
    fetch(`http://localhost:5001/users/${_id}`, {
      method:'DELETE'
      // headers:{'content-type' = ''},

    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if(data.deletedCount > 0){
          alert('deleted successfully');
          const remaining = users.filter(user => user._id !==_id);
          setUsers(remaining);
        }
        
      });
  };
  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}={user._id}
            <button
              className="btn-circle btn-outline bg-slate-200"
              onClick={() => handleDelete(user._id)}
            >
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
