import React from 'react';

const Register2 = () => {
  return (
    <section>
      <h2>회원가입</h2>
      <form>
        <p>
          <label htmlFor='username'>아이디 : </label>
          <input name="username" id="username" placeholer="아이디 입력" />
        </p>

        <p>
          <label htmlFor="password">패스워드 : </label>
          <input name="password" id="password" placeholer="패스워드 입력" />
        </p>

        <p>
          <label htmlFor="password2">패스워드 확인 : </label>
          <input name="password2" id="password2" placeholer="패스워드 확인" />
        </p>

        <p>
          <label htmlFor="tel">연락처</label>
          <input type="tel" name="tel" id="tel" placeholder="000-0000-0000" />
        </p>

        <p>
          <label htmlFor="email">이메일 주소</label>
          <input type="email" name="email" id="email" placeholder="id@naver.com" />
        </p>

        <p>
          <input type="submit" value="회원가입" />
          <input type="reset" value="가입취소" />
        </p>
      </form>
    </section>
  );
};

export default Register2;