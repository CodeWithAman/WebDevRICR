export const sampleMiddleware = async (req, res, next) => {
  console.log("I am sample middleware 1");
  next();
};
export const sampleMiddleware2 = async (req, res, next) => {
  console.log("I am sample middleware 2");
  next();
};
