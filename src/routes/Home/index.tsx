
import CardNoticia from "../../components/CardNoticia/CardNoticia";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-50 items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Bem vindo ao site da farmacia
      </h2>

      <CardNoticia />
    </main>
  );
}
