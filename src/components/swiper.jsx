
function Swiper(slide){
    return(
    <div className="slides">
        <div className="content">
        <img className="pro" src={slide.src} alt={slide.alt} />
            <h2>{slide.name}</h2>
            <p>{slide.word}</p>
            <a href={slide.lenk}><span>previw</span></a>
        </div>
    </div>
    )
}

export default Swiper