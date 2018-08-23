const tenantName = "CSCPortal.onmicrosoft.com";
const clientID = "9a29d40d-8291-46d0-ab97-4e650a71f363";
const serverPort = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`,
  clientID: clientID
};
