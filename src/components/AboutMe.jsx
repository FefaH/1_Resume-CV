import { Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Modal, Typography } from '@mui/material'
import React from 'react'
import '../css/AboutMe.css'
import { EducationComponent } from './EducationComponent'
import { FooterContact } from './FooterContact'

export const AboutMe = () => {

  return (
    <>
      <div className='contentTitleAM'>
        <div className='textPositionAM'>
          <h1 className='animate__animated animate__fadeInDown'>--</h1>
          <h1 className='animate__animated animate__fadeInDown' style={{ marginBottom: '10%' }}>Acerca de mí</h1>
          <div className='aboutContent'>
            <div className='block1'>
              <span>Mi nombre es Federico, soy desarrollador, QA tester y músico.
                Soy QA tester con conocimientos en automation y
                poderes de desarrollador, trabaje para una
                empresa de software los últimos 2 años y creo
                que es momento de encontrar nuevos desafíos.
                Cuando tenia 5 años tuve mi primera PC y entendí
                que de alguna forma todo ese universo formaría
                parte de mi vida para siempre. Soy muy curioso y
                tengo mucha paciencia a la hora de resolver
                conflictos, por eso creo que me llevo bien con el
                código xD.
                Me gusta trabajar en equipo porque muchas
                cabezas piensan mejor que una a la hora de
                resolver un acertijo, y creo que los mejores
                proyectos se llevan a cabo de forma colaborativa.
              </span>
            </div>
            <div className='block2'>
              <span>

                Me considero un buen nexo a la hora de formar
                equipos de trabajo. Aunque también se
                desenvolverme con fluidez de forma
                independiente.
                En el ultimo proyecto que trabajé, tuve el placer de
                poder automatizar casos de prueba con Cypress y
                eso me llena de orgullo porque pude dar mis
                primeros pasos como automatizador, área en la
                que busco especializarme.
                Elegí la programación como carrera profesional
                porque creo que es un camino infinito de
                aprendizaje lo que me permite mantenerme
                siempre activo. A su vez es un rubro que me
                permite viajar y conocer a personas de todo el
                mundo.</span>
            </div>
          </div>
        </div>
      </div>
      <div className='textPositionED'>
        <h1 style={{ marginBottom: '10%', textAlign: 'center', marginRight: '20%' }}>Educación</h1>
      </div>
      <EducationComponent />
      <div className='contentTitleEMP'>
        <div className='textPositionEMP'>
          <h1 style={{ marginBottom: '10%' }}>Empleos</h1>
          <div className='employmentContent'>
            <div className='block1'>
              <h3>
                DESARROLLADOR Front-end
              </h3>
              <h5 style={{ opacity: '30%' }}>2020 - 2022</h5>
              <span style={{ opacity: '30%' }}>Phinx Lab, Buenos Aires, Argentina</span>
              <br />
              <Chip className='chip' label='Javascript' />
              <Chip className='chip' label='CSS' />
              <Chip className='chip' label='Typescript' />
              <Chip className='chip' label='React' />
              <Chip className='chip' label='Material UI' />
              <Chip className='chip' label='PostgreSQL' />
              <Chip className='chip' label='Bitbucket' />
              <Chip className='chip' label='DataGrip' />
              <Chip className='chip' label='Jira' />
              <Chip className='chip' label='Git' />
            </div>
            <div className='block2'>
              <h4 className='descriptionBlock'>
                Desarrollo front-end con Javascript, Typescript, CSS en React. Resolución de bugs front-end. Base de datos DataGrip. Sistema Operativos Windows.
              </h4>
            </div>
          </div>
          <div style={{ marginTop: '20%' }} className='employmentContent'>
            <div className='block1'>
              <h3>
                QA tester
              </h3>
              <h5 style={{ opacity: '30%' }}>2020 - 2022</h5>
              <span style={{ opacity: '30%' }}>Phinx Lab, Buenos Aires, Argentina</span>
              <br />
              <Chip className='chip' label='Cypress' />
              <Chip className='chip' label='SCRUM methodology' />
              <Chip className='chip' label='API test' />
              <Chip className='chip' label='Postman' />
              <Chip className='chip' label='JIRA' />
              <Chip className='chip' label='Excel' />
              <Chip className='chip' label='Mantis' />
              <Chip className='chip' label='QASE' />
            </div>
            <div className='block2'>
              <h4 className='descriptionBlock'>
                Construcción y ejecución de test suites manuales,
                Smoke test, pruebas funcionales y de regresión.
                Seguimiento, control y respuesta a las incidencias en
                JIRA.
                <br />
                Optimización de los procesos de trabajo y coordinación
                del equipo de QA.
                <br />
                Creación de informes mediante Excel y QASE.
                Presentación de módulos al cliente.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  )
}
