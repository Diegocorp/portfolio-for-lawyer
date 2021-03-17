import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/RS_logo.png'
import './style.scss'
const footerLinks = [
    {
        title: 'Menú', menus: [
            { name: 'Inicio', route: '/' },
            { name: 'Nosotros', route: 'practice' },
            { name: 'Equipo', route: 'team' },
            { name: 'Servicios', route: 'case' },
            { name: 'Contacto', route: 'blog' },
        ]
    },
    {
        title: 'Especialidad Legal', menus: [
            { name: 'Derecho Corporativo', route: 'home' },
            { name: 'Propiedad Industrial', route: 'home' },
            { name: 'Propiedad Intelectual', route: 'home' },

        ]
    },
    {
        title: 'Contáctanos', menus: [
            { name: 'Calzada La Misión 210' },
            { name: 'Misión del Campanario', },
            { name: 'Aguascalientes, Ags.', },
            { name: 'T. 449 116 05 86', },
            { name: 'Email: fernanda@romosalcedo.com', },
        ]
    },
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                                <p>10 años especializados en Derecho Corporativo, Propiedad Industrial e Intelectual.</p>
                            </div>
                        </div>
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}>{item.route ? <Link to={`/${item.route}`}>{item.name}</Link> : `${item.name}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="footerBottomContent">
                        <div className="row">
                            <div className="col-md-8 col-sm-10 col-12">
                                <span>Políticas de Privacidad | © 2020 Jose Francisco Sandoval. Todos los Derechos Reservados</span>
                            </div>
                            <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterArea