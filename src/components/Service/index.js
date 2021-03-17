import React from 'react'
import './style.scss'

const services = [
    { icon: 'icon-f100', subtitle: 'Derecho', title: 'Corporativo' },
    { icon: 'icon-f101', subtitle: 'Propiedad', title: 'Industrial' },
    { icon: 'icon-f102', subtitle: 'Propiedad', title: 'Intelectual' },
    
]
const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="serviceItem">
                                <div className="serviceIcon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="serviceText">
                                    <span>{service.subtitle}</span>
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Service