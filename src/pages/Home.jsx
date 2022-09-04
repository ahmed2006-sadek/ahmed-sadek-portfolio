import myImg from "../img/myImg.jpg"

function Home(){
    return(
        <>
            <div className="home">
                <img src={myImg} alt="my photo" />
                <h2>
                    My name is Ahmed Sadek, and this is my portfolio<a href="/AboutMe"><span>About me</span></a>
                </h2>
            </div>
        </>
    )
}
export default Home