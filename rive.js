let progress = 2;
// 0 - 1 - 2 - 3 - 4, en fonction de quoi à montrer
// 0 : vue initiale (statique)
// 1 : animation premier step
// 2 : animation second step
// 3 : anuimation troisieme step
// 4 : vue finale (statique)

const stateMachine = "State Machine 1";

const riveInstance = new rive.Rive({
	src: "./the_arcane-chemin.riv", //get rive file
	canvas: document.getElementById("rive"), //get correct canvas
	autoplay: true,
	stateMachines: stateMachine, // get correct stateMachine
	automaticallyHandleEvents: true, // Automatically handle RiveHTTPEvents
	onLoad: onLoadHandler,
});

// Resize the drawing surface if the window resizes
window.addEventListener(
	"resize",
	() => {
		// riveInstance.resizeDrawingSurfaceToCanvas();
	},
	false
);

// Handle the onLoad event
function onLoadHandler() {
	// Prevent a blurry canvas by using the device pixel ratio
	riveInstance.resizeDrawingSurfaceToCanvas();
	inputs = riveInstance.stateMachineInputs(stateMachine);

	step = inputs.find((i) => i.name === "step");
	step.value = progress;
}

function progresser(stepNum) {
	inputs = riveInstance.stateMachineInputs(stateMachine);

	step = inputs.find((i) => i.name === "step");
	step.value = stepNum;
}
