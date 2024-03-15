import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateComponent = () => {
    const [privateData, setPrivateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const isAuthenticated = () => {
        // Implement based on your authentication logic
        return localStorage.getItem("userToken") !== null;
    };

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/private');
            return; // Stop execution if not authenticated
        }

        fetch('/private', { credentials: 'include' })
            .then(response => {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    return response.json();
                } else {
                    throw new Error('Received non-JSON response');
                }
            })
            .then(data => {
                setPrivateData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching private data:', error);
                setError(error);
                setLoading(false);
            });
    }, [navigate]); // Added navigate as a dependency

    const renderAttributes = (attributes) => {
        return Object.entries(attributes).map(([key, value]) => (
            <p key={key}>
                <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
            </p>
        ));
    };

    if (loading) return <div>Loading private data...</div>;
    if (error) return <div>Error loading data: {error.message}</div>;

    return (
        <div>
            <h1>Private Data</h1>
            {privateData && (
                <div>
                    <p><strong>UserName:</strong> {privateData.userName}</p>
                    <p><strong>Email:</strong> {privateData.email}</p>
                    {privateData.attributes && (
                        <div>
                            <h2>Attributes:</h2>
                            {renderAttributes(privateData.attributes)}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PrivateComponent;
