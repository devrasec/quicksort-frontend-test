import React, { useState } from 'react';
import Modal from 'react-modal';

import { Button } from './Button';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '600px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '450px',
    overflowY: 'auto'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 10
  }
};

export const AboutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={openModal}>About</Button>
      <Modal
        isOpen={isOpen}
        contentLabel="About"
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={300}
        shouldCloseOnOverlayClick
      >
        <h2>About</h2>
        <p>
          This app renders two shapes after 3 arbitrary points are selected by
          the user in the window.
        </p>
        <p>
          The first shape is a blue parallelogram that uses the 3 selected
          points as vertices, and the second shape is a yellow circle with the
          center point equal to the parallelogram's center of mass. The missing
          point of the parallelogram is rendered automatically. The circle has
          the same area of the parallelogram.
        </p>

        <h2>How to use</h2>
        <p>
          Click on 3 arbitrary points in the window area (light gray area), then
          you will see the shapes automatically rendered.
        </p>
        <p>
          In the upper right corner, you can see the coordinates of the selected
          points and also the area of both shapes
        </p>

        <h2>Author</h2>
        <p>
          Luis Contreras &lt;
          <a href="mailto:luiscon26@gmail.com">luiscon26@gmail.com</a>&gt;
        </p>
        <p>
          Project repository:{' '}
          <a
            href="https://github.com/devrasec/quicksort-frontend-test"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/devrasec/quicksort-frontend-test
          </a>
        </p>
      </Modal>
    </>
  );
};
