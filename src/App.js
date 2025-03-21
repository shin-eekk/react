import {Link, Routes, Route} from 'react-router-dom'
import Maincontent, {Eventcontent} from './components/Maincontent'
import List from './components/List'
import View from './components/View'
import Nopage from './components/Nopage'
import boarddb from './data/board.json'
import css from './css.css'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"><img src="/CK_cm27002508.jpg" class="logo"/></Link>
        <Link to="/board/notice">공지사항</Link>
        <Link to="/board/qna">문의하기</Link>
        <Link to="/board/review">문의하기</Link>
      </nav>
      <main style={{minHeigt:"100vh"}}>
        <Routes>
        <Route path='/' element={<Eventcontent />}></Route>
        <Route path='/board/:boardnm' element={<List datainfo={boarddb}></List>}></Route>
        <Route path='*' element={<Nopage />}></Route>
        </Routes>
      </main>
      
      <footer style={{
        padding : "30px", 
        textAlign :"center",
        boderTop : "1px solid #666",
        backgroundColor : "#0001"

         }}>푸터자리 라우터밖은 항상 노출되는</footer>

    </div>
  );
}

export default App;
