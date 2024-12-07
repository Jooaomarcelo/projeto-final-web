import Image from 'next/image';

export default function UserButton({ action, ref, name }) {
  return (
    <button
      className="h-10 w-10 rounded-full bg-cover bg-center"
      style={{
        backgroundImage: `${name.length === 0 ? `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))` : ''}`,
      }}
      onClick={action}
      ref={ref}
    >
      {!(name.length === 0) ? (
        <Image
          src={`/logo-${name.toLowerCase().split(' ')[0]}.png`}
          height={100}
          width={100}
          alt="Usuário deslogado "
          className="rounded-full"
        />
      ) : (
        <Image src="/user-unlogged.svg" height={100} width={100} alt="Usuário deslogado " className="rounded-full" />
      )}
    </button>
  );
}
