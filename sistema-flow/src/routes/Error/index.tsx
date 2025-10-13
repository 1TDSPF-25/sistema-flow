
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function Error(){
     useEffect(() => {
            document.title = "Not Found - Erro 404";
        }, []);
    
    
        const navigate = useNavigate();
    
    return(
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center p-6">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">Pagina Não encontrada</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md">Volte para a página inicial</p>        
            
             <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg shadow-md hover:bg-slate-800 transition" 
             onClick={() => navigate(-1)}>
                Home
            </button>
            
           </main>
    );
}



    



