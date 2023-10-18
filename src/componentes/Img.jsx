import React from 'react'
import { useTextoContext } from '../Provider/TextProvider';

const Img = ({selectedImage}) => {

  const { texto, color, fuente, negrita, subrayado, cursiva } = useTextoContext();

  const estilos = {
    color: color, // Establece el color del texto
    fontFamily: fuente, // Establece la fuente del texto
    bolt: negrita, // Negrita del texto
    underline: subrayado, // Subrayado del texto
    italic: cursiva
  };

  return (
    <div style={{width: '100%'}} id='exportar'>
      <img style={{width: '100%'}}
        src={selectedImage.url}
        alt={selectedImage.name}
        loading="lazy" />

      <p style={estilos}>{texto}</p>
    </div>
  )
}

export default Img