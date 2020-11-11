import ErrorHandler from '../models/ErrorHandler';

class FooController {
  defaultMethod() {
    throw new ErrorHandler(501, `${this.defaultMethod.name}: Not implemented method`);
  }
}

export = new FooController();
