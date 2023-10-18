import { useState, useEffect } from 'react';
import { useTextoContext } from '../Provider/TextProvider.js';


const Texto = () => {
    const [fonts, setFonts] = useState([]);
    const [textStyles, setTextStyles] = useState({fontFamily: '',}); //Estado del estilo del texto


    const { texto, updateTexto, selectedFont, updateSelectedFont } = useTextoContext();


    useEffect(()=> {
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAiAGjccdo2MrqKeewLPcomuq8qha3k1do')
        .then((response) => {
            if (!response.ok) { // corroborar el estado de la respuesta
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {setFonts(data.items); // Almacenar los datos de la fuente en el estado
          })
          .catch((error) => {
            console.error('Error al cargar las fuentes:', error);
          });
      }, []);

      const handleInputChange = (e) => {
        updateTexto(e.target.value);
      };

    const handleFontChange = (e) => {
      const selectedFont = e.target.value;
      updateSelectedFont(selectedFont);
      setTextStyles({ fontFamily: selectedFont });
    };
  

    return (
      <div style={{width:'100%', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        
        <h3 style={{margin: '10px'}}>Texto</h3>
        <input onChange={handleInputChange} className="form-control w-50 m-50 m-auto d-block" aria-label=""/>
        
        <h3 style={{margin: '10px'}}>Tipografía</h3>
        <select style={{margin: '10px'}} value={selectedFont} onChange={handleFontChange}>
          <option value="">Seleccione una fuente</option>
            {fonts.map((font) => (
              <option key={font.family} value={font.family}>{font.family}</option>
            ))}
        </select>
      
      </div>
  );
};

export default Texto
