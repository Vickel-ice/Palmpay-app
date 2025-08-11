import React from 'react';

const BottomNav = () => {
    const handleNavClick = (itemName) => {
        alert('Mapsd to ${itemName}');
    };

    return (
        <div className="bottom-navigation">
            <div className="nav-item active" onClick={() => handleNavClick('Home')}>
                <div className="nav-icon">🏠</div>
                <span>Home</span>
            </div>
            <div className="nav-item" onClick={() => handleNavClick('Loan')}>
                <div className="nav-icon">📈</div>
                <span>Loan</span>
            </div>
            <div className="nav-item" onClick={() => handleNavClick('Wealth')}>
                <div className="nav-icon">💰</div>
                <span>Wealth</span>
            </div>
            <div className="nav-item" onClick={() => handleNavClick('Reward')}>
                <div className="nav-icon">🎁</div>
                <span>Reward</span>
            </div>
            <div className="nav-item" onClick={() => handleNavClick('Me')}>
                <div className="nav-icon">👤</div>
                <span>Me</span>
            </div>
        </div>
    );
};

export default BottomNav;