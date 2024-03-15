import React, { useEffect, useState } from 'react';

const LoginComponent = () => {
    const [LoginData, setPrivateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/login', { credentials: 'include' })
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                } else {
                    return response.json();
                }
            })
            .then(data => {
                setPrivateData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching login user data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const renderAttributes = (attributes) => {
        return Object.entries(attributes).map(([key, values]) => (
            <p key={key}>
                <strong>{key}:</strong> {values.join(', ')}
            </p>
        ));
    };

    if (loading) return <div>Loading Login data...</div>;
    if (error) return <div>Error loading data: {error.message}</div>;

    return (
        <div>
            <h1>Login Info</h1>
            {LoginData && (
                <div>
                    <p><strong>UserName:</strong> {LoginData.userName}</p>
                    <p><strong>Email:</strong> {LoginData.email}</p>
                    <h2>Attributes:</h2>
                    {LoginData.attributes && renderAttributes(LoginData.attributes)}
                </div>
            )}
        </div>
    );
};

export default LoginComponent;
