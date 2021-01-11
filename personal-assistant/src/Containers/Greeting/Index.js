import React, { useState, useEffect } from 'react'
import { Myp } from './styles'

const Greetings = () => {
  const [weather, setWeather] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20')
      const data = await res.json()
      setWeather(data.weather[0].description)
    }
    fetchData()
  }, [])

  return (
    <Myp>
      Hello and welcome to your own personalized assistant! The weather today is:
      {' '}
      {weather}
    </Myp>
  )
}

export default Greetings
