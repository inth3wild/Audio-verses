
const VerseofTheDay = () => {

    return (
        <section id="verse-of-the-day">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="card text-center border-0">
                            <div className="card-header">
                                <p className="h4">
                                    Verse of the Day ✨
                                </p>
                            </div>
                            <div className="card-body">
                                {
                                    // const elem = document.querySelector('.dailyVerses.bibleVerse');
                                    // console.log(elem);
                                }
                                <blockquote className="blockquote">
                                    <div id="dailyVersesWrapper"></div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
 
export default VerseofTheDay;