export default function UserButton({ action, ref }) {
  return (
    <button
      className="h-10 w-10 rounded-full bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(user-unlogged.svg)',
      }}
      onClick={action}
      ref={ref}
    ></button>
  );
}
