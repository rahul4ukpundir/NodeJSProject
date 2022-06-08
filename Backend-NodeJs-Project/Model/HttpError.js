class HttpError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.code = errorCode;
  }
}
export default HttpError;
