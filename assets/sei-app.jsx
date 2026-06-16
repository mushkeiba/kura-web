/* eslint-disable */
// ─────────────────────────────────────────────────────────────
// 熊野古道KURA — Variation A (Sei / 静謐)
// Bilingual content + components
// ─────────────────────────────────────────────────────────────

const { useState, useEffect, useRef, useMemo } = React;

/* ── JaP: phrase-wrap helper ─────────────────────────────────
   Splits at 、。 — each phrase is inline-block so the browser
   only breaks BETWEEN phrases, never inside one. */
function JaP({ children }) {
  const text = String(children == null ? "" : children);
  const parts = text.match(/[^、。，．！？]+[、。，．！？]?/g) || [text];
  return (
    <>
      {parts.map((p, i) => (
        <span key={i} className="ja-phrase" style={{ display: "inline-block" }}>{p}</span>
      ))}
    </>
  );
}

/* ── Bilingual content ───────────────────────────────────── */
const C = {
  ja: {
    nav: [
      { id: "room",    label: "客室" },
      { id: "concept", label: "コンセプト" },
      { id: "nearby",  label: "神倉・速玉" },
      { id: "otou",    label: "御燈祭", overlay: "otou" },
      { id: "hayatama", label: "速玉大社", overlay: "hayatama" },
      { id: "kinegadani", label: "貴祢谷社", overlay: "kinegadani" },
      { id: "access",  label: "アクセス" },
      { id: "book",    label: "予約" },
    ],
    reserve: "予約",
    hero: {
      eyebrow: "和歌山県 新宮市 神倉",
      title1: "神倉山のふもと、",
      title2: "ひとときの休憩。",
      sub: "熊野古道を歩く方のための、ひのきの床板が美しい一室貸しのゲストハウスです。",
      priceLbl: "素泊まり / 1室1泊",
      scroll: "下へ"
    },
    sectionHead: {
      room: {
        index: "01 / 客室",
        title: "客室のご案内",
        titleEn: "The Room",
        lede: "ひのきの床板に整えた、落ち着いた一室です。"
      },
      concept: {
        index: "02 / コンセプト",
        title: "宿のコンセプト",
        titleEn: "Our Philosophy",
        lede: "清潔で静かにくつろげる空間を。"
      },
      usp: {
        index: "03 / 特徴",
        title: "当宿の特徴",
        titleEn: "Three Reasons to Stay",
        lede: "立地・設え・貸切。シンプルですが、確かな三つです。"
      },
      nearby: {
        index: "04 / 周辺",
        title: "周辺のご案内",
        titleEn: "Around the Inn",
        lede: "神倉神社や飲食店、コンビニまで徒歩圏内に揃っています。"
      },
      access: {
        index: "05 / アクセス",
        title: "アクセス",
        titleEn: "Getting Here",
        lede: "〒647-0044 和歌山県新宮市千穂1-8-5"
      },
      book: {
        index: "06 / 予約",
        title: "ご予約",
        titleEn: "Reserve",
        lede: "Airbnbからのご予約、または直接のお問い合わせを承ります。"
      }
    },
    room: {
      title: "ひと部屋まるごと、貸切で。",
      lede: "ひのきの床板を使用した、清潔で落ち着いた一室です。",
      body: [
        "1日1組さま限定、最大5〜6名様までご宿泊いただけます。",
        "ご家族・ご友人・グループ旅行に。ゆっくりとお過ごしいただけます。"
      ],
      stats: [
        { num: "1",        unit: "室",   lbl: "1日1組" },
        { num: "5–6",      unit: "名",   lbl: "最大収容" },
        { num: "¥12,000",  unit: "〜",   lbl: "素泊まり" }
      ],
      caption: "客室全景"
    },
    concept: {
      quote: ["清潔で静かに", "くつろげる空間。"],
      attrib: "",
      body: [
        "床材はヒノキを使用しました。寝具や水回りも、清潔に整えています。",
        "神倉山のふもとで、熊野古道を歩く方の拠点としてご利用いただけます。",
        "熊野古道の名に恥じない宿を目指しております。"
      ]
    },
    usp: [
      {
        num: "01",
        title: "神倉神社まで徒歩約5分",
        body: "熊野古道のはじまりの地とされる神倉神社まで、徒歩でおよそ5分。古道歩きの拠点としてお使いいただけます。",
        meta: "徒歩約5分",
        img: "web/kamikura-shrine/view-1.jpg"
      },
      {
        num: "02",
        title: "ひのきの床板",
        body: "床を全面ヒノキに張り替えました。素足でも過ごしやすく、足音が柔らかに響きます。",
        meta: "全面張替済",
        img: "web/interior/room-living-1.jpg"
      },
      {
        num: "03",
        title: "1日1組の貸切",
        body: "1室まるごとをご予約のお客様だけでご利用いただけます。最大5〜6名様までご対応可能です。",
        meta: "5〜6名様",
        img: "web/interior/room-overview.jpg"
      }
    ],
    nearby: {
      featureTitle: "神倉神社",
      featureLabel: "ご紹介 · 神倉神社",
      featureBody: "神倉山のふもとから538段の石段を上った先に鎮座する古社です。ゴトビキ岩（巨岩）を御神体としてお祀りしています。熊野速玉大社の摂社で、熊野信仰の発祥地とされています。",
      featureDist: "徒歩 約5分",
      nagiTitle: "なぎの湯",
      nagiLabel: "お風呂 · 市民の銭湯",
      nagiBody: "なぎの湯は、新宮市の公衆浴場です。素泊まりの夜は、歩いて地元の銭湯へ。富士山の壁絵がある、昭和の嬉しさのあるお風呂です。",
      nagiDist: "徒歩 約15分",
      nagiHours: "16:00〜21:00（11、3月は 15:30〜20:30）",
      nagiClosed: "日曜・1/1・1/3・1/4休",
      nagiPrice: "大人 400円 / 中人 140円 / 小人 80円",
      cards: [
        { src: "web/nearby/restaurant-tanukiya.jpg", name: "たぬき屋",          dist: "徒歩2分",   desc: "うどん・そば・めはり寿司",  addr: "和歌山県新宮市千穂1-1-50",   tel: "0735-22-2978", hours: "11:00–20:00",        closed: "水曜休" },
        { src: "web/nearby/restaurant-yokaya.jpg",   name: "陽香屋",          dist: "徒歩2分",   desc: "ラーメン・深夜2時まで",   addr: "和歌山県新宮市千穂2-4-17",   tel: "0735-21-7920", hours: "11:30–13:30 / 17:30–2:00", closed: "月曜休" },
        { src: "web/nearby/restaurant-matsusaka.jpg", name: "ビフテキ松坂",     dist: "徒歩10分",  desc: "ステーキ・夜のみ",      addr: "和歌山県新宮市大橋通4-1-13", tel: "0735-22-9468", hours: "17:00–21:00",        closed: "—" },
        { src: "web/nearby/restaurant-manten.jpg",   name: "まんてん",           dist: "徒歩12分",  desc: "お好み焼き・鉄板焼き",       addr: "和歌山県新宮市新宮542-1",      tel: "0735-23-9277", hours: "—",                    closed: "日曜休" },
        { src: "web/nearby/naka-kori.jpg",           name: "仲氷店",            dist: "徒歩7分",   desc: "かき氷・年中無休",          addr: "和歌山県新宮市仲之町2-2-21",  tel: "—",            hours: "日中",                closed: "年中無休" },
        { src: "web/nearby/familymart.jpg",          name: "ファミリーマート 千穂三丁目店", dist: "徒歩3分", desc: "コンビニ、24時間",     addr: "和歌山県新宮市千穂3丁目",      tel: "—",            hours: "24時間",             closed: "—" },
        { src: "web/nearby/shop-organic-marche.jpg", name: "自然食品 コケコッコ",  dist: "徒歩3分",   desc: "無農薬野菜・天然酵母パン", addr: "和歌山県新宮市千穂1-1-45",   tel: "0735-23-0423", hours: "—",                    closed: "—" },
        { src: "web/nearby/shop-liquor.jpg",         name: "堀酒店",            dist: "徒歩4分",   desc: "酒店・地酒",            addr: "和歌山県新宮市千穂1-8-13",   tel: "0735-22-5353", hours: "～19:00",              closed: "—" },
        { src: "web/nearby/nachi-falls.jpg",         name: "那智の滝",          dist: "車で約30分", desc: "熊野三山・名瀑",          addr: "和歌山県那智勝浦町那智山",    tel: "—",            hours: "—",                    closed: "—" }
      ]
    },
    access: {
      pin: ["熊野古道KURA", "和歌山県新宮市千穂1-8-5"],
      rows: [
        {
          label: "電車", letter: "Train",
          head: "JR紀勢本線「新宮駅」より",
          body: "駅から徒歩約15分（約1.2km）、またはバスで約6分です。"
        },
        {
          label: "バス", letter: "Bus",
          head: "熊野御坊南海バス「神倉神社前」",
          body: "宿のすぐ近くにバス停があります。運賃は200〜300円程度です。",
          table: true
        },
        {
          label: "車",   letter: "Car",
          head: "お車でお越しの方",
          body: "新宮南インターチェンジより約5分。東京方面からは熊野大迫インターチェンジより約35分。駐車場は基本1台、それ以上は要ご相談です。"
        }
      ],
      busTableHead: ["新宮駅 発", "神倉神社前 発"]
    },
    book: {
      channelTitle: "そのままご予約",
      channelSub: "Airbnb または Booking.com からお手続きいただけます",
      priceUnit: "素泊まり / 1室1泊",
      cta: "Airbnbで予約する",
      ctaBooking: "Booking.comで予約する",
      airbnbUrl: "https://www.booking.com/hotel/jp/kumanokodo-kura.ja.html",
      bookingUrl: "https://www.booking.com/hotel/jp/kumanokodo-kura.ja.html",
      notes: ["チェックイン 16:00 〜 / チェックアウト 10:00", "お電話でも承ります：090ー1484ー0536"],
      formTitle: "直接のお問い合わせ",
      formSub: "ご質問・ご予約のご相談はこちらから。",
      fields: {
        name: "お名前", email: "メールアドレス", ci: "ご到着日", co: "ご出発日",
        guests: "ご人数", msg: "ご質問・ご要望"
      },
      msgPlaceholder: "ご到着の時刻、巡礼のご予定、ご要望など、自由にお書きください。",
      submit: "お問い合わせを送る", sent: "✓ 送信されました"
    },
    otou: {
      eyebrow: "特設ページ",
      title: "御燈祭",
      sub: "宿の目の前、神倉神社で行われる火祭り。毎年二月六日の夜。",
      cta: "御燈祭 特設ページへ",
      date: "2 / 6 · 毎年"
    },
    kinegadani: {
      eyebrow: "特設ページ",
      title: "貴祢谷社",
      sub: "神倉山を降りた熊野の神が、のちに移ったと伝わる古社。静かな森のなかへ。",
      cta: "貴祢谷社 特設ページへ",
      date: "三重・紀宝町"
    },
    footer: {
      location: "所在地",
      sitemap: "サイトマップ",
      contact: "ご連絡先",
      cred: "© 2026 熊野古道KURA",
      tagline: "新宮にて。",
      licenseLabel: "営業情報",
      licenseType: "旅館業（簡易宿所）",
      licenseNumber: "許可番号：和歌山県指令新保衛第 20-7 号",
      licenseOperator: "営業者：森本みさ"
    }
  },
  en: {
    nav: [
      { id: "room",    label: "Room" },
      { id: "concept", label: "Philosophy" },
      { id: "nearby",  label: "Shrines" },
      { id: "otou",    label: "Fire Festival", overlay: "otou" },
      { id: "hayatama", label: "Hayatama-Taisha", overlay: "hayatama" },
      { id: "kinegadani", label: "Kinegadani-sha", overlay: "kinegadani" },
      { id: "access",  label: "Access" },
      { id: "book",    label: "Reserve" },
    ],
    reserve: "Reserve",
    hero: {
      eyebrow: "Wakayama · Shingū · Kamikura",
      title1: "A quiet rest,",
      title2: "at the foot of Mt. Kamikura.",
      sub: "A one-room guesthouse with hinoki cypress floors, for those walking the Kumano Kodō.",
      priceLbl: "Room only · Per night",
      scroll: "Scroll"
    },
    sectionHead: {
      room: {
        index: "01 / Room",
        title: "The Room",
        titleEn: "客室のご案内",
        lede: "A calm room with hinoki-wood floors."
      },
      concept: {
        index: "02 / Philosophy",
        title: "Our Philosophy",
        titleEn: "宿のコンセプト",
        lede: "We prize cleanliness and comfort over display."
      },
      usp: {
        index: "03 / Why Stay",
        title: "Three Reasons to Stay",
        titleEn: "当宿の特徴",
        lede: "Location, craft, and exclusivity — three simple promises."
      },
      nearby: {
        index: "04 / Neighborhood",
        title: "Around the Inn",
        titleEn: "周辺のご案内",
        lede: "Kamikura Shrine, restaurants, and shops — all within walking distance."
      },
      access: {
        index: "05 / Access",
        title: "Getting Here",
        titleEn: "アクセス",
        lede: "1-8-5 Senbo, Shingū, Wakayama 647-0044, Japan"
      },
      book: {
        index: "06 / Reserve",
        title: "Reserve",
        titleEn: "ご予約",
        lede: "Reserve via Airbnb, or send us a direct enquiry."
      }
    },
    room: {
      title: "The whole room is yours.",
      lede: "A clean, calm room with hinoki cypress floors.",
      body: [
        "One party per day, up to five or six guests.",
        "Suited to families, friends, or groups. Settle in and take your time."
      ],
      stats: [
        { num: "1",      unit: "room",  lbl: "One party / day" },
        { num: "5–6",    unit: "guests", lbl: "Maximum" },
        { num: "¥12,000", unit: "~",    lbl: "Room only" }
      ],
      caption: "Room overview"
    },
    concept: {
      quote: ["A clean, quiet", "place to rest."],
      attrib: "",
      body: [
        "The floors are laid in hinoki cypress. The bedding and washroom are kept clean and simple.",
        "At the foot of Mt. Kamikura, the house serves as a base for those walking the Kumano Kodō.",
        "We aim to be a guesthouse worthy of the name of the Kumano Kodō."
      ]
    },
    usp: [
      {
        num: "01",
        title: "5 minutes to Kamikura Shrine",
        body: "About a five-minute walk to Kamikura Shrine, said to be the starting point of the Kumano Kodō. A natural base for the pilgrimage.",
        meta: "≈ 5 min walk",
        img: "web/kamikura-shrine/view-1.jpg"
      },
      {
        num: "02",
        title: "Hinoki wood floors",
        body: "All floors have been re-laid in hinoki. Pleasant underfoot, even barefoot.",
        meta: "100% renewed",
        img: "web/interior/room-living-1.jpg"
      },
      {
        num: "03",
        title: "One party per day",
        body: "The whole room is yours alone — up to five or six guests per booking, no shared spaces, no compromise.",
        meta: "Up to 6 guests",
        img: "web/interior/room-overview.jpg"
      }
    ],
    nearby: {
      featureTitle: "Kamikura Shrine",
      featureLabel: "Featured · Kamikura",
      featureBody: "An ancient shrine reached by 538 stone steps from the foot of Mt. Kamikura. It enshrines Gotobiki-iwa, a great rock, as its sacred body. A subordinate shrine of Kumano Hayatama-Taisha, it is regarded as the birthplace of Kumano faith.",
      featureDist: "5 minutes on foot",
      nagiTitle: "Nagi-no-yu",
      nagiLabel: "Bath · Public sentō",
      nagiBody: "Nagi-no-yu is Shingū's public bathhouse. After a night without dinner at the inn, walk over for a soak — an old-style sentō with a Mt. Fuji wall painting.",
      nagiDist: "15 min walk",
      nagiHours: "16:00–21:00 (Nov–Mar 15:30–20:30)",
      nagiClosed: "Closed Sundays · Jan 1, 3, 4",
      nagiPrice: "Adults ¥400 / Ages 6–12 ¥140 / under 6 ¥80",
      cards: [
        { src: "web/nearby/restaurant-tanukiya.jpg", name: "Tanukiya",         dist: "2 min walk",  desc: "Udon, soba, mehari-zushi", addr: "1-1-50 Senbo, Shingū",        tel: "0735-22-2978", hours: "11:00–20:00",        closed: "Wed" },
        { src: "web/nearby/restaurant-yokaya.jpg",   name: "Yōkaya",          dist: "2 min walk",  desc: "Ramen, until 2 am",       addr: "2-4-17 Senbo, Shingū",        tel: "0735-21-7920", hours: "11:30–13:30 / 17:30–2:00", closed: "Mon" },
        { src: "web/nearby/restaurant-matsusaka.jpg", name: "Matsusaka",       dist: "10 min walk", desc: "Steak, dinner only",      addr: "4-1-13 Ōhashi-dōri, Shingū", tel: "0735-22-9468", hours: "17:00–21:00",        closed: "—" },
        { src: "web/nearby/naka-kori.jpg",           name: "Naka-kōri-ten",     dist: "7 min walk",  desc: "Shaved ice, open year-round", addr: "2-2-21 Nakanochō, Shingū",   tel: "—",            hours: "Daytime",            closed: "Open daily" },
        { src: "web/nearby/restaurant-manten.jpg",   name: "Manten",           dist: "12 min walk", desc: "Okonomiyaki",             addr: "542-1 Shingū, Shingū",       tel: "0735-23-9277", hours: "—",                    closed: "Sun" },
        { src: "web/nearby/familymart.jpg",          name: "FamilyMart Senbo 3-chome", dist: "3 min walk", desc: "Convenience, 24h",  addr: "Senbo 3-chōme, Shingū",       tel: "—",            hours: "24h",                  closed: "—" },
        { src: "web/nearby/shop-organic-marche.jpg", name: "Cocekokko",        dist: "3 min walk",  desc: "Organic produce & bakery", addr: "1-1-45 Senbo, Shingū",       tel: "0735-23-0423", hours: "—",                    closed: "—" },
        { src: "web/nearby/shop-liquor.jpg",         name: "Hori Sake Shop",    dist: "4 min walk",  desc: "Local sake & spirits",    addr: "1-8-13 Senbo, Shingū",       tel: "0735-22-5353", hours: "– 19:00",            closed: "—" },
        { src: "web/nearby/nachi-falls.jpg",         name: "Nachi Falls",       dist: "30 min by car", desc: "Kumano Sanzan, famous waterfall", addr: "Nachisan, Nachikatsuura", tel: "—", hours: "—", closed: "—" }
      ]
    },
    access: {
      pin: ["Kumano Kodō KURA", "1-8-5 Senbo, Shingū"],
      rows: [
        {
          label: "Train", letter: "Train",
          head: "From Shingū Station (JR Kisei Line)",
          body: "About 15 minutes on foot from the station (1.2 km), or roughly 6 minutes by bus."
        },
        {
          label: "Bus", letter: "Bus",
          head: "Kamikura-jinja-mae stop (Kumano Goboh Nankai Bus)",
          body: "The bus stop is right beside the inn. Fares are around ¥200–300.",
          table: true
        },
        {
          label: "Car",   letter: "Car",
          head: "Arriving by car",
          body: "About 5 min from Shingū-Minami IC; about 35 min from Kumano-Ōsako IC (from the Tokyo direction). One on-site parking space; please ask in advance for two or more cars."
        }
      ],
      busTableHead: ["From Shingū Stn.", "From Kamikura Stop"]
    },
    book: {
      channelTitle: "Reserve directly",
      channelSub: "Book via Airbnb or Booking.com",
      priceUnit: "Room only / per night",
      cta: "Reserve on Airbnb",
      ctaBooking: "Reserve on Booking.com",
      airbnbUrl: "https://www.booking.com/hotel/jp/kumanokodo-kura.ja.html",
      bookingUrl: "https://www.booking.com/hotel/jp/kumanokodo-kura.ja.html",
      notes: ["Check-in 16:00 / Check-out 10:00", "Call us at +81 90-1484-0536"],
      formTitle: "Send a direct enquiry",
      formSub: "Questions and booking requests welcome.",
      fields: {
        name: "Name", email: "Email", ci: "Check-in", co: "Check-out",
        guests: "Guests", msg: "Notes / Requests"
      },
      msgPlaceholder: "Arrival time, pilgrimage plans, or anything else we should know.",
      submit: "Send enquiry", sent: "✓ Sent"
    },
    otou: {
      eyebrow: "Special page",
      title: "Otō Matsuri Fire Festival",
      sub: "A 1,400-year-old fire festival on the steps of Kamikura Shrine — right in front of the inn. Held every February 6, at night.",
      cta: "Open the special page",
      date: "Feb 6 · annually"
    },
    kinegadani: {
      eyebrow: "Special page",
      title: "Kinegadani Shrine",
      sub: "Where the Kumano deities are said to have moved after first descending on Kamikura. An ancient ritual site, in a quiet forest.",
      cta: "Open the special page",
      date: "Kihō, Mie"
    },
    footer: {
      location: "Location",
      sitemap: "Sitemap",
      contact: "Contact",
      cred: "© 2026 Kumano Kodō KURA",
      tagline: "Shingū, Japan.",
      licenseLabel: "Business License",
      licenseType: "Inn Business Act – Simple Lodging",
      licenseNumber: "Permit No. Shin-ho-ei 20-7 (Wakayama Pref.)",
      licenseOperator: "Operator: Misa Morimoto"
    }
  }
};

const BUS_FROM = [];
const BUS_TO   = [];

const ROOM_IMAGES = [
  { src: "web/interior/room-overview.jpg",  ja: "客室全景",      en: "Overview" },
  { src: "web/interior/room-living-1.jpg",  ja: "居間",          en: "Living" },
  { src: "web/interior/room-bedroom.jpg",   ja: "ヒノキの床",    en: "Hinoki floor" },
  { src: "web/interior/room-kitchen.jpg",   ja: "キッチン",      en: "Kitchen" },
  { src: "web/interior/room-washroom.jpg",  ja: "洗面",          en: "Washroom" },
  { src: "web/interior/room-bath.jpg",      ja: "シャワー",      en: "Shower" },
  { src: "web/interior/room-toilet.jpg",    ja: "お手洗い",      en: "Lavatory" },
  { src: "web/interior/room-view.jpg",      ja: "眺め",          en: "View" },
];

/* ── helper to render JA text with phrase wrap, EN as plain ── */
function L({ lang, children }) {
  if (lang === "ja") return <JaP>{children}</JaP>;
  return <>{children}</>;
}

/* ── Logo mark (uses transparent-bg PNG of just the icon) ─── */
function LogoMark({ size = 30 }) {
  return (
    <img
      src="logo/icon-only.png"
      alt=""
      aria-hidden="true"
      style={{
        height: size,
        width: "auto",
        objectFit: "contain",
        display: "block"
      }}
    />
  );
}

/* ── Full logo composition (text + icon — used in concept) ─ */
function FullLogo({ color = "var(--moss)" }) {
  return (
    <svg viewBox="0 0 320 380" width="100%" aria-label="熊野古道KURA" style={{ display: "block" }}>
      {/* 熊野古道 */}
      <text x="160" y="52" textAnchor="middle" fontFamily='"Shippori Mincho", "Noto Serif JP", serif'
            fontWeight="500" fontSize="22" letterSpacing="14" fill={color}>
        熊 野 古 道
      </text>
      {/* horizontal divider */}
      <line x1="134" y1="74" x2="186" y2="74" stroke={color} strokeWidth="1.2" />
      {/* KURA */}
      <text x="160" y="166" textAnchor="middle" fontFamily='"Cormorant Garamond", Georgia, serif'
            fontWeight="400" fontSize="76" letterSpacing="10" fill={color}>
        KURA
      </text>
      {/* Icon */}
      <g transform="translate(74, 220)" fill="none" stroke={color} strokeWidth="2.5"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 96 L62 32 L84 60 L102 38 L138 96" />
        <path d="M2 76 L40 76" />
        <path d="M4 84 L38 84" />
        <path d="M12 84 L12 116" />
        <path d="M30 84 L30 116" />
        <path d="M34 116 C 54 114, 64 104, 80 106 S 106 122, 138 116" />
        <path d="M140 110 L148 96 L156 110 Z M142 104 L148 96 L154 104 M148 110 L148 124" />
        <path d="M156 116 L162 104 L168 116 Z M158 110 L162 104 L166 110 M162 116 L162 128" />
      </g>
    </svg>
  );
}

/* ── Header ───────────────────────────────────────────────── */
function Header({ lang, setLang, onOpenSpecial, onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const c = C[lang];
  return (
    <header className={"k-header" + (scrolled ? " is-scrolled" : "")}>
      <a href="#top" className="k-header__mark">
        <LogoMark />
        <div>
          <div>KURA</div>
          <div className="ja">熊野古道</div>
        </div>
      </a>
      <nav className="k-header__nav">
        {c.nav.map(n => (
          n.overlay
            ? <button key={n.id} type="button" onClick={() => onOpenSpecial(n.overlay)} className="k-header__nav-otou">{n.label}</button>
            : <a key={n.id} href={"#" + n.id}>{n.label}</a>
        ))}
      </nav>
      <div className="k-header__right">
        <div className="k-langtoggle">
          <button onClick={() => setLang("ja")} className={lang === "ja" ? "is-active" : ""}>JA</button>
          <span>/</span>
          <button onClick={() => setLang("en")} className={lang === "en" ? "is-active" : ""}>EN</button>
        </div>
        <a href="#book" className="k-cta-pill">{c.reserve}</a>
        <button className="k-header__burger" aria-label="menu" onClick={onOpenMenu}><span></span></button>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
function Hero({ layout = "fullbleed", lang }) {
  const c = C[lang].hero;
  const line1 = c.title1;
  const line2 = c.title2;
  // build char list with split marker
  const allChars = useMemo(() => [...Array.from(line1), "\n", ...Array.from(line2)], [line1, line2]);
  return (
    <section className="k-hero" data-hero={layout} id="top">
      <div className="k-hero__media">
        <img src="web/kamikura-shrine/view-1.jpg" alt="" />
      </div>
      <div className="k-hero__scrim"></div>
      {lang === "ja" && <div className="k-hero__vertical">熊野古道、神倉</div>}

      <div className="k-hero__shell">
        <div className="k-hero__topmeta">
          <span>Kumano Kodō KURA · Wakayama · Shingū</span>
          <span>1·8·5 Senbo, Shingū</span>
        </div>

        <div className="k-hero__center">
          <div>
            <div className="k-hero__eyebrow"><span className="rule"></span> {c.eyebrow}</div>
            <h1 className="k-hero__title">
              {allChars.map((ch, i) => (
                ch === "\n"
                  ? <br key={"br" + i} />
                  : <span className="ch" key={i} style={{ animationDelay: (0.4 + i * 0.05) + "s" }}>
                      {ch === " " ? "\u00A0" : ch}
                    </span>
              ))}
            </h1>
            <p className="k-hero__sub"><L lang={lang}>{c.sub}</L></p>
          </div>
        </div>

        <div className="k-hero__bottom">
          <div className="k-hero__scroll">
            <span>{c.scroll}</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section head ─────────────────────────────────────────── */
function SecHead({ data, lang }) {
  return (
    <div className="k-sec__head reveal">
      <div>
        <div className="k-sec__index">{data.index}</div>
        <h2 className="k-sec__title">
          <L lang={lang}>{data.title}</L>
          <em>{data.titleEn}</em>
        </h2>
      </div>
      <p className="k-sec__lede"><L lang={lang}>{data.lede}</L></p>
    </div>
  );
}

/* ── Room ─────────────────────────────────────────────────── */
function RoomSection({ lang, layout = "strip", onOpen }) {
  const c = C[lang];
  const r = c.room;
  return (
    <section className="ed-section" id="room">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">01</span><span className="sep">/</span>Room</div>
            <h2 className="ed-head__ja"><L lang={lang}>{c.sectionHead.room.title}</L></h2>
          </div>
          <p className="ed-head__lede"><L lang={lang}>{c.sectionHead.room.lede}</L></p>
        </div>

        <div className="ed-media reveal" onClick={() => onOpen(0)} style={{ cursor: "zoom-in" }}>
          <img src={ROOM_IMAGES[0].src} alt="" />
        </div>

        <div className="ed-body reveal">
          <div className="ed-body__copy">
            <p><L lang={lang}>{r.lede}</L></p>
            {r.body.map((p, i) => <p key={i}><L lang={lang}>{p}</L></p>)}
          </div>
          <div className="ed-body__aside">
            <div className="ed-meta">
              <div className="ed-meta__row">
                <span className="ed-meta__lbl">{lang === "ja" ? "1日1組" : "Daily"}</span>
                <span className="ed-meta__val">{lang === "ja" ? "1室・最大5〜6名" : "1 room · up to 5–6"}</span>
              </div>
              <div className="ed-meta__row">
                <span className="ed-meta__lbl">{lang === "ja" ? "素泊まり" : "Room only"}</span>
                <span className="ed-meta__val"><span className="price">¥12,000</span>〜</span>
              </div>
              <div className="ed-meta__row">
                <span className="ed-meta__lbl">{lang === "ja" ? "床材" : "Floors"}</span>
                <span className="ed-meta__val">{lang === "ja" ? "ヒノキ・全面張替" : "Hinoki, fully renewed"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="k-room__strip" data-rooms={layout} style={{ marginTop: "clamp(40px, 5vw, 70px)" }}>
          {ROOM_IMAGES.map((img, i) => (
            <button key={i} onClick={() => onOpen(i)} aria-label={img.ja} className={i === 0 ? "is-first" : ""}>
              <div className="k-room__strip__media"><img src={img.src} alt="" loading="lazy" /></div>
              <div className="k-room__strip__cap">
                <span className="ja">{lang === "ja" ? img.ja : img.en}</span>
                <span className="i">{String(i + 1).padStart(2, "0")} / {String(ROOM_IMAGES.length).padStart(2, "0")}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Lightbox ────────────────────────────────────────────── */
function Lightbox({ open, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);
  return (
    <div className={"k-lightbox" + (open ? " is-open" : "")} onClick={onClose}>
      <button className="k-lightbox__close" onClick={onClose}>Close</button>
      <button className="k-lightbox__nav prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>Prev</button>
      <button className="k-lightbox__nav next" onClick={(e) => { e.stopPropagation(); onNext(); }}>Next</button>
      {open && <img src={ROOM_IMAGES[index].src} alt="" onClick={(e) => e.stopPropagation()} />}
    </div>
  );
}

/* ── Concept ──────────────────────────────────────────────── */
function ConceptSection({ lang }) {
  const c = C[lang];
  const k = c.concept;
  return (
    <section className="ed-section ed-section--alt" id="concept" data-tone="moss">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">02</span><span className="sep">/</span>Philosophy</div>
            <h2 className="ed-head__ja"><L lang={lang}>{c.sectionHead.concept.title}</L></h2>
          </div>
          <p className="ed-head__lede"><L lang={lang}>{c.sectionHead.concept.lede}</L></p>
        </div>

        <div className="ed-media ed-media--dark reveal">
          <img src="web/concept/concept-room-dark.png" alt="" />
        </div>

        <div className="ed-body reveal">
          <div className="ed-body__copy">
            <blockquote className="quote">
              <L lang={lang}>{k.quote[0]}</L>
              <br />
              <L lang={lang}>{k.quote[1]}</L>
            </blockquote>
            {k.attrib && <div className="attrib">{k.attrib}</div>}
            {k.body.map((p, i) => <p key={i}><L lang={lang}>{p}</L></p>)}
          </div>
          <div className="ed-body__aside"></div>
        </div>
      </div>
    </section>
  );
}

/* ── Kamikura / Nagi / Shops blocks (ex-Nearby) ─────────── */
function KamikuraBlock({ lang }) {
  const c = C[lang];
  const n = c.nearby;
  return (
    <section className="ed-section" id="nearby" data-tone="stone">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">03</span><span className="sep">/</span>Kamikura Shrine</div>
            <h2 className="ed-head__ja">{n.featureTitle}</h2>
          </div>
          <p className="ed-head__lede">{lang === "ja" ? "熊野信仰の発祥地。" : "The birthplace of Kumano faith."}</p>
        </div>
        <div className="ed-media reveal">
          <img src="web/kamikura-shrine/view-2.jpg" alt="" style={{ objectPosition: "center 40%" }} />
        </div>
        <div className="ed-body reveal">
          <div className="ed-body__copy">
            <p><L lang={lang}>{n.featureBody}</L></p>
          </div>
          <div className="ed-body__aside">
            <div className="ed-meta">
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "距離" : "Distance"}</span><span className="ed-meta__val">{n.featureDist}</span></div>
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "石段" : "Steps"}</span><span className="ed-meta__val">538</span></div>
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "御神体" : "Sacred body"}</span><span className="ed-meta__val">{lang === "ja" ? "ゴトビキ岩" : "Gotobiki-iwa"}</span></div>
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "御祭神" : "Deities"}</span><span className="ed-meta__val">{lang === "ja" ? "天照大神・高倉下命" : "Amaterasu, Takakuraji"}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HayatamaBlock({ lang, onOpenSpecial }) {
  const ja = lang === "ja";
  return (
    <section className="ed-section ed-section--alt" data-tone="vermillion">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">04</span><span className="sep">/</span>Hayatama-Taisha</div>
            <h2 className="ed-head__ja">{ja ? "熊野速玉大社" : "Hayatama-Taisha"}</h2>
          </div>
          <p className="ed-head__lede">{ja ? "熊野三山の一社、世界遺産。" : "Three-Mountain Shrine · World Heritage"}</p>
        </div>
        <div className="ed-media reveal" onClick={() => onOpenSpecial("hayatama")} style={{ cursor: "pointer" }}>
          <img src="web/hayatama/hayatama-torii-gate.jpg" alt="" style={{ objectPosition: "center 30%" }} />
        </div>
        <div className="ed-body reveal">
          <div className="ed-body__copy">
            <p>{ja
              ? "神倉山のゴトビキ岩に祀られていた熊野の神を、この地にお迎えして造営されたと伝わります。神倉が「元宮」、速玉大社が「新宮」と呼ばれ、それが新宮市の地名の由来とも伝えられます。"
              : "Built to receive the Kumano deities who were enshrined on Gotobiki-iwa at Mt. Kamikura. Kamikura is the 'old shrine', Hayatama-Taisha the 'new shrine' — the origin of the city's name, Shingū."}</p>
          </div>
          <div className="ed-body__aside">
            <button className="ed-cta" type="button" onClick={() => onOpenSpecial("hayatama")}>
              {ja ? "速玉大社 特設ページへ" : "Open the special page"} <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function NagiBlock({ lang }) {
  const c = C[lang];
  const n = c.nearby;
  return (
    <section className="ed-section" data-tone="indigo">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">05</span><span className="sep">/</span>Nagi-no-yu</div>
            <h2 className="ed-head__ja">{n.nagiTitle}</h2>
          </div>
          <p className="ed-head__lede">{lang === "ja" ? "歩いていける、市民の銭湯。" : "The local public bathhouse, on foot."}</p>
        </div>
        <div className="ed-media reveal">
          <img src="web/nagi-no-yu/nagi-no-yu-bath.jpg" alt="" />
        </div>
        <div className="ed-body reveal">
          <div className="ed-body__copy">
            <p><L lang={lang}>{n.nagiBody}</L></p>
          </div>
          <div className="ed-body__aside">
            <div className="ed-meta">
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "距離" : "Distance"}</span><span className="ed-meta__val">{n.nagiDist}</span></div>
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "営業" : "Hours"}</span><span className="ed-meta__val">{n.nagiHours}</span></div>
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "定休" : "Closed"}</span><span className="ed-meta__val">{n.nagiClosed}</span></div>
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "料金" : "Fee"}</span><span className="ed-meta__val">{n.nagiPrice}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OtouBlock({ lang, onOpenSpecial }) {
  const o = C[lang].otou;
  return (
    <section className="ed-section ed-section--ink" data-tone="fire">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">06</span><span className="sep">/</span>Otō Matsuri</div>
            <h2 className="ed-head__ja">{o.title}</h2>
          </div>
          <p className="ed-head__lede">{o.date}</p>
        </div>
        <div className="ed-media reveal" onClick={() => onOpenSpecial("otou")} style={{ cursor: "pointer" }}>
          <img src="web/festival/otou-matsuri.jpg" alt="" />
        </div>
        <div className="ed-body reveal">
          <div className="ed-body__copy">
            <p><L lang={lang}>{o.sub}</L></p>
          </div>
          <div className="ed-body__aside">
            <button className="ed-cta ed-cta--ghost" type="button" onClick={() => onOpenSpecial("otou")}>
              {o.cta} <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function KinegadaniBlock({ lang, onOpenSpecial }) {
  const k = C[lang].kinegadani;
  return (
    <section className="ed-section" data-tone="forest">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">07</span><span className="sep">/</span>Kinegadani-sha</div>
            <h2 className="ed-head__ja">{k.title}</h2>
          </div>
          <p className="ed-head__lede">{k.date}</p>
        </div>
        <div className="ed-media reveal" onClick={() => onOpenSpecial("kinegadani")} style={{ cursor: "pointer" }}>
          <img src="web/kinegadani/kinegadani-shrine.jpg" alt="" />
        </div>
        <div className="ed-body reveal">
          <div className="ed-body__copy">
            <p><L lang={lang}>{k.sub}</L></p>
          </div>
          <div className="ed-body__aside">
            <button className="ed-cta" type="button" onClick={() => onOpenSpecial("kinegadani")}>
              {k.cta} <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShopsBlock({ lang }) {
  const cards = C[lang].nearby.cards;
  const [hovered, setHovered] = useState(null);
  const [autoIdx, setAutoIdx] = useState(0);
  const [modalIdx, setModalIdx] = useState(null);

  // Auto slideshow when nothing is hovered
  useEffect(() => {
    if (hovered != null) return;
    const t = setInterval(() => setAutoIdx(i => (i + 1) % cards.length), 3000);
    return () => clearInterval(t);
  }, [hovered, cards.length]);

  const handleClick = (i) => { setModalIdx(i); };
  const shownIdx = hovered != null ? hovered : autoIdx;
  const modal = modalIdx != null ? cards[modalIdx] : null;

  return (
    <section className="ed-section ed-section--alt" data-tone="warm">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">08</span><span className="sep">/</span>Around</div>
            <h2 className="ed-head__ja">{lang === "ja" ? "周辺の飲食と買物" : "Eat & shop nearby"}</h2>
          </div>
          <p className="ed-head__lede">{lang === "ja" ? "徒歩圏内のお店です。" : "Shops within walking distance."}</p>
        </div>

        <div className="ed-shops__wrap">
          <ul className="ed-shops__list reveal">
            {cards.map((card, i) => (
              <li key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleClick(i)}
                  className={hovered === i ? "is-hover" : ""}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="name">{card.name}</span>
                <span className="cat">{card.desc}</span>
                <span className="dist">{card.dist}</span>
                <span className="go" aria-hidden="true">→</span>
              </li>
            ))}
          </ul>
          <div className="ed-shops__preview is-visible">
            {cards.map((card, i) => (
              <div key={i} className={"ed-shops__preview-card" + (shownIdx === i ? " is-on" : "")}>
                <div className="ed-shops__preview-media">
                  <img src={card.src} alt="" loading="lazy" />
                </div>
                <div className="ed-shops__preview-meta">
                  <div className="name">{card.name}</div>
                  <div className="sub">{card.desc} · {card.dist}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={"ed-shops__modal" + (modalIdx != null ? " is-open" : "")} onClick={() => setModalIdx(null)}>
        <button className="ed-shops__modal-close" onClick={() => setModalIdx(null)} aria-label="close">
          <span></span><span></span>
        </button>
        <div className="ed-shops__modal-inner" onClick={(e) => e.stopPropagation()}>
          {modal && (
            <>
              <div className="ed-shops__modal-media">
                <img src={modal.src} alt="" />
              </div>
              <div className="ed-shops__modal-body">
                <h4>{modal.name}</h4>
                <div className="meta">{modal.desc} · {modal.dist}</div>
                {(modal.hours !== "—" || modal.closed !== "—" || modal.tel !== "—") && (
                  <ul className="ed-shops__modal-meta">
                    {modal.addr && <li><span>{lang === "ja" ? "住所" : "Address"}</span>{modal.addr}</li>}
                    {modal.hours && modal.hours !== "—" && <li><span>{lang === "ja" ? "営業" : "Hours"}</span>{modal.hours}</li>}
                    {modal.closed && modal.closed !== "—" && <li><span>{lang === "ja" ? "定休" : "Closed"}</span>{modal.closed}</li>}
                    {modal.tel && modal.tel !== "—" && <li><span>{lang === "ja" ? "電話" : "Tel"}</span><a href={"tel:" + modal.tel.replace(/-/g, "")}>{modal.tel}</a></li>}
                  </ul>
                )}
                <a className="ed-cta" href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(modal.addr || modal.name + " 和歌山県新宮市")} target="_blank" rel="noreferrer">
                  {lang === "ja" ? "Googleマップで開く" : "Open in Google Maps"} <span className="arrow">→</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* (NearbySection removed — split into KamikuraBlock, NagiBlock, ShopsBlock) */

/* ── Access ───────────────────────────────────────────────── */
function AccessSection({ lang }) {
  const c = C[lang];
  const a = c.access;
  return (
    <section className="ed-section" id="access">
      <div className="ed-inner">
        <div className="ed-head reveal">
          <div className="ed-head__left">
            <div className="ed-head__num"><span className="num">09</span><span className="sep">/</span>Access</div>
            <h2 className="ed-head__ja">{c.sectionHead.access.title}</h2>
          </div>
          <p className="ed-head__lede">{c.sectionHead.access.lede}</p>
        </div>

        <div className="ed-media reveal" style={{ aspectRatio: "16/8", background: "var(--ink)" }}>
          <iframe
            src="https://maps.google.com/maps?q=%E5%92%8C%E6%AD%8C%E5%B1%B1%E7%9C%8C%E6%96%B0%E5%AE%AE%E5%B8%82%E5%8D%83%E7%A9%821-8-5&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy" title="map"
            style={{ width: "100%", height: "100%", border: 0, filter: "grayscale(.3) contrast(1.02)" }}></iframe>
          <div className="ed-media__cap" style={{ background: "var(--paper)", color: "var(--ink)", borderLeft: "3px solid var(--vermillion)", paddingLeft: 12 }}>
            {a.pin[0]} · {a.pin[1]}
          </div>
        </div>

        <div className="ed-body reveal">
          <div className="ed-body__copy">
            {a.rows.map((row, i) => (
              <div key={i} style={{ paddingBottom: 18, marginBottom: 18, borderBottom: "1px solid var(--hairline)" }}>
                <div style={{ fontFamily: "var(--serif-en)", fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--moss)", marginBottom: 8 }}>{row.letter}{row.label !== row.letter ? "  ·  " + row.label : ""}</div>
                <h5 style={{ fontFamily: "var(--mincho)", fontSize: 16, margin: "0 0 6px", letterSpacing: ".06em", fontWeight: 500 }}><L lang={lang}>{row.head}</L></h5>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--ink-soft)", margin: 0 }}><L lang={lang}>{row.body}</L></p>
                {row.table && (
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: "var(--ink-soft)", margin: "10px 0 0" }}>
                    {lang === "ja" ? "運行時刻は熊野御坊南海バスの公式時刻表をご確認ください。" : "Please check the official Kumakou bus timetable for departure times."}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="ed-body__aside">
            <div className="ed-meta">
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "住所" : "Address"}</span><span className="ed-meta__val">{a.pin[1]}</span></div>
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "駐車場" : "Parking"}</span><span className="ed-meta__val">{lang === "ja" ? "1台（要相談）" : "1 car (ask for more)"}</span></div>
              <div className="ed-meta__row"><span className="ed-meta__lbl">{lang === "ja" ? "最寄駅" : "Station"}</span><span className="ed-meta__val">{lang === "ja" ? "JR新宮駅" : "Shingū (JR)"}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Booking ──────────────────────────────────────────────── */
function BookingSection({ lang }) {
  const c = C[lang];
  const b = c.book;
  const ja = lang === "ja";
  return (
    <section className="k-sec k-book" id="book">
      <div className="k-sec__inner">
        <SecHead data={c.sectionHead.book} lang={lang} />
        <div className="k-book__panel reveal">
          <p className="k-book__intro">
            {ja
              ? "Airbnbまたは Booking.com からご予約いただけます。"
              : "Reserve via Airbnb or Booking.com."}
          </p>

          <div className="k-book__price">
            <span className="num"><span className="yen">¥</span>12,000<span className="tilde">〜</span></span>
            <span className="lbl">{b.priceUnit}</span>
          </div>

          <div className="k-book__actions">
            <a className="k-book__cta" href={b.airbnbUrl} target="_blank" rel="noreferrer">{b.cta}</a>
            <a className="k-book__cta" href={b.bookingUrl} target="_blank" rel="noreferrer">{b.ctaBooking}</a>
            <a className="k-book__tel" href="tel:+819014840536">
              <span className="k-book__tel-label">{b.telLabel}</span>
              <span className="k-book__tel-num">090ー1484ー0536</span>
            </a>
          </div>

          <div className="k-book__notes">
            {b.notes.map((line, i) => <div key={i}>{line}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */
/* ── Intro: a quiet logo moment right after hero ────────── */
function IntroSection({ lang }) {
  const ja = lang === "ja";
  return (
    <section className="k-intro" aria-label="Brand mark">
      <div className="k-intro__inner reveal">
        <div className="k-intro__rule"></div>
        <div className="k-intro__mark">
          <img src="logo/logo-transparent.png" alt="熊野古道KURA" />
        </div>
        <p className="k-intro__tag">
          {ja
            ? "新宮、神倉山のふもと。ひとときの休憩を、一日一組さまに。"
            : "At the foot of Mt. Kamikura, in Shingū. A quiet rest — one party per day."}
        </p>
        <div className="k-intro__rule"></div>
      </div>
    </section>
  );
}

/* ── Specials section — both 御燈祭 and 貴祢谷社 ────────── */
function SpecialsSection({ lang, onOpenSpecial }) {
  const o = C[lang].otou;
  const k = C[lang].kinegadani;
  const items = [
    { kind: "otou",       data: o, img: "web/festival/otou-matsuri.jpg",         tone: "fire"   },
    { kind: "kinegadani", data: k, img: "web/kinegadani/kinegadani-shrine.jpg", tone: "forest" }
  ];
  return (
    <section className="k-specials" aria-label={lang === "ja" ? "特設ページ" : "Special pages"}>
      <div className="k-specials__head reveal">
        <div className="k-specials__eyebrow">
          <span className="rule"></span> {lang === "ja" ? "熊野めぐり" : "Kumano sites"}
        </div>
        <h2 className="k-specials__title">
          <L lang={lang}>{lang === "ja" ? "熊野信仰の、はじまりへ。" : "To the origin of the Kumano faith."}</L>
        </h2>
        <p className="k-specials__lede">
          <L lang={lang}>{lang === "ja"
            ? "KURAの目の前で行われる火祭りと、神々がのちに移ったと伝わる古社。あわせてご紹介します。"
            : "The fire festival at our doorstep, and the old shrine where the deities are said to have moved later. Both, side by side."}</L>
        </p>
      </div>

      <div className="k-specials__grid">
        {items.map((it, i) => (
          <button key={it.kind} className="k-specials__card reveal" data-tone={it.tone} type="button"
                  onClick={() => onOpenSpecial(it.kind)} style={{ transitionDelay: (i * 0.12) + "s" }}>
            <div className="k-specials__media">
              <img src={it.img} alt="" loading="lazy" />
            </div>
            <div className="k-specials__copy">
              <div className="k-specials__card-eyebrow">
                <span className="rule"></span> {it.data.eyebrow}
              </div>
              <h3 className="k-specials__card-title"><L lang={lang}>{it.data.title}</L></h3>
              <p className="k-specials__card-sub"><L lang={lang}>{it.data.sub}</L></p>
              <div className="k-specials__card-row">
                <span className="k-specials__card-date">{it.data.date}</span>
                <span className="k-specials__card-cta">{it.data.cta} <span className="arrow">→</span></span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ── Otō Matsuri special-page banner ─────────────────────── */
function OtouBanner({ lang, onOpen }) {
  const o = C[lang].otou;
  return (
    <section className="k-otou-banner" aria-label={o.title}>
      <button type="button" className="k-otou-banner__inner reveal" onClick={onOpen}>
        <div className="k-otou-banner__media">
          <img src="web/festival/otou-matsuri.jpg" alt="" />
        </div>
        <div className="k-otou-banner__copy">
          <div className="k-otou-banner__eyebrow">
            <span className="rule"></span> {o.eyebrow}
          </div>
          <h3 className="k-otou-banner__title"><L lang={lang}>{o.title}</L></h3>
          <p className="k-otou-banner__sub"><L lang={lang}>{o.sub}</L></p>
          <div className="k-otou-banner__row">
            <span className="k-otou-banner__date">{o.date}</span>
            <span className="k-otou-banner__cta">{o.cta} <span className="arrow">→</span></span>
          </div>
        </div>
      </button>
    </section>
  );
}

function Footer({ lang }) {
  const c = C[lang];
  const f = c.footer;
  return (
    <footer className="k-footer">
      <div className="k-footer__top">
        <div className="k-footer__mark">
          <LogoMark size={56} color="var(--moss)" />
          <strong>KURA</strong>
          {lang === "ja" ? "熊野古道" : "Kumano Kodō"}<br/>
          {lang === "ja" ? "和歌山 · 新宮" : "Shingū · Wakayama"}
        </div>
        <div>
          <h6>{f.location}</h6>
          <ul>
            <li>〒647-0044</li>
            <li>{lang === "ja" ? "和歌山県新宮市" : "Shingū, Wakayama"}</li>
            <li>{lang === "ja" ? "千穂 1-8-5" : "1-8-5 Senbo"}</li>
          </ul>
        </div>
        <div>
          <h6>{f.sitemap}</h6>
          <ul>
            {c.nav.map(n => <li key={n.id}><a href={n.external ? n.external : ("#" + n.id)}>{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h6>{f.contact}</h6>
          <ul>
            <li><a href="tel:+819014840536">090 – 1484 – 0536</a></li>
          </ul>
        </div>
      </div>
      <div className="k-footer__license" style={{ borderTop: "1px solid rgba(244,239,232,0.18)", padding: "20px 0 16px", fontSize: "11px", letterSpacing: "0.08em", lineHeight: 1.9, opacity: 0.7, display: "flex", flexWrap: "wrap", gap: "8px 24px", justifyContent: "center" }}>
        <span>{f.licenseLabel}：{f.licenseType}</span>
        <span>{f.licenseNumber}</span>
        <span>{f.licenseOperator}</span>
      </div>
      <div className="k-footer__bottom">
        <span>{f.cred}</span>
        <span>{f.tagline}</span>
      </div>
    </footer>
  );
}

/* ── Reveal observer ──────────────────────────────────────── */
/* Mobile menu drawer */
function MobileMenu({ open, lang, setLang, onClose, onOpenSpecial }) {
  const c = C[lang];
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  return (
    <div className={"k-mobile-menu" + (open ? " is-open" : "")} aria-hidden={!open}>
      <div className="k-mobile-menu__veil" onClick={onClose}></div>
      <aside className="k-mobile-menu__panel" role="dialog" aria-modal="true">
        <div className="k-mobile-menu__top">
          <div className="k-mobile-menu__mark">
            <LogoMark size={24} />
            <span>KURA</span>
          </div>
          <button className="k-mobile-menu__close" onClick={onClose} aria-label="close">
            <span></span><span></span>
          </button>
        </div>
        <nav className="k-mobile-menu__nav">
          {c.nav.map((n, i) => (
            n.overlay
              ? <button key={n.id} type="button" onClick={() => { onClose(); setTimeout(() => onOpenSpecial(n.overlay), 320); }} style={{ animationDelay: (0.15 + i * 0.05) + "s" }}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{n.label}</span>
                </button>
              : <a key={n.id} href={"#" + n.id} onClick={onClose} style={{ animationDelay: (0.15 + i * 0.05) + "s" }}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{n.label}</span>
                </a>
          ))}
        </nav>
        <div className="k-mobile-menu__bottom">
          <div className="k-langtoggle">
            <button onClick={() => setLang("ja")} className={lang === "ja" ? "is-active" : ""}>JA</button>
            <span>/</span>
            <button onClick={() => setLang("en")} className={lang === "en" ? "is-active" : ""}>EN</button>
          </div>
          <a href="#book" onClick={onClose} className="k-cta-pill">{c.reserve}</a>
        </div>
      </aside>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

/* ── Tweaks defaults ──────────────────────────────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "moss",
  "font": "mincho",
  "hero": "fullbleed",
  "rooms": "strip",
  "density": "comfortable",
  "mode": "light"
}/*EDITMODE-END*/;

/* ── App ──────────────────────────────────────────────────── */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useState("ja");
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const [specialOpen, setSpecialOpen] = useState(null); // null | "otou" | "kinegadani"
  const [menuOpen, setMenuOpen] = useState(false);
  const closeSpecial = () => setSpecialOpen(null);
  const openSpecial = (kind) => setSpecialOpen(kind);

  useReveal();

  useEffect(() => {
    const b = document.body;
    b.classList.add("kura-sei");
    b.dataset.theme = t.theme;
    b.dataset.font = t.font;
    b.dataset.density = t.density;
    b.dataset.mode = t.mode;
    b.dataset.lang = lang;
  }, [t, lang]);

  const openLB = (i) => { setLbIndex(i); setLbOpen(true); };
  const closeLB = () => setLbOpen(false);
  const prev = () => setLbIndex((i) => (i - 1 + ROOM_IMAGES.length) % ROOM_IMAGES.length);
  const next = () => setLbIndex((i) => (i + 1) % ROOM_IMAGES.length);

  return (
    <>
      <Header lang={lang} setLang={setLang}
              onOpenSpecial={openSpecial}
              onOpenMenu={() => setMenuOpen(true)} />
      <Hero layout={t.hero} lang={lang} />
      <IntroSection lang={lang} />
      <RoomSection lang={lang} layout={t.rooms} onOpen={openLB} />
      <ConceptSection lang={lang} />
      <KamikuraBlock lang={lang} />
      <HayatamaBlock lang={lang} onOpenSpecial={openSpecial} />
      <NagiBlock lang={lang} />
      <OtouBlock lang={lang} onOpenSpecial={openSpecial} />
      <KinegadaniBlock lang={lang} onOpenSpecial={openSpecial} />
      <ShopsBlock lang={lang} />
      <AccessSection lang={lang} />
      <BookingSection lang={lang} />
      <Footer lang={lang} />
      <Lightbox open={lbOpen} index={lbIndex} onClose={closeLB} onPrev={prev} onNext={next} />
      <MobileMenu open={menuOpen} lang={lang} setLang={setLang}
                  onClose={() => setMenuOpen(false)}
                  onOpenSpecial={openSpecial} />
      {window.FestivalOverlay && React.createElement(window.FestivalOverlay, {
        open: specialOpen === "otou", lang, onClose: closeSpecial
      }, window.FestivalContent && React.createElement(window.FestivalContent, { lang, onClose: closeSpecial }))}
      {window.HayatamaContent && React.createElement(window.FestivalOverlay, {
        open: specialOpen === "hayatama", lang, onClose: closeSpecial
      }, React.createElement(window.HayatamaContent, { lang, onClose: closeSpecial }))}
      {window.FestivalOverlay && React.createElement(window.FestivalOverlay, {
        open: specialOpen === "kinegadani", lang, onClose: closeSpecial
      }, window.KinegadaniContent && React.createElement(window.KinegadaniContent, { lang, onClose: closeSpecial }))}

      <TweaksPanel title="Tweaks · 設定">
        <TweakSection label="Theme · 配色">
          <TweakSelect label="Color" value={t.theme} onChange={(v) => setTweak("theme", v)}
            options={[
              { value: "moss", label: "苔色 (default)" },
              { value: "vermillion", label: "朱寄り" },
              { value: "ink", label: "墨" },
              { value: "hinoki", label: "桧" }
            ]} />
          <TweakRadio label="Mode" value={t.mode} onChange={(v) => setTweak("mode", v)}
            options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }]} />
        </TweakSection>

        <TweakSection label="Type · 書体">
          <TweakRadio label="Font" value={t.font} onChange={(v) => setTweak("font", v)}
            options={[{ value: "mincho", label: "明朝" }, { value: "gothic", label: "ゴシック" }]} />
        </TweakSection>

        <TweakSection label="Hero · 表紙">
          <TweakSelect label="Layout" value={t.hero} onChange={(v) => setTweak("hero", v)}
            options={[
              { value: "fullbleed", label: "Full-bleed · 全面" },
              { value: "split", label: "Split · 二分" },
              { value: "stack", label: "Stack · 上下" }
            ]} />
        </TweakSection>

        <TweakSection label="Room · 客室">
          <TweakRadio label="Layout" value={t.rooms} onChange={(v) => setTweak("rooms", v)}
            options={[
              { value: "strip", label: "Strip" },
              { value: "grid", label: "Grid" },
              { value: "stack", label: "Stack" }
            ]} />
        </TweakSection>

        <TweakSection label="Density · 余白">
          <TweakRadio label="Space" value={t.density} onChange={(v) => setTweak("density", v)}
            options={[
              { value: "compact", label: "密" },
              { value: "comfortable", label: "標準" },
              { value: "generous", label: "ゆとり" }
            ]} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
