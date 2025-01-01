import React from "react";
import Modal from "./Modal";

function OptionSelectionModal({
  open,
  setOpen,
  title,
  options,
  selectedOptions = [], //   기본값을 빈 배열로 설정
  setSelectedOptions,
  onConfirm,
}) {
  const handleOptionChange = (option) => {
    setSelectedOptions((prev) => {
      if (!Array.isArray(prev)) return [option];

      return prev.includes(option)
        ? prev.filter((item) => item !== option) // 이미 선택된 경우 제거
        : [...prev, option]; // 새 옵션 추가
    });
  };
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <div>
        <h3>{title}</h3>
        <div>
          {options.map((option) => (
            <label key={option} style={{ display: "block", margin: "10px 0" }}>
              <input
                type="checkbox"
                value={option}
                //  상태와 동기화
                checked={
                  Array.isArray(selectedOptions) &&
                  selectedOptions.includes(option) // 배열 여부 확인}
                }
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => onConfirm(selectedOptions)}>확인</button>
          <button onClick={() => setOpen(false)}>취소</button>
        </div>
      </div>
    </Modal>
  );
}

export default OptionSelectionModal;
