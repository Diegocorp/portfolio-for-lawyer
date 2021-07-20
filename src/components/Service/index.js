import React from 'react'
import './style.scss'

const services = [
    { icon: 'icon-f100', subtitle: 'Judgement', title: 'Civil' },
    { icon: 'icon-f101', subtitle: 'Judgement', title: 'Commercial' },
    { icon: 'icon-f102', subtitle: 'Judgement', title: 'Amparo' },
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
                                    <h3>{service.title}</h3>
                                    <span>{service.subtitle}</span>
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