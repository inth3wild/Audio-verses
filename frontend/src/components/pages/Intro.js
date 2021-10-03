import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {
    const [bibleId, setBibleID] = useState(null);
    console.log(bibleId);

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
                                        options = {{
                                            strings: ['John 3:16', 'Luke chapter 7 verse 6 to 10', 'The Birth of Jesus Christ', 'Forgiveness'],
                                            autoStart: true,
                                            loop: true
                                        }}
                                    />
                            </div>
                            
                    </div>

                    <div className="col-md-3 py-3">
                        <div className="">
                            <select onChange={ (e) => {
                                setBibleID(e.target.value)
                                }}
                                className="form-select form-select-sm dropend" 
                                aria-label="Default select example"
                            >
                                <option value={null}> Choose Bible Language</option>
                                <optgroup label="English">
                                    <option value="de4e12af7f28f599-01">King James (Authorised) Version</option>
                                    <option value="06125adad2d5898a-01">The Holy Bible, American Standard Version</option>
                                    <option value="40072c4a5aba4022-01">Revised Version 1885</option>
                                </optgroup>
                                <optgroup label="Arabic">
                                    <option value="b17e246951402e50-01">Biblica® Open New Arabic Version 2012</option>
                                </optgroup>
                                <optgroup label="Dutch">
                                    <option value="ead7b4cc5007389c-01">Dutch Bible 1939</option>
                                </optgroup>
                                <optgroup label="German">
                                    <option value="926aa5efbc5e04e2-01">German Luther Bible 1912 with Strong's numbers</option>
                                    <option value="95410db44ef800c1-01">German Unrevised Elberfelder Bible</option>
                                </optgroup>
                                <optgroup label="Hausa">
                                    <option value="0ab0c764d56a715d-01">Biblica® Open Hausa Contemporary Bible 2020</option>
                                </optgroup>
                                <optgroup label="Hindi">
                                    <option value="705aad6832c6e4d2-02">The Holy Bible in Hindi</option>
                                </optgroup>
                                <optgroup label="Italian">
                                    <option value="41f25b97f468e10b-01">Diodati Bible 1885</option>
                                </optgroup>
                                <optgroup label="Portuguese">
                                    <option value="90799bb5b996fddc-01">Translation for Translators in Brasilian Portuguese</option>
                                </optgroup>
                                <optgroup label="Spanish">
                                    <option value="b32b9d1b64b4ef29-01">The Holy Bible in Simple Spanish</option>
                                </optgroup>
                                <optgroup label="Yoruba">
                                    <option value="b8d1feac6e94bd74-01">Biblica® Open Yoruba Contemporary Bible 2017</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6 mt-1 pt-2">
                        <button type="button" className="btn btn-primary" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#content" 
                        aria-expanded="false" aria-controls="collapseExample"> 
                            <i className="bi bi-mic"></i>  Start recording
                        </button>

                        <button id="switch-context" className="btn btn-danger">
                            switch-context
                        </button>
                    
                    </div>
                        

                </div>
            </div>
        </section>

    );
}
 
export default Intro;