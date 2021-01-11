import React from 'react'
import { DeleteButton, Myth, Mytd } from './styles'

const TaskList = ({ tasks, search, setTasks }) => (
  <table>
    <tr><Myth> To Do </Myth></tr>
    {tasks.map((task, index) => task.includes(search) && (
    <tr>
      <Mytd>
        {task}
        <DeleteButton onClick={() => { setTasks(tasks.filter((value, newIndex) => index !== newIndex)) }}>
          X
        </DeleteButton>
      </Mytd>
    </tr>
    ))}
  </table>
)

export default TaskList
