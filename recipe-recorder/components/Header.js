import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className = 'bg-blue-600 py-3 px-6 flex items-center justify-between mb-5'>
        <div>
            <UserButton afterSignOutUrl = "/"/>
        </div>
    </nav>
  );
};

export default Header;
