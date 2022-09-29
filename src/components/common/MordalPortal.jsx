import ReactDOM from 'react-dom';

function ModalPortal({ children }) {
  const el = document.getElementById('modal_root');
  return ReactDOM.createPortal(children, el);
}
// ModalPortal 컴포넌트의 하위에 위치하는 자식 컴포넌트는 children이라는 이름의 props로 전달된다.
// 이 함수는 createPortal로 포탈을 새로 생성하여 children이라는 이름으로 전달된 ModalPortal의 하위 요소를 el (앞에서 선언해준 root외 modal_root 이라는 id 가진 요소)에서 렌더링해준다.
export default ModalPortal;