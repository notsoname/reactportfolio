import React from 'react'
import './Home.css'
import photo from '../../assets/photo.JPG'

export default function Home() {

    const myAge = () => {
        let now = new Date()
        let age = now.getFullYear() - 2000
        return age
    }
    return (
        <div className='home'>
            <div className="home-header">
                Hello, my name is Asar Akhmetbekov.
                <br/> I'm a {myAge()} y.o. Frontend developer based in Almaty.
            </div>
            <img src={photo} alt='myPhoto' className='home-img'/>
        </div>
    )
}
