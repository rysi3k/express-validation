// Type definitions for express-validation
// Project: https://github.com/andrewkeig/express-validation/issues
// Definitions by: Fabian Gutierrez <https://github.com/fega>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
import { RequestHandler } from "express";
import * as Joi from "joi";
interface ValidatorField {
  [key: string]: any;
}
interface Validator {
  body?: ValidatorField;
  params?: ValidatorField;
  query?: ValidatorField;
  headers?: ValidatorField;
  cookies?: ValidatorField;
  options?: {
    allowUnknownBody?: boolean;
    allowUnknownHeaders?: boolean;
    allowUnknownQuery?: boolean;
    allowUnknownParams?: boolean;
    allowUnknownCookies?: boolean
  };
}

declare function validate(validator: Validator): RequestHandler;
declare namespace validate {
  export function options(opts: Validator['options']): void;
  export class ValidationError {
      public errors: Messages[];
      public status: number;
      public statusText: string;
      public message: 'validation error';
      constructor(errors: Array<Messages>, opts: Record<string, unknown>);
      public toJSON(): Record<string, unknown>;

  }
  interface Messages {
      messages: string[];
      types: string[];
      field?: string[];
      location?: string;
  }
}

export = validate;
