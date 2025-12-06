import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="/experience" className="hover:text-gray-300 transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link href="/#about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

