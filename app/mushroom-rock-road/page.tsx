import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Mushroom Rock Road/キノコ岩街道"
    const slug = "mushroom-rock-road"

    const monsters: Monster[] = [
        { id: "raptor", name: { en: "Raptor", jp: "ラプトゥル" }, image: "/monsters/mushroom-rock-road/raptor.webp" },
        { id: "gandarewa", name: { en: "Gandarewa", jp: "ガンダルヴァ" }, image: "/monsters/mushroom-rock-road/gandarewa.webp" },
        { id: "thunder-flan", name: { en: "Thunder Flan", jp: "サンダープリン" }, image: "/monsters/mushroom-rock-road/thunder-flan.webp" },
        { id: "red-element", name: { en: "Red Element", jp: "レッドエレメント" }, image: "/monsters/mushroom-rock-road/red-element.webp" },
        { id: "lamashtu", name: { en: "Lamashtu", jp: "ラマシュトゥ" }, image: "/monsters/mushroom-rock-road/lamashtu.webp" },
        { id: "funguar", name: { en: "Funguar", jp: "フンゴオンゴ" }, image: "/monsters/mushroom-rock-road/funguar.webp" },
        { id: "garuda", name: { en: "Garuda", jp: "ガルダ" }, image: "/monsters/mushroom-rock-road/garuda.webp" },
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



