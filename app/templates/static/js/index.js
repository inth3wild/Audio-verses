// alert("Ole!")

let chunks = [];

const audioMediaConstraints = {
  audio: true,
  video: false,
};

function startRecording(thisButton, otherButton) {
    navigator.mediaDevices.getUserMedia(audioMediaConstraints)
        .then((mediaStream) => {
            // Use the mediaStream in
            // your application
            const mediaRecorder = new MediaRecorder(mediaStream, {
                mimeType: "audio/mpeg",
        });

        // Make the mediaStream global
        window.mediaStream = mediaStream;
        window.mediaRecorder = mediaRecorder;

        mediaRecorder.start();

        mediaRecorder.ondataavailable = (e) => {
            // Push the recorded media data to
            // the chunks array
            chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, {
                type: "audio/mpeg",
            });
            chunks = [];

            const recordedMedia = document.createElement("audio");
            recordedMedia.controls = true;

            const recordedMediaURL = URL.createObjectURL(blob);
            recordedMedia.src = recordedMediaURL;

            const downloadButton = document.createElement("a");

            downloadButton.download = "Recorded-Media";

            downloadButton.href = recordedMediaURL;
            downloadButton.innerText = "Download it!";

            downloadButton.onclick = () => {
                URL.revokeObjectURL(recordedMedia);
            };

            document
            .getElementById("aud-recorder")
            .append(recordedMedia, downloadButton);
        };

        document.getElementById("aud-record-status").innerText = "Recording";
        thisButton.disabled = true;
        otherButton.disabled = false;
    });
}


function stopRecording(thisButton, otherButton) {
    // Stop the recording
	window.mediaRecorder.stop();

    // Stop all the tracks in the received
    // media stream i.e. close the camera
    // and microphone
    window.mediaStream.getTracks().forEach((track) => {
        track.stop();
    });

    document.getElementById("aud-record-status").innerText = "Recording done!";
    thisButton.disabled = true;
    otherButton.disabled = false;
}
