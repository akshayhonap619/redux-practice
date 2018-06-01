import ReactDOM from "react-dom";
import React from 'react'
import {Avatar, GridList, GridListTile } from '@material-ui/core'
import ClassNames from './Avatar'

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

const ImageGrid = (props)=>(
    <div style={{
        width : "60%",
        paddingLeft : "640px"
    }}>
        <h1>Images </h1>
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



const AvatarStyles={
    width : 160,
    height :180
}


ReactDOM.render(
    <div> Hello World
        <Avatar styles={AvatarStyles} src="https://picsum.photos/50/50/?random"></Avatar>
        <ClassNames />
        <ImageGrid/>
    </div>,
    document.getElementById('parallax')
)


