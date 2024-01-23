const ErrorPage = ({ lightmode }) => {
  return (
    <div
      className="error-page-container"
      style={
        lightmode
          ? { backgroundColor: "var(--light)", color: "var(--black)" }
          : { backgroundColor: "var(--darkest)", color: "var(--white)" }
      }
    >
      <h2 className="error-message">
        Something went wrong! Please try again later
      </h2>
    </div>
  );
};

export default ErrorPage;