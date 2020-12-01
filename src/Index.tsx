import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { MsalProvider} from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./AuthProvider";


const pca = new PublicClientApplication(msalConfig);

// Component
const AppProvider = () => (
    <MsalProvider instance={pca}>
        <App />
    </MsalProvider>
)

render(
    <AppProvider/>,
    document.getElementById('root'));