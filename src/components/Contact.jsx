import React, { useRef } from 'react'
import '../css/Contact.css'
import { FooterContact } from './FooterContact'
import CodeQR from '../images/CodeQR.png'
import { useIntersection } from './useIntersection'

export const Contact = () => {

  const ref = useRef()
  const inViewport = useIntersection(ref, '-100px');

  return (
    <>
      <div className='contentTitleCT'>
        <div className='textPositionCT'>
          <div className='titleContent'>
            <div className='textTitleContent' ref={ref}>
              <h1 className='animate__animated animate__fadeInDown'>--</h1>
              <h1 className='animate__animated animate__fadeInDown' style={{ marginBottom: '10%' }}>Trabaja conmigo</h1>
            </div>
            <div className='codeQRcontent'>
              <img className='animate__animated animate__lightSpeedInRight animate__delay-1s' style={{ width: '40%' }} src={CodeQR} alt="" />
            </div>

          </div>
          <div className='contactContent'>
            <div>
              <span>Hey, ¿cómo estás? Solo quería decirte que estoy en búsqueda de trabajo y 
                disponible para nuevas oportunidades. Si estas buscando un Desarrollador Front-end o
                un QA tester con conocimientos en automation, hacemelo saber 🦾😁🚀. Estoy ansioso 
                por formar parte de un equipo de trabajo y contribuir al logro de los objetivos de la empresa.
                Siempre estoy listo para enfrentar nuevos desafíos 🐱‍👤.
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>


  )
}
