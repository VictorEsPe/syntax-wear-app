import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidCPF } from "../../utils/cpf-validator";

// Schema de validação para o formulário de registro
export const registerSchema = z
  .object({
    firstName: z
      .string()
      .nonempty({ message: "Primeiro nome é obrigatório" })
      .min(2, "Primeiro nome deve ter no mínimo 2 caracteres")
      .max(50, "Primeiro nome deve ter no máximo 50 caracteres")
      .regex(
        /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]+$/,
        "Primeiro nome deve conter apenas letras",
      ),

    lastName: z
      .string()
      .nonempty({ message: "Último nome é obrigatório" })
      .min(2, "Último nome deve ter no mínimo 2 caracteres")
      .max(50, "Último nome deve ter no máximo 50 caracteres")
      .regex(
        /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]+$/,
        "Último nome deve conter apenas letras",
      ),

    email: z
      .email("Email deve ser um endereço de email válido")
      .nonempty({ message: "Email é obrigatório" }),
    cpf: z
      .string()
      .nonempty({ message: "CPF é obrigatório" })
      .refine(isValidCPF, "CPF deve ser válido"),

    dateOfBirth: z
      .string()
      .nonempty({ message: "Data de nascimento é obrigatória" })
      .refine(
        (date) => !isNaN(Date.parse(date)),
        "Data de nascimento inválida",
      ),

    password: z
      .string()
      .nonempty({ message: "Senha é obrigatória" })
      .min(8, "Senha deve ter no mínimo 8 caracteres"),

    cellphone: z.string().nonempty({ message: "Telefone é obrigatório" }),

    confirmPassword: z
      .string()
      .nonempty({ message: "Confirmação de senha é obrigatória" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // Define o campo que terá o erro
  });

// Inferência de tipo TypeScript para uso nos componentes
type registerFormData = z.infer<typeof registerSchema>;

// Configuração padrão para o useForm
export function RegisterFormConfig (){
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<registerFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
        email: "",
        password: ""
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  }
};
