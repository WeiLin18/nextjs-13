export default function Layout({ children }) {
  return (
    <>
      <head>
        <title>First group</title>
      </head>
      <div>
        <h2>From group layout </h2>
        <div>{children}</div>
      </div>
    </>
  );
}
