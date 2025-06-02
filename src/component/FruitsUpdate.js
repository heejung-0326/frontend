import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function FruitsUpdate(props) {
  const { num } = useParams();  // 책 고유번호 파라미터 받기

  const [form, setForm] = useState({
    num: '',
    name: '',
    price: '',
    color: '',
    country: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9070/fruits/${num}`)
    .then(res=>{
      console.log('서버 응답값 : ', res.data);
      setForm(res.data);
    })
    //실패면 오류 메세지
    .catch(err=> console.log('조회 오류 : ', err));

    //console.log('값 잘 전달되는지 확인': g_code);

  },[num]);

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]:e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  axios.put(`http://localhost:9070/fruits/update/${num}`, form)
  .then(() => {
    alert('상품정보가 수정 완료 되었습니다.');
    navigate('/fruits');
  })
  .catch(err => console.log('수정 오류: ', err));
};
  return (
    <div>
            <h3>books 상품수정 페이지 입니다.</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="num">코드번호 : </label>
          <input name="num" id="num" value={form.num} readOnly />
        </p>
        <p>
          <label htmlFor="name">이름 : </label>
          <input name="name" id="name" onChange={handleChange} value={form.name} required />
        </p>
        <p>
          <label htmlFor="price">가격 : </label>
          <input name="price" type="number" id="price" onChange={handleChange} value={form.price} required />
        </p>
        <p>
          <label htmlFor="color">색상 : </label>
          <input name="color" id="color" onChange={handleChange} value={form.color} required />
        </p>
        <p>
          <label htmlFor="country">생산지 : </label>
          <input name="country" id="country" onChange={handleChange} value={form.country} required />
        </p>
        
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}

export default FruitsUpdate;