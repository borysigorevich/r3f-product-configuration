import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Configurator } from './component/Configurator.tsx';
import { Experience } from './component/Experience.tsx';
import { CustomizationContextProvider } from './context/CustomizationContextProvider.tsx';

function App() {
	return (
		<div className={'h-full'}>
			<CustomizationContextProvider>
				<Canvas
					shadows
					camera={{
						position: [0, 2, 7],
						fov: 45,
					}}
				>
					<fog attach="fog" args={['#101010', 10, 20]} />

					<Experience />
					<color attach={'background'} args={['#101010']} />
				</Canvas>
				<Configurator />
			</CustomizationContextProvider>
		</div>
	);
}

export default App;
