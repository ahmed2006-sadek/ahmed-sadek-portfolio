import myImg from "../img/img1.png"

function Home(){
    return(
        <>
            <div className="home">
                <img src={myImg} alt="my img" />
                <h2>
                    My name is Ahmed Sadek, and this is my portfolio<a href="/AboutMe"><span>About me</span></a>
                </h2>
            </div>
        </>
    )
}
export default Home