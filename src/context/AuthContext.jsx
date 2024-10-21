"use client"

import { signInApi, signUpApi } from '@/services/authServices';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useReducer } from 'react' 
import toast from 'react-hot-toast';

const AuthContext = createContext();


const initialState={
    user:null,
    isAuthenticated:false,
    isLoading:true,
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
            isLoading : true,
            error : action.payload,
        }
        case "signin":
        return {
            isAuthenticated:true,
            user : action.payload,
        }
        case "signup":
        return {
            ...state,
            isLoading:false,
            user: action.payload,
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
            const {user,message} = await signUpApi(values); 
            dispatch({type:"signup",payload:user});
            toast.success(message);
            router.push("/");
        } catch (error) {
            const errorMsg = error?.response?.data?.message;
            dispatch({type:"rejected",payload:errorMsg});
            toast.error(errorMsg);
        }
    }

    const signIn = async (values)=>{
        dispatch({type:"loading"})
        try {
            const {user,message} = await signInApi(values); 
            dispatch({type:"signin",payload:user});
            toast.success(message);
            router.push("/");
        } catch (error) {
            const errorMsg = error?.response?.data?.message;
            dispatch({type:"rejected",payload:errorMsg});
            toast.error(errorMsg);
        }
    }

return(
    <AuthContext.Provider value={{user,isAuthenticated,isLoading,error,signIn,signUp}}>
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