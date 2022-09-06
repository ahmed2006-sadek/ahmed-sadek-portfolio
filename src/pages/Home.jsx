import myImg from "../img/myImg.jpg"

function Home(){
    return(
        <>
            <div className="home">
                <h2>
                hello,
                <br />
                My name is Ahmed Sadek, and this is my portfolio,
                <br />
                I created some projects that you can see it from <mark>projects</mark>,
                <br />
                </h2>
                <img src={myImg} alt="my photo" />
            </div>
            <div className="homeMop">
                <h2>
                hello,
                My name is Ahmed Sadek, and this is my portfolio,
                I created some projects that you can see it from <mark>Projects</mark>,
                </h2>
                <img src={myImg} alt="my photo" />
            </div>
        </>
    )
}
export default Home