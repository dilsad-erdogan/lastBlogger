import { Toaster } from 'react-hot-toast';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import DarkMode from '../components/DarkMode';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <Toaster position='top-right' />

        {/* Dark Mode */}
        <div className='mt-5'>
            <DarkMode />
        </div>

        {/* Main Container */}
        <div className='flex flex-row justify-center items-center text-center w-full max-w-[1200px] mt-10'>
            {/* Login Section */}
            <div className='flex-1 flex-col m-5 justify-center items-center border-r border-gray-600 dark:border-gray-300'>
                <LoginForm />
            </div>

            {/* Register Section */}
            <div className='flex-1 flex-col m-5 justify-center items-center'>
                <RegisterForm />
            </div>
        </div>
    </div>
  )
}

export default Login