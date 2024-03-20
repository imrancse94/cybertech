import React, { useMemo, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import InputField from '@/components/include/InputField';
import FormProvider from '@/contexts/form/FormProvider';
import loginSchema from '@/validation/login';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth from '@/hooks/useAuth';
import Alert from '@/components/include/Alert';
import useAxios from '@/hooks/useAxios';
import Loader from '@/components/include/Loader';

const Login = () => {

  const { setAuth } = useAuth();
  const { api } = useAxios()

  const [errMessage, setErrMessage] = useState("");

  const defaultValues = useMemo(() => ({
    email: '',
    password: '',
  }), [])

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;


  const onSubmit = handleSubmit(async (params) => {
    // api call 
    //setLoaging(true);

    try {

      const { email, password } = params;

      const { data } = await api.post('login', { email, password })

      if (data?.status_code == 100) {
        setAuth({
          user: data?.data?.user,
          access_token: data?.data?.access_token
        });

      } else {
        setErrMessage(data?.message);
      }

    } catch (err) {
      console.log('err', err)
    } finally {
      //setLoaging(false)
    }
  })



  return (
    <div className="w-full">
      <h1
        className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
      >
        Login
      </h1>
      {isSubmitting && <Loader />}
      {errMessage &&
        <Alert
          close={() => setErrMessage("")}
          type="warning"
          message={errMessage}
        />
      }

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <InputField
          name="email"
          type="email"
          label="Email"
          placeholder="e.g, Jhon Doe"
        />
        <InputField
          name="password"
          type="password"
          label="Password"
          placeholder="***********"
        />
        <button
          type='submit'
          className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"

        >
          Log in
        </button>
      </FormProvider>
      <hr className="my-8" />

      <p className="mt-1">
        <Link
          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          to="/register"
        >
          Create account
        </Link>
      </p>
    </div>
  );
}

export default Login;
