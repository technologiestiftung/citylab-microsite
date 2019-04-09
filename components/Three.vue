<template>
    <div ref="three" class="three-wrapper">
    </div>
</template>

<script>
    import * as THREE from 'three';

    export default {
        name: 'Three',
        data() {
            return {
                colors: ['#242582', '#553D67', '#F64C72', '#99738E', '#2F2FA2'],
                scene: null,
                renderer: null,
                camera: null,
                container: null,
                geometry: null,
                steps: 2,
                chunks: 20,
                pointlight: null,
                meshes: [],
                time: 0,
            }
        },
        props: ['config'],
        methods: {
            init() {
                this.scene = new THREE.Scene();

                this.renderer = new THREE.WebGLRenderer({
                    alpha: true, 
                    antialias: true,
                });

                this.renderer.setClearColor('rgba(255, 0, 255)', 0);
                this.renderer.setSize(1600, 600) // set sizes dynamic..
                this.$refs.three.appendChild(this.renderer.domElement);

                this.container = new THREE.Group();
                this.geometry = new THREE.BoxGeometry(1, 1, 1);
            },
            randomRange(max) {
                return Math.floor(Math.random() * max)
            },
            initCamera() {
                this.camera = new THREE.OrthographicCamera();

                // Setup an isometric perspective
                const aspect = this.config.width / this.config.height;
                const zoom = 1.86;
                this.camera.left = -zoom * aspect;
                this.camera.right = zoom * aspect;
                this.camera.top = zoom;
                this.camera.bottom = -zoom;
                this.camera.near = -100;
                this.camera.far = 100;
                this.camera.position.set(zoom, zoom, zoom);
                this.camera.lookAt(new THREE.Vector3());

                // Update camera properties
                this.camera.updateProjectionMatrix();
            },
            createCubes() {
                  for (let i = 0; i < this.steps; i++) {
                    for (let j = 0; j < this.steps; j++) {
                        for (let k = 0; k < this.steps; k++) {
                            const randomColorPick = this.randomRange(this.colors.length);
                            const mesh = new THREE.Mesh(
                                this.geometry,
                                new THREE.MeshStandardMaterial({
                                    color: this.colors[randomColorPick],
                                    flatShading: true
                                })
                            );

                            mesh.position.set(
                                i * Math.random(0,5),
                                j * Math.random(0,5),
                                k * Math.random(0,5)
                            )

                            mesh.scale.set(
                                Math.random(0.1,1.5),
                                Math.random(0.1,1.5),
                                Math.random(0.1,1.5),
                            )
                        
                            this.scene.add(mesh);
                            this.meshes.push(mesh)
                        
                        }
                    }
                }
            },
            addLights() {
                this.scene.add(new THREE.AmbientLight('#FFFFFF'));
                this.pointlight = new THREE.PointLight('#FFFFFF', 1, 100);

                this.pointlight.position.set(10, 10, 4).multiplyScalar(1.5);
                this.scene.add(this.pointlight)
            },
            animate() {
                this.renderer.render(this.scene, this.camera);
                this.time += .02;

                this.meshes.forEach((mesh,i) => {
                    mesh.position.set(
                    Math.sin(this.time * i * 0.05) + 1,
                    mesh.position.y,
                    mesh.position.z,
                    );
                });

                requestAnimationFrame(this.animate);
            },
        },
        mounted() {
            this.init();
            this.initCamera();
            this.addLights();
            this.createCubes();
            this.animate();
        },
    }
</script>

<style lang="scss" scoped>
    .three-wrapper {
        position: absolute;
        overflow: auto;
    }

    canvas {
        position: absolute;
        top: 0;
        z-index: 100;
    }


    
</style>


