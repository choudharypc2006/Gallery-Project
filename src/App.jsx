import { useState } from "react";

const App = () => {
  const formSubmitted=()=>{
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed cum et placeat illo hic repellendus architecto facilis quaerat necessitatibus consequuntur ducimus quisquam maiores possimus iusto eum error blanditiis ab, quibusdam excepturi in facere. Dolorem ipsam, nisi incidunt sequi quo quam nemo mollitia repudiandae dicta quibusdam est quia itaque? Unde, totam?");
  }
  const fn=()=>{
      console.log("hello");
      
  }
  fn()
  const [num, setnum] = useState(0)
  return (
    
    <div>
      <h1>{num}</h1>
      <button >Click me</button>
    </div>
  )
}

export default App