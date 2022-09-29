import ReactModal from 'react-modal';

const MyModal1 = ({ onSubmit, onClose }) => {
   const handleClickSubmit = () => {
    onSubmit();
   }
   const handleClickCancel = () => {
    onClose();
   }

  return (
    <ReactModal isOpen>
      <div>모달 입니다.</div>
      <div>
        <button onClick={handleClickCancel}>취소</button>
        <button onClick={handleClickSubmit}>저장</button>
      </div>
    </ReactModal>
  );
};

export default MyModal1;