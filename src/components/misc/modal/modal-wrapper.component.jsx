import { Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, modalSelector } from '../../../store/slices/modal.slice.js';

const ModalWrapper = ({ children, title, footer }) => {
  const dispatch = useDispatch();
  const { isVisible } = useSelector(modalSelector);

  return (
    <Modal
      title={title}
      visible={isVisible}
      onCancel={() => dispatch(closeModal())}
      footer={footer}
      width={450}
      centered
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
