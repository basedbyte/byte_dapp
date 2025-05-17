import { useState } from 'react';

export const useCardAnimation = () => {
  const [isSlideActive, setIsSlideActive] = useState(false);

  const toggleSlide = () => {
    setIsSlideActive(!isSlideActive);
  };

  return {
    isSlideActive,
    toggleSlide
  };
};