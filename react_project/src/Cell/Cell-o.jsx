import './cell.css';


function Cell(props) {

    /*const cellStyle = {
        height: "200px",
        width: "200px",
        border: "black 2px solid"
    }*/
    const id = props.id;
    const value = props.value;

    return (
        <div id={id} className="col-4" /*style="cellStyle" */>
            <div className={`cell ${value}`}>O</div>
        </div>
    );

    
}

export default Cell;