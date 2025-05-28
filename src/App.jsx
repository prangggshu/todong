import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdSaveAlt } from "react-icons/md";
import Navbar from "./components/Navbar";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true)

  const saveToLS= (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos])
  

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])
    

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    saveToLS()
  };

  const handleEdit = (e, id) => {
    let t = todos.filter(i=> i.id === id)
    settodo(t[0].todo)
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToLS()
   };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToLS()
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    saveToLS()
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  

  return (
    <>
      <Navbar />
      <div className=" mx-3 md:container md:mx-auto my-5 rounded-2xl p-5 bg-violet-100 md:min-h-[80vh] min-h-[90vh] md:w-1/2">
      <h1 className="font-bold text-center text-xl">todong - Your simple todo manager</h1>
        <div className="addtodo flex flex-col gap-4">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <div className="flex">
            <input
            onChange={handleChange}
            value={todo}
            type="text"
            name=""
            id=""
            className="p-2 border-[2px] rounded-xl w-full"
            placeholder="Add a Task"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 p-5 py-1 text-white rounded-md mx-3 cursor-pointer justify-items-center"
            disabled={todo.length<1}
          >
            <MdSaveAlt/>
          </button>
          </div>
          
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} className="my-5 cursor-pointer"/> Show Finished
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to Display</div>}
          {todos.map((item) => {
            return ((showFinished || !item.isCompleted) &&
              <div
                key={item.id}
                className="todo flex  justify-between my-3 bg-white hover:bg-violet-50 rounded-lg shadow hover:shadow-lg transition p-2"
              >
                <div className="flex gap-5">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                    className="cursor-pointer"
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={(e)=>{handleEdit(e, item.id)}}
                    className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1"
                  >
                    <MdModeEditOutline />
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
