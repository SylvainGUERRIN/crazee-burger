import { Link, useParams } from "react-router-dom"
import Navbar from "../../reusable-ui/navbar/Navbar"
import Main from "./Main"

export default function OrderPage() {
    const {name} = useParams()

      return (
      <div>
        <div className="container">
          <Navbar/>
          <Main/>
        </div>
      </div>
      )
}