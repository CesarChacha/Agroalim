
export const environment = {
  production: true,
  api
};

function api (endpoint: string) {
  return `http://localhost:44384/api/${endpoint}`;
}