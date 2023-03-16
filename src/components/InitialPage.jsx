import '../css/InitialPage.css'
import 'animate.css'
import React, { useRef } from 'react'
import Background1 from '../images/Background1.jpg'
import ImagenCV from '../images/ImagenCV.jpg'
import { FooterContact } from './FooterContact'
import { useIntersection } from './useIntersection'

//Buscabamos un font copado
export const InitialPage = () => {

    const ref = useRef();
    const ref2 = useRef()
    const inViewport = useIntersection(ref, '-100px');
    const inViewport2 = useIntersection(ref2, '-30px');

    return (
        <>
            <div className='contentImg'>
                <img src={Background1} style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                }} />
                <div className='contentName'>
                    <h2 id='fefa' style={{ marginLeft: '20%' }} className='animate__animated animate__fadeInDown'>Horita Federico</h2>
                    <h2 className='animate__animated animate__fadeInDown'>DEVELOPER Y QA TESTER</h2>
                </div>

            </div>
            <div className='contentImg' ref={ref}>
                <h1 className={inViewport && 'animate__animated animate__fadeIn'}>"Soy desarrollador y QA tester con dos años de experiencia en el mundo del
                    software. Mis inicios en el desarrollo estuvieron orientados a la
                    programación de videojuegos."
                </h1>
            </div>

            <div className='contentMySelf'>
                <img src={ImagenCV} className='imgPosition' />
                <div className='textPosition' ref={ref2}>
                    <h1 className={inViewport2 && 'animate__animated animate__fadeInLeft'}>--</h1>
                    <h1 className={inViewport2 && 'animate__animated animate__fadeInLeft'} style={{ marginBottom: '10%' }}>Un poco sobre mí</h1>
                    <span style={{ marginBottom: '5%', display: 'flex' }}>Participé como desarrollador y QA tester en una gran cantidad de
                        proyectos como miEscuela, una aplicación de escritorio construida con
                        React (Javascript), y Ster, un E-Commerce de escritorio y móvil construida
                        con React y React Native (Typescript), siempre trabajando bajo
                        Metodologías Scrum.
                    </span>
                    <br />
                    <span style={{ marginBottom: '5%', display: 'flex' }}>
                        Tengo experiencia coordinando y trabajando en equipo, también
                        realizando informes de análisis y seguimiento de tareas para optimizar
                        tiempos y procesos.
                    </span>
                    <br />
                    <span style={{ marginBottom: '5%', display: 'flex' }}>
                        Mi objetivo en esta nueva etapa es poder aportar mis conocimientos
                        trabajando en equipo para construir nuevos proyectos y vivir experiencias
                        enriquecedoras.
                    </span>
                </div>
            </div>
            <FooterContact />



        </>
    )
}
