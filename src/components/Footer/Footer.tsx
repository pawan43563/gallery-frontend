

import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss'
import logo from '../Logo/Logo.png'

interface footerProps{
    companyName?:string,
    footer_logo:{
    imgSrc:string,
      alt:string,
    }
    footerLinks:{
        linkId:string,
        linkHref:string,
        linkIcon:string
    }[]
}

const footerData:footerProps={

    footer_logo:{
        imgSrc:logo,
        alt:'footer Logo'
    },
    footerLinks:[
        {
            linkId:'link1',
            linkHref: '#',
            linkIcon: 'fa-twitter'
        },
        {
            linkId:'link2',
            linkHref: '#',
            linkIcon: 'fa-instagram'
        },
        {
            linkId:'link2',
            linkHref: '#',
            linkIcon: 'fa-facebook'
        },
        {
            linkId:'link4',
            linkHref: '#',
            linkIcon: 'fa-github'
        }
    ]
}

const Footer: React.FC=()=>{
        let {footer_logo ,footerLinks} = footerData

        
        return(
        <footer className={styles.footer}>
             <div className={styles.companyLogo}>
                <img src={footer_logo.imgSrc} alt={footer_logo.alt} />
            </div>
            <div>
                <p className={styles.footerLinkHead}>{}</p>
                <div className={styles.footerLink}>
                    {footerLinks.map((link)=>{
                        return (
                        <a key={link.linkId} href={link.linkHref} target={'_blank'}>
                            <i className={`fa ${link.linkIcon}`}></i>
                        </a>)
                    })}
                </div>
            </div>
           
        </footer>
    )
}

export default Footer;
