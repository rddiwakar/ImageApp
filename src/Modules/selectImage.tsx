import React, { useState } from 'react';
import { Modal} from 'antd';

type ModalComponent  = {
  onOpen?:()=>any,
  onClose:()=>any,
  visible: boolean,
  children:React.ReactNode | React.ReactNode[],
  width:number
}

const ModalComponent  = ({
  children, onClose,visible,width
}:ModalComponent ) => {
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
