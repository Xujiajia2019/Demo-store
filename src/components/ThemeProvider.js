// app/theme-provider.js

'use client';

import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export function useThemContext(){
   return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
}