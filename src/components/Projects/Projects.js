import React, { useState } from 'react'
import './Projects.css'

export default function Projects() {
    const data = [
        {name: 'Museam', html: true, react: false, link: 'https://notsoname.github.io/museum/', descr: 'Museam layout', technologies: 'HTML + JS + SCSS + Webpack'},
        {name: 'Momentum', html: true, react: false, link: 'https://notsoname.github.io/momentum/', descr: 'Momentum clone', technologies: 'HTML + JS + CSS'},
        {name: 'CSS slider', html: true, react: false, link: 'https://asar2030.github.io/cssMemSlider/cssMemSlider/', descr: 'Pure css slider', technologies: 'CSS'},
        {name: 'TODO APP', html: false, react: true, link: 'https://notsoname.github.io/todo/', descr: 'Simple todo list', technologies: 'React'},
        {name: 'Pulse', html: true, react: false, link: 'https://notsoname.github.io/pulse/pulse/', descr: 'layout', technologies: 'HTML + JS + CSS'},
        {name: 'FMC', html: true, react: false, link: 'https://notsoname.github.io/FMC/', descr: 'layout', technologies: 'HTML + JS + CSS'},
        {name: 'Movie APP', html: false, react: true, link: 'https://notsoname.github.io/movieAPP/', descr: 'Movie APP where you can search movies and cartoons', technologies: 'React + Hooks + TMDB API'},
        {name: 'Weather APP', html: false, react: true, link: 'https://notsoname.github.io/weatherApp/', descr: 'Weather APP where you can find out the weather forecast', technologies: 'React + OpenWeatherMap API'},
    ]
    const [filter, setFilter] = useState('all')

    const filterProjects = (items, filter) => {
        switch (filter) {
            case 'html':
                return items.filter(item => item.html);
            case 'react':
                return items.filter(item => item.react);
            default:
                return items
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter)
    }
    const visibleData = filterProjects(data, filter);

    const buttonsData = [
        {name: 'all', label: 'ALL'},
        {name: 'html', label: 'HTML + CSS + JS'},
        {name: 'react', label: 'React'}
    ]
    return (
        <div>
            <div className='projects-btns'>
                {buttonsData.map((items, i) => {
                        const active = filter === items.name
                        const clazz = active ? 'projects-select-active' : 'projects-select'
                    return (
                    <button key={i} className={`projects-select ${clazz}`} onClick={() => onFilterSelect(items.name)}>{items.label}</button>
                    )
                })}
            </div>
            <div className='projects'>
            {visibleData.map(item => {
                return <div className='projects-wrapper'>
                    <h2 className='projects-header'>{item.name}</h2>
                    <div className='projects-descr'>{item.descr}</div>
                    <div className='projects-tech'>{item.technologies}</div>
                    <a href={item.link}>{item.link}</a>
                </div>
            })}
            </div>
        </div>
    )
}
