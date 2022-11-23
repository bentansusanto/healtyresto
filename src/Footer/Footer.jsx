import React from 'react'
import { Address } from './Address'
import { Help } from './Help'
import { LinkMember } from './LinkMember'
import { Quicklink } from './Quicklink'
import { SocialMedia } from './SocialMedia'



const quicklink = [
    {name: 'Home', link: '/'},
    {name: 'About Us', link: '/about'},
    {name: 'Menu', link: '/'},
    {name: 'Blog', link: '/'},
    {name: 'Contact Us', link: '/'}
]

const linkMember = [
    {name : 'Registration', link : '/'},
    {name : 'Login', link : '/'},
    {name : 'Support', link : '/'},
]

const help = [
    {name : 'Privacy and Policy', link: '/'},
    {name : 'FAQ', link: '/'}
]

const address = {
    lokasi : 'Jl. Raja isa no.10 Batam Kota, Kota Batam.',
    noHp : '089604276162',
    email : 'tansusanto194@gmail.com'
}

const socialMedia = [
    {link : 'https://instagram.com', icon : 'instagram.svg'},
    {link : 'https://facebook.com', icon : 'facebook.svg'},
    {link : 'https://twitter.com', icon : 'twitter.svg'},
    {link : 'https://gmail.com', icon : 'email.svg'},
]


const Footer = () => {
  return (
    <div className='lg:mx-40 md:mx-10 mx-0 md:block hidden md:py-5'>
        <div className='bg-[#707070] w-full h-[.5px] mb-10 md:block hidden'></div>
        <div className="footer flex">
            <div className="logo space-y-3">
                <h1 className='font-head text-[1.3rem] font-bold'>HealtyResto<span className='text-fourth'>.</span></h1>    
                {/* Content */}
                <p className='text-[.9rem] text-content md:w-[62%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem excepturi commodi?</p>
                {/* Social Media */}
                <SocialMedia socialMedia={socialMedia}/>
            </div>
            {/* Navigation */}
            <div className='grid grid-cols-4 lg:gap-5 md:gap-5 mr-[.2rem]'>
                {/* Quicklink */}
                <Quicklink quicklink={quicklink}/>  
                <LinkMember linkMember={linkMember}/>
                <Help help={help}/>
                <Address address={address}/>
            </div>
        </div>
        <footer className='mt-16 text-[.9rem]'>
            <p>&copy;HealtyResto, All can reserve</p>
        </footer>
    </div>
  )
}

export default Footer