import React from 'react'
import classes from './SignUpForm.module.css'
import TextField from "../Controls/Field/TextField";
import Dropdown from "../Controls/DropDown/Dropdown";
import Checkbox from "../Controls/Checkbox/Checkbox";
import {useFormik} from "formik";
import Button from "../Controls/Button/Button";
import validate from "../validator/validator";

const SignUpForm = () => {
    const languages = ['Русский', 'Английский', 'Китайский', 'Испанский']

    const terms = () => <span>Принимаю <a href="#">условия</a> соглашения</span>

    // console.log(term, typeof term)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            tel: '',
            language: '',
            termsAccept: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validate,
        validateOnMount: true
    });

    return <form onSubmit={formik.handleSubmit} className={classes.form}>
            <TextField title='Имя'
                       type='text'
                       name='name'
                       value={formik.values.name}
                       setValue={formik.handleChange}
                       onBlur={formik.handleBlur}
                       placeholder='Введите Ваше имя'
                       errors={formik.errors}
                       touched={formik.touched}
            />
            <TextField title='Email' type='email' name='email'
                       value={formik.values.email} setValue={formik.handleChange}
                       placeholder='Введите ваш email' errors={formik.errors}
                       onBlur={formik.handleBlur}
                       touched={formik.touched}
            />
            <TextField title='Номер телефона' type='text' name='tel'
                       value={formik.values.tel} setValue={formik.handleChange}
                       placeholder='Введите номер телефона'
                       errors={formik.errors}
                       onBlur={formik.handleBlur}
                       touched={formik.touched}
            />
            <Dropdown title='Язык' placeholder='язык' name='language'
                      menuItems={languages}
                      value={formik.values.language} setValue={formik.handleChange}
                      errors={formik.errors}
                      onBlur={formik.handleBlur}
                      touched={formik.touched}
            />
            <Checkbox label={terms} name='termsAccept'
                      isChecked={formik.values.termsAccept} setValue={formik.handleChange}
                      errors={formik.errors}
                      onBlur={formik.handleBlur}
                      touched={formik.touched}
            />
            <Button  title='Зарегестрироваться' disabled={!formik.isValid} />
    </form>

}
export default SignUpForm