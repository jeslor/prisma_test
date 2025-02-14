import CanvasBackground from "@/components/background/canvasBackground"
import NewComment from "@/components/newComment/newComment"



const page = () => {


  return (
    <div className="relative h-screen w-screen bg-[#0f0f0f] flex flex-col justify-between">
      <CanvasBackground/>
     <div className="relative z-[2]">
      <div className="flex justify-center py-8">
        <h1 className=" pt-10 text-[60px] text-white">Prisma test</h1>
      </div>
      <div>

      </div>
     </div>
      <div className="flex justify-center items-end bg-gradient-to-t from-[#071b10] via-[#0f0f0f] to-transparent relative z-[99] h-[40%] py-8">
          <NewComment/>
      </div>
    </div>
  )
}

export default page