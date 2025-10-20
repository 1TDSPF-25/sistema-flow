import { useNavigate } from 'react-router-dom';
function Contatos (){

     const navigate = useNavigate();
    return(
        <main className="min-h-sreen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center p-6">
            <h1 className="text-4xl font-extrabold test-slate-900 dark:text-slate-100 mb-4">(11) 91254-8855</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md">Entre em contato conosco pelo gmail: farmacia@gmail.com</p>
               <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg shadow-md hover:bg-slate-800 transition" 
             onClick={() => navigate(-1)}>
                Home
            </button>
        </main>
    )
}
export default Contatos
