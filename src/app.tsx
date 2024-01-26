import './styles.css'
import IMAGE from './1.jpg'
import SVG from './samplesvg.svg'

export const App = () => {
    return <>
    <h1>React Typescript Webpack Starter Template.</h1>
    <img src={IMAGE} alt="It is a BG Color" width="300" height="200"></img>
    <img src={SVG} alt="It is a svg" width="300" height="200"></img>
    </>
}