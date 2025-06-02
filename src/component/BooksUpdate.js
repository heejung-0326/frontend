import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function BooksUpdate(props) {
  const { num } = useParams();  // 책 고유번호 파라미터 받기

  // 책 정보 상태
  const [form, setForm] = useState({
    num: '',
    name: '',
    area1: '',
    area2: '',
    area3: '',
    book_cnt: '',
    owner_nm: '',
    tel_num: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9070/books/${num}`)
      .then(res => {
        console.log('서버 응답값 :', res.data);
        const book = Array.isArray(res.data)
        ? res.data.find(item => String(item.num) === String(num))
        : res.data;

      if (book) {
        //setForm(book); // 객체 전체를 세팅
        setForm({
          num: book.num,
          name: book.name,
          area1: book.area1,
          area2: book.area2,
          area3: book.area3,
          book_cnt: book.BOOK_CNT, // ✅ 여기서 필드 변환
          owner_nm: book.owner_nm,
          tel_num: book.tel_num
        });
      } else {
        alert('해당 도서 정보가 없습니다.');
      }
    })
    .catch(err => console.log('조회오류 :', err));
}, [num]);


    const handleChange = (e) => {
      const {name, value} = e.target;

      setForm({
        ...form,
        [name]:name==='book_cnt' ? Number(value):value //숫자로 변환
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
        ...form,
        BOOK_CNT: form.book_cnt // 백엔드에서 요구하는 필드명으로 매핑
      };

      delete payload.book_cnt; // 필요 시 원래 필드 제거
      
      axios.put(`http://localhost:9070/books/update/${num}`, payload)
      .then(() => {
        //console.log('수정 응답:', res);
        alert('상품정보가 수정 완료 되었습니다.');
        navigate('/books');
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
          <label htmlFor="name">서점명 : </label>
          <input name="name" id="name" onChange={handleChange} value={form.name} required />
        </p>
        <p>
          <label htmlFor="area1">지역명1 : </label>
          <input name="area1" id="area1" onChange={handleChange} value={form.area1} required />
        </p>
        <p>
          <label htmlFor="area2">지역명2 : </label>
          <input name="area2" id="area2" onChange={handleChange} value={form.area2} required />
        </p>
        <p>
          <label htmlFor="area3">지역명3 : </label>
          <input name="area3" id="area3" onChange={handleChange} value={form.area3} required />
        </p>
        <p>
          <label htmlFor="book_cnt">가격 : </label>
          <input type="number" name="book_cnt" id="book_cnt"  onChange={handleChange} value={form.book_cnt} required />
        </p>
        <p>
          <label htmlFor="owner_nm">고객명 : </label>
          <input name="owner_nm" id="owner_nm" onChange={handleChange} value={form.owner_nm} required />
        </p>
        <p>
          <label htmlFor="tel_num">전화번호 : </label>
          <input name="tel_num" id="tel_num" onChange={handleChange} value={form.tel_num} />
        </p>
        <button type="submit">수정하기</button>
      </form>
      </div>
  );
}

export default BooksUpdate;