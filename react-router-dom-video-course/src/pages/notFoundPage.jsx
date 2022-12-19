import { Link } from 'react-router-dom'

const Notfoundpage = () => {
    return (
        <div>
            This page doesn't exist. Go <Link to="/">home, you are drunk</Link>
        </div>
    )
}

export default Notfoundpage;