// validation.js

export function validateFields(fields) {
  const errors = {};

  if (!fields.name.trim()) {
    errors.name = "Nome é obrigatório.";
  }

  if (!fields.cellphone.trim()) {
    errors.cellphone = "Celular é obrigatório.";
  } else if (!/^\d+$/.test(fields.cellphone)) {
    errors.cellphone = "Celular deve conter apenas números.";
  } else if (fields.cellphone.length <= 1 || fields.cellphone.length < 10) {
    errors.cellphone = "Celular inválido.";
  } 

  if (!fields.phone.trim()) {
    errors.phone = "Telefone é obrigatório.";
  } else if (!/^\d+$/.test(fields.phone)) {
    errors.phone = "Telefone deve conter apenas números.";
  } else if (fields.phone.length <= 1 || fields.phone.length < 10) {
    errors.phone = "Telefone inválido.";
  } 

  if (!fields.email.trim()) {
    errors.email = "Email é obrigatório.";
  } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
    errors.email = "Email inválido.";
  }

  return errors;
}
