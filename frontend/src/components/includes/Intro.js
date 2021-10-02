import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {
    const [bibleId, setBibleID] = useState(null);
    
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
                            <select onChange={ (e) => {setBibleID(e.target.value); console.log(bibleId)} } className="form-select form-select-sm" aria-label="Default select example">
                                <option>Choose Bible Language</option>
                                <option value="1">English</option>
                                <option value="2">Arabic</option>
                                <option value="3">Dutch</option>
                                <option value="4">German</option>
                                <option value="5">Hausa</option>
                                <option value="6">Hindi</option>
                                <option value="7">Italian</option>
                                <option value="8">Portuguese</option>
                                <option value="9">Spanish</option>
                                <option value="10">Yoruba</option>
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