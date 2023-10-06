import { useState} from 'react';

const Texto = () => {
    const [textmeme, setTextmeme] = useState();

    const textomeme = (e) => {
        setTextmeme(e.target.value);
    }

    return (
        <div>
            <h3>Ingresa el texto del meme</h3>
            <input onChange={textomeme} className="form-control w-50 m-50 m-auto d-block" placeholder="Ingresa el texto superior" aria-label="" />
        </div>
    )
}

export default Texto
