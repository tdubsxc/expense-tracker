import { Form } from 'antd';
import React from 'react';
import { FormPasswordField, FormTextField } from '../../../elements/form-inputs.element';
import styles from './auth-form.module.scss';

const AuthForm = ({ handleSubmit, formError }) => {
  return (
    <div>
      <Form
        id="registration-form"
        initialValues={{ email: '', password: '' }}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <FormTextField
          field={{
            label: 'Email',
            name: 'email',
            validateTrigger: ['onBlur'],
            rules: [
              { type: 'email', message: 'Invalid email address.' },
              { required: true, message: 'You must provide a valid email address.' },
            ],
          }}
          placeholder="Johndoe@example.com"
        />
        <FormPasswordField
          field={{
            label: 'Password',
            name: 'password',
            validateTrigger: ['onBlur'],
            rules: [{ required: true, message: 'You must provide a password.' }],
          }}
          placeholder="UnguessablePassword123"
        />
      </Form>
      {formError && (
        <div className={styles.formErrorMsg}>
          <span role="alert">{formError.msg}</span>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
