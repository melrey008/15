input.onGesture(Gesture.LogoUp, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
	
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
    }
})
