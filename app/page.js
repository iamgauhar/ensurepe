import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen md:p-1">
      <div className="flex items-center h-full justify-center bg-[linear-gradient(90deg,#0B1426_0%,#141C2D_53.4%,#1C2333_100%)] rounded-xl">
        <Link href={"/checkout"}>
          <button className="bg-black px-4 py-1 text-[16px] font-medium text-white rounded-md font-dm">Checkout</button>
        </Link>
      </div>
    </div>
  );
}
