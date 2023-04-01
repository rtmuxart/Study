import React , { useState }from "react";
import face from '../picture/face.png';
import insta from '../picture/insta.png';
import twitter from '../picture/twire.png'
import whatpsaap from '../picture/whatsapp.png';
import '../css/contact.css';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      lastName: "",
      address: "",
      state: "",
      zipCode: "",
      message: "",
    });
    const [captchaToken, setCaptchaToken] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí es donde enviarías el correo electrónico con los datos del formulario
      console.log(formData);
      console.log(captchaToken);
    };
  
    const handleCaptchaChange = (token) => {
      setCaptchaToken(token);
    };

return(
<>
    <div class="horizontal-padding vertical-padding">
        <section class="contact" id="contact">
            <h2 class="contact-title">Schedule an Appointment</h2>
            <div class="contact-details">
                <div class="contact-details-group">
                    <p class="contact-label">Address:</p>
                    <p class="contact-text">1234 Main Street</p>
                </div>
                <div class="contact-details-group">
                    <p class="contact-label">email:</p>
                    <p class="contact-text">jonhdoe@gmail.com</p>
                </div>
                <div class="contact-details-group">
                    <p class="contact-text">Please, leave your message</p>
                </div>
            </div>
            <form class="contact-form">
                <div class="contact-form-group">
                    <label for="name">Name</label>
                    <input required type="text" name="name" id="name"></input>
                </div>
                <div class="contact-form-group">
                    <label for="name">Email</label>
                    <input required type="email" name="email" id="email"></input>
                </div>
                <div class="contact-form-group">
                    <label for="name">Message</label>
                    <textarea required name="message" id="message" rows="6"></textarea>
                </div>
                    <div class="recaptcha-form">
                        <ReCAPTCHA
                            sitekey="TU_CLAVE_SITE_RECAPTCHA"
                            onChange={handleCaptchaChange}
                        />
                    </div>
                <button type="submit" class="contact-form-submit">Submit</button>
            </form>

            <nav class="social">
                <ul class="social-list">
                    <li>
                    <a href="/contact">
                            <img src={face} alt="logoface"></img>
                    </a>
                    </li>
                    <li>
                    <a href="/contact">
                            <img src={insta} alt="logoinsta"></img>
                    </a>
                    </li>
                    <li>
                    <a href="/contact">
                            <img src={twitter} alt="logotwitter"></img>
                    </a>
                    </li>
                    <li>
                    <a href="/contact">
                            <img src={whatpsaap} alt="logowhatsapp"></img>
                    </a>
                    </li>
                </ul>
            </nav>
            
        </section>
    </div>
</>

)

}
export default Contact;