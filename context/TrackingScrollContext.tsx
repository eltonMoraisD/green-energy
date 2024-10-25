'use client';
import { createContext, useContext, useRef, useState } from 'react';

interface TrackingScrollContextType {
  targetContainer: boolean;
  setTargetContainer: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.MutableRefObject<null>;
}

const SwitchFontColorContext = createContext<TrackingScrollContextType | null>(
  null
);

const useTrackingScrollContext = () => {
  const context = useContext(SwitchFontColorContext);
  if (!context) {
    throw new Error(
      'useTrackingScrollContext must be used within a TrackingScrollProvider'
    );
  }
  return context;
};

const TrackingScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [targetContainer, setTargetContainer] = useState(false);
  const ref = useRef(null);

  return (
    <SwitchFontColorContext.Provider
      value={{ targetContainer, setTargetContainer, ref }}
    >
      {children}
    </SwitchFontColorContext.Provider>
  );
};

export {
  useTrackingScrollContext,
  TrackingScrollProvider,
  SwitchFontColorContext,
};
