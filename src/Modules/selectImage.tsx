import React, { useState } from 'react';
import { Modal} from 'antd';
import {ModalComponentProps} from "../react-app-env"


const ModalComponent  = ({
  children, onClose,visible,width
}:ModalComponentProps ) => {
  return (
      <Modal
        centered
        visible={visible}
        onCancel={onClose}
        width={width}
        className={"h-65"}
        footer={null}
      >
       {children} 
      </Modal>
  );
};

export default ModalComponent ;
