import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/morph_svg"} className="cursor-pointer text-blue-500">🔗 Morph SVG</Link>
    </main>
  );
}
