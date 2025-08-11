// src/components/BalanceSection.jsx
import React from 'react';

const BalanceSection = ({ balance }) => {
    const handleAddMoney = () => {
        alert('Add Money clicked!');
    };

    

    return (
        <div className="balance-section">
            <div className="balance-top-row">
                <div className="balance-left">
                    <div className="balance-label-row">
                        <p className="label">Available Balance</p>
                        <span className="view-icon">👁️</span>
                    </div>
                    <span className="amount">₦{balance.toFixed(2)}</span>
                </div>
                <div className="balance-right">
                    <div className="transaction-history-link">
                        <p>Transaction History</p>
                        <span>&gt;</span>
                    </div>
                    <button className="add-money-button" onClick={handleAddMoney}>Add Money</button>
                </div>
            </div>
            
        </div>
    );
};

export default BalanceSection;