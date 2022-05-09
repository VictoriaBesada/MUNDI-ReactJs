import React from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

const Footer = () => {

    const navigate = useNavigate();

    const Home = () => {
        navigate('/HomePage')
    }

    const Nosotros = () => {
        navigate('/NosotrosPage')
    }

    const Contacto = () => {
        navigate('/ContactPage')
    }

    return (
        <div>
            <footer>
                <div className="seguinos">
                    <h5>¡Seguínos!</h5>
                    <InstagramIcon></InstagramIcon>
                    <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <WhatsAppIcon></WhatsAppIcon>
                    <YouTubeIcon></YouTubeIcon>
                </div>
                <div className="links">
                    <ul className="lista">
                        <li onClick={Home} className="link">Home</li>
                        <li onClick={Nosotros} className="link">Nosotros</li>
                        <li onClick={Contacto} className="link">Contacto</li>
                    </ul>
                </div>
                <div className="contacto">
                    <ul className="lista">
                        <li className="contactoTitulo">Contacto</li>
                        <li>Email: travel@mundi.com</li>
                        <li>Telefono: 0800 111 222</li>
                        <li>Horarios: Lunes a viernes - 9hs a 19hs</li>
                    </ul>
                </div>
            </footer>
            <div className="firma">
                <p>Sitio web desarrollado por Victoria Besada</p>
            </div>
        </div>
    )
}

export default Footer;