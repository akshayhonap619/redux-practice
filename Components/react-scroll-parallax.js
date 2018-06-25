import ReactDOM from "react-dom";
import React from 'react'
import {Avatar, GridList, GridListTile,Typography,Card,Paper,Grid } from '@material-ui/core'
import ClassNames from './Avatar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonAppBar from './TitleBar'
import Map from './Map'
import ImageGrid from './GridListPhoto'
import TextData from './TextData'
import SingleItem from './Card'

const tileData = [
       {
            img: "https://picsum.photos/500/200/?random",
             title: 'Image',
             author: 'author',
             cols: 4,

      },
    {
        img: "https://picsum.photos/500/201/?random",
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: "https://picsum.photos/501/215/?random",
        title: 'Image',
        author: 'author',
        cols: 2,
    },{
        img: "https://picsum.photos/500/206/?random",
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: "https://picsum.photos/500/207/?random",
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: "https://picsum.photos/501/210/?random",
        title: 'Image',
        author: 'author',
        cols: 2,
    }]

const profile = [
    {
        img: "https://picsum.photos/200/200/?random",
        title: 'Image',
        author: 'author'

    }]

/*

const ImageGrid = (props)=>(
    <div>
        <Typography align="center" color="default" variant="display1"> What do I look Like! </Typography>
        <div>
        <GridList cols={6} cellHeight={200}>
            {tileData.map((tile, i)=>(
                <GridListTile key={i} cols={tile.cols || 1}>
                    <img src={tile.img} />
                </GridListTile>
            ))}
        </GridList>
        </div>
    </div>
)

*/


const Main = ()=>(
<div>
        <ButtonAppBar/>
    <Grid container={true}>
        <Grid item xs={2} sm={2} lg={2} xl={2} />
            <Grid item xs={8} sm={8} lg={8} xl={8}>

                <Typography align="center" color="default" variant="display1"> What do I look Like? </Typography>
                <ImageGrid tileData={tileData} cols={6} cellHeight={300}/>
            </Grid>
            <Grid item xs={2} sm={2} lg={2} xl={2} />
            <Grid item xs={2} sm={2} lg={2} xl={2} />
            <Grid item xs={8} sm={8} lg={8} xl={8}>

                <Typography align="center" color="default" variant="display1"> Where am I </Typography>
                <Paper>
              <Map/>
                </Paper>
                <Typography color="default" align="center" variant="display1"> Where is the party </Typography>

            </Grid>
        </Grid>
    <Grid spacing={16} container={true}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <SingleItem/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <SingleItem/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <SingleItem/>
        </Grid>
    </Grid>
</div>
)


ReactDOM.render(
   <Main/>
    ,document.getElementById('parallax')
)


