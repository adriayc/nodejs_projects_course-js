class CustomAPIError extends Error {
  constructor(messasge) {
    super(messasge);
  }
}

module.exports = CustomAPIError;
