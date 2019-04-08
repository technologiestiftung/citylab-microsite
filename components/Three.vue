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
                camera: null
            }
        },
        props: ['config'],
        methods: {
            init() {
                this.scene = new THREE.Scene();

                this.renderer = new THREE.WebGLRenderer({
                    alpha: true, 
                    antialias: true
                });

                this.renderer.setClearColor('rgba(255, 0, 255)', 1);
                this.renderer.setSize(1600, 600) // set sizes dynamic..
                this.$refs.three.appendChild(this.renderer.domElement);

                this.camera = new THREE.OrthographicCamera();

                // Setup an isometric perspective
                const aspect = this.config.width / this.config.height;
                const zoom = 1.85;
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
            randomizeMesh(mesh) {
                // Choose a random point in a 3D volume between -1..1
                const point = new THREE.Vector3(
                random.value() * 2 - 1,
                random.value() * 2 - 1,
                random.value() * 2 - 1
                );
                mesh.position.copy(point);
                mesh.originalPosition = mesh.position.clone();

                // Choose a color for the mesh material
                mesh.material.color.set(pal_01);

                // Randomly scale each axis
                mesh.scale.set(
                random.gaussian(),
                random.gaussian(),
                random.gaussian()
                );

                // Do more random scaling on each axis
                if (random.chance(0.5)) mesh.scale.x *= random.gaussian();
                if (random.chance(0.5)) mesh.scale.y *= random.gaussian();
                if (random.chance(0.5)) mesh.scale.z *= random.gaussian();

                // Further scale each object
                mesh.scale.multiplyScalar(random.gaussian() * 0.25);
            },
            animate() {
                this.renderer.render(this.scene, this.camera);
                requestAnimationFrame(this.animate);
            },
            render() {

            },
        },
        mounted() {
            this.init();
            this.animate();
        }

    }
</script>

<style lang="scss" scoped>
    .three-wrapper {
        position: relative;
        overflow: auto;
    }

    canvas {
        position: absolute;
        top: 0;
        z-index: 100;
    }


    
</style>


