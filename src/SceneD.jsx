import React, { useRef } from "react"
import { Canvas, useThree } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { Sphere, useAspect } from '@react-three/drei' // Box as Cube,

const range = n => [...Array(n).keys()]

function Layout() {
    const group = useRef()
    const { size } = useThree()
    const [vpWidth, vpHeight] = useAspect(size.width, size.height)

    return (
        <group ref={group} position={[-10, 0, 0]}>
            <Flex
                flexDirection="column"
                size={[vpWidth, vpHeight, 0]}
            >
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width="100%"
                >
                    {range(6).map((i) => (
                        <Box margin={0.05} key={i}>
                            <Sphere args={[1, 16, 16]}>
                                <meshLambertMaterial attach="material" color="white" />
                            </Sphere>
                        </Box>
                    ))}
                </Box>
            </Flex>
        </group>
    )
}

const SceneD = () => {
    return (
        <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.2} />
            <directionalLight intensity={0.5} />
            <Layout />
        </Canvas>
    )
}
export default SceneD