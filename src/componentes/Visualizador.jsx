
import { ImageList, ImageListItem } from '@mui/material';
import {useState, useEffect} from "react";

const Visualizador = () => {

    const [imgmeme, setImgmeme] = useState([]);

    //const seleccionarImg = (e) => {                                     
        // setImgmeme(e.target.value);
        //console.log(imgmeme.memes)
    //}

    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes') //api con array de 100 memes - basica
        .then(data => data.json())
        .then(json => setImgmeme(json.data.memes))
    },[] )

    return (


        <div style = {{whidth:'100%', height:'50%', display:'flex', flexDirection:'column', alingItem:'center', border: '1px solid red'}}>
            <h1 className="mt-3 mb-3 text-center">Editor de memes</h1>
            <ImageList variant='masonry' sx={{ width: 390, height: 450 }} cols={1} gap={8} rowHeight={400}>
                {
                imgmeme.map((meme) => (
                    <ImageListItem key={meme.id}>
                        <img
                        srcSet={`${meme.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${meme.url}?w=164&h=164&fit=crop&auto=format`}
                        alt={meme.name}
                        loading="lazy"/>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default Visualizador
