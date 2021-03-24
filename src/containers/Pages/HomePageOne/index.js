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
    { text: 'bakjdsf jajlkdsal jljhasdh ashjdl asld hsalkd hlasdh lkashd lksahd klsad kloasjd sahljd aslhk dlksad lsakd klasjdl kaskl.' },
    { text: 'kjdsagdhjsajhigd aksd jkasdgh ksa jgdaskjgdkj asdjkaskj daskj d askjd ksajd hkuasd hjksah dkasjh d kasjd jkasdj sakjd askjd kjasd kjasdh ksah dkashd ksah dkashk djsak dhksad hksah dksa hkdsajk.' },
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
        title: 'Creación de Empresas',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'icon-f104',
        title: 'Contratos Mercantiles',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'icon-f105',
        title: 'Actas de Asamblea',
        content: 'There are many variations of passages of Lorem '
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
                <HeaderBotton className="headerBottomArea" />
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