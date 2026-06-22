import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const onlyDigits = (value: string) => value.replace(/\D/g, "");

export const cepSchema = z.object({
  cep: z
    .string()
    .nonempty("O CEP é obrigatório")
    .transform(onlyDigits)
    .refine(
      (value) => /^\d{8}$/.test(value),
      "CEP inválido. Deve conter 8 números",
    ),
});

export type CEPFormData = z.infer<typeof cepSchema>;

export const useCEPForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CEPFormData>({
    resolver: zodResolver(cepSchema),
    mode: "onBlur",
    defaultValues: {
      cep: "",
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    reset,
  };
};
