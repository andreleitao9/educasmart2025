import React, { createContext, useContext, useState, ReactNode } from 'react';

type MascotType = 'penny' | 'coiny' | 'foxy' | 'leo' | 'bella' | 'rocky' | 'luna' | 'max';

interface MascotContextType {
  mascot: MascotType;
  setMascot: (mascot: MascotType) => void;
}

const MascotContext = createContext<MascotContextType | undefined>(undefined);

interface MascotProviderProps {
  children: ReactNode;
}

export const MascotProvider = ({ children }: MascotProviderProps) => {
  const [mascot, setMascot] = useState<MascotType>('penny');

  return (
    <MascotContext.Provider value={{ mascot, setMascot }}>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = (): MascotContextType => {
  const context = useContext(MascotContext);
  if (context === undefined) {
    throw new Error('useMascot deve ser usado dentro de um MascotProvider');
  }
  return context;
};