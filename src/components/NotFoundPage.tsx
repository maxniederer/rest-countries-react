import { Link } from "react-router";

function NotFoundPage() {
  return (
    <>
      <div className="centered error">
        <h1>404</h1>
        <p>The requested page was not found.</p>
        <Link to="/" className="inline-link">
          Go home
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
