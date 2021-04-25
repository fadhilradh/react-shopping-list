const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.item}</td>
                <td>{row.quantity}</td>
                <td>
                    <button onClick={() => props.removeItem(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

    const Table = (props) => {
        const {characterData, removeItem} = props
        return (
        <table>
           <TableHeader/>
           <TableBody characterData = {characterData} removeItem={removeItem}/>
        </table>
        )
    
    }

export default Table