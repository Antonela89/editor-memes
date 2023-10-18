import React, { createContext, useContext, useState } from 'react';

const TextoContext = createContext();

export function useTextoContext() {
  return useContext(TextoContext);
}

const TextProvider = ( {children} ) => {
  const [texto, setTexto] = useState('');
  const [selectedFont, setSelectedFont] = useState('');
  const [textStyles, setTextStyles] = useState({ fontFamily: '' });
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [bold, setBold] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [italic, setItalic] = useState(false);

  const updateTexto = (newTexto) => {
    setTexto(newTexto);
  };

  const updateSelectedFont = (font) => {
    setSelectedFont(font);
  };

  return (
    <TextoContext.Provider value={{ texto, updateTexto, selectedFont, updateSelectedFont, textStyles, selectedColor, setSelectedColor, bold, setBold, underline, setUnderline, italic, setItalic }}>
      {children}
    </TextoContext.Provider>
  );
}
export default TextProvider