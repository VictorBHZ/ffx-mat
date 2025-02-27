import Link from "next/link";

export function Back() {
    return (
        <div className="mb-4 flex justify-end">
            <Link href="/" className="relative flex h-[32px] w-[100px] items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent"></div>
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>
                <span className="relative text-[14px] font-medium text-white">Back</span>
            </Link>
        </div>
    )
}