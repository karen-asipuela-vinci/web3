import './App.css'
import { ColorBox } from './components/ColorBox'
import { OnClickChangeColor } from './components/onClickChangeColor'

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple']

  return (
    <div>
      <OnClickChangeColor colors={colors} />
    </div>
  )
}

export default App
