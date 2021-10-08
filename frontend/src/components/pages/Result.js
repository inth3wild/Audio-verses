const Result = () => {
    return (
        <div>
            <p>Res page</p>
        {/* <form action="/action_page.php">
        <input type="file" id="myFile" name="filename">
        <input type="submit">
        </form> */}

        <form action="http://127.0.0.1:9000/blob" method="post" enctype="multipart/form-data">
            <input type="file" name="file" id="myfile" />
            <input type="submit" value="upload audio" name="submit"/>
        </form>

        </div>
        
    );
}
 
export default Result;