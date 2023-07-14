import "../SlideReveal/SlideReveal.css"
export const SlideReveal = () => {

    return <>
        <main id="slideRevealContainer">
            <article id="slideRevealAnimationContainer">
                <div id="slider-hello"></div>
                <h4 className="setCustomFont" id="helloHeader">Hello</h4>
                <div id="slider-goodbye"></div>
                <h4 className="setCustomFont" id="goodbyeHeader">Goodbye</h4>
            </article>
        </main>
    </>
}