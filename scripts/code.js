import FormValidator from "./FormValidator.js";
import {data} from "./data.js";

const formValidatorCode = new FormValidator(data, '.form__element');
formValidatorCode.enableValidation();
