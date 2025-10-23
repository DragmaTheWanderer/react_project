import './cell.css';


function Cell(props) {

    
    const id = props.id;
    const value = props.value;
    const turn = props.turn;
    const updateFn = props.updateFn;
    const winner = props.winner;

    if(winner===""){
        return (
            <div id={id} className="col-4">
                    <div className={`cell ${value}`} onClick={() => updateFn(id, turn)}></div>             
            </div>
        );
    } else {
        return (
            <div id={id} className="col-4">
                    <div className={`cell ${value}`} ></div>             
            </div>
        );
    }
    
}

export default Cell;