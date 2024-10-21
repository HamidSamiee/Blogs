"use client"
import Button from '@/ui/Button'
import RHF_TextField from '@/ui/RHF_TextField'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

// export const metadata={
//     title:"ثبت نام",
// }

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required()

const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver:yupResolver(schema),
        mode:"onTouched",
      });

      const {signIn}=useAuth();

      const onSubmit=async(values)=>{
        signIn(values)
      }

  return (
    <div>
        <h1 className="text-xl text-secondary-500 font-bold text-center mb-6">ورود</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <RHF_TextField 
                label="ایمیل"
                register={register}
                name="email"
                type='email'
                dir='ltr'
                isRequired
                errors={errors}
            />
            <RHF_TextField 
                label="پسورد"
                register={register}
                name="password"
                type='password'
                dir='ltr'
                isRequired
                errors={errors}
            />
            <Button varient="primary" type="submit" className="w-full" >
                تایید 
            </Button>
        </form>
        <Link href="/signUp" className='text-secondary-500 mt-6 text-center' >
            ثبت نام
        </Link>
    </div>
  )
}

export default SignIn