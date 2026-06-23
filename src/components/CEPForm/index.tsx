import { useState } from "react";
import { useCEPForm } from "./schema";
import type { Address } from "../../interfaces/address";
import { formatCurrency } from "../../utils/currency-format";

// O nome em maiúsculo e separado por " _" é uma convenção que indica que o valor dessa variável não deve ser alterado
// Record<Chave, Valor> é uma forma de tipar tanto a chave quanto o valor
const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  "Centro-Oeste": 24.9,
  Sudeste: 14.9,
  Sul: 19.9,
};

export function CEPForm() {
  const { register, handleSubmit, errors, isSubmitting } = useCEPForm();
  const [address, setAddress] = useState<Address | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  const onSubmit = async ({ cep }: { cep: string }) => {
    setAddress(null);
    setAddressError(null);

    try {
      const reponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await reponse.json();

      if (data.erro) {
        setAddressError("CEP não encontrado");
        return;
      }

      const shippingCost = SHIPPING_BY_REGION[data.regiao];

      if (!shippingCost) {
        setAddressError("Região não suportada para entrega");
        return;
      }

      setAddress({ ...data, shippingCost });
    } catch {
      setAddressError(
        "Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.",
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-1 w-full max-w-sm"
      >
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Insira seu CEP"
            className={`border border-border rounded-md p-3 flex-1 text-black
            ${errors.cep ? "border-error" : ""}`}
            {...register("cep")}
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-md cursor-pointer transition-all hover:bg-neutral-800 disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Buscando..." : "Buscar"}
          </button>
        </div>
        {errors.cep && (
          <span className="text-error text-xs font-medium mt-1">
            {errors.cep.message}
          </span>
        )}
      </form>

      {addressError && (
        <div className="mt-4">
          <p className="text-error text-sm">{addressError}</p>
        </div>
      )}

      {address && (
        <div className="mt-4">
          <p>
            <strong>Região:</strong> {address.regiao}
          </p>
          <p>
            <strong>Custo de entrega:</strong>{" "}
            {formatCurrency(address.shippingCost)}
          </p>
        </div>
      )}
    </>
  );
}
