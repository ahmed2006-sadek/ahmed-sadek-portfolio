import myImg from "../img/myImg.jpg"

function AboutMe(){
    return(
        <>
            <div className="about">
                <h2>
                    <ul>
                        <li>- My name is Ahmed Sadek.</li>
                        <li>- I am a high school student.</li>
                        <li>- I am a front end developer.</li>
                        <li>- Member of <a href="https://rockai-dev.herokuapp.com/">Rockai Dev</a> team.</li>
                    </ul>
                </h2>
                <img src={myImg} alt="my photo" />
           </div>
           <div className="aboutMop">
                <h2>
                    <ul>
                        <li>- My name is Ahmed Sadek.</li>
                        <li>- I am a high school student.</li>
                        <li>- I am a front end developer.</li>
                        <li>- Member of <a href="https://rockai-dev.herokuapp.com/">Rockai Dev</a> team.</li>
                    </ul>
                </h2>
                <img src={myImg} alt="my photo" />
           </div>
        </>
    )
}
export default AboutMe