"use client";
import { useState } from 'react';

export const useNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    isMenuOpen,
    toggleMenu
  };
};