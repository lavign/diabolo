export default function Login() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h1 className="font-bold text-3xl mb-4 text-primary">Bienvenida a Diabolo!!</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-primary text-white p-2 rounded-md">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
