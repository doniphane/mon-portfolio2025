
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Projects.css';

const initialProjects = [
    {
        title: 'Openlibrary',
        description: 'Récupération des livres par APi openlibrary.',
        languages: ['#HTML', '#CSS', '#JS'],
        githubRepo: 'https://github.com/doniphane/Ma-bibliotheque',
        githubLink: 'https://doniphane.github.io/Ma-bibliotheque/',
        image: `${process.env.PUBLIC_URL}/14.png`
    },
    {
        title: '🎥 Vidéothèque Ghibli',
        description: 'Récupération des flim via une API projet réalisé en formation',
        languages: ['#HTML', '#Tailwind CSS', '#JS'],
        githubLink: 'https://doniphane.github.io/Ma-videotech/',
        githubRepo: 'https://github.com/doniphane/Ma-videotech',
        image: `${process.env.PUBLIC_URL}/13.png`
    },
    {
        title: 'RandomUser',
        description: 'Récupération du nombre de user via une API projet réalisé en formation',
        languages: ['#HTML', '#CSS', '#JS'],
        githubLink: 'https://doniphane.github.io/Randomuser-api/',
        githubRepo: 'https://github.com/doniphane/Randomuser-api',
        image: `${process.env.PUBLIC_URL}/12.png`
    },
    {
        title: 'Calendrier Interactif',
        description: 'Projet Agenda Web - Calendrier Interactif',
        languages: ['#HTML', '#CSS', '#JS', '#PHP'],
        githubRepo: 'https://github.com/doniphane/Agenda',
        image: `${process.env.PUBLIC_URL}/11.png`
    },
    {
        title: 'Tropizzcartour',
        description: 'Site fictif de location de voiture',
        languages: ['#PHP', '#MYSQL', '#JS', '#Tailwind CSS'],
        githubRepo: 'https://github.com/doniphane/Tropizcartours',
        image: `${process.env.PUBLIC_URL}/4.png`
    },
    {
        title: 'Cybergardien',
        description: 'Projet fictif pour une association',
        languages: ['#HTML', '#CSS', '#JS'],
        githubLink: 'https://doniphane.github.io/Cyber-Gardien-Projet-Assos-Fictif-/',
        githubRepo: 'https://github.com/doniphane/Cyber-Gardien-Projet-Assos-Fictif-',
        image: `${process.env.PUBLIC_URL}/5.png`
    },
    {
        title: 'Thermos',
        description: 'Projet de récupération de température via une API',
        languages: ['#HTML', '#CSS', '#JS'],
        githubRepo: 'https://github.com/doniphane/Thermos',
        githubLink: 'https://doniphane.github.io/Thermos/',
        image: `${process.env.PUBLIC_URL}/6.png`
    },
    {
        title: 'RestCountry',
        description: 'Récupération du nombre de drapeaux via une API',
        languages: ['#HTML', '#CSS', '#JS'],
        githubRepo: 'https://github.com/doniphane/FLag',
        githubLink: 'https://doniphane.github.io/FLag/',
        image: `${process.env.PUBLIC_URL}/7.png`
    },

];

const Projects = () => {
    return (
        <div className="projects">
            <h2>Mes Projets Réalisé</h2>
            <div className="carteContainer">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {initialProjects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-card">
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p className="description">{project.description}</p>
                                    <div className="languages">
                                        {project.languages.map((lang, idx) => (
                                            <p key={idx} className="language">{lang}</p>
                                        ))}
                                    </div>
                                    <div className="project-buttons">
                                        {project.githubLink && (
                                            <Link to={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                <button className="btn-github">Voir le site</button>
                                            </Link>
                                        )}
                                        {project.githubRepo && (
                                            <Link to={project.githubRepo} target="_blank" rel="noopener noreferrer">
                                                <button className="btn-github">Voir sur GitHub</button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <br></br>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-navigation">
                    <button className="custom-swiper-button-prev">Précédent</button>
                    <button className="custom-swiper-button-next">Suivant</button>
                </div>
            </div>
        </div>
    );
}

export default Projects;

