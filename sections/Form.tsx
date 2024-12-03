import { useScript } from "@deco/deco/hooks";
import type { AppContext } from '../apps/site.ts'

export function LoadingFallback() {
    return <div class="skeleton rounded-none h-[130px] lg:h-[109px]" />;
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
            <div class="container px-5 lg:px-0 py-[50px] mx-auto lg:max-w-[736px]">
                <h1 class="text-start lg:text-center font-bold text-accent-content text-[36px] leading-[42px]">
                    Faça seu cadastro e receba nosso catálogo Vida Veg Chef completo!
                </h1>

                <div id="toast" class="toast toast-end"></div>

                <form
                    hx-post="/api/register"
                    hx-target="#toast"
                    hx-swap="innerHTML"
                    hx-indicator=".form-loading"
                    class="mt-8 bg-white mx-auto"
                >
                    <div class="mt-5">
                        <label htmlFor="email" class="block text-sm font-bold text-base-content">
                            E-mail
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Ex: email@email.com"
                            required
                            class="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                        />
                    </div>

                    <div class="flex flex-row gap-5">
                        <div class="sm:w-1/2 mt-5">
                            <label htmlFor="first-name" class="block text-sm font-bold text-base-content">
                                Primeiro nome
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Ex: Maria"
                                required
                                class="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                            />
                        </div>
                        <div class="sm:w-1/2 mt-5">
                            <label htmlFor="last-name" class="block text-sm font-bold text-base-content">
                                Último nome
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                class="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                            />
                        </div>
                    </div>

                    <div class="mt-5">
                        <label htmlFor="phone" class="block text-sm font-bold text-base-content">
                            Telefone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            required
                            class="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                        />
                    </div>

                    <div class="mt-5">
                        <label htmlFor="establishment-type" class="block text-sm font-bold text-base-content">
                            Tipo de Estabelecimento
                        </label>
                        <label class="flex mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <g id="global">
                                    <path id="Vector" d="M9.49992 17.4168C13.8722 17.4168 17.4166 13.8724 17.4166 9.50016C17.4166 5.12791 13.8722 1.5835 9.49992 1.5835C5.12766 1.5835 1.58325 5.12791 1.58325 9.50016C1.58325 13.8724 5.12766 17.4168 9.49992 17.4168Z" stroke="#00754A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path id="Vector_2" d="M6.33343 2.375H7.1251C5.58135 6.99833 5.58135 12.0017 7.1251 16.625H6.33343" stroke="#00754A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path id="Vector_3" d="M11.875 2.375C13.4187 6.99833 13.4187 12.0017 11.875 16.625" stroke="#00754A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path id="Vector_4" d="M2.375 12.6667V11.875C6.99833 13.4187 12.0017 13.4187 16.625 11.875V12.6667" stroke="#00754A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path id="Vector_5" d="M2.375 7.1251C6.99833 5.58135 12.0017 5.58135 16.625 7.1251" stroke="#00754A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                            <select
                                id="establishmentType"
                                name="establishmentType"
                                required
                                class="outline-none w-full h-full rounded-full"
                            >
                                <option value="">Escolha seu segmento</option>
                                <option value="restaurant">Restaurante</option>
                                <option value="market">Mercado</option>
                                <option value="other">Outro</option>
                            </select>
                        </label>
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-primary text-white py-4 px-4 rounded-full font-bold mt-5 form-loading"
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

// export const action = async (
//     _props: unknown,
//     req: Request,
//     ctx: AppContext,
// ) => {

//     const form = await req.formData();
//     const email = ${form.get("email") || ""};
//     const phone = ${form.get("phone") || ""};
//     const lastName = ${form.get("lastName") || ""};
//     const firstName = ${form.get("firstName") || ""};
//     const establishmentType = ${form.get("establishmentType") || ""};

//     try {
//         // deno-lint-ignore no-explicit-any
//         await (ctx as any).invoke(
//             "vtex.actions.masterdata.createDocument",
//             {
//                 acronym: "CT",
//                 data: {
//                     email,
//                     phone,
//                     lastName,
//                     firstName,
//                     establishmentType,
//                 },
//             },
//         );

//         return {
//             toast: "success",
//             message: "Menssagem enviada com sucesso!",
//         };
//     } catch {
//         return {
//             toast: "error",
//             message: "Erro ao enviar a mensagem. Tente novamente mais tarde.",
//         };
//     }
// };