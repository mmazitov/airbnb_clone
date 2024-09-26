import Link from 'next/link';
import Image from 'next/image';
import DesktopLogo from '../../public/airbnb-desktop.png';
import MobileLogo from '../../public/airbnb-mobile.webp';
import UserNav from './UserNav';
const Navbar = () => {
	return (
		<nav className="border-b w-full">
			<div className="flex justify-between items-center mx-auto px-5 lg:px-10 py-5 container">
				<Link href="/" className="font-bold text-2xl">
					<Image
						src={DesktopLogo}
						alt="Desktop Logo"
						className="lg:block hidden w-32"
					/>
					<Image
						src={MobileLogo}
						alt="Mobile Logo"
						className="block lg:hidden w-12"
					/>
				</Link>
				<div className="px-5 py-2 border rounded-full">
					<h1>search</h1>
				</div>
				<UserNav />
			</div>
		</nav>
	);
};

export default Navbar;
