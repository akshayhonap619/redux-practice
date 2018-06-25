/**
 * Created by Akshay on 6/21/2018.
 */
import React from 'react'
import {Card,CardContent, withStyles,CardHeader,CardMedia,Paper,Typography,Avatar,CardActions,Button} from '@material-ui/core'
import {FavoriteIcon} from '@material-ui/icons'

const PriceAvatar = (props)=>(
        <Avatar style={{height:"70px", width : "70px", backgroundColor:"limegreen"}}>3200$</Avatar>
)

 const SingleItem = (props)=>(
    <Card raised={true}>
        <CardHeader /*avatar={<PriceAvatar/>}*/ title="1 spot in 2 bed 2 bath on 39 Hemenway Street. " subheader="23th July 2018">

        </CardHeader>
        <CardMedia image="https://picsum.photos/500/206?random" title="Click here for more info" style={{height:"300px"}}>

            <Card raised={true} style={{backgroundColor : "limegreen", width:"70px" , height:"70px", borderRadius:"35px"}}>
                <Typography align="center" variant="title" style={{color:"white", lineHeight:"70px"}}>2300$ </Typography>
            </Card>
        </CardMedia>
            <CardContent>
                {/*<Typography variant="body1">Lorem ipsum true true default function yield with static </Typography>*/}
            </CardContent>
        <CardActions  disableActionSpacing>
            <Button color="secondary">LEARN MORE </Button>
        </CardActions>

    </Card>
)

export default SingleItem;
