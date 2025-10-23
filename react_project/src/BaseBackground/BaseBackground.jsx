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

function DynamicComponentRenderer({ type, id, turn, winner, updateFn }) {
    try{
        //console.log('type:', type);
        let typeStr = type;
        let idStr = id;
        let turnStr = turn;
        let winnerStr = winner;
        const ComponentToRender = components[typeStr]; // Select component based on 'type' prop
        return <ComponentToRender id={idStr} value={typeStr} turn={turnStr} winner={winnerStr} updateFn={updateFn} />;
    } catch (error){
        const message = error.message || 'I broke!'
        return <span className="broken-component">{message}</span>
    }
}

function BaseBackground() {
   
    //inital board layout
    let initalCells = [
        [{id:"a1", value:"cellMt"}, {id:"a2", value:"cellMt"}, {id:"a3", value:"cellMt"}],
        [{id:"b1", value:"cellMt"}, {id:"b2", value:"cellMt"}, {id:"b3", value:"cellMt"}],
        [{id:"c1", value:"cellMt"}, {id:"c2", value:"cellMt"}, {id:"c3", value:"cellMt"}]
    ];
    
    //loadof the inital array
    const [cellArray, setCellArray] = useState(initalCells);
    const [currentTurn, setCurTurn] = useState(initalTurn);
    let [winner, setWinner] = useState("");
    let [xScore, setXScore] = useState(0);
    let [oScore, setOScore] = useState(0);

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
            if(a[1][1].value === a[0][1].value && a[1][1].value === a[2][1].value){winStr = (a[1][1].value.replace("cell","")); }
            if(a[1][1].value === a[1][0].value && a[1][1].value === a[1][2].value){winStr = (a[1][1].value.replace("cell","")); }
            if(a[1][1].value === a[0][0].value && a[1][1].value === a[2][2].value){winStr = (a[1][1].value.replace("cell","")); }
            if(a[1][1].value === a[0][2].value && a[1][1].value === a[2][0].value){winStr = (a[1][1].value.replace("cell","")); }
        };
        if(a[2][2].value !== "cellMt"){
            if(a[2][2].value === a[0][2].value && a[2][2].value === a[1][2].value){winStr = (a[2][2].value.replace("cell","")); }
            if(a[2][2].value === a[2][0].value && a[2][2].value === a[2][0].value){winStr = (a[2][2].value.replace("cell","")); }
        };

        setWinner(winStr);
        if (winStr==="O") { setOScore(oScore+1); }
        if (winStr==="X") { setXScore(xScore+1); }
    }

    function resetGame(){
        setCellArray(initalCells);
        setCurTurn(initalTurn);
        setWinner("");
        setXScore(0);
        setOScore(0);
        }
    function newGame(){
        setCellArray(initalCells);
        setWinner("");
    }

    useEffect(() => {
        updateWinner();
    }, [cellArray]);
    
    const boardStyle = {
        maxWidth: "475px",
    };

    //get the components bsed on the current layout.
    const row1 = cellArray[0].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value} id={rows.id} turn={currentTurn} winner={winner} updateFn={updateCell}/>);   
    const row2 = cellArray[1].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value} id={rows.id} turn={currentTurn} winner={winner} updateFn={updateCell}/>);   
    const row3 = cellArray[2].map((rows) => <DynamicComponentRenderer key={rows.id} type={rows.value} id={rows.id} turn={currentTurn} winner={winner} updateFn={updateCell}/>);   

  return (
    <div className="pannel">
      <div className="row"  style={boardStyle}>
        
        <p className="cellMarque">Current Turn: <span className={currentTurn}>{currentTurn.replace("cell","")}</span></p>
          {row1}
          {row2}
          {row3}
        <div className="cellMarque footer">
            <span>WINNER: <span className={winner=="" ? "cellMt" : 'cell' + winner}>{winner}</span></span>
            <span className="float-end"><button type="button" className="btn btn-primary"onClick={() => newGame()}>New Game</button></span>
        </div>
        <div className="cellMarque footer">
            <span>SCORE: <span className="cellX">X {xScore}</span> / <span className="cellO">O {oScore}</span></span>
            <span className="float-end"><button type="button" className="btn btn-danger" onClick={() => resetGame()}>Reset Game</button></span>
        </div>
      </div>
      <div className="pannelRight">
        <p>This simple tic-tack-toe game was developed purely in React with Bootstrap 5 as its CSS framework.</p>
        <p>It uses a 3X3 array to set up the board containing 'cellMt' as empty cells, and cellO and cellX for the players</p>
        <p>Currently O allways starts and there is not a solo player version yet.</p>
        <p>Once the player clicks on an empty spot the code sets that player as owning the cell,  the code then after the board renders checks the win conditions,  if no conditions exsist the play goes to the next player.</p>
        <p>Once the win condition has been met,  the game is scored and players can play again with a button press.</p>

      
      </div>
    </div>

  );
}

export default BaseBackground;