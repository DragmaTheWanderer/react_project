import React from 'react';
import CellMt from '../Cell/Cell-mt.jsx'
import CellX from '../Cell/Cell-x.jsx'
import CellO from '../Cell/Cell-o.jsx'

const components = {
    CellMt: CellMt,
    CellX:  CellX, 
    CellO:  CellO, 
};

 const cellArray = [
        [{id:"1a", value:"CellO"}, {id:"2a", value:"CellX"}, {id:"3a", value:"CellMt"}],
        [{id:"1b", value:"CellMt"}, {id:"2b", value:"CellO"}, {id:"3b", value:"CellX"}],
        [{id:"1c", value:"CellX"}, {id:"2c", value:"CellMt"}, {id:"3c", value:"CellO"}]
    ];

function DynamicComponentRenderer({ type }) {
    try{
        //console.log('type:', type);
        let typeStr = type;
        const ComponentToRender = components[typeStr]; // Select component based on 'type' prop
        return <ComponentToRender />;
    } catch (error){
        const message = error.message || 'I broke!'
        return <span className="broken-component">{message}</span>
    }
}

function BaseBackground() {
   
    const boardStyle = {
        maxWidth: "475px",
    };
    const row1 = cellArray[0].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value}/>);   
    const row2 = cellArray[1].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value}/>);   
    const row3 = cellArray[2].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value}/>);   

  return (
    <div>
      <div className="row"  style={boardStyle}>
        
          {row1}
          {row2}
          {row3}
      </div>
    </div>

  );
}

export default BaseBackground;