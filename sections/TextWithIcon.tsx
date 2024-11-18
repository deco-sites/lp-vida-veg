import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useDevice } from "@deco/deco/hooks";

interface Props {
    title?: string;
    /**
   * @format rich-text
   */
    description?: string;
    cards?: Card[];
}
/**
 * @titleBy text
 */
interface Card {
    icon?: ImageWidget;
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */
    /**
     * @title
     */
    text?: string;
}
export function LoadingFallback() {
    return <div class="skeleton rounded-none h-[130px] lg:h-[109px]" />;
}

const TextWithIcon = ({
    title = "Um novo futuro começa agora!",
    description = "Abraçamos a sustentabilidade. Cada escolha impacta diretamente o todo, e é assim que cultivamos um mundo mais verde e inclusivo.",
    cards
}: Props) => {
    const device = useDevice();
    return (
        <>
            <div class="container">
                <div class=" overflow-hidden py-[48px] flex flex-col gap-7 mx-4">
                    <div class="flex flex-col gap-7 text-center lg:py-8">
                        <h4 class="text-5xl text-accent-content font-bold  text-start lg:text-center ">{title}</h4>
                        <div class="text-start lg:text-center" dangerouslySetInnerHTML={{ __html: description || '' }} />
                    </div>
                    <div class="container flex flex-col lg:flex-row justify-center gap-4 ">
                        {cards &&
                            cards.map((item) => (
                                <div class="p-8 border border-primary rounded-xl lg:max-w-[261px] w-full flex flex-col items-center text-center gap-2">
                                    {item?.icon && (
                                        <Image
                                            width={55}
                                            class="h-auto"
                                            src={item?.icon}
                                            alt={item?.icon || "Icon"}
                                            decoding="async"
                                            loading="lazy"
                                        />
                                    )}
                                    {item.text && (
                                        <p class="lg:text-xl" dangerouslySetInnerHTML={{ __html: item.text }} />
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextWithIcon;