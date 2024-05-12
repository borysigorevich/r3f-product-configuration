import React, { createContext, PropsWithChildren, useState } from 'react';

type MaterialType = 'leather' | 'fabric';

export const chairColors = [
	{
		color: '#683434',
		name: 'brown',
	},
	{
		color: '#1a5e1a',
		name: 'green',
	},
	{
		color: '#659994',
		name: 'blue',
	},
	{
		color: '#896599',
		name: 'mauve',
	},
	{
		color: '#ffa500',
		name: 'orange',
	},
	{
		color: '#59555b',
		name: 'grey',
	},
	{
		color: '#222222',
		name: 'black',
	},
	{
		color: '#ececec',
		name: 'white',
	},
] as const;

export const cushionColors = [
	{
		color: '#683434',
		name: 'brown',
	},
	{
		color: '#1a5e1a',
		name: 'green',
	},
	{
		color: '#659994',
		name: 'blue',
	},
	{
		color: '#896599',
		name: 'mauve',
	},
	{
		color: '#ffa500',
		name: 'orange',
	},
	{
		color: '#59555b',
		name: 'grey',
	},
	{
		color: '#222222',
		name: 'black',
	},
	{
		color: '#ececec',
		name: 'white',
	},
] as const;

type ChairColorType = (typeof chairColors)[number]['color'];
type CushionColorType = (typeof cushionColors)[number]['color'];

const CustomizationContext = createContext({
	material: 'leather',
	setMaterial: (material: MaterialType) => {},
	legs: 1,
	setLegs: (legs: 1 | 2) => {},
	chairColor: chairColors[0].color as ChairColorType,
	setChairColor: (color: ChairColorType) => {},
	cushionColor: cushionColors[0].color as CushionColorType,
	setCushionColor: (color: CushionColorType) => {},
});

export const CustomizationContextProvider = ({ children }: PropsWithChildren) => {
	const [material, setMaterial] = useState<MaterialType>('leather');
	const [legs, setLegs] = useState(1);
	const [chairColor, setChairColor] = useState<ChairColorType>(chairColors[0].color);
	const [cushionColor, setCushionColor] = useState<CushionColorType>(
		cushionColors[0].color
	);

	return (
		<CustomizationContext.Provider
			value={{
				material,
				setMaterial,
				legs,
				setLegs,
				chairColor,
				setChairColor,
				cushionColor,
				setCushionColor,
			}}
		>
			{children}
		</CustomizationContext.Provider>
	);
};

export const useCustomization = () => {
	const context = React.useContext(CustomizationContext);
	if (context === undefined) {
		throw new Error(
			'useCustomization must be used within a CustomizationContextProvider'
		);
	}
	return context;
};
