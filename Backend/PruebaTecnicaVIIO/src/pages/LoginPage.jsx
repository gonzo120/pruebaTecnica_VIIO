import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signin, isAuthenticated, errors: loginErrors } = useAuth();
    const navigate = useNavigate()
   /*  useEffect(() => {
        
    }, [isAuthenticated])*/
    const onSubmit = handleSubmit((data) => {
        signin(data);
    }) 

    useEffect(()=>{
        if (isAuthenticated) navigate("/products");
    },[isAuthenticated])
    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    loginErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white my-2' key={i}>
                            {error}
                        </div>
                    ))}
                <h1 className="text-3xl font-bold">Login</h1>
                <form onSubmit={onSubmit}
                >
                    <input type="email" {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='Email'
                    />
                    {errors.password?.message && (
                        <p className="text-red-500">{errors.password?.message}</p>
                    )}
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='Password'
                    />
                    {errors.confirmPassword?.message && (
                        <p className="text-red-500">{errors.confirmPassword?.message}</p>
                    )}
                    <button type='submit'>
                        Login
                    </button>
                </form>
                 <p className='flex gap-x-2 justify-between'>
                    Don't have an account? <Link to="/register" className='text-sky-500'>Sign up</Link>
                </p>       
            </div>
        </div>
    )
}

export default LoginPage