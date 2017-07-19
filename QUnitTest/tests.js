QUnit.test( "keyEvent does not change snake Y-axis speed at opposite direction", function( assert ) {
 var snake = getSnake(getTestScreen());
 var keys = getKeys();
 keyEvent( {keyCode: keys.down}, snake, keys);
 var speedY = snake.speed.y;
 keyEvent( {keyCode: keys.up}, snake, keys);
 assert.ok( speedY !== -snake.speed.y, "Snake Did Not Change Opposite Y-axis Speed" );
});

QUnit.test( "keyEvent does not change snake X-axis speed at opposite direction", function( assert ) {
 var snake = getSnake(getTestScreen());
 var keys = getKeys();
 keyEvent( {keyCode: keys.left}, snake, keys);
 var speedX = snake.speed.x;
 keyEvent( {keyCode: keys.right}, snake, keys);
 assert.ok( speedX !== -snake.speed.x, "Snake Did Not Change Opposite X-axis Speed" );
});

QUnit.test( "keyEvent provides snake +ve X-axis speed on RIGHT key", function( assert ) {
 var snake = getSnake(getTestScreen());
 var keys = getKeys();
 keyEvent( {keyCode: keys.down}, snake, keys);
 keyEvent( {keyCode: keys.right}, snake, keys);
 assert.ok( snake.speed.x > 0, "Snake Has -ve X-axis Speed" );
 assert.ok( snake.speed.y === 0, "Snake Has 0 Y-axis Speed" );
});

QUnit.test( "keyEvent provides snake -ve X-axis speed on LEFT key", function( assert ) {
 var snake = getSnake(getTestScreen());
 var keys = getKeys();
 keyEvent( {keyCode: keys.down}, snake, keys);
 keyEvent( {keyCode: keys.left}, snake, keys);
 assert.ok( snake.speed.x < 0, "Snake Has -ve X-axis Speed" );
 assert.ok( snake.speed.y === 0, "Snake Has 0 Y-axis Speed" );
});

QUnit.test( "keyEvent provides snake -ve Y-axis speed on DOWN key", function( assert ) {
 var snake = getSnake(getTestScreen());
 var keys = getKeys();
 keyEvent( {keyCode: keys.left}, snake, keys);
 keyEvent( {keyCode: keys.down}, snake, keys);
 assert.ok( snake.speed.y < 0, "Snake Has -ve Y-axis Speed" );
 assert.ok( snake.speed.x === 0, "Snake Has 0 X-axis Speed" );
});

QUnit.test( "keyEvent provides snake +ve Y-axis speed on UP key", function( assert ) {
 var snake = getSnake(getTestScreen());
 var keys = getKeys();
 keyEvent( {keyCode: keys.left}, snake, keys);
 keyEvent( {keyCode: keys.up}, snake, keys);
 assert.ok( snake.speed.y > 0, "Snake Has +ve Y-axis Speed" );
 assert.ok( snake.speed.x === 0, "Snake Has 0 X-axis Speed" );
});

QUnit.test( "keyEvent changes snake velocity", function( assert ) {
 var snake = getSnake(getTestScreen());
 var speedX = snake.speed.x;
 var speedY = snake.speed.y;
 keyEvent({keyCode: getKeys().up}, snake, getKeys());
 assert.ok( (speedX !== snake.speed.x) || (speedY !== snake.speed.y), "Snake Velocity Changed" );
});

QUnit.test( "getKeys provides keys for each direction", function( assert ) {
 var keys = getKeys();
 assert.ok( keys.up !== undefined, "UP Key Received" );
 assert.ok( keys.down !== undefined, "DOWN Key Received" );
 assert.ok( keys.left !== undefined, "LEFT Key Received" );
 assert.ok( keys.right !== undefined, "Right Key Received" );
});

QUnit.test( "getKeys provides keys", function( assert ) {
 assert.ok( getKeys() !== undefined, "Keys Received" );
});

QUnit.test( "getScreen provides correct screen size", function( assert ) {
 var screen = getTestScreen();
 assert.ok( getTestScreen(screen).width === screen.width, "Screen with Correct Width Received" );
 assert.ok( getTestScreen(screen).height === screen.height, "Screen with Correct Height Received" );
});

QUnit.test( "getScreen provides screen", function( assert ) {
 assert.ok( getScreen(getTestScreen()) !== undefined, "Screen Received" );
});

QUnit.test( "adjustPosition does not go beyond screen's width", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 snake.speed.x++;
 snake.head.x = screen.width - 1;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( snake.head.x < screen.width, "Snake Did Not Go Above Screen's X-axis" );
});

QUnit.test( "adjustPosition does not go below screen's width", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 snake.speed.x--;
 snake.head.x = 0;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( snake.head.x > 0, "Snake Did Not Go Behind Screen's X-axis" );
});

QUnit.test( "adjustPosition does not go beyond screen's height", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 snake.speed.y++;
 snake.head.y = screen.height - 1;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( snake.head.y < screen.height, "Snake Did Not Go Above Screen's Y-axis" );
});

QUnit.test( "adjustPosition does not go below screen's height", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 snake.speed.y--;
 snake.head.y = 0;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( snake.head.y > 0, "Snake Did Not Go Behind Screen's Y-axis" );
});

QUnit.test( "adjustPosition changes position at correct velocity at -ve Y and zero X", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 snake.speed.y--;
 var posX = snake.head.x;
 var posY = snake.head.y;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( snake.head.y !== posY, "Snake Started Changing Position on Y-axis" );
 assert.ok( snake.head.x === posX, "Snake Did Not Change Position on X-axis" );
});

QUnit.test( "adjustPosition changes position at correct velocity at +ve Y and zero X", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 snake.speed.y++;
 var posX = snake.head.x;
 var posY = snake.head.y;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( snake.head.y !== posY, "Snake Started Changing Position on Y-axis" );
 assert.ok( snake.head.x === posX, "Snake Did Not Change Position on X-axis" );
});

QUnit.test( "adjustPosition changes position at correct velocity at -ve X and zero Y", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 snake.speed.x--;
 var posX = snake.head.x;
 var posY = snake.head.y;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( snake.head.x !== posX, "Snake Started Changing Position on X-axis" );
 assert.ok( snake.head.y === posY, "Snake Did Not Change Position on Y-axis" );
});

QUnit.test( "adjustPosition changes position at correct velocity at +ve X and zero Y", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 snake.speed.x++;
 var posX = snake.head.x;
 var posY = snake.head.y;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( snake.head.x !== posX, "Snake Started Changing Position on X-axis" );
 assert.ok( snake.head.y === posY, "Snake Did Not Change Position on Y-axis" );
});

QUnit.test( "adjustPosition does not change position at non-zero velocity", function( assert ) {
 var snake = getSnake(getTestScreen());
 var screen = getTestScreen();
 var posX = snake.head.x;
 var posY = snake.head.y;
 adjustPosition(snake.speed, snake.head, screen);
 assert.ok( ((snake.head.x === posX) || (snake.head.y === posY)), "Snake Started Changing Position" );
});

QUnit.test( "game !increases! snake body", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 game(snake, screen);
 assert.ok( snake.body.length > 0, "Snake Body Size Increased" );
});

QUnit.test( "game starts changing snake position", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 var posX = snake.head.x;
 var posY = snake.head.y;
 game(snake, screen);
 assert.ok( ((snake.head.x !== posX) || (snake.head.y !== posY)), "Snake Started Changing Position" );
});

QUnit.test( "game increases snake velocity", function( assert ) {
 var screen = getTestScreen();
 var snake = getSnake(screen);
 game(snake, screen);
 assert.ok( ((snake.speed.x === 1) || (snake.speed.y === 1)), "Snake Velocity Increased" );
});

QUnit.test( "getApple starts apple from defined position", function( assert ) {
 var position = getTestPosition();
 var apple = getApple(position);
 assert.ok( apple.position.x === position.x, "Apple Starts from Defined X" );
 assert.ok( apple.position.y === position.y, "Apple Starts from Defined Y" );
});

QUnit.test( "getApple provides apple", function( assert ) {
 assert.ok( getApple(getTestPosition()) !== undefined, "Apple Received" );
});

QUnit.test( "getSnake speed starts snake from 0", function( assert ) {
 var position = getTestScreen();
 var snake = getSnake(getTestScreen());
 assert.ok( snake.speed.x === 0, "Snake Speed is 0 on X-axis" );
 assert.ok( snake.speed.y === 0, "Snake Speed is 0 on Y-axis" );
});

QUnit.test( "getSnake starts snake from middle position", function( assert ) {
 var screen = getTestScreen();
 var middleX = (screen.width/2);
 var middleY = (screen.height/2);
 var snake = getSnake(screen);
 assert.ok( snake.head.x === middleX, "Snake Starts from Middle X" );
 assert.ok( snake.head.y === middleY, "Snake Starts from Middle Y" );
});

QUnit.test( "getSnake provides empty snake body", function( assert ) {
 assert.ok( getSnake(getTestScreen()).body.length === 0, "Snake Body is Empty" );
});

QUnit.test( "getSnake provides correct snake size", function( assert ) {
 assert.ok( getSnake(getTestScreen()).size === 5, "Snake Size is Correct" );
});

QUnit.test( "getSnake provides snake", function( assert ) {
 assert.ok( getSnake(getTestPosition()) !== undefined, "Snake Received" );
});

function getTestScreen() {
 return {width:600, height:250};
}

function getTestPosition() {
 return {x:50, y:25};
}
