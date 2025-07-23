// This file contains type declarations for @testing-library/jest-dom
// It makes TypeScript recognize the custom matchers added by jest-dom

/// <reference types="@testing-library/jest-dom" />

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toBeVisible(): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveTextContent(text: string | RegExp): R;
      // Add other matchers you use from jest-dom as needed
    }
  }
}

// Export an empty object to make TypeScript treat this file as a module
export {};
