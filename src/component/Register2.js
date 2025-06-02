import React, {useState} from 'react';
import '../css/style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register2(props) {
  const [form, setForm] = useState({
    username2:'',
    user_pw:'',
    user_pw2:'',
    tel:'',
    email:''
  });
  const [error, setError] =useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({...form, [e.target.name]:e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if(form.user_pw!==form.user_pw2){
      setError('비밀번호가 일치하지 않습니다.')
      return;
    }
    try{
      const res = await axios.post('http://localhost:9070/register2', {
        username2:form.username2,
        user_pw:form.user_pw,
        user_pw2:form.user_pw2,
        tel:form.tel,
        email:form.email
      })
      if(res.data.success) {
        setSuccess('회원가입 성공!');
        navigate('/Login2');
      }
    }catch(err){
      setError('회원가입 실패 : 아이디가 이미 존재하거나 서버 오류 입니다.')
    }
  };

  return (
    <section className='login-container'>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor='username'>아이디 : </label>
            <input name='username2' id='username2' placeholder='아이디필수' className="input-box" value={form.username2} onChange={handleChange} required />
          </p>
          <p>
            <label htmlFor='user_pw'>패스워드 : </label>
            <input type='password' name='user_pw' id='user_pw' placeholder='패스워드필수' className="input-box" value={form.user_pw} onChange={handleChange} required />
          </p>
          <p>
            <label htmlFor='user_pw2'>패스워드 확인: </label>
            <input type='password' name='user_pw2' id='user_pw2' placeholder='패스워드확인' className="input-box" value={form.user_pw2} onChange={handleChange} required />
          </p>
          <p>
            <label htmlFor='tel'>연락처 : </label>
            <input type='tel' name='tel' id='tel' placeholder='010-0000-0000' className="input-box" value={form.tel} onChange={handleChange} required />
          </p>
          <p>
            <label htmlFor='email'>이메일 주소 : </label>
            <input type='email' name='email' id='email' placeholder='id@naver.com' className="input-box" value={form.email} onChange={handleChange} required />
          </p>

          <p className='btn-group'>
            <input type='submit' value='회원가입' className='join-btn' />
            <input type='reset' value='가입취소' className='reset-btn' />
          </p>
          {error && <p style={{color:'red'}}>{error}</p>}
          {success && <p style={{color:'green'}}>{success}</p>}
        </form>
    </section>
  );
}

export default Register2;