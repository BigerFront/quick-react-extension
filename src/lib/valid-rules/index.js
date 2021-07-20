export const pwdStrongRule = {
  pattern: new RegExp(/^(?=.*[a-zA-Z])(?=.*[\d~!@#$%^&*()_\s])[\s\S]{3,20}/),
  message: 'The password contains at least one letter and number.',
};

export const pwdWeakRule = {
  pattern: new RegExp(/^[\s\S]{3,20}/),
  message: 'The password contains at least 3 letter',
};
