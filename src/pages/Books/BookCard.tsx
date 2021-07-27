import React from 'react';
import { makeStyles,Card, CardContent, Typography } from '@material-ui/core';

interface BookCardProps {
    book_title: string,
    book_publication_year: number,
    book_publication_country: string,
    book_publication_city: string,
    book_pages: string,
    book_author: [],
    id: number
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 130
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const BookCard: React.FunctionComponent<BookCardProps> = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="body2" component="p">{props.book_title}</Typography>
                <Typography variant="body2" component="p">{props.book_publication_country}, {props.book_publication_city} {props.book_publication_year}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{props.book_author.join(', ')}</Typography>
            </CardContent>
        </Card>
    );
}


export default BookCard;