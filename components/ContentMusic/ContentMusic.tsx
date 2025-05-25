import { CheckBadgeIcon, PlayCircleIcon } from "@heroicons/react/24/solid"

export default function ContentMusic() {
  return (
    <div className="ml-20 min-h-60 bg-[#2D2D2D] py-3">
      {/*Header*/}
      <div className="px-8">
        <CheckBadgeIcon className="mr-1 inline-block h-8 w-8 cursor-pointer text-white" />
        <h5 className="inline-block pt-0 pb-0 text-white">Verified Artist</h5>
      </div>

      <h2 className="px-8 pt-0 pb-0 font-[1000] tracking-tight text-white sm:text-[6rem]">Cigarettes After Sex</h2>
      <h5 className="px-8 pt-0 pb-0 text-white">999999999 monthly listeners</h5>

      {/*    Center*/}
        <div className="p-8">
            <PlayCircleIcon className="mr-1 inline-block h-16 w-16 cursor-pointer text-white" />
        </div>

    </div>
  )
}
