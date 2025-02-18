import axios from "axios"

const home= async()=>{
  let api="http://localhost:3000/myhome"
  axios.get(api).then((res)=>{
    console.log("home page")

  })


}

const about= async()=>{
  let api="http://localhost:3000/about"
  axios.get(api).then((res)=>{
    console.log("home page")
  })

}

const service= async()=>{
  let api="http://localhost:3000/service"
  axios.get(api).then((res)=>{
    console.log("home page")
  })

}

const App=()=>{
  return(
    <>
    <h1>Welcome To My App</h1>
    <button onClick={home}>Home</button>
    <button onClick={about}>About</button>
    <button onClick={service}>Service</button>


    </>
  )
}
export default App