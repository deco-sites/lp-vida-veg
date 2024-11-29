const Form = () => {
    return (
        <div class="px-4 mx-auto lg:max-w-3xl">
            <h1 class="text-start lg:text-center font-bold text-accent-content text-4xl lg:text-5xl">
                Faça seu cadastro e receba nosso catálogo Vida Veg Chef completo!
            </h1>

            <form
                hx-post="/api/submit-form"
                hx-target="#response-message"
                hx-swap="innerHTML"
                class="mt-8 bg-white mx-auto"
            >
                <div class="mt-5">
                    <label for="email" class="block text-sm font-bold text-base-content">
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

                <div class="flex flex-col lg:flex-row lg:gap-5">
                    <div class="lg:w-1/2 mt-5">
                        <label for="first-name" class="block text-sm font-bold text-base-content">
                            Primeiro nome
                        </label>
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            placeholder="Ex: Maria"
                            required
                            className="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                        />
                    </div>
                    <div class="lg:w-1/2 mt-5">
                        <label for="last-name" class="block text-sm font-bold text-base-content">
                            Último nome
                        </label>
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            required
                            className="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                        />
                    </div>
                </div>

                <div class="mt-5">
                    <label for="phone" class="block text-sm font-bold text-base-content">
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
                    <label
                        for="establishment-type"
                        class="block text-sm font-bold text-base-content"
                    >
                        Tipo de Estabelecimento
                    </label>
                    <select
                        id="establishment-type"
                        name="establishment-type"
                        required
                        class="mt-1 block w-full border border-base-300 rounded-full sm:text-sm h-[48px] px-3 outline-none"
                    >
                        <option value="">Escolha seu segmento</option>
                        <option value="restaurant">Restaurante</option>
                        <option value="market">Mercado</option>
                        <option value="other">Outro</option>
                    </select>
                </div>

                <button
                    type="submit"
                    class="w-full bg-primary text-white py-4 px-4 rounded-full font-bold mt-5"
                >
                    Enviar
                </button>
            </form>

            {/* <div id="response-message" class="mt-4 text-center"></div> */}
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