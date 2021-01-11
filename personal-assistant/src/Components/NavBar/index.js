import React from 'react'
import { MyLink, Bar } from './styles'

const NavBar = () => (
  <Bar>
    <MyLink to="/GreetingPage">Home</MyLink>
    <MyLink to="/TodoApp">ToDo</MyLink>
  </Bar>
)

export default NavBar
