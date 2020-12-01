
const tenant = "<Tenant>.onmicrosoft.com";

const signInPolicy = "<SigninSignupPolicy>";
const applicationID = "<ApplicationId>";
const reactRedirectUri = "<RedirectUri>";
const tenantSubdomain = tenant.split(".")[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/`;
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;// Msal Configurations
const authorityDomain = "<TenantName>.b2clogin.com"
// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
      clientId: applicationID,
      authority: signInAuthority,
      knownAuthorities: [
        authorityDomain
      ]
  }
};
