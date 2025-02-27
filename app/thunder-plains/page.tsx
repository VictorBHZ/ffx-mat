import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Thunder Plains / 雷平原"
    const slug = "thunder-plains"

    const monsters: Monster[] = [
        { id: "melusine", name: { en: "Melusine", jp: "メリュジヌ" }, image: "/monsters/thunder-plains/melusine.webp" },
        { id: "aerouge", name: { en: "Aerouge", jp: "エイロージュ" }, image: "/monsters/thunder-plains/aerouge.webp" },
        { id: "buer", name: { en: "Buer", jp: "ブエル" }, image: "/monsters/thunder-plains/buer.webp" },
        { id: "gold-element", name: { en: "Gold Element", jp: "ゴールドエレメント" }, image: "/monsters/thunder-plains/gold-element.webp" },
        { id: "kusariqqu", name: { en: "Kusariqqu", jp: "クサーリク" }, image: "/monsters/thunder-plains/kusariqqu.webp" },
        { id: "larva", name: { en: "Larva", jp: "ラルヴァ" }, image: "/monsters/thunder-plains/larva.webp" },
        { id: "iron-giant", name: { en: "Iron Giant", jp: "鉄巨人" }, image: "/monsters/thunder-plains/iron-giant.webp" },
        { id: "qactuar", name: { en: "Qactuar", jp: "サボテンダー？" }, image: "/monsters/thunder-plains/qactuar.webp" },
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



