import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 230,
    },
}));

const BookCardLists: React.FunctionComponent<{}> = props => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={3}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item  xs={3}>
                            <Paper className={classes.paper} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default BookCardLists;