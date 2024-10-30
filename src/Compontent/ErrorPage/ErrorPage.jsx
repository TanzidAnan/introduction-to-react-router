
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='flex justify-center items-center w-6/12 mx-auto'>
            <div className='mt-40 text-center '>
                <h3 className='text-5xl font-bold mb-5'>Oops!!!!</h3>
                <p className='text-3xl mb-5'>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;