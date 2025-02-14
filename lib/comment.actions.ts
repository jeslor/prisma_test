"use server";
import { PrismaClient } from '@prisma/client';


export const saveComment = async (values: { username: string; comment: string }) => {
    const prisma = new PrismaClient();
    try {
        const savedComment = await prisma.comment.create({
            data: {
                username: values.username,
                comment: values.comment,
            },
        });
        return JSON.parse(JSON.stringify({message: "Comment saved", data:savedComment,status:200}));

    } catch (error:any) {
        console.log(error);
        return JSON.parse(JSON.stringify({message: "Error saving comment", data:error.message,status:500}));
    }
    };