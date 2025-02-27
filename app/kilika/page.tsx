import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Kilika/キーリカ島"
    const slug = "kilika"

    const monsters: Monster[] = [
        { id: "dinonix", name: { en: "Dinonix", jp: "ディノニクス" }, image: "/monsters/kilika/dinonix.webp" },
        { id: "killer-bee", name: { en: "Killer Bee", jp: "キラービー" }, image: "/monsters/kilika/killer-bee.webp" },
        { id: "yellow-element", name: { en: "Yellow Element", jp: "イエローエレメント" }, image: "/monsters/kilika/yellow-element.webp" },
        { id: "ragora", name: { en: "Ragora", jp: "バルサム" }, image: "/monsters/kilika/ragora.webp" },
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



