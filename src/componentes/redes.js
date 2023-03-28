import React from "react";
import face from '../picture/face.png';
import insta from '../picture/insta.png';
import twitter from '../picture/twire.png'
import whatpsaap from '../picture/whatsapp.png';
import '../css/redes.css'

const redes = () =>{
return (
<>
<div className="position-absolute top-0 end-0">
    <img src={face} className="facebook"/>{"  "}
    <img src={insta} className="insta"/>{"  "}
    <img src={twitter} className="twitter"/>{"  "}
    <img src={whatpsaap} className="whatpsaap"/>

</div>
</>

);


}
export default redes;



