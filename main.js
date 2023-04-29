

function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PAvGDFyyd/model.json",modelloaded)

}

function modelloaded(){
    classifier.classify(gotresult)
}