import React from 'react';

function Main(props) {
  return (
    <section>
      <h2>메인 페이지입니다.</h2>
      <p>Front(UI)에서 요청한 내용을 Backend(DB, MYSQL)에서 처리하여 화면에 출력한다.</p>
      <p>&nbsp;</p>

      <h3>수업내용</h3>
      <ol>
        <li>1. Goods데이터 입력/출력/수정/삭제 구현하기</li>
        <li>2. BookStore데이터 입력/출력/수정/삭제 구현하기</li>
        <li>3. Fruit데이터 입력/출력/수정/삭제 구현하기</li>
        <li>4. 관리자에게 질문하기, DB에 데이터 입력 발생시 '텍스트 알림 메세지' 또는 '동그라미 숫자' 알림 메세지 구현하기(CONTEXT, 전역변수)</li>
        <li>5. LOGIN폼 UI화면에서 ID, PASSWORD입력시 DB자료 체크하여 로그인 '성공', '실패' 구현하기</li>
      </ol>  
    </section>
  );
}

export default Main;