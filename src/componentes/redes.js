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
    <img src={face} class="facebook"/>{"  "}
    <img src={insta} class="insta"/>{"  "}
    <img src={twitter} class="twitter"/>{"  "}
    <img src={whatpsaap} class="whatpsaap"/>

</div>
</>

);


}
export default redes;



