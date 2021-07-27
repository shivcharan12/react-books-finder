import React from 'react';
import {CircularProgress, makeStyles } from '@material-ui/core';

interface LoaderProps {
    show: boolean
}

const useStyle = makeStyles({
    root: {
        alignItems: "center", 
        display: "flex", 
        justifyContent: "center",
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
    }
})

export default function Loader(props: LoaderProps) {

    const classes = useStyle();

    return props.show ? (
        <div className={classes.root}>
            <CircularProgress color="inherit" />
        </div>
    ) : null;
}