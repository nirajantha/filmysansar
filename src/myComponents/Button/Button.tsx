interface buttonProps{
    btnName:string;
    icon?:React.ReactNode;//
    click:()=> void;
}
const Button:React.FC<buttonProps> = ({btnName,icon,click}) => {
  return (
   <>
   <button className="rounded-[8px] border-1 bg-slate-500 text-[white] p-[6px] w-full"
        onClick={click}>
          {icon && icon}&nbsp;&nbsp;{btnName}
    </button>
   </>
  )
}

export default Button