import { MeshReflectorMaterial, PresentationControls, Stage } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Model } from './Chair.tsx';

export const Experience = () => {
	return (
		<PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}>
			<Stage environment={'city'} intensity={1} adjustCamera={false}>
				{/*<Float*/}
				{/*    speed={1}*/}
				{/*    rotationIntensity={1}*/}
				{/*    floatIntensity={1}*/}
				{/*    floatingRange={[0, 1]}*/}
				{/*>*/}

				<Suspense fallback={null}>
					<Model />
				</Suspense>
				{/*</Float>*/}

				<mesh rotation={[-Math.PI / 2, 0, 0]}>
					<planeGeometry args={[170, 170]} />
					<MeshReflectorMaterial
						blur={[300, 100]}
						resolution={2048}
						mixBlur={1}
						mixStrength={40}
						roughness={1}
						depthScale={1.2}
						minDepthThreshold={0.4}
						maxDepthThreshold={1.4}
						color="#101010"
						metalness={0.5}
						mirror={0.5}
					/>
				</mesh>
			</Stage>
		</PresentationControls>
	);
};
