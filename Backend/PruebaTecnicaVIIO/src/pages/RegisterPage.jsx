import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])
    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });
    return (

        <div className='flex h-[calc(100vh-200px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            {
                registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))}
            <h1 className="text-3xl font-bold">Register</h1>
            <form onSubmit={onSubmit}
            >
                <input type="text" {...register("username", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Username'
                />
                {errors.username?.message && (
                    <p className="text-red-500">{errors.username?.message}</p>
                )}
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
                    Register
                </button>
            </form>
            <p className='flex gap-x-2 justify-between'>
                Already have an account?{" "} <Link to="/login" className='text-sky-500'>Login</Link>
            </p>
            </div>
           
        </div>
    )
}

export default RegisterPage