
const Button2 = ({ text = 'text' }) => {
    return (
        <button className="btn bg-[#FFC637] rounded-[12px]  text-base font-medium text-[#020043] flex items-center gap-2">{text}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M13.3137 1.00001C13.3137 0.447727 12.866 1.2137e-05 12.3137 1.18841e-05L3.31371 1.26849e-05C2.76142 1.23477e-05 2.31371 0.447728 2.31371 1.00001C2.31371 1.5523 2.76142 2.00001 3.31371 2.00001L11.3137 2.00001L11.3137 10C11.3137 10.5523 11.7614 11 12.3137 11C12.866 11 13.3137 10.5523 13.3137 10L13.3137 1.00001ZM1.70711 13.0208L13.0208 1.70712L11.6066 0.292906L0.292893 11.6066L1.70711 13.0208Z" fill="#020043"/>
      </svg></button>
    );
};

export default Button2;