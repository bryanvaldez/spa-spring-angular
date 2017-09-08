var canvas, stage, exportRoot;

function FunCuatrocientosCuatro() {
	canvas = document.getElementById("CuatrocientosCuatro");
	exportRoot = new lib._4042();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", stage);
}
