"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export type Monster = {
    id: string
    name: {
        en: string
        jp: string
    }
    image: string
}

interface Props {
    monsters: Monster[]
    slug: string
}

export function MonsterGrid({ monsters, slug }: Props) {
    const [counts, setCounts] = useState<{ [key: string]: number }>({})

    useEffect(() => {
        const savedCounts = localStorage.getItem(`${slug}-counts`)
        if (savedCounts) {
            setCounts(JSON.parse(savedCounts))
        } else {
            const initialCounts = monsters.reduce(
                (acc, monster) => ({
                    ...acc,
                    [monster.id]: 0,
                }),
                {},
            )
            setCounts(initialCounts)
            localStorage.setItem(`${slug}-counts`, JSON.stringify(initialCounts))
        }
    }, [])

    const updateCount = (id: string, increment: boolean) => {
        setCounts((prev) => {
            const newCounts = {
                ...prev,
                [id]: Math.min(Math.max((prev[id] || 0) + (increment ? 1 : -1), 0), 10),
            }
            localStorage.setItem(`${slug}-counts`, JSON.stringify(newCounts))
            return newCounts
        })
    }

    return (
        <div className="flex flex-wrap justify-center gap-6 lg:grid lg:grid-cols-4 lg:justify-start lg:gap-x-[27px] lg:gap-y-10">
            {monsters.map((monster) => (
                <div key={monster.id} className="flex w-[260px] flex-col items-center">
                    {/* Monster Name */}
                    <div className="relative mb-2 flex h-[32px] w-full items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent"></div>
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>
                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>
                        <span className="relative text-[14px] font-medium text-white">
                            {monster.name.en} / {monster.name.jp}
                        </span>
                    </div>

                    {/* Monster Image */}
                    <div className="relative mb-2 h-[146px] w-[260px] overflow-hidden">
                        <Image
                            src={monster.image || "/placeholder.svg"}
                            alt={monster.name.en}
                            width={260}
                            height={146}
                            className="object-cover"
                        />
                    </div>

                    {/* Counter Controls */}
                    <div className="relative flex h-[40px] w-full items-center px-[42px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent"></div>
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>
                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>

                        <button
                            onClick={() => updateCount(monster.id, false)}
                            className="group relative z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1D1B20] transition-colors hover:bg-[#2a2a2a]"
                        >
                            <div className="absolute inset-0 rounded-full border border-white/80"></div>
                            <div className="h-[2px] w-[14px] bg-white"></div>
                        </button>

                        <span className="relative z-10 mx-[48px] text-[14px] font-medium text-white tabular-nums">
                            {(counts[monster.id] || 0).toString().padStart(2, "0")}
                        </span>

                        <button
                            onClick={() => updateCount(monster.id, true)}
                            className="group relative z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1D1B20] transition-colors hover:bg-[#2a2a2a]"
                        >
                            <div className="absolute inset-0 rounded-full border border-white/80"></div>
                            <div className="relative">
                                <div className="absolute left-1/2 top-1/2 h-[14px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white"></div>
                                <div className="absolute left-1/2 top-1/2 h-[2px] w-[14px] -translate-x-1/2 -translate-y-1/2 bg-white"></div>
                            </div>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}