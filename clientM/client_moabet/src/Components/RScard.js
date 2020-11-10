import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShimonImage from '../Assets/shimon.png'
import YovelImage from '../Assets/yovel.png'
import OrelImage from '../Assets/orel.png'
import LipazImage from '../Assets/lipaz.png'
import DvirImage from '../Assets/dvir.png'
import ItamarImage from '../Assets/itamar.png'
import LiorImage from '../Assets/lior.png'
import LironImage from '../Assets/liron.png'
import OfirImage from '../Assets/ofir.png'
import YitzchakImage from '../Assets/yitzchak.png'
import ShlomoImage from '../Assets/shlomo.png'
import AvielImage from '../Assets/aviel.png'

let images = new Map(
    [
        ['orel_kakon', OrelImage],
        ['shimon_rahamim', ShimonImage],
        ['yovel_elgabsi', YovelImage],
        ['dvir_buzaglo', DvirImage],
        ['lipaz_mekonan', LipazImage],
        ['itamar_eliyahu', ItamarImage],
        ['lior_elbaz', LiorImage],
        ['liron_levi', LironImage],
        ['ofir_saharay', OfirImage],
        ['yitzchak_ben_ezra', YitzchakImage],
        ['shlomo_ben_yair', ShlomoImage],
        ['aviel_hagage', AvielImage]
    ]
)

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const RScard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.data.user}
                    height="350"
                    image={images.get(props.data.user)}
                    title={props.data.user}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.data.user.replaceAll("_", " ")}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {
                            (props.data.user === 'orel_kakon' || props.data.user === 'dvir_buzaglo' || props.data.user === 'liron_levi' || props.data.user === 'yitzchak_ben_ezra') ?
                                (props.data.user === 'orel_kakon' ?
                                    "In a Relationship with Hadar Ivgi" :
                                    (props.data.user === 'dvir_buzaglo' ?
                                        "In a Relationship with Ron Azran" :
                                        (props.data.user === 'yitzchak_ben_ezra' ?
                                            "In a Relationship with Ron Tzoobery" :
                                            "In a Relationship with Zohar Levi"
                                        )
                                    )
                                ) :
                                "Single"
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default RScard