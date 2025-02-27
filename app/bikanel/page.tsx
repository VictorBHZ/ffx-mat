import { Back } from "@/components/back"
import { Title } from "@/components/title"
import { Monster, MonsterGrid } from "@/components/monster-grid"

export default function DjoseRoad() {

    const title = "Bikanel / ビーカネル島"
    const slug = "bikanel"

    const monsters: Monster[] = [
        { id: "sand-wolf", name: { en: "Sand Wolf", jp: "サンドウルフ" }, image: "/monsters/bikanel/sand-wolf.webp" },
        { id: "alcyone", name: { en: "Alcyone", jp: "アルキュオネ" }, image: "/monsters/bikanel/alcyone.webp" },
        { id: "mushussu", name: { en: "Mushussu", jp: "ムシュフシュ" }, image: "/monsters/bikanel/mushussu.webp" },
        { id: "zu", name: { en: "Zu", jp: "ズー" }, image: "/monsters/bikanel/zu.webp" },
        { id: "sand-worm", name: { en: "Sand Worm", jp: "サンドウォーム" }, image: "/monsters/bikanel/sand-worm.webp" },
        { id: "cactuar", name: { en: "Cactuar", jp: "サボテンダー" }, image: "/monsters/bikanel/cactuar.webp" },
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



