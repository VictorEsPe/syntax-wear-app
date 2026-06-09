import { useRegisterForm } from "./register-form.schema";

export function RegisterForm() {
  const { register, errors, isSubmitting } = useRegisterForm();

  return (
    <form className="text-black">
      {/* Nome */}
      <div>
        <label htmlFor="firstName" className="text-xs text-gray-600 ">
          Nome *
        </label>
        <input
          id="firstName"
          type="text"
          {...register("firstName")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                    ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
        />
        {errors.firstName && (
          <p className="text-red-600 text-xs mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Sobrenome */}
      <div>
        <label htmlFor="lastName" className="text-xs text-gray-600 ">
          Sobrenome *
        </label>
        <input
          id="lastName"
          type="text"
          {...register("lastName")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                    ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
        />
        {errors.lastName && (
          <p className="text-red-600 text-xs mt-1">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-xs text-gray-600 ">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                    ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
        />
        {errors.email && (
          <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* CPF */}
      <div>
        <label htmlFor="cpf" className="text-xs text-gray-600 ">
          CPF *
        </label>
        <input
          id="cpf"
          type="text"
          {...register("cpf")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                    ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
        />
        {errors.cpf && (
          <p className="text-red-600 text-xs mt-1">{errors.cpf.message}</p>
        )}
      </div>

      {/* Data de Nascimento */}
      <div>
        <label htmlFor="dateOfBirth" className="text-xs text-gray-600 ">
          Data de Nascimento
        </label>
        <input
          id="dateOfBirth"
          type="date"
          {...register("dateOfBirth")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                    ${errors.dateOfBirth ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
        />
        {errors.dateOfBirth && (
          <p className="text-red-600 text-xs mt-1">
            {errors.dateOfBirth.message}
          </p>
        )}
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="phone" className="text-xs text-gray-600 ">
          Telefone *
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                    ${errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
        />
        {errors.phone && (
          <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Senha */}
      <div>
        <label htmlFor="password" className="text-xs text-gray-600 ">
          Senha *
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                    ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
        />
        {errors.password && (
          <p className="text-red-600 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirmar Senha */}
      <div>
        <label htmlFor="confirmPassword" className="text-xs text-gray-600 ">
          Confirmar Senha *
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                    ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-xs mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="bg-[#5433EB] text-white font-semibold uppercase rounded-md mt-4 py-3 transition-all
      hover:bg-[#4028c7] disabled:opacity-50 w-full cursor-pointer"
      >
        {isSubmitting ? "Enviando..." : "Continuar"}
      </button>
    </form>
  );
}
