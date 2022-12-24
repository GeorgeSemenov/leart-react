import {Outlet, Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>Ента строничка об ЭБОУты</h1>
      <ul>
        <li><Link to='/about/contacts'>Кектакты</Link></li>
        <li><Link to='team'>Кекманда</Link></li>
      </ul>
      <Outlet/>
    </div>

  )
}
export default About;