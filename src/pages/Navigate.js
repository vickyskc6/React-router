import { useNavigate } from "react-router-dom"

 export function NotFount(){
    const nav =  useNavigate()
      setTimeout(()=>{
          nav("/",{state:"error not page"})
      },1000)
    return (
        
     <h1>NotFound</h1>
    
    )
}

