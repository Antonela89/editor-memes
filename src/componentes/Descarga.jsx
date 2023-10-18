import html2canvas from "html2canvas";
import { Button } from '@mui/material';

const Descarga = () => {

    const descargar = (e) => {
        html2canvas( document.querySelector("#exportar"), { logging: true, letterRendering: 1, allowTaint: false,  useCORS: true } ).then(function(canvas) {
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "memeDescargado.jpg";
            link.href = img;
            link.click();
        });
    }

    return (
        <div style={{width:'100%', height:'100%', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Button style={{margin: '10px'}} variant="outlined">Borrar</Button>
            <Button style={{margin: '10px'}} variant="contained" onClick={descargar}>Descargar</Button>
        </div>
    )
}

export default Descarga
