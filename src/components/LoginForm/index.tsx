export function LoginForm() {
  return (
    <form className="flex flex-col gap-3.5 ">
      <input
        className="border rounded-[1px] border-gray-200 w-full text-black"
        type="email"
        placeholder="Email"
      />
      <button className="bg-[#212A2F] w-full p-3.5 rounded-[1px] cursor-pointer text-white" type="submit">Continuar</button>
    </form>
  );
}
