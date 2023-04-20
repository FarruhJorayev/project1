import React from "react";
import styled from "styled-components"


const header = styled('div')`
    background-color: #212121;
    width: 100%;
    height: 100px;
`

function header (){
    return(
        <div className="header">
            <div className="header-img">
            <img src="image.png" alt="" />
            </div>
            <div className="header-text">
                <h2>Phones</h2>
            </div>
        </div>
    )
}