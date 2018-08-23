const tenantName = "CSCPortal";
const clientID = "fede1873-aa95-4256-b554-1aa5a89e26ef";
const serverPort = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`,
  clientID: clientID
};
