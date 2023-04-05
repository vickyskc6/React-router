import React from "react";
import {Route, Routes,Link, NavLink} from 'react-router-dom'
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Content } from "./pages/content";
import { BookList } from "./pages/BookList";
import {Book} from './pages/Book'
import {NotFount} from './pages/Navigate'
 
function App() {
  return (
    <div className="App" style={{display:"flex",justifyContent:"center"}} >
       <nav>
          <ul>
          <li> 
             <NavLink
                
            to='/home' >
                Home
             </NavLink>

           
          </li>
          <li> <Link to='/about'>About </Link></li>
          <li> <Link to='/book'>book list</Link></li>       
                 
          </ul>
       </nav>
 

       <Routes >
         {/* <Route path="/book" element={<h1>router concept</h1>} /> */}
        <Route path ="/" element= {<Home />} />  
        <Route path ="/about" element= {<About/>} />  
        <Route path ="/book" element= {<BookList/>} />  
        <Route path ="/book/:id" element= {<Book/>} />
        <Route path ="/content/new" element= {<Content/>} />
        <Route path ="*" element= {<NotFount/>} />
          
         
        </Routes>   

    </div>
  );
}

export default App;
