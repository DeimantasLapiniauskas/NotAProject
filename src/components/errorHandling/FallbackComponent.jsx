const FallbackComponent = ({ error, resetErrorBoundary }) => (
    <div role="alert">
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )

export default FallbackComponent;