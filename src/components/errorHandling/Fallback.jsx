const Fallback = ({ error, resetErrorBoundary }) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  const handleReset = () => {
    resetErrorBoundary();
  };
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={handleReset}>Try again</button>
    </div>
  );
};

export default Fallback;
