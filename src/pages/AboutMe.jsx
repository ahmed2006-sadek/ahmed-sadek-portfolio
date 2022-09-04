import myImg from "../img/myImg.jpg"

function AboutMe(){
    return(
        <>
            <div className="about">
                <img src={myImg} alt="my photo" />
                <h2>
                    <ul>
                        <li>- My name is Ahmed Sadek.</li>
                        <li>- I am a high school student.</li>
                        <li>- I am a front end developer.</li>
                        <li>- Member of <a href="https://rockai-dev.herokuapp.com/">Rockai Dev</a> team.</li>
                    </ul>
                </h2>
           </div>
        </>
    )
}
export default AboutMe