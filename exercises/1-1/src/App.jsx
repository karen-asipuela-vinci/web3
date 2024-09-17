import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Total from "./components/Total/Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 15
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
      parts={[part1, part2, part3]} 
      exercises={[exercises1, exercises2, exercises3]}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App