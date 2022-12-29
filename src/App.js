
import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([])

const addTask=(task)=>{
  const id=Math.floor(Math.random()*1000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>
    (
      task.id===id?{...task,reminder:!task.reminder} : task
    )
    )
    )
}
  return (
    <div className="container">  
      <Header title='Tracko' onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length >0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3>well done !</h3>}
      
    </div>
  );
}

export default App;
