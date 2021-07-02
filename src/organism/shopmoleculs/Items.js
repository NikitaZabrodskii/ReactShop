import Item from "./Item";

function Items(props) {
    const { goods = [], addToBusket = Function.prototype ,setAlert = Function.prototype} = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <Item key={item.id} {...item} addToBusket={addToBusket} setAlert ={setAlert} />
            ))}
        </div>
    );
}

export default Items