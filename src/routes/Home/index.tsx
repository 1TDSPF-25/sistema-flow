import CardNoticia from "../../components/CardNoticia/CardNoticia";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-50 items-center min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 mt-8 mb-8 text-center">
        Bem-vindo à FarmaciaPlus
      </h2>
      <CardNoticia />
    </main>
  );
}
