import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '',
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 55,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        typography: {
            fontFamily: [

            ],
    }
    },
    center: {
        margin: 'auto',
    },
    content: {
        textAlign: 'justify',
    }
})

const aboutUs = (props) => {
    const { classes } = props;

    const aboutUsMessage = "Codegami is a freelancing firm that prioritizes on the flexibility and adaptability of our members to ensure that client's requirements are met and delivered with minimal adjustments.";

    return(
        <section className={classes.root}>
            <Container>
                <Grid className={classes.center} container spacing={5}>
                        <Grid className={classes.center} item xs={12} md={4}>
                            <div className={classes.item}>
                            <img
                                className={classes.image}
                                src={require("../../onepirate-img/info.png")}
                                alt="aboutUs"
                            />
                            <Typography variant="h6" className={classes.title}>
                                About Us
                            </Typography>
                            <Typography variant="h5" className={classes.content}>
                                {aboutUsMessage}
                            </Typography>
                            </div>
                        </Grid>
                </Grid>
            </Container>
        </section>
    );
}

aboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(aboutUs);