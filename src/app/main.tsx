import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryProviders } from '../app/providers/QueryProviders.tsx';
import App from '../App.tsx';

const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <QueryProviders>
            <App />
        </QueryProviders>
    </React.StrictMode>
);
