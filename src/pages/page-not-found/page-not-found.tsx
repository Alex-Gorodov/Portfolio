import { Link } from "react-router-dom";

export function PageNotFound(): JSX.Element {
  return (
    <main className="main">
      <p>oops...</p>
      <p>404</p>
      <Link to="https://alex-gorodov.github.io/Portfolio">go to main page</Link>
    </main>
  )
}
