import './styles.css'
import IMAGE from './1.jpg'
import SVG from './logo.svg'

const App = () => {
    return <>
    <h1>React Typescript Webpack Starter Template. - {process.env.NODE_ENV} {process.env.name}</h1>
    <img src={IMAGE} alt="It is a BG Color" width="300" height="200"></img>
    <img src={SVG} alt="It is a svg" width="300" height="200"></img>
    </>
}

export default App;