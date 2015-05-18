// Declare vars
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
var renderer = new THREE.WebGLRenderer();
// Add element to html body
document.body.appendChild( renderer.domElement );

// Renderer shit
renderer.setSize( window.innerWidth, window.innerHeight );

// Scene stuff
scene.add( cube );

// Camera stuff
camera.position.z = 5;