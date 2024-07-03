
const Button1 = ({ text = 'text',rounded='25px' }) => {
    return (
        <button className={`btn bg-transparent rounded-[${rounded}] border-[1px] border-[#343268] text-base font-normal text-[#020043]`}>{text}</button>
    );
};

export default Button1;