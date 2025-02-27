import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Besaid / ビサイド島"
    const slug = "besaid"

    const monsters: Monster[] = [
        { id: "dingo", name: { en: "Dingo", jp: "ディンゴ" }, image: "/monsters/besaid/dingo.webp" },
        { id: "condor", name: { en: "Condor", jp: "コンドル" }, image: "/monsters/besaid/condor.webp" },
        { id: "water-flan", name: { en: "Water Flan", jp: "ウォータプリン" }, image: "/monsters/besaid/water-flan.webp" },
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



