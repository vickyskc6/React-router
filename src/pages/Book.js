import { useParams } from "react-router-dom"

export function Book (){

   let {id} =  useParams()
    return <div>book{id}</div>
}