import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Djose Road/ジョゼ街道"
    const slug = "djose-road"

    const monsters: Monster[] = [
        { id: "garm", name: { en: "Garm", jp: "ガルム" }, image: "/monsters/djose-road/garm.webp" },
        { id: "simurgh", name: { en: "Simurgh", jp: "シ－ムルグ" }, image: "/monsters/djose-road/simurgh.webp" },
        { id: "bite-bug", name: { en: "Bite Bug", jp: "バイトバグ" }, image: "/monsters/djose-road/bite-bug.webp" },
        { id: "snow-flan", name: { en: "Snow Flan", jp: "スノープリン" }, image: "/monsters/djose-road/snow-flan.webp" },
        { id: "bunyip", name: { en: "Bunyip", jp: "バニップ" }, image: "/monsters/djose-road/bunyip.webp" },
        { id: "basilisk", name: { en: "Basilisk", jp: "バジリスク" }, image: "/monsters/djose-road/basilisk.webp" },
        { id: "ochu", name: { en: "Ochu", jp: "オチュー" }, image: "/monsters/djose-road/ochu.webp" },
    ]

    return (
        <div className="min-h-screen bg-[#4F5684] py-8">
            <div className="mx-auto w-full max-w-[1120px] px-4 md:px-0">
                <Title title={title} />
                <Back />
                <MonsterGrid monsters={monsters} slug={slug} />
            </div>
        </div>
    )
}



