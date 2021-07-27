import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from '@material-ui/core';
import BookCard from './BookCard';
import BookPagination from "./BookPagination";
import api from "../../api";
import Loader from "./Loader";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import qs from 'query-string';
import Ipage from "../../interfaces/page";
import SearchBox from './SearchBox';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        padding: 30
    },
}));

interface IParams {
    page: number,
    itemsPerPage: number
    filters?: any
}

const Books: React.FunctionComponent<Ipage & RouteComponentProps<any>> = props =>  {

    const queryString = qs.parse(props.location.search);
    
    const classes = useStyles();
    const [data, setData] = useState<[]>([]);
    const [totalCount, setCount] = useState<number>(0);
    const [currentPage, setPage] = useState<number>(Number(queryString.page) || 1);
    const [isLoading, setLoader] = useState<boolean>(true);
    const [searchKeyword, setSearchKeyword] = useState<any>('');

    const handleSearchBoxChange = (event: any) => {
        setSearchKeyword(event.target.value);
        setPage(1);
    }

    const itemsPerPage =  Number(queryString.perPage) || 10;
    const handleChange = (event: any, value: any) => {      
        
        if (queryString.page)
        {
            queryString.page = value; 
            
            props.history.push({
                pathname: props.location.pathname,
                search: `?${qs.stringify(queryString)}`
            });
        }
        
        setPage(value);
        setLoader(true);
    }

    useEffect(() => {
        const params: IParams = {
            page: currentPage,
            itemsPerPage: itemsPerPage
        };

        if (searchKeyword)
        {
            params.filters = [{
                type: "all", 
                values: [searchKeyword]
            }];
        }


        api({
            'method': "POST",
            'url' : '/api/books',
            'data': params
        }).then((response) => {
            setLoader(false);
            setData(response.data.books);
            setCount(Math.ceil(response.data.count / params.itemsPerPage))
        });
    }, [currentPage, itemsPerPage, searchKeyword]);


    return (
        <>
            <Loader show={isLoading}/>

            <Grid container className={classes.root}>
                <SearchBox handleChange={handleSearchBoxChange} />
                <Grid item xs={12}>
                    <h1>{props.name}</h1>
                    <Grid container justifyContent="center" spacing={3}>
                        {!isLoading ? (data.length > 0 ? data.map((row, index ) => {
                            return (
                                <Grid key={index} item xs={12} sm={4} >
                                    <BookCard {...row} />
                                </Grid>
                            )
                        }) : <h4>No records found</h4>) : null}

                        {data.length > 0 && <BookPagination handleChange={handleChange} totalCount={totalCount} currentPage={currentPage}/>}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default withRouter(Books);