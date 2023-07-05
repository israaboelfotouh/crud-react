import "./App.css";
import React, { useState } from "react";













function TodoList() {












  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    job: "",
    salary: "",
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo({
      name: "",
      address: "",
      phone: "",
      email: "",
      job: "",
      salary: "",
    });
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setNewTodo(todos[index]);
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = newTodo;
    
    setTodos(updatedTodos);
    setNewTodo({
      name: "",
      address: "",
      phone: "",
      email: "",
      job: "",
      salary: "",
    });
    setEditingIndex(-1);
  };

  return (
    <>
      <div className="cruds">
        <div className="head">
          <h2>Employee Data</h2>
        </div>
        <div className="data">
          <div className="Employee_data">
            <label>Name</label>
            <input
              id="username"
              type="text"
              placeholder="enter your name here"
              value={newTodo.name}
              onChange={(e) =>setNewTodo({ ...newTodo, name: e.target.value })}
            />
          </div>
          <div className="Employee_data">
            <label>Address</label>
            <input
              id="address"
              type="text"
              placeholder="enter your address here"
              value={newTodo.address}
              onChange={(e) => setNewTodo({ ...newTodo, address: e.target.value })
              }
            />
          </div>
        </div>

        <div className="data">
          <div className="Employee_data">
            <label>Phone</label>
            <input
              id="phone"
              type="number"
              placeholder="enter your phone here"
              value={newTodo.phone}
              onChange={(e) => setNewTodo({ ...newTodo, phone: e.target.value })
              }
            />
          </div>
          <div className="Employee_data">
            <label>Email</label>
            <input
              id="email"
              type="email"
              placeholder="enter your email here"
              value={newTodo.email}
              onChange={(e) => setNewTodo({ ...newTodo, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="data">
          <div className="Employee_data">
            <label>Job</label>
            <input
              id="job"
              type="text"
              placeholder="enter your job here"
              value={newTodo.job}
              onChange={(e) => setNewTodo({ ...newTodo, job: e.target.value })}
            />
          </div>
          <div className="Employee_data">
            <label>Salary</label>
            <input
              id="salary"
              type="number"
              placeholder="enter your salary here"
              value={newTodo.salary}
              onChange={(e) => setNewTodo({ ...newTodo, salary: e.target.value })
              }
            />
          </div>
        </div>

        <div className="creat">
          {editingIndex === -1 ? (
            <button onClick={addTodo} id="create">Add</button>
          ) :
          (
            <button id="green" onClick={updateTodo}>Update</button>
          )}
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="tobody">
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{todo.name}</td>
                  <td>{todo.address}</td>
                  <td>{todo.phone}</td>
                  <td>{todo.email}</td>
                  <td>{todo.job}</td>
                  <td>{todo.salary}</td>
                  <td>
                    <button className="update" onClick={() => editTodo(index)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TodoList;
