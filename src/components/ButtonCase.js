import { Link } from "react-router-dom"

function ButtonCase () {
    return (
        <div className="button-case">
            <ul>
                <li><Link className="button-case_page" to="/">1</Link></li>
                <li><Link className="button-case_page" to="/items01">2</Link></li>
                <li><Link className="button-case_page" to="/items02">3</Link></li>
                <li><Link className="button-case_page" to="/">4</Link></li>
                <li><Link className="button-case_page" to="/Items01">5</Link></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
        </div>
    )
}
export {ButtonCase}