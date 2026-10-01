function Loader({ fullScreen = false }) {
  return (
    <div
      className={
        fullScreen
          ? "loader-container loader-fullscreen"
          : "loader-container"
      }
    >
      <div className="loader"></div>
    </div>
  );
}

export default Loader;