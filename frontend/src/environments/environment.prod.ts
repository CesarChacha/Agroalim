
export const environment = {
  production: true,
  api,
  fileServer : 'http://54.234.60.110:8080/Files'
};

function api (endpoint: string) {
  //return `http://localhost:44384/api/${endpoint}`;
  return `http://54.234.60.110:8080/api/${endpoint}`;
}