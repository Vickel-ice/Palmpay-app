import React from 'react';

const ServicesGrid = ({ services}) => {
    const handleServicesClick = (serviceName) => {
        alert('Clicked on ${serviceName} service.');
    };

    return (
        <div className="services-section">
            <div className="services-header">
                <h3>Services</h3>
                <span className="more-link">More &gt;</span>
            </div>
            <div className="services-grid">
                {services.map((services) => (
                    <div
                      key={services.id}
                      className="service-item"
                      onClick={() => hansleServiceClick(services.name)}
                    >
                        <div className="service-icon">{services.icon}</div>
                        {services.tag && <span className="service-tag">{services.tag}</span>}
                        <span>{services.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;