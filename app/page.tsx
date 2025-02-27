import Link from "next/link"

const locations = [
  { en: "Besaid", jp: "ビサイド島", path: "/besaid" },
  { en: "Kilika", jp: "キーリカ島", path: "/kilika" },
  { en: "Mi'ihen Highroad", jp: "ミヘン街道", path: "/mi-ihen-highroad" },
  { en: "Mushroom Rock Road", jp: "キノコ岩の街道", path: "/mushroom-rock-road" },
  { en: "Djose Road", jp: "ジョゼ街道", path: "/djose-road" },
  { en: "Thunder Plains", jp: "雷平原", path: "/thunder-plains" },
  { en: "Macalania", jp: "マカラーニャ", path: "/macalania" },
  { en: "Bikanel", jp: "ビーカネル島", path: "/bikanel" },
  { en: "Calm Lands", jp: "ナギ平原", path: "/calm-lands" },
  { en: "Stolen Fayth Cavern", jp: "谷底の洞窟", path: "/stolen-fayth-cavern" },
  { en: "Mt. Gagazet", jp: "ガガゼト山", path: "/mt-gagazet" },
  { en: "Inside Sin", jp: "『シン』の体内", path: "/inside-sin" },
  { en: "Omega Dungeon", jp: "オメガ遺跡", path: "/omega-dungeon" },
]

export default function MonsterArenaMenu() {
  return (
    <div className="min-h-screen bg-[#4F5684] py-8">
      <div className="mx-auto w-full max-w-[1120px] px-4 md:px-0">
        <div className="mb-10 md:mb-20">
          <h1 className="relative flex h-[50px] items-center justify-center text-[26px] font-extrabold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            {/* Background gradient for title */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent"></div>

            {/* Top gradient border for title */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>

            {/* Bottom gradient border for title */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>

            <span className="relative font-montserrat">Monster Arena Tracker</span>
          </h1>
        </div>

        <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-[88px] md:gap-y-10">
          {locations.map((location) => (
            <Link
              key={location.path}
              href={location.path}
              className="group relative flex h-[50px] w-full items-center pl-8 pr-4 text-white transition-all md:w-[516px]"
            >
              {/* Background gradient matching the exact specifications */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent"></div>

              {/* Top gradient border */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>

              {/* Bottom gradient border */}
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>

              <span className="relative text-[18px] font-medium tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] md:text-[22px]">
                {location.en}/{location.jp}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

