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
              <h1 className='animate__animated animate__fadeInDown' style={{ marginBottom: '10%' }}>Work with me</h1>
            </div>
            <div className='codeQRcontent'>
              <img className='animate__animated animate__lightSpeedInRight animate__delay-1s' style={{ width: '40%' }} src={CodeQR} alt="" />
            </div>

          </div>
          <div className='contactContent'>
            <div>
              <span>Estoy disponible para trabajar o también puede hablar
                conmigo sobre la contratación de todo el equipo de Arnold Davidson Architecture.
                Juntos, podemos abordar proyectos de todos los tamaños. Escuchamos a nuestros clientes
                y sus necesidades de todo corazón, al mismo tiempo que ponemos nuestro toque innovador
                en cada proyecto. Hablemos.

              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>


  )
}
