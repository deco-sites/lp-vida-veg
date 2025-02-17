
interface LinkButtonProps {
    /** @title Texto do botão */
    buttonText?: string;
    /** @title Link do botão */
    link?: string;
}

const LinkButton = ({
    link = "#",
    buttonText = "Faça seu pedido aqui",
}: LinkButtonProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            class={` fixed bottom-4 right-4 z-[100] flex items-center bg-green-500 text-white px-4 py-2 rounded shadow-lg`}
        >
            {buttonText}
        </a>
    );
};

export default LinkButton;