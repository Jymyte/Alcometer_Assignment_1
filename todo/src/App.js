import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://localhost/todo/'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('');
  //having the variable names be this similar is kinda bad, easy to use the wrong one
  //newTask would be better for the second one
  const [editTask, setEditTask] = useState(null);
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setTasks(response.data)
      }).catch(error => {
        alert(error.response ? error.reponse.data.error : error);
      })
  }, [])

  const save = (e) => {
    e.preventDefault();
    const json = JSON.stringify({description:task})
    axios.post(URL + 'add.php',json, {
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then ((response) => {
      setTasks(tasks.concat(response.data))
      //setTasks([...tasks,response.data])
      setTask('');
    }).catch(error => {
      alert(error.response.data.error)
    })
  }

  const remove = (id) => {
    const json = JSON.stringify({id:id})
    axios.post(URL + 'delete.php',json,{
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then((response) => {
      const newList = tasks.filter((item) => item.id !== id)
      setTasks(newList)
    }).catch(error => {
      alert(error.response ? error.response.data.error : error)
    })
  }

  const setEditedTask = (task) => {
    setEditTask(task);
    setNewDescription(task?.description);
  }

  const update = (e) => {
    e.preventDefault();
    const json = JSON.stringify({id:editTask.id,description:newDescription});
    axios.post(URL + 'update.php',json,{
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then((response) => {
      tasks[(tasks.findIndex(task => task.id === editTask.id))].description = newDescription;
      setTasks(tasks.concat());
      setEditedTask(null);
    }).catch(error => {
      alert(error.response ? error.response.data.error : error)
    })
  }

 
  return (
    <div className="container">
      <h3>Todo list</h3>
      <form onSubmit={save}>
        <label>New task</label>
        <input onChange={e => setTask(e.target.value)}></input>
        <button>Save</button>
      </form>
      <ol>
        {tasks.map(task => (
          <li key={task.id}>
            {editTask?.id !== task.id && task.description}
            {editTask?.id === task.id &&
              <form onSubmit={update}>
                <input value={newDescription} onChange={e => setNewDescription(e.target.value)}></input>
                <button>save</button>
                <button type="button" onClick={() => setEditedTask(null)}>Cancel</button>
              </form>  
            }
            <a className="delete" onClick={() => remove(task.id) } href="#">
              Delete
            </a> &nbsp;
            {editTask === null &&
              <a className="edit" onClick={() => setEditedTask(task)} href="#">
                Edit
              </a>
            }
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App;
