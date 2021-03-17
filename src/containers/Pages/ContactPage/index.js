import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]

const ContactPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className="contactusPageArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contactUsInfo">
                                <h3>Contáctanos</h3>
                                <p>Nuestro equipo es especialista en orientar y asesorar con orden, precision y acompañamiento personalizado en todos los servicios legales requeridos.
                                </p>
                                <h4>Dirección</h4>
                                <span>Calzada La Misión 210, Misión del Campanario, Aguascalientes, Ags.
</span>
                                <h4>Teléfono</h4>
                                <span>449 116 05 86</span>
                                
                                <h4>Email</h4>
                                <span>fernanda@romosalcedo.com</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contactUSForm">
                                <h3>Forma de Contácto</h3>
                                <Form
                                    addressInfo={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default ContactPage