import { useState } from "react"
import NavBar from "./Components/Navbar.jsx"
import NewsBoard from "./Components/NewsBoard.jsx"
const App = () => {
  const [category,setCategory] = useState("general");

  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App