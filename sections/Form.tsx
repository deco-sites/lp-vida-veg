import { useScript } from "@deco/deco/hooks";
import type { AppContext } from '../apps/site.ts'

export function LoadingFallback() {
    return <div className="skeleton rounded-none h-[130px] lg:h-[109px]" />;
}

export default function Form({
    toast = null,
    message = "Formulario enviado com sucesso!",
}: {
    toast?: HTMLElement | null;
    message?: string;
}) {

    const onLoad = () => {

        (document.getElementById("phone") as HTMLInputElement).oninput = (e) => {
            const target = e.currentTarget as HTMLInputElement;
            const value = target.value.replace(/\D/g, "");
            if (value.length > 10) {
                target.value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
            } else {
                target.value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
            }
        };

    };

    return (
        <div>
            <div className="container px-5 lg:px-0 py-[50px] mx-auto lg:max-w-[736px]">
                <h1 className="text-start lg:text-center font-bold text-accent-content text-[36px] leading-[42px]">
                    Faça seu cadastro e receba nosso catálogo Vida Veg Chef completo!
                </h1>

                <div id="toast" className="toast toast-end"></div>

                <form
                    hx-post="/api/register"
                    hx-target="#toast"
                    hx-swap="innerHTML"
                    hx-indicator=".form-loading"
                    className="mt-8 bg-white mx-auto"
                >
                    <div className="mt-5">
                        <label htmlFor="email" className="block text-sm font-bold text-base-content">
                            E-mail
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Ex: email@email.com"
                            required
                            className="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                        />
                    </div>

                    <div className="flex flex-row gap-5">
                        <div className="sm:w-1/2 mt-5">
                            <label htmlFor="first-name" className="block text-sm font-bold text-base-content">
                                Primeiro nome
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Ex: Maria"
                                required
                                className="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                            />
                        </div>
                        <div className="sm:w-1/2 mt-5">
                            <label htmlFor="last-name" className="block text-sm font-bold text-base-content">
                                Último nome
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                className="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="phone" className="block text-sm font-bold text-base-content">
                            Telefone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            required
                            className="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="establishment-type" className="block text-sm font-bold text-base-content">
                            Tipo de Estabelecimento
                        </label>
                        <select
                            id="establishmentType"
                            name="establishmentType"
                            required
                            className="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                        >
                            <option value="">Escolha seu segmento</option>
                            <option value="restaurant">Restaurante</option>
                            <option value="market">Mercado</option>
                            <option value="other">Outro</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-4 px-4 rounded-full font-bold mt-5 form-loading"
                    >
                        Enviar
                    </button>
                </form>
                <script
                    type="text/javascript"
                    defer
                    dangerouslySetInnerHTML={{
                        __html: useScript(onLoad),
                    }}
                />
            </div>

        </div>
    );
};
export const action = async (
    _props: unknown,
    req: Request,
    ctx: AppContext,
) => {
    const form = await req.formData();

    const email = `${form.get("email") ?? ""}`;
    const firstName = `${form.get("firstName") ?? ""}`;
    const lastName = `${form.get("lastName") ?? ""}`;
    const phone = `${form.get("phone") ?? ""}`;
    const establishmentType = `${form.get("establishmentType") ?? ""}`;

    try {
        // deno-lint-ignore no-explicit-any
        await (ctx as any).invoke(
            "vtex.actions.masterdata.createDocument",
            {
                acronym: "CT",
                data: {
                    email,
                    firstName,
                    lastName,
                    phone,
                    establishmentType,
                },
            },
        );

        return {
            toast: "success",
            message: "Menssagem enviada com sucesso!",
        };
    } catch {
        return {
            toast: "error",
            message: "Erro ao enviar a mensagem. Tente novamente mais tarde.",
        };
    }
};