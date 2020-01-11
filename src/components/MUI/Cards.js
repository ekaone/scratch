import React, {useState} from 'react';
import { MuiThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    top: '50%',
    left: '50%',
    borderRadius: 10,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    backgroundSize: '200%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: '0.6s',
    backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
    '&:hover': {
      backgroundPosition: 'right'
    }
  }
});


export default function MediaCard() {

  const Default = () => (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Default
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          More are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </>
  )

  const Share = () => (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Share
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </>
  )

  const More = () => (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          More
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          More are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </>
  )

  const classes = useStyles();
  const [component, setComponent] = useState(<Default />)

  const handleClick = (c) => {
    switch (c) {
      case 'Share':
        setComponent(<Share />)
        break;
      case 'More':
        setComponent(<More />)  
        break;
    }
  }

  return (
    <>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Card className={classes.card}>
          {component}  
          <CardActions>
            <Button variant="outlined" onClick={() => handleClick('Share')} size="small" color="secondary">
              Share
            </Button>
            <Button variant="outlined" onClick={() => handleClick('More')} size="small" color="secondary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </>
  );
}
