import React from "react";

// Define your regular expressions
export const REGEX_PATTERNS = {
  number: /[^0-9]/g,
  alphabet: /[^a-zA-Z ]/g,
  alphaNumeric: /[^a-zA-Z0-9]/g,
  pin: /[^0-9]/g,
};

/**
 * Handles the change event for an input element by sanitizing its value
 * based on a specified regex pattern and optionally updating a state.
 *
 * @param event - The change event triggered by the input element.
 * @param regexKey - The key to select the appropriate regex pattern from REGEX_PATTERNS.
 * @param setter - An optional function to update the state with the sanitized value.
 * @returns The sanitized input value after applying the regex pattern.
 */
export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  regexKey: keyof typeof REGEX_PATTERNS,
  setter?: (value: string) => void
) => {
  const regex = REGEX_PATTERNS[regexKey];
  const result = event.target.value.replace(regex, "");
  if (setter) setter(result);
  return result;
};

// Example usage

// export const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) =>
//     handleInputChange(event, numberRegex, anyState);
