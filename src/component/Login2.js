import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login2 = () => {
  const [form, setForm] = useState({
    username2:'',
    user_pw:'',
    user_pw2:'',
    tel:'',
    email:''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try{
      const res = await axios.post('http://localhost:9070/login2', form);

      localStorage.setItem('token', res.data.token);
      alert('로그인성공');
      navigate('/');
    } catch{
      setError('로그인 실패 : 아이디와 패스워드를 다시 확인하세요.')
    }
  };


  return (
    <section className='login-container'>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='username2'>아이디 : </label>
          <input name='username2' id='username2' placeholder='아이디필수' className='input-box' required onChange={handleChange} value={form.username2} />
        </p>
        <p>
          <label htmlFor='user_pw'>패스워드 : </label>
          <input name='user_pw' id='user_pw' placeholder='패스워드필수' className='input-box' required onChange={handleChange} value={form.user_pw} />
        </p>


        <p>
          <input type='submit' value="로그인" className='login-btn' />
        </p>
        {error &&
        <p style={{color:'red'}}>{error}
        </p>}

        <p>아이디 찾기 | 비밀번호 찾기 |  <Link to ='/Register2'>회원가입</Link></p>

        <h3>간편가입</h3>
        <ul className='easy'>
          <li><img src='/images/kakao.png' /></li>
          <li><img src='/images/naver.png' /></li>
          <li><img src='/images/google.png' /></li>
        </ul>

      </form>
      <h3>프론트엔드(React)에서 처리</h3>
      <ul>
        <li>로그인폼을 작성하고 '회원가입' 클릭하면 회원가입 페이지로 이동하기</li>
        <li>회원가입시 '아이디(username)', '비밀번호(password)', '전화번호(tel)', '이메일(email)'을 입력하여 회원가입을 할 수 있도록 한다.</li>
        <li>사용자가 '아이디', '패스워드'를 입력하여 '로그인' 버튼 클릭시 서버측에 '인증요청'</li>
      </ul>

      <h3>백엔드(node.js + Express)</h3>
      <ul>
      <li>사용자가 입력한 id,pw를 post방식으로 받아 db조회하여 일치하는지 여부에 따라 로그인 처리를 하고 JWT토큰을 발급함</li>
      <li>데이터베이스(MYSQL) : 사용자 정보를 저장</li>
      <li>보안 : 비밀번호는 bcrypt로 암호화, JWT로 인증을 유지함</li>
      </ul>

      <h3>용어 설명</h3>
      <ul>
        <li>Express : 웹 서버 프레임워크</li>
        <li>cors : 크로스 도메인 요청을 허용</li>
        <li>mysql : MYSQL 데이터베이스 연결을 위한 라이브러리(num i mysql)</li>
        <li>bcrypt : 사용자가 입력한 패스워드를 해시 처리(npm i bcrypt)</li>
        <li>jsonwebtoken : JWT 토큰 생성 및 검증(npm i jsonwebtoken)</li>
        <li>app : Express 앱 객체 생성</li>
        <li>port : 서버가 열릴 포트 번호 ( 통화하기 위한 상대방 전화번호와 같다.)</li>
        <li>SCRTET_KEY : JWT 서명시 사용할 비밀 키 </li>
        <li>express.json() : json 형식의 요청 본문을 파싱</li>
        <li>cors() : CORS정책 허용</li>
        <li>bcrypt.compare : 입력한 비밀번호와 DB비밀번호 비교할 때</li>
      </ul>

      <h3>DB에 입력할 SQL 쿼리문</h3>
      <pre>
      CREATE TABLE users2 (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      tel VARCHAR(255) NOT NULL,
      datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
      </pre>


      
    </section>
  );
}

export default Login2;