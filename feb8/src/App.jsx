import { useState,useMemo } from "react"



// const App=()=>{

//    const [add,setCount]=useState(0)
//    const [sub,setSub]=useState(100)

//     const myMulti=useMemo(()=>{
//         console.log("Multi")
//         return add*2
//     },[add])

//     return(
//       <>
//       <h1>Addition {add}</h1>
//          <button onClick={()=>setCount(add+1)}>Add</button>


// <h2>Subtract :{sub}</h2>
// <button onClick={()=>setSub(sub-1)}>Subtract</button>

// <h2>Multiplication :{myMulti}</h2>



//       </>
//     )
//   }
//   export default App



const App=()=>{
    const [add,setCount]=useState(0)
    const [city,setCity]=useState("")


    const myMulti=useMemo(()=>{
    for(var i=0; i<1000000000; i++){}
        return add*2
},[add])

    return(
        <>
    Enter Number: <input type="number" value={add} onChange={(e)=>setCount(e.target.value)}/>
    Enter City :<input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>

    <h2>Multiplication :{myMulti}</h2>
</>

)

}
export default App