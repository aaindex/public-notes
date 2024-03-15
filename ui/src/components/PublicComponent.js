import React, { useEffect, useState } from 'react';

const PublicComponent = () => {
    const [publicData, setPublicData] = useState(null);

    useEffect(() => {
        fetch('/public')
            .then(response => response.json())
            .then(data => setPublicData(data))
            .catch(error => console.error('Error fetching public data:', error));
    }, []);

    if (!publicData) return <div>Loading public data......</div>;

    return (
        <div>
            <h1>Public Data</h1>
            <div>
                {Object.entries(publicData).map(([key, value]) => (
                    <p key={key}><strong>{key}:</strong> {value}</p>
                ))}
            </div>
        </div>
    );
};

export default PublicComponent;
