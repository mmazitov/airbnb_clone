/* eslint-disable @next/next/no-img-element */
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';
import {
	RegisterLink,
	LoginLink,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

const UserNav = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center gap-x-3 px-2 lg:px-4 py-2 lg:py-2 border rounded-full">
					<MenuIcon className="w-6 lg:w-5 h-6 lg:h-5" />
					<img
						src={
							user?.picture ??
							'https://static.vecteezy.com/system/resources/previews/020/911/737/large_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'
						}
						alt="Image of the user"
						className="lg:block hidden rounded-full w-8 h-8"
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[200px]">
				{user ? (
					<>
						<DropdownMenuItem>
							<form action="#" className="w-full">
								<button type="submit" className="w-full text-left">
									Airbnb your home
								</button>
							</form>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/my-homes" className="w-full">
								My Listings
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/favorites" className="w-full">
								My Favorites
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/reservations" className="w-full">
								My Reservations
							</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<LogoutLink className="w-full">Logout</LogoutLink>
						</DropdownMenuItem>
					</>
				) : (
					<>
						<DropdownMenuItem>
							<RegisterLink className="w-full">Register</RegisterLink>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LoginLink className="w-full">Login</LoginLink>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserNav;
