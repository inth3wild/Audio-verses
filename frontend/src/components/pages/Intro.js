import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Result from './Result';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'



const Intro = () => {
    const [bibleId, setBibleID] = useState(null);
    const [btnColor, setBtnColor] = useState('btn-primary');
    const [btnText, setBtnText] = useState('Start recording');
    const [recordState, setRecordState] = useState('stop');
    const [count, setCount] = useState(1)


    const recordAudio = (e) => {
        if (recordState === 'stop') {
            setBtnColor('btn-danger');
            setBtnText('Stop recording');

            setRecordState(RecordState.START)

        } else {
            setBtnColor('btn-primary');
            setBtnText('Start recording');

            setRecordState(RecordState.STOP)
        }
    }

    const onStop = async (audioData) => {
        console.log(bibleId);
        console.log('Audio: ', audioData);
        // const audioBlob = newww Blob([JSON.stringify(audioData, null, 2)], {type : 'audio/wav'})

        // const obj = {hello: 'world'};
        // const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});

        // console.log( typeof audioData['blob']);
        // console.log(audioData);
        // console.log(audioBlob.stream);
        // console.log(blob);

        const formData = new FormData();
        formData.append('file', audioData.blob, `recorded${count}.wav`)
        // formData.append('name', `NewFile${count}`)
        setCount( count + 1 )

        let response = await fetch('http://127.0.0.1:9000/blob', {
            method: 'POST',
            body: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        });

        let result = await response.json();
        console.log(result);
        // alert(result);
    }

    return (
        <section id="intro">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>
                            <div className="display-4">
                                Voice powered bible search.
                            </div>
                        </h1>
                        <p className="lead">
                            Choose from a variety of bible versions and bible languages to search with <br />
                            voice input for verses, keywords, references etc.
                        </p>

                        <div className="lead fw-lighter font-monospace">
                            <span className="d-inline">
                                Say:
                            </span>
                            <Typewriter
                                options={{
                                    strings: ['John 3:16', 'Luke chapter 7 verse 6 to 10', 'The Birth of Jesus Christ', 'Forgiveness'],
                                    autoStart: true,
                                    loop: true
                                }} />
                        </div>

                    </div>

                    <div className="col-md-3 py-3">
                        <div className="">
                            <select onChange={(e) => {
                                setBibleID(e.target.value);
                            } }
                                className="form-select form-select-sm"
                                aria-label="Default select example"
                            >
                                <option value={null}> Choose Bible Language</option>
                                <optgroup label="English" className="fs-6 lead">
                                    <option value="de4e12af7f28f599-01">King James (Authorised) Version</option>
                                    <option value="06125adad2d5898a-01">The Holy Bible, American Standard Version</option>
                                    <option value="40072c4a5aba4022-01">Revised Version 1885</option>
                                </optgroup>
                                <optgroup label="Arabic" className="fs-6 lead">
                                    <option value="b17e246951402e50-01">Biblica® Open New Arabic Version 2012</option>
                                </optgroup>
                                <optgroup label="Dutch" className="fs-6 lead">
                                    <option value="ead7b4cc5007389c-01">Dutch Bible 1939</option>
                                </optgroup>
                                <optgroup label="German" className="fs-6 lead">
                                    <option value="926aa5efbc5e04e2-01">German Luther Bible 1912 with Strong's numbers</option>
                                    <option value="95410db44ef800c1-01">German Unrevised Elberfelder Bible</option>
                                </optgroup>
                                <optgroup label="Hausa" className="fs-6 lead">
                                    <option value="0ab0c764d56a715d-01">Biblica® Open Hausa Contemporary Bible 2020</option>
                                </optgroup>
                                <optgroup label="Hindi" className="fs-6 lead">
                                    <option value="705aad6832c6e4d2-02">The Holy Bible in Hindi</option>
                                </optgroup>
                                <optgroup label="Italian" className="fs-6 lead">
                                    <option value="41f25b97f468e10b-01">Diodati Bible 1885</option>
                                </optgroup>
                                <optgroup label="Portuguese" className="fs-6 lead">
                                    <option value="90799bb5b996fddc-01">Translation for Translators in Brasilian Portuguese</option>
                                </optgroup>
                                <optgroup label="Spanish" className="fs-6 lead">
                                    <option value="b32b9d1b64b4ef29-01">The Holy Bible in Simple Spanish</option>
                                </optgroup>
                                <optgroup label="Yoruba" className="fs-6 lead">
                                    <option value="b8d1feac6e94bd74-01">Biblica® Open Yoruba Contemporary Bible 2017</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>



                    <div className="col-md-6 mt-1 pt-2">
                    <AudioReactRecorder state={recordState} onStop={onStop} canvasWidth={0} canvasHeight={0} />
                        <button type="button" className={`btn ${btnColor}`}
                            onClick = { (e) => { recordAudio(e) } }
                            data-bs-toggle="collapse"
                            data-bs-target="#content"
                            aria-expanded="false" aria-controls="collapseExample">
                            <i className="bi bi-mic"></i>  {btnText}
                        </button>

                        {/* <button id="switch-context" className="btn btn-danger">
                            switch-context
                        </button> */}

                    </div>


                </div>
            </div>

            {/* <Result /> */}
        </section>


    );
}
 
export default Intro;