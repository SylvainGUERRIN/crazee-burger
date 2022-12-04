export default function Navbar() {
  return (
    <div>
        <h1>Bonjour {name}</h1>
        <Link to="/login">
          <button>Déconnexion</button>
        </Link>
    </div>
  )
}
