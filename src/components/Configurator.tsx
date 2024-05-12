import React from 'react';
import {
	chairColors,
	cushionColors,
	useCustomization,
} from '../context/CustomizationContextProvider.tsx';
import { cn } from '../utils/cn.ts';

export const Configurator = () => {
	const {
		setMaterial,
		material,
		setLegs,
		legs,
		chairColor,
		setChairColor,
		cushionColor,
		setCushionColor,
	} = useCustomization();

	console.log({ material });

	return (
		<div className="fixed right-6 bottom-1/4 text-white w-80 p-4 grid gap-8">
			<div>
				<div className="font-bold uppercase">Chair Material</div>

				<div className="flex gap-4 mt-6 items-center">
					<div className="group" onClick={() => setMaterial('leather')}>
						<div
							className={cn(
								'text-[#acacac] cursor-pointer group-hover:opacity-70 transition text-sm',
								{
									'text-white': material === 'leather',
								}
							)}
						>
							Lather
						</div>
					</div>

					<div className="group" onClick={() => setMaterial('fabric')}>
						<div
							className={cn(
								'text-[#acacac] cursor-pointer group-hover:opacity-70 transition text-sm',
								{
									'text-white': material === 'fabric',
								}
							)}
						>
							Fabric
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className="font-bold uppercase">Chair Color</div>

				<div className="grid grid-cols-[repeat(auto-fit,minmax(32px,auto))] gap-4 mt-6 items-center flex-wrap">
					{chairColors.map((color) => (
						<div className={'grid gap-2'}>
							<div
								key={color.name}
								className={cn('w-8 h-8 rounded-md cursor-pointer', {
									'ring-2 ring-white': color.color === chairColor,
								})}
								style={{
									backgroundColor: color.color,
								}}
								onClick={() => setChairColor(color.color)}
							/>
							<p className={'text-xs text-[#acacac]'}>{color.name}</p>
						</div>
					))}
				</div>
			</div>

			<div>
				<div className="font-bold uppercase">Cushion Color</div>

				<div className="grid grid-cols-[repeat(auto-fit,minmax(32px,auto))] gap-4 mt-6 items-center flex-wrap">
					{cushionColors.map((color) => (
						<div className={'grid gap-2'}>
							<div
								key={color.name}
								className={cn('w-8 h-8 rounded-md cursor-pointer', {
									'ring-2 ring-white': color.color === cushionColor,
								})}
								style={{
									backgroundColor: color.color,
								}}
								onClick={() => setCushionColor(color.color)}
							/>
							<p className={'text-xs text-[#acacac]'}>{color.name}</p>
						</div>
					))}
				</div>
			</div>

			<div>
				<div className="font-bold uppercase">Legs</div>

				<div className="flex gap-4 mt-6 items-center">
					<div className="group" onClick={() => setLegs(1)}>
						<div
							className={cn(
								'text-[#acacac] cursor-pointer group-hover:opacity-70 transition text-sm',
								{
									'text-white': legs === 1,
								}
							)}
						>
							Modern
						</div>
					</div>

					<div className="group" onClick={() => setLegs(2)}>
						<div
							className={cn(
								'text-[#acacac] cursor-pointer group-hover:opacity-70 transition text-sm',
								{
									'text-white': legs === 2,
								}
							)}
						>
							Classic
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
