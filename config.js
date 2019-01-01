const tenantName = "CSCPortal";
const clientID = "b8ecfcc8-7fb7-4296-a4fc-67560181de98";
const serverPort = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`,
  clientID: clientID
};
