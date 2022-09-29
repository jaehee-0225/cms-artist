import React, { useContext } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalsContext';
import MyModal1 from './MyModal1.jsx';

export const modals = {
  MyModal1: MyModal1,
};

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;
    const onClose = () => {
      close(Component);
    }

    const handleSubmit = async () => {
      if(typeof onSubmit === 'function'){
        await onSubmit();
      }
      onClose();
    };


    return <Component {...restProps} key={index} onClose={onClose} onSubmit={handleSubmit}
    />

  })
}


export default Modals;