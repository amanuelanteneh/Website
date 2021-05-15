scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper( 4 );
scene.add( axesHelper );

const width = 10;
     const height = width * (window.innerHeight / window.innerWidth);

     camera = new THREE.OrthographicCamera(
         width / -1.2,
         width / 1.2,
         height / 1.2,
         height / -1.2,
         1,
         100
     );

     camera.position.set(4, 4, 4);
     camera.lookAt(0, 0, 0); 

const renderer = new THREE.WebGLRenderer();
container = document.getElementById('block1');
renderer.setSize($(container).width(), $(container).height());
document.getElementById("firstSim").appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	//cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();