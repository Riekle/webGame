function render() {
    // Requests a refresh of the frame (60*per sec)
    requestAnimationFrame( render );
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.05;
    renderer.render( scene, camera );
}
render();