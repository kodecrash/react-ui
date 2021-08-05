import React, { Component } from "react";
import './Overlay.scss';

function Overlay(props) {

    return (
      <>
        <div onClick={props.touch} className={"overlay " + (props.show? 'd-block':'') }></div>
      </>

    )

}


export default Overlay;