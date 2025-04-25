import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">React Counter with Next.js & Tailwind</h1>
      <Counter />
    </main>
  );
}
