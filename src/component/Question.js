import React, {useState, useContext} from 'react'; //리액트 hooks 상태변수
import axios from 'axios'; //서버측과 통신을 위해
import '../css/style.css';
import { AlertContext } from '../AlertContext';

const Question=()=> {
  //1. 상태변수 선언
  const [formData, setFormData] = useState({
    name:'',
    tel:'',
    email:'',
    txtbox:''
  });

  const { setQuestionCount } = useContext(AlertContext);

  //2. 입력양식에 사용자가 입력시 함수 호출
  const handleChange=(e)=>{
    const{name, value} = e.target;
    setFormData(prev => ({...prev, [name]:value}));
  }

  //3. 입력완료 or 전송하기 or send버튼 클릭시 실행되는 함수
  //서버측에 post방식으로 데이터를 넘기기 위한 내용
  const handleSubmit = async e => {
    e.preventDefault();
    try{ //데이터 전송 성공시
      await axios.post('http://localhost:9070/question', formData);
      alert('질문이 등록되었습니다.');

      //데이터 보내고 나면 변수값 초기화
      setFormData({name:'',tel:'',email:'', txtbox:''});
      setQuestionCount(count => count + 1); // 등록 시 숫자 증가
    }catch{ //데이터 전송 실패시
      alert('오류가 발생되었습니다.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="qna_form">
      <section className="qna">
        <h2>정성을 다해 답변을 <br />해드리겠습니다</h2>
        <div className='left_form'>
          <p>
            <label htmlFor="name">성함 </label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder='성함을 입력해주세요' required />
          </p>
          <p>
            <label htmlFor="tel">전화번호 </label>
            <input type='text' name="tel" id="tel" value={formData.tel} onChange={handleChange}placeholder='전화번호를 입력해주세요' required />
          </p>
          <p>
            <label htmlFor="email">이메일 </label>
            <input type='email' name="email" id="email" value={formData.email} onChange={handleChange}placeholder='이메일을 입력해주세요' required />
          </p>
        </div>

        <div className="right_form">
          <label htmlFor="txtbox">내용</label>
          <textarea
            rows="11"
            cols="50"
            name="txtbox"
            id="txtbox"
            value={formData.txtbox}
            onChange={handleChange}
            required
            maxLength={300} // 300자 제한 추가
            placeholder="내용을 입력해주세요"
          />
        </div>

        <div className="agree">
          <input type="checkbox" required id="agree" />
          <label for="agree">개인정보처리 방침에 동의합니다.</label>

          <input type="submit" value="SEND" className="submit_btn" />
        </div>

        
      </section>
    </form>
  );
}

export default Question;