import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { MyButton, MyDiv, Myh1, MyInput } from './Containers/ToDo/styles'
import TaskList from './Containers/ToDo'
import Greetings from './Containers/Greeting/Index'
import NavBar from './Components/NavBar'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [search, setSearch] = useState('')
  return (
    <MyDiv>
      <NavBar />
      <Switch>
        <Route path="/TodoApp">
          <Myh1>TODO List</Myh1>
          <MyInput value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Task" />
          <MyButton onClick={() => { setTasks(tasks.concat([newTask])); console.log(tasks) }}>Add</MyButton>
          <MyInput value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" />
          <MyButton onClick={() => { setTasks([]) }}>Clear all</MyButton>
          <TaskList tasks={tasks} search={search} setTasks={setTasks} />
        </Route>
        <Route path="/GreetingPage">
          <Greetings />
        </Route>
      </Switch>
    </MyDiv>
  )
}

export default App
