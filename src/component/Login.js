import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login=()=> {
  //1. 상태변수 선언
  const [form, setForm] = useState({
    username:'', //아이디를 저장하기 위한 변수
    password:'' //패스워드를 저장하기 위한 변수
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  //2. 입력시 발생되는 함수
  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value});
  };

  //3. 로그인 버튼 클릭시 실행되는 함수
  const handleSubmit= async e => {
    e.preventDefault();
    // console.log(form.username, form.password)
    try{ //성공시 실행내용
      const res = await axios.post('http://localhost:9070/login', form);

      //사용자 인증이 끝나면 '토큰'을 발급한다.
      localStorage.setItem('token', res.data.token);
      alert('로그인성공');
      navigate('/');
    }catch{ //실패시 실행내용
      setError('로그인 실패 : 아이디와 패스워드를 다시 확인하세요.');
    } 
  };

  return (
    <section className="login-container">
      <h2>로그인 폼</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="username">아이디 : </label>
          <input type="text" id="username" name="username" className="input-box" placeholder='아이디' required onChange={handleChange} value={form.username}/>
        </p>
        <p>
          <label htmlFor="password">패스워드 : </label>
          <input type="password" id="password" name="password" className="input-box" placeholder='패스워드' onChange={handleChange}  value={form.password} required />
        </p>
        <p>
          <input type="submit" value="로그인" className="login-button" />
        </p>

        {error && 
        <p style={{ color: 'red' }}>{error}
        </p>}

        <p className="btn-group">
          <Link to='id_search'>아이디 찾기</Link>&#10072;
          <Link to='pw_search'>비번찾기</Link>&#10072;
          <Link to='/register'>회원가입</Link>    
        </p>

        {/* 
          카카오 api 로그인
        */}

        <br />
        <br />

        <dl>
          <dt>* 로그인 구현 전체 구성</dt>
          <dd>1. 프론트엔드(React) : 로그인 폼 작성, 로그인 버튼 클릭시 서버에 인증 요청</dd>
          <dd>2. 벡엔드(Node.js + Express) : 로그인 처리, JWT 토큰발급</dd>
          <dd>3. 데이터베이스(MYSQL) : DB입/출력</dd>
          <dd>4. 보안 : 비밀번호는 brcypt로 암호화, JWT로 인증을 유지</dd>
        </dl>

        <pre>
          //1. 데이터베이스 테이블 설계
          CREATE TABLE users(
            id INT AUTO_INCREMENT PRIMERY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
          );

          //2. 데이터베이스에 회원정보 입력하기(INSERT INTO)
          INSERT INTO users VALUES(1, 'hee', '1234' ,'2025-05-26');
          INSERT INTO users VALUES(2, 'hee1', '1234', '2025-05-26');
          INSERT INTO users VALUES(3, 'hee2', '1234', '2025-05-26');
          INSERT INTO users VALUES(4, 'hee3', '1234', '2025-05-26');
          INSERT INTO users VALUES(5, 'hee4', '1234', '2025-05-26');

          //3. UIㅅ화면 설계 - 로그인폼 구현
        </pre>

      </form>
    </section>
  );
}

export default Login;