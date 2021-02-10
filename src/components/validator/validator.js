
const usernameRegex = /^[a-zа-я -]+$/i
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
const numberRegex = /^[0-9()\-+]+$/i


export const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Поле не может быть пустым!';
    } else if (!usernameRegex.test(values.name)) {
        errors.name = 'Введено не корректное значение';
    }

    if (!values.email) {
        errors.email = 'Поле не может быть пустым!';
    } else if (!emailRegex.test(values.email)) {
        errors.email = 'Введено не корректное значение';
    }

    if (!values.tel) {
        errors.tel = 'Поле не может быть пустым!';
    } else if (!numberRegex.test(values.tel)) {
        errors.tel = 'Введено не корректное значение';
    }

    if (!values.language) {
        errors.language = 'Required';
    }

    if (!values.termsAccept) {
        errors.termsAccept = 'Required';
    }

    return errors;
};

export default validate


