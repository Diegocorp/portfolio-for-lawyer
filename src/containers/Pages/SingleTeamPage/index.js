import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
import ContactArea from '../../../components/ContactArea'

// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import team1 from '../../../images/Attorneys-single/t1.jpg'
import team2 from '../../../images/Attorneys-single/t2.jpg'
import team3 from '../../../images/Attorneys-single/t3.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys', route: '/attorneys' },
    { name: 'Attorneys Details' }
]
const teamMembarInfo = [
    { level: 'Positon: ', text: 'Siniour Lawyer' },
    { level: 'Practice Area: ', text: 'Family Lawyer, Criminal Defence, Personal Injury' },
    { level: 'Experience: ', text: '33 Years' },
    { level: 'Address: ', text: 'Av. Fco. I. Madero y Aquiles Serdan #192 Esq., Puerto Peñasco, Sonora, México.' },
    { level: 'Office phone: ', text: '044 (638) 383-59-02' },
    { level: 'Cell phone: ', text: '044 (638) 380-60-91' },
    { level: 'Email: ', text: 'joaquinjaureguimercado@gmail.com' },
]
const teamContents = [
    'University: Universidad del Estado de Sonora, Bachelor of Laws. (Degree)',
    'High School: Instituto Alberto Sotelo, in the city of Caborca, Sonora.'
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SingleTeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team1} alt="" />
                                        </div>
                                        <h4>JOAQUÍN JÁUREGUI MERCADO</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamContent">
                                        <h4>Important Information</h4>
                                        <ul className="teamMembarInfo">
                                            {teamMembarInfo.map((teamInfo, i) => (
                                                <li key={i}>
                                                    <span>{teamInfo.level}</span>
                                                    {teamInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="socialShare">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>Personal Experience</h3>
                                        <p><b>1989 - 1990:</b> Worked as assistant and advisor to Professor Alfredo López Aceves, teacher leader and president of the Institutional Revolutionary Party in the city of Hermosillo, Sonora.</p>
                                        <p><b>1990 - 1995:</b> Worked with Mr. Marco Antonio Téllez Ulloa, handling the loan recovery portfolio of Banco Nacional de México, as well as of the banking institutions COMERMEX, and later INVERLAT, all of them in the town of Puerto Peñasco.</p>
                                        <p><b>1995 - 2018:</b> Handling commercial, civil, administrative and amparo lawsuits against laws. Legal representative of BANAMEX, BANCOMER, Ocean Garden Product Inc and correspondent of Mr. Roberto Agustin Cortes Rosas, owner of the tourist development and subdivision Las Conchas, with the latter to date, support is given in any legal assistance requested to the firm.</p>
                                        <p><b>2008 - 2010:</b> Legal Advisor and attorney patron of the following companies; Frigorífica de Peñasco, Hielo de Peñasco, the Association of American neighbors of Las Conchas, the Lucky Point Casino and continued with the advice of credit institutions.</p>
                                        <p><b>2012 - 2015:</b> Legal Advisor of the Municipal Treasury Department of this city of Puerto Peñasco, Sonora,</p>
                                        <p>Currently, I am in charge of the portfolio of the rescission lawsuits of condominium purchase and sale and condominium fees of the following developments:</p>
                                        <ul>
                                            <li> Puerta Privada, developer Miguel Guevara Askar and Carlos Saenz.</li>
                                            <li> Legal advice to the 12 North Americans who acquired condominiums in the Tessoro at las Conchas development, administrator Manuel Martinez Peña. </li>
                                            <li> Real estate and gas entrepreneur Luis Barrios Martinez, all of these activities in the city of Puerto Peñasco.</li>
                                            <li> To the real estate investor from the State of Mexico, Architect Jacobo Dib Kuri, sole administrator of the Conjunto Ballena Housing Development and the Solace Tower condominium tower.</li>
                                            <li> To the Italian real estate investor Joseph Giambanco, Laguna Shores.</li>
                                        </ul>
                                        <p></p>
                                        <p>At present, the firm has 50 cases in litigation, of which are civil mortgage lawsuits of Bancomer, rescission of contracts of condominium properties (of tourist developments), 2 agrarian lawsuits, the remaining lawsuits are related to claims, declaratory of ownership, rescission of purchase and sale of real estate and rescission of purchase and sale of trustee rights.</p>
                                        <h3>Extracurricular Activities</h3>
                                        <p>Partner and Founding President of the Punta Peñasco A.C. Bar Association since 2008.</p>
                                        <p></p>
                                        <h5>Education</h5>
                                        <ul>
                                            {teamContents.map(teamContent => (
                                                <li key={teamContent}>{teamContent}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default SingleTeamPage