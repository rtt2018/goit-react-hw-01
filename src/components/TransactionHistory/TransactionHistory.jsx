import './TransactionHistory.css'

export default function TransactionHistory({ items }) {
    return (
        <table className="transaction-history">
            <thead>
                <tr className="table-header">
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {items.map(({ id, type, amount, currency }) => (
                    <tr className='transaction-rows' key={id}>
                        <td className='table-'>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}