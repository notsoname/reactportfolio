import React from 'react'
import './Contacts.css'

export default function Contacts() {
    return (
        <div className='contacts'>
            <a href="https://github.com/asar2030">
                <img className='contacts-icon' src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github-icon.svg" alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/asar-akhmetbekov-09b96b201/">
                <img className='contacts-icon' src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/linkedin.svg" alt="linkedin"/>
            </a>
            <a href="https://www.instagram.com/asar_akhmetbekov/">
                <img className='contacts-icon' src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/instagram-icon.svg" alt="instagram"/>
            </a>
            <a href="https://t.me/asar_akhmetbekov">
                <img className='contacts-icon' src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="telegram"/>
            </a>
            <a className='contacts-tel' href="tel:77085361083">Telephone: 8(708)5361083</a>
        </div>
    )
}
