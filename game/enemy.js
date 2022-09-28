var Enemy = function (name, color, position, direction) {

    this.name = name;
    this.position = position;
    this.direction = direction;
    this.speed = 1; // constant speed

    this.material = new THREE.MeshLambertMaterial({
        color: color,
    });

    var singleGeometry = new THREE.Geometry();

    vehiculeMesh = new THREE.BoxGeometry(20, 20, 20);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 0;

    this.graphic.rotateOnAxis(new THREE.Vector3(0, 0, 1), this.direction + (3 * Math.PI / 2));
};

Enemy.prototype.move = function () {
    var x = this.graphic.position.x + WIDTH / 2;
    var y = this.graphic.position.y + HEIGHT / 2;

    if (x > WIDTH)
        this.direction = Math.PI; // left
    if (x < 0)
        this.direction = 0; // right
    if (y < 0)
        this.direction = Math.PI / 2; // up
    if (y > HEIGHT)
        this.direction = 3 * Math.PI / 2; // bottom

    var moveTo = new THREE.Vector3(
        this.speed * Math.cos(this.direction) + this.position.x,
        this.speed * Math.sin(this.direction) + this.position.y,
        this.graphic.position.z
    );

    this.position = moveTo;
    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;
};
