import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Macalania / マカラーニャ"
    const slug = "macalania"

    const monsters: Monster[] = [
        { id: "snow-wolf", name: { en: "Snow Wolf", jp: "スノーウルフ" }, image: "/monsters/macalania/snow-wolf.webp" },
        { id: "iguion", name: { en: "Iguion", jp: "シュメルケ" }, image: "/monsters/macalania/iguion.webp" },
        { id: "wasp", name: { en: "Wasp", jp: "ワスプ" }, image: "/monsters/macalania/wasp.webp" },
        { id: "evil-eye", name: { en: "Evil Eye", jp: "イービルアイ" }, image: "/monsters/macalania/evil-eye.webp" },
        { id: "ice-flan", name: { en: "Ice Flan", jp: "アイスプリン" }, image: "/monsters/macalania/ice-flan.webp" },
        { id: "blue-element", name: { en: "Blue Element", jp: "ブルーエレメント" }, image: "/monsters/macalania/blue-element.webp" },
        { id: "murussu", name: { en: "Murussu", jp: "ムルフシュ" }, image: "/monsters/macalania/murussu.webp" },
        { id: "mafdet", name: { en: "Mafdet", jp: "マフート" }, image: "/monsters/macalania/mafdet.webp" },
        { id: "xiphos", name: { en: "Xiphos", jp: "クーシポス" }, image: "/monsters/macalania/xiphos.webp" },
        { id: "chimera", name: { en: "Chimera", jp: "キマイラ" }, image: "/monsters/macalania/chimera.webp" },
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
