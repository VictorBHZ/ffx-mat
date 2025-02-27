import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Calm Lands/ナギ平原"
    const slug = "calm-lands"

    const monsters: Monster[] = [
        { id: "skoll", name: { en: "Skoll", jp: "スコル" }, image: "/monsters/calm-lands/skoll.webp" },
        { id: "nebiros", name: { en: "Nebiros", jp: "ネビロス" }, image: "/monsters/calm-lands/nebiros.webp" },
        { id: "flame-flan", name: { en: "Flame Flan", jp: "フレイムプリン" }, image: "/monsters/calm-lands/flame-flan.webp" },
        { id: "shred", name: { en: "Shred", jp: "シュレッド" }, image: "/monsters/calm-lands/shred.webp" },
        { id: "anacondaur", name: { en: "Anacondaur", jp: "ヘッジヴァイパー" }, image: "/monsters/calm-lands/anacondaur.webp" },
        { id: "ogre", name: { en: "Ogre", jp: "オーガ" }, image: "/monsters/calm-lands/ogre.webp" },
        { id: "coeurl", name: { en: "Coeurl", jp: "クァール" }, image: "/monsters/calm-lands/coeurl.webp" },
        { id: "chimera-brain", name: { en: "Chimera Brain", jp: "キマイラブレイン" }, image: "/monsters/calm-lands/chimera-brain.webp" },
        { id: "malboro", name: { en: "Malboro", jp: "モルボル" }, image: "/monsters/calm-lands/malboro.webp" },
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



