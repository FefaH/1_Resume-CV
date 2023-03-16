import { IconButton, Toolbar, AppBar, Grid, Button, Menu, MenuItem, SpeedDial, SpeedDialIcon, SpeedDialAction, Dialog, DialogTitle, DialogContent, DialogContentText, Slide } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import HouseIcon from '@mui/icons-material/House';
import { Link } from 'react-router-dom';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const HomePage = ({ routePath, actionsDial }) => {

    const [equations, setEquations] = useState(null)
    const [openSkills, setOpenSkills] = useState(false);

    const open = Boolean(equations)

    const handleChange = (e) => {
        setEquations(e.currentTarget)
    }
    /*const handleSelect = (e) => {

        setrouteValue(e.target.value)
        if (routeValue === 1) {
            pathValue = routePath.pathSuma
            return pathValue
        }
        if (routeValue === 2) {
            pathValue = routePath.pathResta
            return pathValue
        }
        if (routeValue === 3) {
            pathValue = routePath.pathMultiplicacion
            return pathValue
        }
    }*/
    const handleClose = () => {
        setEquations(null)
    }

    return (

        <AppBar style={{ background: '#3142db' }}>
            <Grid style={{ margin: '-1%' }} container direction="row" display='flex' >
                <Link to='/'>
                    <div className="nav-item mx-0 mx-lg-1">
                        <div className="nav-link py-3 px-0 px-lg-3 rounded">
                            <Toolbar >
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    style={{ color: '#ffff' }}
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <HouseIcon/>
                                </IconButton>
                            </Toolbar>
                        </div>
                    </div>
                </Link>
                <div className="nav-item mx-0 mx-lg-1">
                    <div className="nav-link py-3 px-0 px-lg-3 rounded mt-3">
                        <Link to={routePath.pathProjects}>
                            <Button
                                style={{ color: '#ffff' }}
                                color='inherit'
                            >
                                Proyectos
                            </Button>
                        </Link>

                    </div>
                </div>
                
                <div className="navbar-nav ms-auto">
                    <div className="nav-item mx-0 mx-lg-1">
                        <div className="nav-link py-3 px-0 px-lg-3 rounded mt-3">
                            <Link to={routePath.pathAboutMe}>
                                <Button
                                    style={{ color: '#ffff' }}
                                    color='inherit'
                                >
                                    About
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="nav-item mx-0 mx-lg-1">
                    <div className="nav-link py-3 px-0 px-lg-3 rounded mt-3">
                        <Link to={routePath.pathContact}>
                            <Button
                                color='inherit'
                                style={{color: '#ffff'}}
                            >
                                Contact
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="nav-item mx-0 mx-lg-1">
                    <div className="nav-link py-3 px-0 px-lg-3 rounded mt-3">
                        <Link >
                            <Button
                                color='inherit'
                                style={{ color: '#ffff' }}
                                onClick={() => setOpenSkills(!openSkills)}
                            >
                                Skills
                            </Button>
                            <Dialog
                                open={openSkills}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => { setOpenSkills(false) }}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle>{"SKILLS"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        HTML 5 <br />
                                        CSS<br />
                                        Javascript<br />
                                        Typescript<br />
                                        React Native<br />
                                        Material UI<br />
                                        NodeJs<br />
                                        PostgreSQL<br />
                                        C/C++<br />
                                        Git<br />
                                        SCRUM methodology<br />
                                        JIRA<br />
                                        Figma<br />
                                        Bitbucket<br />
                                        DataGrip<br />
                                        Cypress<br />
                                        Selenium<br />
                                        Selenium IDE<br />
                                        Postman<br />
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
                        </Link>
                    </div>
                </div>
                {/*<div className="nav-item mx-0 mx-lg-1">
                    <div className="nav-link py-3 px-0 px-lg-3 rounded mt-4">
                            <SpeedDial
                                ariaLabel='SpeedDial basic example'
                                sx={{}}
                                icon={<SpeedDialIcon/>}
                                direction='down'
                            >
                             {
                                actionsDial.map((action) => (
                                    <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    />
                                ))
                             }   
                            </SpeedDial>
                    </div>
                </div>*/}
            </Grid>

        </AppBar>


    )
}
