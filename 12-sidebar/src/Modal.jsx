import { FaTimes } from "react-icons/fa";

import { useAppContext } from "/src/AppContext";

function Modal() {
  const { isModalOpen, closeModal } = useAppContext();

  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default Modal;
