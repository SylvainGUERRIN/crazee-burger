import { Link} from "react-router-dom"

export default function Navbar({name}) {
  return (
    <div>
        {/* <h1>Bonjour {name}</h1> */}
        <Link to="/login">
          <button>Déconnexion</button>
        </Link>
    </div>
  )
}
