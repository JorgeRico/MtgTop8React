import { useContext } from 'react';
import { MobileContext } from './../context/mobile-context';

export const useMobile = () => useContext(MobileContext);
