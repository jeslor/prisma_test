"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { PrismaClient } from '@prisma/client'
import { saveComment } from "@/lib/comment.actions"

const commentValidator = z.object({
  username: z.string().nonempty("User is required"),
    comment: z.string().nonempty("Comment is required"),
    })




const NewComment = () => {
  const prisma = new PrismaClient()
    const form = useForm<z.infer<typeof commentValidator>>({
        resolver: zodResolver(commentValidator),
        defaultValues: {
          username: "",
            comment: "",
        },
      })

      const onSubmit = async(values:z.infer<typeof commentValidator>)=>{
        alert("Saving comment")
        try {
         const commentSaved = await saveComment(values)
         if(commentSaved.status === 200){
           alert("Comment saved")
         }else{
          throw new Error("Error saving comment")
         }

       
      } catch (error:any) {
        console.log(error);
      } 
        
      }


  return (<>
  
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  relative bg-slate-200 px-8 py-8 h-fit rounded-3xl">
      <div className=" min-w-[400px] flex flex-col  gap-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1 font-semibold text-[14px]">Username </FormLabel>
                    <FormControl>
                      <Input  type="text"  autoComplete="none" className="!mt-0 border-[2px] border-gray-300" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-[10px]" />
                  </FormItem>
                )}
              />
           
              <FormField
                control={form.control}
                
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1 font-semibold text-[14px]"> Comment</FormLabel>
                    <FormControl>
                    <Textarea  rows={7}  autoComplete="none" className="!mt-0 border-[2px] border-gray-300" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-[10px]" />
                  </FormItem>
                )}
              />
               
              </div>
              <button className="py-2 px-5 bg-slate-600 font-semibold text-slate-100 rounded-xl hover:bg-slate-900">Save comment</button>
        </form>
    </Form>
    </>
  )
}

export default NewComment