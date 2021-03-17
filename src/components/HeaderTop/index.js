import React from 'react'
import './style.scss'
const HeaderTop = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerTopMainWrapper">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 col-lg-5">
                            <ul className="d-flex accountLoginArea">
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i>Calz. La Misión 210, Misión del Campanario, Ags.</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12 col-lg-5">
                            <ul className="headerContact">
                                <li><i className="fa fa-envelope"></i> fernanda@romosalcedo.com</li>
                                <li><i className="fa fa-hourglass"></i> 9:30 AM - 2:00 PM</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="btnStyle btnStyle2 text-right">
                                <a href="#">Contáctanos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop