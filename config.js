const tenantName = "CSCPortal";
const clientID = "036e0394-cb25-47bc-8102-e21d3e5292a5";
const serverPort = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`,
  clientID: clientID
};
