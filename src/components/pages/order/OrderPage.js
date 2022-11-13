import { useNavigate, useSearchParams, Link } from "react-router-dom"

export default function OrderPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    /*const navigateToLoginPage = () => {
        navigate('/login')
      }*/

      return<>
        <h1>Bonjour {searchParams.get('name')}</h1>
        <Link to="/login">
          <button>Déconnexion</button>
        </Link>
      </>
}