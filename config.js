<<<<<<< HEAD
const tenantName = "CSCPortal";
const clientID = "fede1873-aa95-4256-b554-1aa5a89e26ef";
=======
const tenantName = "CSCPortal.onmicrosoft.com";
const clientID = "9a29d40d-8291-46d0-ab97-4e650a71f363";
>>>>>>> c8b20dae7c33029a062001e3b99b3cb8bfa6ac7f
const serverPort = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`,
  clientID: clientID
};
