import React from "react"
import { Canvas } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { Sphere } from '@react-three/drei'

const SceneC = () => {
    return (
        <Canvas camera={{ position: [0, 0, 10] }}>
            <directionalLight intensity={0.5} />
            <Flex size={[300, 300, 300]} flexDirection="row" flexWrap="wrap">
                <Box>
                    <Sphere args={[1, 16, 16]}>
                        <meshLambertMaterial attach="material" color="red" />
                    </Sphere>
                </Box>
                <Box>
                    <Sphere args={[1, 16, 16]}>
                        <meshLambertMaterial attach="material" color="yellow" />
                    </Sphere>
                </Box>
                <Box flexBasis="100%">
                    <Sphere args={[1, 16, 16]}>
                        <meshLambertMaterial attach="material" color="green" />
                    </Sphere>
                </Box>
                <Box>
                    <Sphere args={[1, 16, 16]}>
                        <meshLambertMaterial attach="material" color="white" />
                    </Sphere>
                </Box>
            </Flex>
        </Canvas>
    );
}
export default SceneC