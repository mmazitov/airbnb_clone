'use clients';
import { Card, CardHeader } from '@/components/ui/card';
import { categoryItems } from '../lib/categoryItems';
import Image from 'next/image';
import { useState } from 'react';

const SelectCategory = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	return (
		<div className="gap-8 grid grid-cols-4 mx-auto mt-10 w-3/5">
			{categoryItems.map((item) => (
				<div key={item.id} className="cursor-pointer">
					<Card>
						<CardHeader>
							<Image
								src={item.imageUrl}
								alt={item.name}
								width={32}
								height={32}
								className="w-8 h-8"
							/>
							<h3>{item.title}</h3>
						</CardHeader>
					</Card>
				</div>
			))}
		</div>
	);
};

export default SelectCategory;
