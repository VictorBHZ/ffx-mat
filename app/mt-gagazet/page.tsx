import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Mt. Gagazet / ガガゼト山"
    const slug = "mt-gagazet"

    const monsters: Monster[] = [
        { id: "bandersnatch", name: { en: "Bandersnatch", jp: "バンダースナッチ" }, image: "/monsters/mt-gagazet/bandersnatch.webp" },
        { id: "ahriman", name: { en: "Ahriman", jp: "アーリマン" }, image: "/monsters/mt-gagazet/ahriman.webp" },
        { id: "dark-flan", name: { en: "Dark Flan", jp: "ダークプリン" }, image: "/monsters/mt-gagazet/dark-flan.webp" },
        { id: "grenade", name: { en: "Grenade", jp: "グレネード" }, image: "/monsters/mt-gagazet/grenade.webp" },
        { id: "grat", name: { en: "Grat", jp: "グラット" }, image: "/monsters/mt-gagazet/grat.webp" },
        { id: "grendel", name: { en: "Grendel", jp: "グレンデル" }, image: "/monsters/mt-gagazet/grendel.webp" },
        { id: "bashura", name: { en: "Bashura", jp: "アシュラ" }, image: "/monsters/mt-gagazet/bashura.webp" },
        { id: "mandragora", name: { en: "Mandragora", jp: "マンドラゴラ" }, image: "/monsters/mt-gagazet/mandragora.webp" },
        { id: "behemoth", name: { en: "Behemoth", jp: "ベヒーモス" }, image: "/monsters/mt-gagazet/behemoth.webp" },
        { id: "splasher", name: { en: "Splasher", jp: "スプラッシャー" }, image: "/monsters/mt-gagazet/splasher.webp" },
        { id: "achelous", name: { en: "Achelous", jp: "アケオロス" }, image: "/monsters/mt-gagazet/achelous.webp" },
        { id: "maelspike", name: { en: "Maelspike", jp: "レイジングスパイク" }, image: "/monsters/mt-gagazet/maelspike.webp" },
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



