import Image from "next/image"
import allduas from "../file/allduas.png"
import book from "../file/book.png"
import bookmark from "../file/bookmark.png"
import duaqanda from "../file/duaqanda.png"
import home from "../file/home.png"
import logo from "../file/logo.png"
import memorize from "../file/memorize.png"
import ruqyah from "../file/ruqyah.png"
import support from "../file/support.png"



const Group169 = () => {
  return (
    <div className=" flex flex-col items-center justify-between bg-[#FFFFFF] w-100 h-[700px] top-40 left-40 rounded rounded-15  ">

<div className="w-[73px] h-[73px]"> 

<Image src={logo} />
</div>

<div className="flex  flex-col items-center space-y-4 ">
  
<Image className="size-[40px]" src={home} />
<Image className="size-[40px]" src={allduas} />
<Image className="size-[40px]"src={memorize} />
<Image className="size-[40px]"src={bookmark}/>
<Image className="size-[40px]"src={ruqyah} />
<Image className="size-[40px]"src={duaqanda} />
<Image className="size-[40px]"src={book} />

</div>




<div className="w-[73px] h-[73px]">

<Image className="items-center "src={support} />
</div>
    
   
    </div>
  )
}

export default Group169