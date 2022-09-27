
export const environment = {
  production: true,
  api
};

function api (endpoint: string) {
  return `https://localhost:44384/api/${endpoint}`;
}