import CardNoticia from "../../components/CardNoticia/CardNoticia";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <h2 className="text-3xl font-bold text-gray-700 mt-8 mb-8 text-center">
        Bem-vindo à FarmaciaPlus
      </h2>
      <CardNoticia />
    </main>
  );
}
