import React from 'react';
import withdrawIcon from '../Img/withdraw_7798571.png';

const MoneyTransfer = () => {
    const handleTransfer = (type) => {
        alert('Transfer to ${type} clicked!');
    };

    return (
        <div className="money-transfer-section">
            <h3>Money Transfer</h3>
            <div className="transfer-options">
                <div className="transfer-item" onClick={() => handleTransfer('Bank')}>
                    <div className="transfer-icon">🏦</div>
                    <span>To Bank</span>
                </div>
                <div className="transfer-item" onClick={() => handleTransfer('Palmpay')}>
                    <div className="transfer-icon">🅿️</div>
                    <span>To PalmPay</span>
                </div>
                <div className="transfer-item" onClick={() => handleTransfer('Withdraw')}>
                    <div className="transfer-icon">
                        <img
                            src={withdrawIcon} 
                            alt="withdrawal icon"
                            className="withdraw-icon" 
                        />
                    </div>
                    <span>Withdraw</span>
                </div>
            </div>
        </div>
    );

};

export default MoneyTransfer;