/**
 * Created by Akshay on 6/16/2018.
 */
import React from 'react'
import {Paper} from '@material-ui/core'

const key = process.env.TEMP
const url = "https://www.google.com/maps/embed/v1/place?key="+""+"&q=39+Hemenway+Street,Boston+WA"

 const Map = (props)=>(
     <Paper>
         <iframe
             width="100%"
             height={400}
             frameBorder={0} //style="border:0"
             src={url}>
             {console.log(process.env.GoogleAPI)}
         </iframe>
     </Paper>
 )

export default Map