import "./App.css";
import ContactList from "./ContactList";
import Post from "./Post";
// const hello = <h1>Hello, world!</h1>;

const user = {
  firstName: "My",
  lastName: "Name",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const hello = <h1>Hello, {formatName(user)}!</h1>;

function App() {
  return (
    <div className="App">
      {hello}
      <h2>Feed</h2>
      <Post />
      <Post />
      <ContactList />
    </div>
  );
}

export default App;
