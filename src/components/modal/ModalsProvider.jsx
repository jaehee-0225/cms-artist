import React, { useMemo, useState } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalsContext';

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Components, props) => {
    setOpenedModals((modals) =>{
      return [...modals, {Components, props}];
    });
  };

  const close = (Components) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Components !== Components;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider  value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;