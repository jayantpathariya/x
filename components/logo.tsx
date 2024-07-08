import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="hover:bg-neutral-800 size-14 p-3 rounded-full inline-block transition-colors duration-200"
    >
      <Image src="/logo.png" alt="Twitter" width={32} height={32} />
    </Link>
  );
};
