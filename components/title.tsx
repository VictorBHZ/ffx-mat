interface Props {
    title: string
}

export function Title({ title }: Props) {
    return (
        <div className="mb-16">
            <h1 className="relative flex h-[50px] items-center justify-center text-[22px] font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] md:text-[26px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent"></div>
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>
                <span className="relative">{title}</span>
            </h1>
        </div>
    )
}