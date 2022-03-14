import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditComment from './EditComment'

function EditCommentModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
          <button onClick={() => setShowModal(true)} className='editCommentButton'>Edit Comment</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditComment close={() => setShowModal(false)}/>
            </Modal>
          )}
        </>
      );
    }

export default EditCommentModal;