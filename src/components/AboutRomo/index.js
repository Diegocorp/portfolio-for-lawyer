import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom'
import 'react-modal-video/scss/modal-video.scss'
import './style.scss'

const AboutRomo = ({ subTitle, title, videoId, className, signature, pragraphs,images,orderLast,
    subTitle2, title2, pragraphs2, subTitle3, title3, pragraphs3}) => {
    const [video, setVideo] = useState(false)
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className={orderLast ? `${orderLast} col col-lg-6`:'col col-lg-6'}>
                        <div className="aboutImageWrap">
                            <img src={images} alt="" />
                            {videoId && <i onClick={() => setVideo(true)} className="fa fa-play"></i>}
                            <ModalVideo
                                channel='youtube'
                                isOpen={video}
                                videoId={videoId}
                                onClose={() => () => setVideo(false)} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutContent">
                            {subTitle && <span>{subTitle}</span>}
                            <h2>{title}</h2>
                            {pragraphs.map((pragraph, i) => (
                                <p key={i}>{pragraph.text}</p>
                            ))}
                            {subTitle2 && <span>{subTitle2}</span>}
                            <h2>{title2}</h2>
                            {pragraphs2.map((pragraph, i) => (
                                <p key={i}>{pragraph.text}</p>
                            ))}
                            {subTitle3 && <span>{subTitle3}</span>}
                            <h2>{title3}</h2>
                            {pragraphs3.map((pragraph, i) => (
                                <p key={i}>{pragraph.text}</p>
                            ))}
                            {signature && <div className="signature">
                                <img src={signature} alt="" />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutRomo