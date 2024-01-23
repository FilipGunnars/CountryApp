const LoadingPage = ({ lightmode }) => {
  return (
    <div
      className="loader-page"
      style={
        lightmode
          ? { backgroundColor: "var(--light)", color: "var(--black)" }
          : { backgroundColor: "var(--darkest)", color: "var(--white)" }
      }
    >
      <div className="loader"></div>
    </div>
  );
};

export default LoadingPage;