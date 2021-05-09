import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeroSlider from '../../../components/HeroSlider'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import signature from '../../../images/about/1.png'

// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import portfolio4 from '../../../images/studies/4.jpg'
import portfolio5 from '../../../images/studies/5.jpg'

import './style.scss'

const aboutText = [
    { text: 'We are the leading law firm in meeting the litigation objectives resolved in favor of our clients, we are a team of lawyers specialized in civil and commercial law.' },
    { text: 'Experts in resolving any controversy on rights acquired by foreigners in trusts, condominiums, land located on beaches and coastlines, with the experience of having advised different fiduciary departments in banking institutions, our work is guaranteed by contract between law firm and clients.' },
]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'Legal advice and ',
        subTitle: 'guidance specialist.',
        text: 'Joaquin Jáuregui',
        button: 'Contact'
    },
    {
        images: 'slideWrapperTwo',
        title: 'Personalized',
        subTitle: 'legal support.',
        text: 'Joaquin Jáuregui',
        button: 'Contact'
    },
]

const services = [
    {
        icon: 'icon-f103',
        title: 'Commercial Law',
        content: 'Rights, relations, and conduct of persons and business engaged in commerce, merchandising, trade, and sales.'
    },
    {
        icon: 'icon-f104',
        title: 'Commercial contracts',
        content: 'Agreements between two or more parties on a commercial matter.'
    },
    {
        icon: 'icon-f105',
        title: 'Civil Law',
        content: 'The law relating to civil wrongs and quasi-contracts is part of the civil law, as is law of property.'
    }
]


const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
    { images: portfolio4, title: 'Accounting issue', subtitle: 'Criminal' },
    { images: portfolio5, title: 'Business Accounting', subtitle: 'Family Issue' }
]

const HomePageOne = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderBotton className="headerBottomArea"/>
            </header>
            <HeroSlider 
                sliders={heroSliders}
                className="heroSliderArea" />
            <Service className="serviceArea" />
            <About
                className="aboutArea"
                title="About Us"
                images={about}
                signature={signature}
                pragraphs={aboutText}
                videoId="XxVg_s8xAms"
            />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleThree"
                title="Our Services"
                subTitle="Practice area"
                services={services}
            />
            <Testmonial
                className="testmonialArea pt100"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default HomePageOne