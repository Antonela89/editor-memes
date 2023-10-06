
import {useState, useEffect} from "react";

const Imgmemes = () => {
    const [imgmeme, setImgmeme] = useState();


    const seleccionarImg = (e) => {                                     
        // setImgmeme(e.target.value);
        //console.log(imgmeme.memes)
    }

    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes') //api con array de 100 memes - basica
        .then(data => data.json())
        .then(json => setImgmeme(json.data))
    },[] )

    
    return (
        <div className="text-center">
            <h3 className="mt-3 mb-3 text-center">Elegí tu imagen favorita</h3>
            <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" arial-label=".form-select-lg example">

            </select>
            
            {/* <figure id="exportar" className="text-center">
                <p className="w-100 px-30 position-absolute top-50 start-30 h1 text-center">{textmeme}</p>
                <img src={`./memes/${imgmeme}.jpg`} alt="meme" className="figure-img mt-3 d-block m-auto"/>
            </figure> */}

        </div>
    )
}

export default Imgmemes
