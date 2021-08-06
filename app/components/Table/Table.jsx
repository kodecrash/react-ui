import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

function Table(props) {
    return (
      <>
       <BootstrapTable 
       bootstrap4
       keyField={props.id} data={ props.data } 
       columns={ props.columns } 
       striped
       hover
       condensed
       pagination={ paginationFactory(props.config) }/>
      </>

    )
}

export default Table;