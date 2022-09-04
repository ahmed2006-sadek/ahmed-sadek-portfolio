
function Swiper(slide){
    return(
    <div className="slides">
        <div className="content">
        <img src={slide.src} alt={slide.alt} />
            <h2>{slide.name}</h2>
            <hr />
            <p>{slide.word}</p>
        </div>
    </div>
    )
}

export default Swiper