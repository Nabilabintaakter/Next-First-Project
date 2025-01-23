import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <p className='flex text-black items-center gap-3 text-2xl'>
                Please wait... <AiOutlineLoading3Quarters className="animate-spin text-black text-2xl" />
            </p>
        </div>
    );
};

export default Loading;
