"use client"
import Button from '@/ui/Button'
import RHF_TextField from '@/ui/RHF_TextField'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useAuth } from '@/context/AuthContext'

// export const metadata={
//     title:"ثبت نام",
// }

const schema = yup
  .object({
    name: yup.string().min(5,"نام ونام خانوادگی حداقل 5 کاراکتر می باشد ").max(30).required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required()

const SignUp = () => {

    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver:yupResolver(schema),
        mode:"onTouched",
      });

      const {signUp}=useAuth();

      const onSubmit=async(values)=>{
        signUp(values)
      }

  return (
    <div>
        <h1 className="text-xl text-secondary-500 font-bold text-center mb-6">ثبت نام</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <RHF_TextField 
                label="نام و نام خانوادگی"
                register={register}
                name="name"
                isRequired
                errors={errors}
            />
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
                ثبت نام
            </Button>
        </form>
    </div>
  )
}

export default SignUp