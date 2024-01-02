import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5001/users", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert('User added successfully')
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>Simple CRUD</h1>
      <form  onSubmit={handleAddUser}>
        <input className="bg-slate-200"  type="text" name="name" id="" /> <br />
        <input className="bg-slate-200" type="email" name="email" id="" /> <br />
        <input className="btn btn-outline" type="submit" value="Add User" id="" /> <br />
      </form>
    </>
  );
}

export default App;
