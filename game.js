function getSnake(screen) {
	return { 
		head: {
			x: (screen.width/2),
			y: (screen.height/2),
		},
		size: 5,
		speed: { x: 0, y: 0 },
		body: []
	};
}

function getApple(position) {
	return {
		position: {
			x: position.x,
			y: position.y
		}
	};
}

function getScreen(screen) {
	return {
		width: screen.width,
		height: screen.height
	};
}

function game(snake, screen) {
	snake.body.push({x:snake.head.x, y:snake.head.y});
	snake.speed.x = 1;
	adjustPosition(snake.speed, snake.head, screen);
}

function adjustPosition(speed, position, screen) {
	position.x += speed.x;
	position.y += speed.y;
	if (position.x > (screen.width - 1)) position.x = 0;
	if (position.x < 0) position.x = screen.width - 1;
	if (position.y > (screen.height - 1)) position.y = 0;
	if (position.y < 0) position.y = screen.height - 1;
}

function getKeys() {
	return {
		up: 10,
		down: 20,
		left: 30,
		right: 40
	};
}

function keyEvent(evt, snake, keys) {
	switch (evt.keyCode) {
		case keys.up:
			moveInYAxis(snake.speed, 1);
			break;
		case keys.down:
			moveInYAxis(snake.speed, -1);
			break;
		case keys.left:
			moveInXAxis(snake.speed, -1);
			break;
		case keys.right:
			moveInXAxis(snake.speed, 1);
			break;
	}

	function moveInYAxis(speed, direction) {
		if (speed.y !== -direction) {
			speed.y = direction;
			speed.x = 0;
		}
	}

	function moveInXAxis(speed, direction) {
		if (speed.x !== -direction) {
			speed.x = direction;
			speed.y = 0;
		}
	}
}
