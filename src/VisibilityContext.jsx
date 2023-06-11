import React from 'react';

export const VisibilityContext = React.createContext(
  {
    visibility: false,
    toggleVisibility: () => {
      console.log('default');
    }
  }
  ); 
