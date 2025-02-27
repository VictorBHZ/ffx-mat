import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Omega Dungeon / オメガ遺跡"
    const slug = "omega-dungeon"

    const monsters: Monster[] = [
        { id: "zaurus", name: { en: "Zaurus", jp: "ザウラス" }, image: "/monsters/omega-dungeon/zaurus.webp" },
        { id: "floating-death", name: { en: "Floating Death", jp: "デスフロート" }, image: "/monsters/omega-dungeon/floating-death.webp" },
        { id: "black-element", name: { en: "Black Element", jp: "ブラックエレメント" }, image: "/monsters/omega-dungeon/black-element.webp" },
        { id: "halma", name: { en: "Halma", jp: "ハァルマ" }, image: "/monsters/omega-dungeon/halma.webp" },
        { id: "puroboros", name: { en: "Puroboros", jp: "ピュロボルス" }, image: "/monsters/omega-dungeon/puroboros.webp" },
        { id: "spirit", name: { en: "Spirit", jp: "スピリット" }, image: "/monsters/omega-dungeon/spirit.webp" },
        { id: "machea", name: { en: "Machea", jp: "メチーエ" }, image: "/monsters/omega-dungeon/machea.webp" },
        { id: "master-coeurl", name: { en: "Master Coeurl", jp: "マスタークァール" }, image: "/monsters/omega-dungeon/master-coeurl.webp" },
        { id: "master-tonberry", name: { en: "Master Tonberry", jp: "マスタートンベリ" }, image: "/monsters/omega-dungeon/master-tonberry.webp" },
        { id: "varuna", name: { en: "Varuna", jp: "ヴァルナ" }, image: "/monsters/omega-dungeon/varuna.webp" },
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



