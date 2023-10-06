import html2canvas from "html2canvas";
import { Button, DeleteIcon, SendIcon } from  '@mui/material';

const Descaga = () => {

    const descargar = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function(canvas) {
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "memeDescargado.jpg";
            link.href = img;
            link.click();
        });
    }

    return (
        <>
            <Button variant="outlined" startIcon={<DeleteIcon />}>Borrar</Button>
            <Button variant="contained" endIcon={<SendIcon />}>Descargar</Button>
            <button onClick={descargar} type="button" className="btn btn-primary mt-4">Descargar meme</button>
        </>
    )
}

export default Descaga
