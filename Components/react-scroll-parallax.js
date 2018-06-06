import ReactDOM from "react-dom";
import React from 'react'
import {Avatar, GridList, GridListTile,Typography } from '@material-ui/core'
import ClassNames from './Avatar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonAppBar from './TitleBar'

import ImageGrid from './GridListPhoto'
import TextData from './TextData'

const tileData = [
       {
            img: "https://picsum.photos/500/200/?random",
             title: 'Image',
             author: 'author',
             cols: 2,
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
    <div className="container-fluid">
        <ButtonAppBar/>
        <div className="row">
            <div className="col-5">

                <br/>
                <ImageGrid tileData={profile} cellHeight={300}/>
                <Typography color="default" variant="display1"> John Doe™ </Typography>
                <TextData/>
            </div>
            <div className="col-7">
                <Typography align="center" color="default" variant="display1"> What do I look Like! </Typography>
                <ImageGrid tileData={tileData} cols={6} cellHeight={200}/>
                <Typography color="default" align="center" variant="display1"> Where is the party </Typography>

            </div>
        </div>

    </div>
)


ReactDOM.render(
   <Main/>
    ,document.getElementById('parallax')
)


