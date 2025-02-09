
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


// import { useReducer } from "react"



// const App=()=>{

//   const reducers=(state,action)=>{

    
//     switch(action){
//       case "increment":
//         return state+1
//       case "decrement":
//         const newState = state <= 0 ? 0 : state - 1;
//         if (newState === 0 && state !== 0) {
//           alert("You have reached zero");
//         }
//         return newState;
        
//       default:
//         return state
//     }
//   }

//   const [count,dispatch]=useReducer(reducers,0)

//   return(
//     <>
//     <button onClick={()=>dispatch("increment")}>Increment</button>
//     <h1>Count:{count}</h1>
//     <button onClick={()=>dispatch("decrement")}>Decrement</button>
//     </>
//   )
// }
// export default App




import { useReducer } from "react"



const App=()=>{
  

  const reducers=(state,action)=>{

    
    switch(action){

      case "redcolor":
        return state="red"

        case "bluecolor":
          return state="blue"

          case "greencolor":
            return state="green"

            case "yellowcolor":
              return state="yellow"

              case "orangecolor":
                return state="orange"

                case "purplecolor":
                  return state="purple"

                  case "pinkcolor":
                    return state="black"

                    
     
              
        
      default:
        return state
    }
  }

  const [count,dispatch]=useReducer(reducers,"pink")

  return(
    <>
    <button style={{backgroundColor:"red",color:"white",padding:"10px 20px",borderRadius:"10px"}} onClick={()=>dispatch("redcolor")}>red</button>
    <button style={{backgroundColor:"blue",color:"white",padding:"10px 20px",borderRadius:"10px"}} onClick={()=>dispatch("bluecolor")}>blue</button>
    <button style={{backgroundColor:"green",color:"white",padding:"10px 20px",borderRadius:"10px"}} onClick={()=>dispatch("greencolor")}>green</button><br />
    <button style={{backgroundColor:"yellow",color:"white",padding:"10px 20px",borderRadius:"10px"}} onClick={()=>dispatch("yellowcolor")}>yellow</button>
    <button style={{backgroundColor:"orange",color:"white",padding:"10px 20px",borderRadius:"10px"}} onClick={()=>dispatch("orangecolor")}>orange</button>
    <button style={{backgroundColor:"purple",color:"white",padding:"10px 20px",borderRadius:"10px"}} onClick={()=>dispatch("purplecolor")}>purple</button><br />
    <button style={{backgroundColor:"black",color:"white",padding:"10px 20px",borderRadius:"10px"}} onClick={()=>dispatch("pinkcolor")}>pink</button>
    <br />
    <br />
    <br /><br />
    <div style={{backgroundColor:count,width:"400px",height:"200px"}}></div>
   
   
    </>
  )
}
export default App