const internalServerError = (
    resp,
    error,
    message = "Concejo Municipal - Internal Server Error"
  ) => {
    console.error(message, error);
    return resp.status(500).send({ message, error });
  };
  
  const documentCreated = (resp, data) => resp.status(201).send(data);
  
  const badRequest = (resp, error, message) =>
    resp.status(400).send({ message: message || "Concejo Municipal - Bad Request" });
  
  const documentNotFound = (resp, error, message) =>
    resp
      .status(404)
      .send({ message: message || "Concejo Municipal - Document Not Found" });
  
  const documentAlreadyExists = (resp, customName) =>
    resp
      .status(409)
      .send({
        message: `Concejo Municipal - The ${customName || "document"} already exists`,
      });
  
  const forbiddenAccess = (resp) => {
    console.error("Concejo Municipal - Forbidden Access");
    return resp
      .status(403)
      .send({ message: "Concejo Municipal - Access Denied. Can't perform this action." });
  };
  
  const unauthorizedAccess = (resp) => {
    console.error("Concejo Municipal - Unauthorized Access");
    return resp
      .status(401)
      .send({ message: "Concejo Municipal - Unauthorized Access. Can't perform this action." });
  };
  
  module.exports = {
    internalServerError,
    badRequest,
    documentNotFound,
    documentAlreadyExists,
    forbiddenAccess,
    unauthorizedAccess,
    documentCreated
  };