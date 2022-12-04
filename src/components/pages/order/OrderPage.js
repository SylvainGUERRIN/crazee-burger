import { Link, useParams } from "react-router-dom"

export default function OrderPage() {
    const {name} = useParams()

      return<>
        <h1>Bonjour {name}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </>
}