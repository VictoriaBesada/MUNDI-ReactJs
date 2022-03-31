import React from "react";
import './Footer.css';
import { Container } from "@mui/material";


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="nosotros">
                    <p >Line 15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md </p>
                </div>
                <div className="links">
                    <ul className="lista">
                        <li>Home</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className="destinos">
                    <ul className="lista">
                        <li>Destinos</li>
                        <li>Americas</li>
                        <li>Europa</li>
                        <li>Asia</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;