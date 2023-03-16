import { Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import CertificadoEANTMaquetacion from '../images/CertificadoEANTMaquetacion.png'
import CertificadoEANTFullStack from '../images/CertificadoEANTFullStack.png'
import CertificadoKeepCodingCypress from '../images/CertificadoKeepCodingCypress.png'
import CertificadoUTNReact from '../images/CertificadoUTNReact.png'
import CertificadoEducacionItSelenium from '../images/CertificadoEducacionItSelenium.png'
import CertificadoUDEMYApiTest from '../images/CertificadoUDEMYApiTest.png'
import CertificadoUTNSql from '../images/CertificadoUTNSql.png'

export const EducationComponent = () => {
    const [openModal1, setOpenModal1] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)
    const [openModal4, setOpenModal4] = useState(false)
    const [openModal5, setOpenModal5] = useState(false)
    const [openModal6, setOpenModal6] = useState(false)
    const [openModal7, setOpenModal7] = useState(false)
    return (
        <Grid container item xs={12} sm={6} lg={12} style={{marginBottom: '5%'}} >
            <Grid  container item xs={12} sm={12} lg={6} className='cuadro'>
                <Card style={{backgroundColor: "#d0dcec"}} className='roots' elevation={5}>
                    <CardContent >
                        <Typography variant="h5" component="h5" className='Institute'>
                            EANT
                        </Typography>
                        <Typography component="h3" className='puesto'>
                            Maquetación Digital con HTML5 y CSS3
                        </Typography>
                        <CardActions className='cardButton'>
                            <Button onClick={() => setOpenModal1(!openModal1)} size="small" color="primary">
                                Ver
                            </Button>
                            <Modal
                                open={openModal1}
                                onClose={() => setOpenModal1(false)}
                            >
                                <Grid
                                    style={{
                                        justifyContent: 'space-evenly',
                                        display: 'flex', marginTop: '5%',
                                        marginLeft: '10%',
                                        marginRight: '10%'
                                    }}>
                                    <CardMedia
                                        image={CertificadoEANTMaquetacion}
                                        style={{ height: 500, width: 720, }}
                                    />
                                </Grid>
                            </Modal>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className='cuadro'>
                <Card style={{backgroundColor: "#d0dcec"}} className='roots' elevation={5}>
                    <CardContent>
                        <Typography variant="h5" component="h5" className='Institute'>
                            EANT
                        </Typography>
                        <Typography component="h3" className='puesto'>
                            Programación Fullstack con JavaScript
                        </Typography>
                        <CardActions className='cardButton'>
                            <Button onClick={() => setOpenModal4(!openModal4)} size="small" color="primary">
                                Ver
                            </Button>
                            <Modal
                                open={openModal4}
                                onClose={() => setOpenModal4(false)}
                            >
                                <Grid
                                    style={{
                                        justifyContent: 'space-evenly',
                                        display: 'flex', marginTop: '5%',
                                        marginLeft: '10%',
                                        marginRight: '10%'
                                    }}>
                                    <CardMedia
                                        image={CertificadoEANTFullStack}
                                        style={{ height: 500, width: 720, }}
                                    />
                                </Grid>
                            </Modal>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className='cuadro'>
                <Card style={{backgroundColor: "#d0dcec"}} className='roots' elevation={5}>
                    <CardContent>
                        <Typography variant="h5" component="h5" className='Institute'>
                            UTN
                        </Typography>
                        <Typography component="h3" className='puesto'>
                            Desarrollo en React JS
                        </Typography>
                        <CardActions className='cardButton'>
                            <Button onClick={() => setOpenModal2(!openModal2)} size="small" color="primary">
                                Ver
                            </Button>
                            <Modal
                                open={openModal2}
                                onClose={() => setOpenModal2(false)}
                            >
                                <Grid
                                    style={{
                                        justifyContent: 'space-evenly',
                                        display: 'flex', marginTop: '5%',
                                        marginLeft: '10%',
                                        marginRight: '10%'
                                    }}>
                                    <CardMedia
                                        image={CertificadoUTNReact}
                                        style={{ height: 500, width: 720, }}
                                    />
                                </Grid>
                            </Modal>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className='cuadro'>
                <Card style={{backgroundColor: "#d0dcec"}} className='roots' elevation={5}>
                    <CardContent>
                        <Typography variant="h5" component="h5" className='Institute'>
                            KeepCoding
                        </Typography>
                        <Typography component="h3" className='puesto'>
                            Testing automation con Cypress
                        </Typography>
                        <CardActions className='cardButton'>
                            <Button onClick={() => setOpenModal3(!openModal3)} size="small" color="primary">
                                Ver
                            </Button>
                            <Modal
                                open={openModal3}
                                onClose={() => setOpenModal3(false)}
                            >
                                <Grid
                                    style={{
                                        justifyContent: 'space-evenly',
                                        display: 'flex', marginTop: '5%',
                                        marginLeft: '10%',
                                        marginRight: '10%'
                                    }}>
                                    <CardMedia
                                        image={CertificadoKeepCodingCypress}
                                        style={{ height: 500, width: 720, }}
                                    />
                                </Grid>
                            </Modal>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className='cuadro'>
                <Card style={{backgroundColor: "#d0dcec"}} className='roots' elevation={5}>
                    <CardContent>
                        <Typography variant="h5" component="h5" className='Institute'>
                            EducacionIT
                        </Typography>
                        <Typography component="h3" className='puesto'>
                            Testing Automation con Selenium
                        </Typography>
                        <CardActions className='cardButton'>
                            <Button onClick={() => setOpenModal5(!openModal5)} size="small" color="primary">
                                VER
                            </Button>
                            <Modal
                                open={openModal5}
                                onClose={() => setOpenModal5(false)}
                            >
                                <Grid
                                    style={{
                                        justifyContent: 'space-evenly',
                                        display: 'flex', marginTop: '5%',
                                        marginLeft: '10%',
                                        marginRight: '10%'
                                    }}>
                                    <CardMedia
                                        image={CertificadoEducacionItSelenium}
                                        style={{ height: 500, width: 720, }}
                                    />
                                </Grid>
                            </Modal>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className='cuadro'>
                <Card style={{backgroundColor: "#d0dcec"}} className='roots' elevation={5}>
                    <CardContent>
                        <Typography variant="h5" component="h5" className='Institute'>
                            Udemy
                        </Typography>
                        <Typography component="h3" className='puesto'>
                            API Testing con Postman
                        </Typography>
                        <CardActions className='cardButton'>
                            <Button onClick={() => setOpenModal6(!openModal6)} size="small" color="primary">
                                VER
                            </Button>
                            <Modal
                                open={openModal6}
                                onClose={() => setOpenModal6(false)}
                            >
                                <Grid
                                    style={{
                                        justifyContent: 'space-evenly',
                                        display: 'flex', marginTop: '5%',
                                        marginLeft: '10%',
                                        marginRight: '10%'
                                    }}>
                                    <CardMedia
                                        image={CertificadoUDEMYApiTest}
                                        style={{ height: 500, width: 720, }}
                                    />
                                </Grid>
                            </Modal>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container item xs={12} sm={12} lg={6} className='cuadro'>
                <Card style={{backgroundColor: "#d0dcec"}} className='roots' elevation={5}>
                    <CardContent>
                        <Typography variant="h5" component="h5" className='Institute'>
                            UTN
                        </Typography>
                        <Typography component="h3" className='puesto'>
                            Programación en Base de Datos Oracle - Lenguaje PL-SQL
                        </Typography>
                        <CardActions className='cardButton'>
                            <Button onClick={() => setOpenModal7(!openModal7)} size="small" color="primary">
                                VER
                            </Button>
                            <Modal
                                open={openModal7}
                                onClose={() => setOpenModal7(false)}
                            >
                                <Grid
                                    style={{
                                        justifyContent: 'space-evenly',
                                        display: 'flex', marginTop: '5%',
                                        marginLeft: '10%',
                                        marginRight: '10%'
                                    }}>
                                    <CardMedia
                                        image={CertificadoUTNSql}
                                        style={{ height: 500, width: 720, }}
                                    />
                                </Grid>
                            </Modal>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
