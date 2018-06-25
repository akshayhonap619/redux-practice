/**
 * Created by Akshay on 6/3/2018.
 */
import React from 'react'
import {GridList,GridListTile,Paper,Card, withStyles} from '@material-ui/core'

const ImageGrid = (props)=>(


        <div>
            <GridList cols={props.cols} cellHeight={props.cellHeight}>
                {props.tileData.map((tile, i)=>(
                    <GridListTile key={i} cols={tile.cols || 1} rows={tile.rows || 1}>
                        <img src={tile.img} />
                   </GridListTile>
                ))}
            </GridList>
        </div>
)

export default ImageGrid