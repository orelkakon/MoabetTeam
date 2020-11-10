import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShimonImage from '../Assets/shimonBD.png'
import YovelImage from '../Assets/yovelBD.png'
import OrelImage from '../Assets/orelBD.png'
import LipazImage from '../Assets/lipazBD.png'
import DvirImage from '../Assets/dvirBD.png'
import ItamarImage from '../Assets/itamarBD.png'
import LiorImage from '../Assets/liorBD.png'
import LironImage from '../Assets/lironBD.png'
import OfirImage from '../Assets/ofirBD.png'
import YitzchakImage from '../Assets/yitzchakBD.png'
import ShlomoImage from '../Assets/shlomoBD.png'
import AvielImage from '../Assets/avielBD.png'


let instagrams = new Map(
  [ 
    ['orel_kakon','https://www.instagram.com/orelkakon/'],
    ['shimon_rahamim','https://www.instagram.com/shimon_rahamim/'],
    ['yovel_elgabsi','https://www.instagram.com/yovelelgabsi/'],
    ['dvir_buzaglo','https://www.instagram.com/dvir_buzaglo11/'],
    ['lipaz_mekonan','https://www.instagram.com/lipaz_mekonen/'],
    ['itamar_eliyahu','https://www.instagram.com/itamar_89/'],
    ['lior_elbaz','https://www.instagram.com/lior_elbaz101/'],
    ['liron_levi','https://www.instagram.com/lironlevi12345/'],
    ['ofir_saharay','https://www.instagram.com/ofir_saharay11/'],
    ['yitzchak_ben_ezra','https://www.instagram.com/yitzchk_165/'],
    ['shlomo_ben_yair','https://www.instagram.com/shlomo_ben_yair/'],
    ['aviel_hagage','https://www.instagram.com/avielhagag1/']
  ]
);

let images = new Map(
  [
    ['orel_kakon', OrelImage],
    ['shimon_rahamim', ShimonImage],
    ['yovel_elgabsi', YovelImage],
    ['dvir_buzaglo', DvirImage],
    ['lipaz_mekonan', LipazImage],
    ['itamar_eliyahu',ItamarImage],
    ['lior_elbaz',LiorImage],
    ['liron_levi',LironImage],
    ['ofir_saharay',OfirImage],
    ['yitzchak_ben_ezra',YitzchakImage],
    ['shlomo_ben_yair',ShlomoImage],
    ['aviel_hagage',AvielImage]
  ]
)

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = (props) => {
  
const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.data.user}
          height="350"
          image={images.get(props.data.user)}
          title= {props.data.user}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.user.replaceAll("_"," ")}
            <br/>
            {props.data.birthday}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={instagrams.get(props.data.user)} style={{margin: 'auto',color: 'black'}}>MY Instagram</a>
      </CardActions>
    </Card>
  );
}
export default ImgMediaCard;