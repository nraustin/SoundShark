import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm'

function EditSongModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
          <button onClick={() => setShowModal(true)} className='editTrackButton'>Edit Track</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditForm close={() => setShowModal(false)}/>
            </Modal>
          )}
        </>
      );
    }

export default EditSongModal;