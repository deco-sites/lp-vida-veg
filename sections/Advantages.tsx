import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useDevice } from "@deco/deco/hooks";

interface Props {
    /**
* @format rich-text
* @default Click Oferecer produtos veganos no seu estabelecimento nunca foi tão fácil!
Com a linha Vida Veg Chef, você contará com:.
*/
    /** @title Titulo da sessão */
    title?: string;
    /** @title Clique no + para adicionar novos cards */
    cards?: Cards[];

}

/**
 * @titleBy content
 */

interface Cards {
    /** @title Icone do card */
    /** @description Tamanho do icone  55x55 */
    icon?: ImageWidget;
    /**
* @format rich-text
* @default Click Recorrência de Clientes. A demanda por pratos saudáveis e com restrições alimentares está crescendo exponencialmente..
*/
    /** @title clique para Atualizar o conteudo dos card */
    content?: string;
}

export function LoadingFallback() {
    return <div class="skeleton rounded-none h-[130px] lg:h-[109px]" />;
}
const Advantages = ({ src, title, cards }: Props) => {
    const device = useDevice();
    return (
        <div>
            <div class="flex container  lg:px-0">
                <div class="flex flex-col lg:flex-row justify-between items-center w-full">
                    {/* Primeira div com largura de 20% */}
                    <div class="w-full lg:w-[30%] flex justify-center py-10 lg:py-0 px-5 lg:px-0">
                        <Image
                            src={src || ''}
                            width={device === 'mobile' ? 320 : 460}
                            height={device === 'mobile' ? 228 : 328}
                        />
                    </div>
                    {/* Segunda div com largura de 60% */}
                    <div class="w-full bg-base-content lg:py-[50px] lg:pl-[48px] lg:rounded-tl-[60px] lg:rounded-bl-[60px] lg:w-[60%] px-5 lg:px-0 py-7">
                        <div
                            class="lg:max-w-[680px]"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <div class="flex lg:gap-7 lg:mt-[48px] flex-col lg:flex-row">
                            {cards &&
                                cards?.map((card, index) => (
                                    <div key={index} class="lg:max-w-[208px] flex flex-col mb-3 lg:mb-0">
                                        <Image
                                            class="lg:mb-4"
                                            src={card?.icon || ''}
                                            alt={card?.content}
                                            width={device === 'mobile' ? 55 : 36}
                                            height={device === 'mobile' ? 55 : 36}
                                        />
                                        <p
                                            dangerouslySetInnerHTML={{ __html: card?.content }}
                                        ></p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
