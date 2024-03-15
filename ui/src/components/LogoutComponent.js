import React, { useEffect, useState } from 'react';

const LogoutComponent = () => {
    const [publicData, setPublicData] = useState(null);

    useEffect(() => {
        fetch('/logout')
            .then(response => response.json())
            .then(data => setPublicData(data))
            .catch(error => console.error('Error fetching logout data:', error));
    }, []);

    if (!publicData) return <div>Logout .......</div>;

    return (
        <div>
            <h1>LOGOUT PAGE</h1>
            <div>
                {Object.entries(publicData).map(([key, value]) => (
                    <p key={key}><strong>{key}:</strong> {value}</p>
                ))}
            </div>
        </div>
    );
};

export default LogoutComponent;
