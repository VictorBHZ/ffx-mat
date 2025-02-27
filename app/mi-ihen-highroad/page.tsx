import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Mi'ihen Highroad / ミヘン街道"
    const slug = "mi-ihen-highroad"

    const monsters: Monster[] = [
        { id: "mi-ihen-fang", name: { en: "Mi'ihen Fang", jp: "ミヘンファング" }, image: "/monsters/mi-ihen-highroad/mi-ihen-fang.webp" },
        { id: "ipiria", name: { en: "Ipiria", jp: "イピリア" }, image: "/monsters/mi-ihen-highroad/ipiria.webp" },
        { id: "floating-eye", name: { en: "Floating Eye", jp: "フロートアイ" }, image: "/monsters/mi-ihen-highroad/floating-eye.webp" },
        { id: "white-element", name: { en: "White Element", jp: "ホワイトエレメント" }, image: "/monsters/mi-ihen-highroad/white-element.webp" },
        { id: "raldo", name: { en: "Raldo", jp: "ラルド" }, image: "/monsters/mi-ihen-highroad/raldo.webp" },
        { id: "vouivre", name: { en: "Vouivre", jp: "ヴィーヴル" }, image: "/monsters/mi-ihen-highroad/vouivre.webp" },
        { id: "bomb", name: { en: "Bomb", jp: "ボム" }, image: "/monsters/mi-ihen-highroad/bomb.webp" },
        { id: "dual-horn", name: { en: "Dual Horn", jp: "デュアルホーン" }, image: "/monsters/mi-ihen-highroad/dual-horn.webp" },
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



