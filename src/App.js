import React from "react";
import {Route, Routes,Link} from 'react-router-dom'
import { Home } from "./pages/home";
import { About } from "./pages/about";
// import { Content } from "./pages/content";
import { BookList } from "./pages/BookList";
import {Book} from './pages/Book'

function App() {
  return (
    <div className="App" style={{display:"flex",justifyContent:"center"}} >
       <nav>
          <ul>
          <li> <Link to='/'>Home </Link></li>
          <li> <Link to='/about'>About </Link></li>
          <li> <Link to='/bookList'>BookList </Link></li>
          </ul>
       </nav>
 

       <Routes >
        <Route path ="/" element= {<Home />} />  
        <Route path ="/about" element= {<About/>} />  
        <Route path ="/bookList" element= {<BookList/>} />  
        <Route path ="/Book" element= {<Book/>} />  
  
        </Routes>   

    </div>
  );
}

export default App;
