import { useId } from "../sdk/useId.ts";
import { useScript } from "@deco/deco/hooks";
import Image from "apps/website/components/Image.tsx";

interface Props {
    /**
     * @title Título da sessão
     */
    title?: string;
    /**
     * @title Subtítulo da sessão
     * @format rich-text
     */
    subtitle?: string;
    /**
     * @title Clique no + para adicionar um novo card
     */
    cards?: Card[];
    /**
     * @title Configurar CTA
     */
    cta?: CTA;
}

interface Card {
    /**
     * @title Imagem
     * @description tamanho da imagem 132x132
     */
    src?: string;
    /**
     * @title Texto do card
     */
    label?: string;
}

interface CTA {
    label?: string;
    link?: string;
}

const ItemCard = ({ src, label }: Card) => (
    <div class="swiper-slide max-w-32">
        <div class="flex flex-col gap-2">
            <Image
                src={src || ""}
                alt={label}
                width={128}
                height={128}
                class="object-cover"
            />
            <p class="text-center max-w-32">{label}</p>
        </div>
    </div>
);

const OurProducts = ({ title, subtitle, cards, cta }: Props) => {
    const id = useId();

    return (
        <>
            <div class="py-12 container flex flex-col gap-7 items-center overflow-hidden">
                {title && (
                    <h3 class="text-4xl text-start lg:text-center text-accent-content font-bold">
                        {title}
                    </h3>
                )}
                {subtitle && (
                    <div
                        class="text-lg text-primary text-start lg:text-center"
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                )}
                <div id={id} class="max-w-full">
                    <div class="swiper-wrapper">
                        {cards?.map((item, index) => (
                            <ItemCard key={index} {...item} />
                        ))}
                    </div>
                </div>

                {cta?.label && cta?.link && (
                    <a
                        class="py-4 px-6 bg-primary text-white font-bold rounded-full"
                        href={cta.link}
                    >
                        {cta.label}
                    </a>
                )}
            </div>

            <script
                type="text/javascript"
                defer
                dangerouslySetInnerHTML={{
                    __html: useScript((id) => {
                        // @ts-ignore .
                        new Swiper(`#${id}`, {
                            freeMode: true,
                            grabCursor: true,
                            spaceBetween: 12,
                            slidesPerView: "auto",
                            centeredSlides: false,
                            centerInsufficientSlides: true,
                        });
                    }, id),
                }}
            />
        </>
    );
};

export default OurProducts;
