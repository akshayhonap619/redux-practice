import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import '../css/style.css'

// We can inject some CSS into the DOM.
const styles = {
    button: {
        height : 200,
        width : 200,
        border : 20
    },
};

function ClassNames(props) {
    console.log()
    return (
        <div className="avatar-position">
        <Avatar className={props.classes.button} src="https://picsum.photos/501/215/?random"/>
        </div>
    );
}



export default withStyles(styles)(ClassNames);
