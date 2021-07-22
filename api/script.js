const video = document.getElementById('video')
Promise.all([
 faceapi.nets.tnyFaceDetector.LoadFromUri('/models')
 faceapi.nets.faceLandmark68Net.LoadFromUri('/models')
 faceapi.nets.faceRecognitionNet.LoadFromUri('/models')
 faceapi.nets.faceExpressionNet.LoadFromUri('/models')
]).then(startVideo)
function startVideo() {
	{video: {}},
	stream => video.srcObject = stream,
	err => console.error(err)
	)
}