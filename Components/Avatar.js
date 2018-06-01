import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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

        <Avatar className={props.classes.button} src="https://picsum.photos/501/215/?random"/>
    );
}



export default withStyles(styles)(ClassNames);
