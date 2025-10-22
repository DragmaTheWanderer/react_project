import React from 'react';
import { useState, useEffect  } from "react";
import cellMt from '../Cell/Cell-mt.jsx'
import cellX from '../Cell/Cell-x.jsx'
import cellO from '../Cell/Cell-o.jsx'

const components = {
    cellMt: cellMt,
    cellX:  cellX, 
    cellO:  cellO, 
};

const initalTurn = `cellO` 

function DynamicComponentRenderer({ type, id, turn, updateFn }) {
    try{
        //console.log('type:', type);
        let typeStr = type;
        let idStr = id;
        let turnStr = turn;
        const ComponentToRender = components[typeStr]; // Select component based on 'type' prop
        return <ComponentToRender id={idStr} value={typeStr} turn={turnStr} updateFn={updateFn} />;
    } catch (error){
        const message = error.message || 'I broke!'
        return <span className="broken-component">{message}</span>
    }
}

function BaseBackground() {
   
    //inital board layout
    let initalCells = [
        [{id:"1a", value:"cellMt"}, {id:"2a", value:"cellMt"}, {id:"3a", value:"cellMt"}],
        [{id:"1b", value:"cellMt"}, {id:"2b", value:"cellMt"}, {id:"3b", value:"cellMt"}],
        [{id:"1c", value:"cellMt"}, {id:"2c", value:"cellMt"}, {id:"3c", value:"cellMt"}]
    ];
    
    //loadof the inital array
    const [cellArray, setCellArray] = useState(initalCells);
    const [currentTurn, setCurTurn] = useState(initalTurn);
    const [winner, setWinner] = useState("");

    //cell updating
    function updateCell(idToUpdate, newValue) {
        
            setCellArray(
                cellArray.map(item => 
                     item.map(subItem =>
                        (subItem.id === idToUpdate ? { ...subItem, value: newValue } : subItem))
                )
            );
            updateTurn();
            
    };
    function updateTurn(){
        if(currentTurn==="cellO"){
                setCurTurn("cellX");
            } else {
                setCurTurn("cellO");
            }
    }
    function updateWinner(){
        let a = cellArray;
        let winStr = "";
        if(a[0][0].value !== "cellMt"){
            if(a[0][0].value === a[0][1].value && a[0][1].value === a[0][2].value){winStr = (a[0][0].value.replace("cell","")); }
            if(a[0][0].value === a[1][0].value && a[1][0].value === a[2][0].value){winStr = (a[0][0].value.replace("cell","")); }
        };
        if(a[1][1].value !== "cellMt"){
            if(a[1][1].value === a[0][1].value === a[2][1].value){winStr = (a[1][1].value.replace("cell","")); }
            if(a[1][1].value === a[1][0].value === a[1][2].value){winStr = (a[1][1].value.replace("cell","")); }
            if(a[0][0].value === a[1][1].value === a[2][2].value){winStr = (a[1][1].value.replace("cell","")); }
            if(a[1][1].value === a[0][2].value === a[2][0].value){winStr = (a[1][1].value.replace("cell","")); }
        };
        if(a[2][2].value !== "cellMt"){
            if(a[2][2].value === a[0][2].value === a[1][2].value){winStr = (a[2][2].value.replace("cell","")); }
            if(a[2][2].value === a[2][0].value === a[2][0].value){winStr = (a[2][2].value.replace("cell","")); }
        };

        setWinner(winStr);
    }

    useEffect(() => {
        updateWinner();
    });
    
    const boardStyle = {
        maxWidth: "475px",
    };

    //get the components bsed on the current layout.
    const row1 = cellArray[0].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value} id={rows.id} turn={currentTurn} updateFn={updateCell}/>);   
    const row2 = cellArray[1].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value} id={rows.id} turn={currentTurn} updateFn={updateCell}/>);   
    const row3 = cellArray[2].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value} id={rows.id} turn={currentTurn} updateFn={updateCell}/>);   

  return (
    <div>
      <div className="row"  style={boardStyle}>
        <p className="cellMarque">Current Turn: <span className={currentTurn}>{currentTurn.replace("cell","")}</span></p>
          {row1}
          {row2}
          {row3}
        <p className="cellMarque">WINNER: <span className={winner=="" ? "cellMt" : 'cell' + winner}>{winner}</span></p>
      </div>
    </div>

  );
}

export default BaseBackground;