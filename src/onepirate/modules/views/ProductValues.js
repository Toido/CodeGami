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
    backgroundColor: theme.palette.secondary.light,
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
    },
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  const webAppMessage = "Have a hand at the customization of your very own website. We'll provide you with the support you'll need when creating your website from the ground up.";
  const mobileAppMessage = "Take hold of your application. With the ever increasing number of phones, what better way to introduce your application by distributing it to the general public.";
  const bChainMessage = "Don't let the old technology chain you down. With BlockChain, you can manage your data in a more secure way. And with our service, we will help you start with a solid foundation.";

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={require("../../onepirate-img/productCurvyLines.png")}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("../../onepirate-img/webDev.png")}
                alt="webDev"
              />
              <Typography variant="h6" className={classes.title}>
                Web Development
              </Typography>
              <Typography variant="h5" marked="justify">
                {webAppMessage}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("../../onepirate-img/mobileDev.png")}
                alt="mobileDev"
              />
              <Typography variant="h6" className={classes.title}>
                Mobile Development
              </Typography>
              <Typography variant="h5">
                {mobileAppMessage}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("../../onepirate-img/blockChain.png")}
                alt="blockChain"
              />
              <Typography variant="h6" className={classes.title}>
                Blockchain Development
              </Typography>
              <Typography variant="h5" marked="justify">
                {bChainMessage}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
