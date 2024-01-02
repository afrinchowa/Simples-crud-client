import { useLoaderData } from "react-router";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };
    fetch(`http://localhost:5001/users/${loadedUser._id}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };
  return (
    <div>
      <h3>Update information of {loadedUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <input
          className="bg-slate-200"
          defaultValue={loadedUser?.name}
          type="text"
          name="name"
          id=""
        />{" "}
        <br />
        <input
          className="bg-slate-200"
          defaultValue={loadedUser?.email}
          type="email"
          name="email"
          id=""
        />{" "}
        <br />
        <input
          className="btn btn-outline"
          type="submit"
          value="Add User"
          id=""
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default Update;
