import React from "react";
import ReactDom from 'react-dom';

import './Model.css';

const BackDrop=props=>{
    const backdropClickHandler=()=>{
        props.onClose(false);
    }
    return(<div className="backdrop" onClick={backdropClickHandler}></div>);
}


const ModelOverlay=props=>{
    return(
        <div className="modeloverlay">{props.children}</div>
    );
}

const Model=props=>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop onClose={props.onClick}/>,document.getElementById('overlays'))}
            {ReactDom.createPortal(<ModelOverlay >{props.children}</ModelOverlay>,document.getElementById('overlays'))}
        </React.Fragment>
    );
}

export default Model;