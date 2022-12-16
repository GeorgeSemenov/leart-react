import { Link } from 'react-router-dom'

export default const Notfoundpage = () => {
    return (
        <div>
            This page doesn't exist. Go <a href="/">home</a>
            This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    )
}