import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './component/Main';
import Goods from './component/Goods';
import Create from './component/Create';
import Update from './component/Update';
import Books from './component/Books';
import BooksCreate from './component/BooksCreate';
import BooksUpdate from './component/BooksUpdate';
import Fruits from './component/Fruits';
import FruitsCreate from './component/FruitsCreate';
import FruitsUpdate from './component/FruitsUpdate';
import Question from './component/Question';
import { AlertProvider, AlertContext } from './AlertContext';
import Login from './component/Login';
import Login2 from './component/Login2';
import Register from './component/Register';
import Register2 from './component/Register2';
import React from 'react';

function AppContent() {
  const { questionCount, goodsCount, booksCount, fruitsCount} = React.useContext(AlertContext);

  return (
    <BrowserRouter>
      <header>
        <h1>Frontend셋팅 - React + MySQL(메인페이지)</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li>
              <Link to='/goods'>
                Goods{
                  goodsCount>0 &&(
                    <span style={{
                      display:'inline-block',
                      marginLeft:6,
                      background:'red',
                      color:'white',
                      borderRadius:'50%',
                      width:'22px',
                      height:'22px',
                      fontSize:'14px',
                      textAlign:'center',
                      lineHeight:'22px',
                      fontWeight:'bold'
                    }}>
                      {goodsCount}
                    </span>
                  )}
              </Link>
            </li>
            <li><Link to='/books'>Books{
              booksCount>0 &&(
                    <span style={{
                      display:'inline-block',
                      marginLeft:6,
                      background:'red',
                      color:'white',
                      borderRadius:'50%',
                      width:'22px',
                      height:'22px',
                      fontSize:'14px',
                      textAlign:'center',
                      lineHeight:'22px',
                      fontWeight:'bold'
                    }}>
                      {booksCount}
                    </span>
                  )}
                </Link></li>
            <li>
              <Link to='/fruits'>
              Fruits
              {fruitsCount>0 &&(
                <span style={{
                  display:'inline-block',
                  marginLeft:6,
                  background:'red',
                  color:'white',
                  borderRadius:'50%',
                  width:'22px',
                  height:'22px',
                  fontSize:'14px',
                  textAlign:'center',
                  lineHeight:'22px',
                  fontWeight:'bold'
                }}>
                  {fruitsCount}
                </span>
              )}
              </Link>
            </li>
            <li>
              <Link to='/question'>
                Question
                {questionCount > 0 && (
                  <span style={{
                    display: 'inline-block',
                    marginLeft: 6,
                    background: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    width: 22,
                    height: 22,
                    fontSize: 14,
                    textAlign: 'center',
                    lineHeight: '22px',
                    fontWeight: 'bold'
                  }}>
                    {questionCount}
                  </span>
                )}
              </Link>
            </li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/login2'>Login2</Link></li>
          </ul>    
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/goods' element={<Goods />} />
          <Route path='/goods/update/:g_code' element={<Update />} />
          <Route path='/goods/create' element={<Create />} />

          <Route path='/books' element={<Books />} />
          <Route path='/books/update/:num' element={<BooksUpdate />} />
          <Route path='/books/create' element={<BooksCreate />} />

          <Route path='/fruits' element={<Fruits />} />
          <Route path='/fruits/update/:num' element={<FruitsUpdate />} />
          <Route path='/fruits/create' element={<FruitsCreate />} />
          <Route path='/question/' element={<Question />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/register/' element={<Register />} />
          <Route path='/login2/' element={<Login2 />} />
          <Route path='/register2/' element={<Register2 />} />
        </Routes>
      </main>
      
      <footer>
        <address>Copyright&copy;2025 Backend&Frontend allrights reserved.</address>
      </footer>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AlertProvider>
      <AppContent />
    </AlertProvider>
  );
}

export default App;
