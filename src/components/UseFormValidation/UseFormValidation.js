const UseFormValidation = (values) => {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.username = 'Введите имя';
    }
  
    if (!values.email) {
      errors.email = 'Введите Email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Поле Email некорректно';
    }
    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (values.password.length < 2) {
      errors.password = 'Пароль должен быть от 2 символов';
    }

    return errors;
}
export default UseFormValidation