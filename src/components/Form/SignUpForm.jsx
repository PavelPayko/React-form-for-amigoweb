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

    const checkboxObjectConverter = e => {
        let event = e
        event.target.value = e.target.checked
        event.target.name = 'termsAccept'
        formik.handleChange(event)
    }
    const dropdownObjectConverter = e => {
        let event = e
        event.target.value = e.target.innerText
        event.target.name = 'language'
        formik.handleChange(event)
    }

    return <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField title='Имя'
                   type='text'
                   name='name'
                   placeholder='Введите Ваше имя'
                   value={formik.values.name}
                   errors={formik.errors}
                   touched={formik.touched}
                   onBlur={formik.handleBlur}
                   setValue={formik.handleChange}
        />
        <TextField title='Email'
                   type='email'
                   name='email'
                   placeholder='Введите ваш email'
                   value={formik.values.email}
                   errors={formik.errors}
                   touched={formik.touched}
                   onBlur={formik.handleBlur}
                   setValue={formik.handleChange}
        />
        <TextField title='Номер телефона'
                   type='text'
                   name='tel'
                   placeholder='Введите номер телефона'
                   value={formik.values.tel}
                   errors={formik.errors}
                   touched={formik.touched}
                   onBlur={formik.handleBlur}
                   setValue={formik.handleChange}
        />
        <Dropdown title='Язык'
                  placeholder='язык'
                  name='language'
                  menuItems={languages}
                  value={formik.values.language}
                  errors={formik.errors}
                  setValue={dropdownObjectConverter}
        />
        <Checkbox label={terms()}
                  name='termsAccept'
                  isChecked={formik.values.termsAccept}
                  setValue={checkboxObjectConverter}
                  errors={formik.errors}
        />
        <Button title='Зарегестрироваться' disabled={!formik.isValid}/>
    </form>

}
export default SignUpForm