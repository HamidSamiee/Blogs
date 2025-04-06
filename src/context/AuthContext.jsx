"use client"

import { getUserApi, singinApi, signupApi } from '@/services/authServices';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useReducer } from 'react' 
import toast from 'react-hot-toast';

const AuthContext = createContext();


const initialState={
    user:null,
    isAuthenticated:false,
    isLoading:false,
    error:null,
}

const authReducer=(state,action)=>{
    switch (action.type) {
        case "loading":
            return {
            ...state,
            isLoading : true,
            }
        case "rejected":
        return {
            ...state,
            isLoading : false,
            error : action.payload,
        }
        case "signin":
        return {
            isAuthenticated:true,
            user : action.payload,
        }
        case "signup":
        return {
            isAuthenticated:true,
            user : action.payload,
            }
        case "user/loaded":
        return {
            isAuthenticated:true,
            user : action.payload,
            }
        default:
            return state;
    }
}

const AuthProvider=({children})=>{
   
    const router = useRouter();
    const [{user,isAuthenticated,isLoading,error}, dispatch] = useReducer(authReducer , initialState);

    const signUp = async (values)=>{
        dispatch({type:"loading"})
        try {
            const {data:{user,message}} = await signupApi(values); 
            dispatch({type:"signup",payload:user});
            toast.success(message);
            router.push("/profile");
        } catch (error) {
            const errorMsg = error?.response?.data?.message;
            dispatch({type:"rejected",payload:errorMsg});
            toast.error(errorMsg);
        }
    }

    const signIn = async (values)=>{
        dispatch({type:"loading"})
        try {
            const {data:{user,message}} = await singinApi(values);
            dispatch({type:"signin",payload:user});
            toast.success(message);
            router.push("/");
        } catch (error) {
            const errorMsg = error?.response?.data?.message;
            dispatch({type:"rejected",payload:errorMsg});
            toast.error(errorMsg);
        }
    }

    async function getUser() {
        dispatch({ type: "loading" });
        try {
          // await new Promise((resolve, reject) =>
          //   setTimeout(() => resolve("ddd"), 4000)
          // );
          const {data: { user }} = await getUserApi();
          dispatch({ type: "user/loaded", payload: user });
        } catch (err) {
          const error = err?.response?.data?.message;
          dispatch({ type: "rejected", payload: error });
        }
      }

    useEffect(()=>{
        async function fetchData() {
            await getUser()
        }
        fetchData();
    },[])


return(
    <AuthContext.Provider value={{user,isAuthenticated,isLoading,error,getUser,signIn,signUp}}>
        {children}
    </AuthContext.Provider>
)}
export default AuthProvider;


export function useAuth(){
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("context not found")
    }
    return context
}