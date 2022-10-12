import { useState } from "react";
// import { Button } from "@material-ui/core";
import "materialize-css@next";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Take dogs for walk", "Do the dishes"]);

  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    console.log("Hello");
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello, This is the ToDo List!</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        {/* <Button
          type="submit"
          onClick={addTodo}
          variant="outlined"
          color="primary"
        >
          Add ToDo
        </Button> */}
        <button
          type="submit"
          onClick={addTodo}
          class="btn waves-effect waves-light"
          name="action"
        >
          Add ToDo
          <i class="material-icons right">send</i>
        </button>
        {/* <button type="submit" onClick={addTodo}>
          Add ToDo
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
