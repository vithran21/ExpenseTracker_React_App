import './ExpenseItem.css'

function EmpenseItem() {
    return (
        <div className="expense-item">
            <div>Jan 21 2024</div>
            <div className="expense-item__description">
                <h2>Bike Insurance</h2>
                <div className="expense-item__price">1500₹</div>
            </div>
        </div>
    );
}

export default EmpenseItem;