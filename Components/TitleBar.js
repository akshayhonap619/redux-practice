import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div >
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Title
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default withStyles(styles)(ButtonAppBar);