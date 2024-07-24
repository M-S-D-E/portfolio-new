import { PlusCircleIcon } from "lucide-react";

const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
    return (
        <div className="p-4 md:p-6 lg:p-10 flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-4 md:gap-y-0">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{headerText}</h1>
                <button
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-x-2"
                    onClick={onClick}
                >
                    <PlusCircleIcon className="w-5 h-5" />
                    <span className="text-sm md:text-base">{buttonText}</span>
                </button>
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default PagesLayout;
