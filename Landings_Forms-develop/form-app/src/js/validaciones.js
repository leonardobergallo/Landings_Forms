// #region Expresiones Regulares
export const returnNumberOnly = (raw) => {
  const regex = /^[\d ]*$/;
  if (regex.test(raw)) {
    return raw.toString();
  } else {
    return raw.replace(/[^0-9]/g, "");
  }
};
export function returnLettersOnly(raw) {
  const regex = /[^a-zA-Záéíóú'`àèìòù\.üÜçÇñÑ\s]/g;
  return raw.replace(regex, "");
}
export function returnAlphaNumOnly(raw) {
  const regex = /[^a-zA-Z0-9áéíóú'`àèìòù\.üÜçÇñÑ\s#-]/g;
  return raw.replace(regex, "");
}
export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
// #endregion
