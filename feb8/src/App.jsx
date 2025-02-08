
// import { useRef } from "react"


// const App=()=>{

//   const myRef=useRef("")


// const  myVal=()=>{
 
//   myRef.current.style.fontSize="40px"
 
  
// }

// const myVal2=()=>{
//   myRef.current.style.border="2px solid red"
//   myRef.current.style.backgroundColor="yellow"
// }

// const myVal3=()=>{
//   myRef.current.style.border="2px solid red"
//   myRef.current.style.borderRadius="100px"
//   myRef.current.style.width="200px"
//   myRef.current.style.height="200px"
//   myRef.current.style.textAlign="center"
//   myRef.current.style.backgroundColor="yellow"

  
// }
//   return(
//     <>

//     <button onClick={myVal}>Click</button>
//     <button onClick={myVal2}>Click</button>
//     <button onClick={myVal3}>Click</button>
//     {/* <h1>Welcome</h1> */}

//     <div ref={myRef}>This is a Cybrom</div>
//     </>
//   )
// }
// export default App


import { useReducer } from "react"



const App=()=>{

  const reducers=(state,action)=>{

    
    switch(action){
      case "increment":
        return state+1
      case "decrement":
        const newState = state <= 0 ? 0 : state - 1;
        if (newState === 0 && state !== 0) {
          alert("You have reached zero");
        }
        return newState;
        
      default:
        return state
    }
  }

  const [count,dispatch]=useReducer(reducers,0)

  return(
    <>
    <button onClick={()=>dispatch("increment")}>Increment</button>
    <h1>Count:{count}</h1>
    <button onClick={()=>dispatch("decrement")}>Decrement</button>
    </>
  )
}
export default App