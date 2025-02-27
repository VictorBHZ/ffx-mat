import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Stolen Fayth Cavern / 谷底の洞窟"
    const slug = "stolen-fayth-cavern"

    const monsters: Monster[] = [
        { id: "yowie", name: { en: "Yowie", jp: "ヨーウィー" }, image: "/monsters/stolen-fayth-cavern/yowie.webp" },
        { id: "imp", name: { en: "Imp", jp: "ガルキマセラ" }, image: "/monsters/stolen-fayth-cavern/imp.webp" },
        { id: "dark-element", name: { en: "Dark Element", jp: "ダークエレメント" }, image: "/monsters/stolen-fayth-cavern/dark-element.webp" },
        { id: "nidhogg", name: { en: "Nidhogg", jp: "ニーズヘッグ" }, image: "/monsters/stolen-fayth-cavern/nidhogg.webp" },
        { id: "thorn", name: { en: "Thorn", jp: "ソーン" }, image: "/monsters/stolen-fayth-cavern/thorn.webp" },
        { id: "valaha", name: { en: "Valaha", jp: "ヴァラーハ" }, image: "/monsters/stolen-fayth-cavern/valaha.webp" },
        { id: "epaaj", name: { en: "Epaaj", jp: "エページュ" }, image: "/monsters/stolen-fayth-cavern/epaaj.webp" },
        { id: "ghost", name: { en: "Dual Horn", jp: "ゴースト" }, image: "/monsters/stolen-fayth-cavern/ghost.webp" },
        { id: "tonberry", name: { en: "Tonberry", jp: "トンベリ" }, image: "/monsters/stolen-fayth-cavern/tonberry.webp" },
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



