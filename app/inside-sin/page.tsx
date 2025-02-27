import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Inside Sin /『シン』の体内"
    const slug = "inside-sin"

    const monsters: Monster[] = [
        { id: "exoray", name: { en: "Exoray", jp: "アンテサンサン" }, image: "/monsters/inside-sin/exoray.webp" },
        { id: "wraith", name: { en: "Wraith", jp: "レイス" }, image: "/monsters/inside-sin/wraith.webp" },
        { id: "gemini-sword", name: { en: "Gemini (Sword)", jp: "ウルフラマイター" }, image: "/monsters/inside-sin/gemini-sword.webp" },
        { id: "gemini-club", name: { en: "Gemini (Club)", jp: "ウルフラマイター" }, image: "/monsters/inside-sin/gemini-club.webp" },
        { id: "demonolith", name: { en: "Demonolith", jp: "デビルモノリス" }, image: "/monsters/inside-sin/demonolith.webp" },
        { id: "great-malboro", name: { en: "Great Malboro", jp: "モルボルグレート" }, image: "/monsters/inside-sin/great-malboro.webp" },
        { id: "barbatos", name: { en: "Barbatos", jp: "バルバトゥース" }, image: "/monsters/inside-sin/barbatos.webp" },
        { id: "adamantoise", name: { en: "Adamantoise", jp: "アダマンタイマイ" }, image: "/monsters/inside-sin/adamantoise.webp" },
        { id: "behemoth-king", name: { en: "Behemoth King", jp: "キングベヒーモス" }, image: "/monsters/inside-sin/behemoth-king.webp" },
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



