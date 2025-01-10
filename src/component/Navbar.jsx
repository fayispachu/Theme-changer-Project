function Navbar() {
  return (
    <>
      <div
        className={` w-screen bg-cyan-400 py-4 flex flex-row justify-center items-center gap-44`}
      >
        <a href="/">
          <h1 className="rounded-md bg-green-600 outline p-2">Page One</h1>
        </a>
        <a href="/two">
          {" "}
          <h1 className="rounded-md bg-green-600 outline p-2">Page Two</h1>
        </a>
        <a href="/three">
          {" "}
          <h1 className="rounded-md bg-green-600 outline p-2">Page Three</h1>
        </a>
      </div>
    </>
  );
}

export default Navbar;
