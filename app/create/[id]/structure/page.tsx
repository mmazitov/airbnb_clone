import SelectCategory from '@/app/components/SelectCategory';

const StructureRoute = () => {
	return (
		<div>
			<>
				<div className="mx-auto w-3/5">
					<h2 className="font-semibold text-3xl tracking-tight transition-colors">
						Which of this best describe your home?
					</h2>
				</div>
				<form>
					<SelectCategory />
				</form>
			</>
		</div>
	);
};

export default StructureRoute;
