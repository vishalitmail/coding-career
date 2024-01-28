import { useState } from "react"
import Button from "./Button"

function App() {
  let [color, setColor] = useState("olive")


  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <Button setColor={setColor} colorName="red" />
            <Button setColor={setColor} colorName="green" />
            <Button setColor={setColor} colorName="blue" />
            <Button setColor={setColor} colorName="violet" />
            <Button setColor={setColor} colorName="magenta" />
            <Button setColor={setColor} colorName="purple" />
            <Button setColor={setColor} colorName="black" />
            <Button setColor={setColor} colorName="orange" />
            <Button setColor={setColor} colorName="grey" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
