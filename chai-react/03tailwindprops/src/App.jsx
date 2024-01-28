
import Card from './components/card'
import './App.css'

function App() {
  
  let myObj={
    usename:"vishal sharma",
    age:24
  }
  let newarr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="chai aur code" btntext='click me' />
      <Card username="hitesh" btntext='visit me'/>

    </>
  )
}

export default App
