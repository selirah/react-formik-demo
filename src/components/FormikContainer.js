import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const dropDownOptions = [
    {
      key: 'Select an option',
      value: ''
    },
    {
      key: 'Option 1',
      value: 'option1'
    },
    {
      key: 'Option 2',
      value: 'option2'
    },
    {
      key: 'Option 3',
      value: 'option3'
    }
  ]
  const radioOptions = [
    {
      key: 'Option 1',
      value: 'roption1'
    },
    {
      key: 'Option 2',
      value: 'roption2'
    },
    {
      key: 'Option 3',
      value: 'roption3'
    }
  ]

  const checkboxOptions = [
    {
      key: 'Option 1',
      value: 'coption1'
    },
    {
      key: 'Option 2',
      value: 'coption2'
    },
    {
      key: 'Option 3',
      value: 'coption3'
    }
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null
  }
  const validateSchema = Yup.object({
    email: Yup.string().required('Required'),
    decription: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date().required('Required').nullable()
  })
  const onSubmit = (values) => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControl control="input" type="email" label="Email" name="email" />
          <FormikControl control="textarea" label="Description" name="decription" />
          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            label="Pick one option"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Pick options"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="Pick a date" name="birthDate" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
