import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import SecondaryButton from '../../components/form-elements/theme-buttonround';
import bannerImage from '../../assets/images/h1.png'
import { Animated } from "react-animated-css";
import '../../assets/styles/home.css'



const useStyles = makeStyles(theme => ({

  banner: {
    height: '100vh',
    backgroundColor: '#D1F0F3',

  },
  banner_heading: {
    fontWeight: 700,
    color: '#4e4039',
    fontSize: '3rem',
    lineHeight:1.2
  },
  


}))

const Home = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
    <div className={classes.banner}>
      <Grid container style={{ marginTop: '5rem' }} justify="center" alignItems="center">
        <Grid item style={{ text: 'center', alignItems: 'center' }} md={9} >
          <Grid item container style={{ marginTop: '11rem' }}>
            <Grid item md={6}>
              <Typography className={classes.banner_heading}>
                We give you the tools to carve your path to success
              </Typography>
           

              <Typography variant="subtitle1">

              Upskill yourself with industry specific courses employers are looking for in a candidate
                    
              </Typography>

              <div style={{ marginTop:'3rem'}}>
               

              <SecondaryButton label="Apply Now" />
                </div> 

            </Grid>

            <Grid item md={6}>
              <Grid container item>
              

              <img src={bannerImage} className={classes.animation} alt="" width='100%' />
               
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

    </div >

    {/* Course Section */}


    <Grid container  style={{marginTop:'5rem'}} >
      <Grid container item justify="center">
      <Typography className="section_heading">
      Course Modules
      </Typography>
      </Grid>
    </Grid>

    </React.Fragment>
  );
}

export default Home;
