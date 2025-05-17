import { MusicalNoteIcon } from "@heroicons/react/16/solid"
import { PlusIcon } from "@heroicons/react/24/outline"
import { Square3Stack3DIcon } from "@heroicons/react/24/solid"
import { BookmarkIcon, HeartIcon } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="fixed top-0 bottom-0 left-0 mt-16 flex w-16 flex-col items-center space-y-4 m-4 bg-[#121212] rounded-full py-4 pl-6 pr-6 text-white grid-cols-5 gap-6">
      {/* Logo/Home */}
      <div className="h-8 w-8 cursor-pointer m-2 flex items-center justify-center">
        <Square3Stack3DIcon />
      </div>

      {/* Plus */}
      <div className="h-8 w-8 cursor-pointer m-2 flex items-center justify-center">
        <PlusIcon />
      </div>

      {/* Heart */}
      <div className="h-8 w-8 cursor-pointer m-2 flex items-center justify-center">
        <HeartIcon />
      </div>

      {/*Bookmark*/}
      <div className="h-8 w-8 cursor-pointer m-2 flex items-center justify-center">
        <BookmarkIcon />
      </div>

      {/*    Music Note*/}
      <div className="h-8 w-8 cursor-pointer m-2 flex items-center justify-center">
        <MusicalNoteIcon />
      </div>
    </div>
  )
}
