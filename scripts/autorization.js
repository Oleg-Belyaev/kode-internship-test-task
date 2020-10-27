import FormValidator from "./FormValidator.js";
import {data} from "./data.js";

const formValidatorAutorization = new FormValidator(data, '.form__element');
formValidatorAutorization.enableValidation();
