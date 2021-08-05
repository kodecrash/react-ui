import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';

function Table(props) {
    return (
      <>
       <BootstrapTable keyField={props.id} data={ props.data } 
       columns={ props.columns } 
       striped
       hover
       condensed/>
      </>

    )
}

export default Table;