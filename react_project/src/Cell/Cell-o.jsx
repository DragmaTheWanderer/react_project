import './cell.css';


function Cell() {

    /*const cellStyle = {
        height: "200px",
        width: "200px",
        border: "black 2px solid"
    }*/

    return (
        <div className="col-4" /*style="cellStyle" */>
            <div className="cell cellO">O</div>
        </div>
    );

    
}

export default Cell;