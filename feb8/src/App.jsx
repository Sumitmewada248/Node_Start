
import { useRef } from "react"


const App=()=>{

  const myRef=useRef("")


const  myVal=()=>{
  myRef.current.style.color="red"
  myRef.current.style.fontSize="40px"
  myRef.current.style.textAlign="center"
  myRef.current.style.backgroundColor="yellow"
  myRef.current.style.border="1px solid black"
  
}

const myVal2=()=>{
  myRef.current.style.color=""
}
  return(
    <>

    <button onClick={myVal}>Click</button>
    <button onClick={myVal2}>Click</button>
    <h1>Welcome</h1>

    <div ref={myRef}>This is a Cybrom</div>
    </>
  )
}
export default App