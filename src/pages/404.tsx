export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <span className="text-5xl font-bold text-white">Not found</span>
      <a href="/" className="btn btn-primary">
        Return home
      </a>
    </div>
  );
}
