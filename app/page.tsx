import CanvasBackground from "@/components/background/canvasBackground"
import Comment from "@/components/comments/comments"
import NewComment from "@/components/newComment/newComment"
import { getComments } from "@/lib/comment.actions"



const page = async() => {
  let availableComments = []
  const  coments  = await getComments()
  if(coments.status === 200){
    availableComments = coments.data
  }



  return (
    <div className="relative h-screen w-screen bg-[#0f0f0f] flex flex-col justify-between">
      <CanvasBackground/>
     <div className="relative z-[2] w-screen ">
      <div className="flex justify-center py-8">
        <h1 className=" pt-10 text-[60px] text-white">Prisma test</h1>
      </div>
      <div id="comments" className="w-screen overflow-x-scroll">
      <div className="flex gap-4  px-4  w-fit">
        {availableComments.map((comment:any)=>(
          <Comment key={comment.id} comment={comment}/>
        ))}
      </div>
      </div>
     </div>
      <div className="flex justify-center items-end bg-gradient-to-t from-[#071b10] via-[#0f0f0f] to-transparent relative z-[99] h-[40%] py-8">
          <NewComment/>
      </div>
    </div>
  )
}

export default page