import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [ searchParams] = useSearchParams();
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate('/')}
            className="absolute left-0 top-0 bottom-0 p-4 text-slate-100">
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da Tarefas
        </h1>
        </div>
          <div className="bg-slate-200 p-4 rounded-md">
            <h2 className="text-slate-600 font-bold text-xl">{title}</h2>
            <p className="text-slate-600">{description}</p>
          </div>

      </div>
    </div>
  );
}

export default TaskPage;