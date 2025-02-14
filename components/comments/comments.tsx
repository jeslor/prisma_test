"use client"

const Comment = ({comment}:any) => {
  return (
  

<div className="max-w-sm p-6 bg-[#040901] border border-black/75 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-[320px] text-ellipsis ">
    <svg className="w-10 h-10 text-green-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-400 dark:text-white ">{comment.username}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 line-clamp3">{comment.comment}</p>
  
</div>

  )
}

export default Comment