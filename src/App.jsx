import React from 'react';
import './App.css';
import Header from './components/Header'
import BalanceSection from './components/BalanceSection';
import MoneyTransfer from './components/MoneyTransfer';
import ServicesGrid from './components/ServicesGrid';
import BottomNav from './components/BottomNav';

function App() {
  const userBalance = 7545.72;

const servicesData = [
  { id:1, name: 'Airtime', icon: '📞'},
  { id:2, name: 'Data', icon:  '📶'},
  { id:3, name: 'Betting', icon: '⚽'},
  { id:4, name: 'Electricity', icon: '⚡', tag: '10% OFF' },
  { id:5, name: 'Insurance', icon: '🛡️'},
  { id:6, name: 'Loan', icon: '💰'},
  { id:7, name: 'TV', icon: '📺'},
  { id:8, name: 'Refer & Earn', icon: '🤝'},
  { id:9, name: 'ATM Card', icon:  '💳'},
  { id:10, name: 'CashBox', icon: '📦' },
  { id:11, name: 'SmartEarn', icon: '💡'},
  { id:12, name: 'My Business Hub', icon: '🏢'},
];

return (
  <div className="app-container">
    <Header />
    <main className="main-content">
      <BalanceSection balance={userBalance} />
      <MoneyTransfer />
      <ServicesGrid services={servicesData} />
    </main>
    <BottomNav />
  </div>
 );
};

export default App;