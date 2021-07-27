import React from 'react';
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';


interface BookPaginationProps {
    currentPage: number,
    totalCount: number,
    handleChange: (event: any, value: any) => void
} 

export default function BookPagination(props: BookPaginationProps) {
    return (
        <Grid xs={12} item container direction="column" alignItems="center" justifyContent="center">
            <Pagination count={props.totalCount} page={props.currentPage} onChange={props.handleChange} />
        </Grid>
    );
}