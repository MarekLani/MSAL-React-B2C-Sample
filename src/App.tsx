import * as React from 'react';
import { useMsal } from "@azure/msal-react";

export const App: React.FunctionComponent = () => {

    const { instance, accounts, inProgress } = useMsal();
    const [apiData, setApiData] = React.useState(null);

        React.useEffect(() => {
            if (accounts.length > 0) {
            instance.acquireTokenSilent({
                scopes: ["<read_scope>"],
                account: accounts[0]
            }).then((response) => {
                if (response) {
                    setApiData(response.accessToken)
                    alert(response.accessToken)
                }
            })
            .catch(function (error) {
                alert(error)
            });
        }
        },[accounts.length]);

    if (accounts.length > 0) {
        return (
            <>
                <span>There are currently {accounts.length} users signed in!</span>
                {apiData && (<span>Data retreived from API: {apiData}</span>)}
            </>
        );
    } else if (inProgress === "login") {
        return <span>Login is currently in progress!</span>
    } else {
        return (
            <div>
                <span>There are currently no users signed in!</span>
                {/* stating scope for loginPopup is temporary workaround of know issue: https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/2315 */}
                <button onClick={() => instance.loginPopup({ scopes: ["<read_scope>"] })}>Login</button>
            </div>
        )
    }
}