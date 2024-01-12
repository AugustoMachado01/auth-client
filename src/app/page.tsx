import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Homepage do site</h1>
      <hr />
      <nav className="mt-6">
        <Link href="/portal" className="text-blue-500">
          Acesse o portal
        </Link>{" "}
        ou
        <Link href="/portal/cadastro" className="text-blue-500">
          Crie um conta{" "}
        </Link>
      </nav>
    </main>
  );
}
