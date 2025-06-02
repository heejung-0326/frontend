import React from 'react';
import {Link} from 'react-router-dom';

const Login2 = () => {
  return (
    
    <section className="login-container">
      <p>회원가입시 아이디, 패스워드, 이메일 주소, 연락처까지 추가하여 구현하기</p><br />

      <h2>로그인</h2>      
      <form>
        <p>
          <label htmlFor='username'>아이디 : </label>
          <input name="username" id="username" placeholder="아이디" className="input-box" />
        </p>

        <p>
          <label htmlFor="password">패스워드 : </label>
          <input name="password" id="password" placeholder="패스워드" className="input-box" />
        </p>

        <p>
          <input type="submit" value="로그인" className="login-button2" />
        </p>

        <p className="btn-group">
          아이디 찾기 | 
          비번찾기 | 
          <Link to="/Register2">회원가입</Link>
        </p>

        <br />
        <br />

        <h3 className="title3">간편가입</h3>
        <ul class="login_btn">
          <li><img src={`${process.env.PUBLIC_URL}/images/naver_login.png`} /></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/kakao_login.png`} /></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/google_login.png`} /></li>
        </ul>
      </form>

      <br /><br />

      {/* 구현 프로세스 설명 */}
      <div className="explanation">
        <p>카카오 로그인 버튼 url : https://developers.kakao.com/tool/resource/login</p>

        <p>네이버 로그인 버튼 url : https://developers.naver.com/docs/login/bi/bi.md</p>

        <p>구글 로그인 버튼 url : https://developers.google.com/identity/branding-guidelines</p>

        <br /><br />

        <h3>프론트엔드(React)에서 처리</h3>
        <ul>
          <li>1. 로그인폼을 작성하고 '회원가입'클릭하면 회원가입 페이지로 이동하기</li>
          <li>2. 회원가입시 '아이디(username)', '비밀번호(password)', '전화번호(tel)', '이메일(email)'를 입력하여 회원가입을 할 수 있도록 한다.</li>
          <li>3. 사용자가 '아이디', '패스워드'를 입력하여 '로그인' 버튼 클릭시 서버측에 '인증 요청'</li>
        </ul>

        <br /><br />
        <h3>백엔드(Node.js + Express)에서 처리</h3>
        <ul>
          <li>1. 사용자가 입력한 id, pw를 post방식으로 받아 db조회하여 일치하는지 여부에 따라 로그인 처리를 하고 JWT토크을 발급함</li>
          <li>2. 데이터베이스(MYSQL) : 사용자 정보를 저장</li>
          <li>3. 보안 : 비밀번호는 bcrypt로 암호화, JWT로 인증을 유지함</li>
        </ul>

        <br /><br />
        <h3>용어 설명</h3>
        <ul>
          <li>- express : 웹 서버 프레임워크</li>
          <li>- cors : 크로스 도메인 요청을 허용</li>
          <li>- mysql : MySQL 데이터베이스 연결을 위한 라이브러리(npm i mysql)</li>
          <li>- bcrypt : 사용자가 입력한 패스워드를 해시 처리 (npm i bcrypt)</li>
          <li>- jsonwebtoken : JWT 토큰 생성 및 검증 (npm i jsonwebtoken)</li>
          <li>- app : Express 앱 객체 생성</li>
          <li>- port : 서버가 열릴 포트 번호(통화하기 위한 상대방 전화번호와 같다.)</li>
          <li>- SECRET_KEY : JWT 서명 시 사용할 비밀 키</li>
          <li>- express.json() : JSON 형식의 요청 본문을 파싱</li>
          <li>- cors() : CORS 정책 허용</li>
          <li>- bcrypt.compare : 입력한 비밀번호와 DB비밀번호 비교할 때</li>
        </ul>

        <br /><br />
        <h3>DB에 입력할 SQL쿼리문</h3>
        <p>
          CREATE TABLE users2 ( <br />
            &nbsp;&nbsp; id INT PRIMARY KEY AUTO_INCREMENT, <br />
            &nbsp;&nbsp;username VARCHAR(100) UNIQUE NOT NULL, <br />
            &nbsp;&nbsp;password VARCHAR(255) NOT NULL, <br />
            &nbsp;&nbsp;email VARCHAR(255) NOT NULL, <br />
            &nbsp;&nbsp;tel VARCHAR(255) NOT NULL, <br />
            &nbsp;&nbsp;datetime timestamp NOT NULL DEFAULT<br />
            &nbsp;&nbsp;current_timestamp(), <br />
          );
        </p>
      </div>

    </section>
  );
};

export default Login2;