import { Link, useLocation, useSearchParams } from "react-router-dom";

export function BookList(){
  const [seachParams,getSerachParams] = useSearchParams({n:3})
     const number =  seachParams.get("n")
      const location = useLocation()
      console.log(location)

return <>
<h1>book list</h1>
 <Link to="/book/1">Book 2</Link>
 <Link to={`/book/${number}`}>Book 1</Link>
   <input type="number" value={number} onChange={(e)=> {getSerachParams({n:e.target.value})}}></input>
   {location.state}
</>

}