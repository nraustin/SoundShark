import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';

function DeleteSongModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
          <button onClick={() => setShowModal(true)} className='deleteTrackButton'>Delete Track</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <DeleteForm />
            </Modal>
          )}
        </>
      );
    }

export default DeleteSongModal;