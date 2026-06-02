/* eslint-disable */
// ─────────────────────────────────────────────────────────────
// Festival overlay — 御燈祭 special content rendered in-page
// Loaded after React + sei-app.jsx; exposes FestivalOverlay on window.
// ─────────────────────────────────────────────────────────────

function FestivalContent({ lang, onClose }) {
  const ja = lang === "ja";
  return (
    <>
      {/* ── HERO ── */}
      <section className="otou-hero">
        <div className="otou-hero__img">
          <img src="web/festival/otou-matsuri.jpg" alt="" />
        </div>
        <div className="otou-hero__scrim"></div>

        <div className="otou-hero__shell">
          <div className="otou-hero__topmeta">
            <button className="otou-hero__back" onClick={onClose}>
              <span className="arrow">←</span> {ja ? "戻る" : "Back"}
            </button>
            <span>Special · {ja ? "御燈祭特設" : "Otō Matsuri"}</span>
          </div>

          <div className="otou-hero__center">
            <div>
              <div className="otou-hero__eyebrow">
                <span className="rule"></span>
                <span className="vm">{ja ? "神倉神社の例祭" : "Annual festival of Kamikura Shrine"}</span>
              </div>
              <h1 className="otou-hero__title">
                {ja ? "御燈祭" : "Otō Matsuri"}
                <span className="small">{ja ? "Otō Matsuri · Fire Festival of Kamikura" : "御燈祭 · 神倉神社の火祭り"}</span>
              </h1>
              <p className="otou-hero__sub">
                {ja
                  ? <>熊野古道KURAの目の前、神倉神社の石段が舞台となる火祭りです。<br/>毎年二月六日の夜に行われます。</>
                  : <>A fire festival held on the stone steps of Kamikura Shrine — directly in front of Kumano Kodō KURA.<br/>Every year, on the night of February 6.</>
                }
              </p>
            </div>
          </div>

          <div className="otou-hero__bottom">
            <div className="otou-hero__date">
              <strong>2 / 6</strong>
              {ja ? "毎年二月六日 夜" : "Every February 6, at night"}
            </div>
            <div>{ja ? "国指定 重要無形民俗文化財" : "Important Intangible Folk Property"}</div>
          </div>
        </div>
      </section>

      {/* ── 概要・歴史・実用情報 ── */}
      <section className="otou-sec">
        <div className="otou-sec__inner">

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">01</span>
              {ja ? "概要 / Outline" : "01 / Outline"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "火を手に、石段を駆け下りる祭り。" : "Torches in hand, down the stone steps."}</h3>
              <p>{ja
                ? "御燈祭は、毎年二月六日の夜に神倉神社で行われる火祭りです。"
                : "Otō Matsuri is a fire festival held at Kamikura Shrine every February 6, at night."}
              </p>
              <p>{ja
                ? "白襦袢に荒縄を巻いた上り子たちが、松明を手に538段の石段を駆け下ります。山がひとすじの火の流れになり、街の灯りと混じり合います。"
                : "Men in white — the agari-ko — bound with rope, run down the 538 stone steps with burning torches. For a moment the mountain becomes a single line of fire."}
              </p>
              <div className="otou-prose__pull">{ja
                ? "「上り子（あがりこ）」と呼ばれる参加者は、祭りの一週間前から白い物だけを食べる精進潔斎を経て、当日を迎えます。"
                : "The participants, called agari-ko, undergo a week of ritual purification before the festival — eating only foods that are white in colour."}
              </div>
            </div>
          </article>

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">02</span>
              {ja ? "歴史 / Heritage" : "02 / Heritage"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "千四百年を超える、熊野信仰の例祭。" : "Over 1,400 years of Kumano faith."}</h3>
              <p>{ja
                ? "御燈祭は神倉神社の例祭で、千四百年以上の歴史を持つと伝えられています。"
                : "Otō Matsuri is the annual rite of Kamikura Shrine, said to be over 1,400 years old."}
              </p>
              <p>{ja
                ? "神武天皇の東征神話に由来する古い祭りで、二〇一六年には国の重要無形民俗文化財に指定されました。新宮の地に根ざした、現役の民俗行事です。"
                : "Rooted in the myth of Emperor Jinmu's eastern expedition, it was designated an Important Intangible Folk Cultural Property of Japan in March 2016. A living tradition of Shingū."}
              </p>
              <p className="muted">{ja
                ? "国指定 重要無形民俗文化財（二〇一六年三月指定）"
                : "Important Intangible Folk Cultural Property — designated March 2016."}
              </p>
            </div>
          </article>

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">03</span>
              {ja ? "実用情報 / Practical" : "03 / Practical"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "見学は自由、参加は男子のみ。" : "Open to watch, men only to take part."}</h3>
              <p>{ja
                ? "見学は自由です。鳥居の外から、火の列が石段を下っていく様子をご覧いただけます。"
                : "Anyone may come to watch. The procession of fire can be observed from outside the torii gate."}
              </p>
              <p>{ja
                ? "参加できるのは男子のみで、一週間前から白米・かまぼこ・豆腐など白い物のみを食す精進潔斎が必要です。二〇二五年は約一千五百八十名の上り子が参加しました。"
                : "Only men may take part, after a week of ritual purification. In 2025, about 1,580 agari-ko participated."}
              </p>

              <div className="otou-info" style={{ marginTop: 36 }}>
                <div className="otou-info__cell">
                  <h5>Date · {ja ? "日程" : "When"}</h5>
                  <div className="val">{ja ? "二月六日" : "Feb 6"}<em>{ja ? "Every Feb 6" : "Annually"}</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Time · {ja ? "時間" : "Time"}</h5>
                  <div className="val">{ja ? "夜" : "Night"}<em>From sunset</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Place · {ja ? "場所" : "Where"}</h5>
                  <div className="val">{ja ? "神倉神社" : "Kamikura Shrine"}<em>538 stone steps</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Visit · {ja ? "見学" : "Watching"}</h5>
                  <div className="val">{ja ? "自由" : "Free"}<em>Open to all</em></div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* ── KURAから ── */}
      <section className="otou-sec otou-sec--paper-deep">
        <div className="otou-sec__inner">
          <div className="otou-position">
            <div className="otou-position__media">
              <img src="web/kamikura-shrine/view-1.jpg" alt="" />
            </div>
            <div className="otou-position__copy">
              <div className="otou-prose__index" style={{ marginBottom: 22 }}>
                <span className="num">04</span>
                {ja ? "KURAから / From the inn" : "04 / From the inn"}
              </div>
              <h3>{ja ? "祭りの舞台は、宿の目の前です。" : "The festival, just outside the door."}</h3>
              <p>{ja
                ? "御燈祭の舞台になる神倉神社の石段は、熊野古道KURAのすぐ目の前にあります。"
                : "The stone steps of Kamikura Shrine — where the festival happens — are directly in front of Kumano Kodō KURA."}
              </p>
              <p>{ja
                ? "KURAからは、上り子たちの、まつりに向かう勇ましい姿を見送ることができます。また、駆け下りてくる姿もすぐ近くで見ることができます。"
                : "From KURA, you can see off the agari-ko as they head bravely to the festival — and watch them run back down, close at hand."}
              </p>
              <p>{ja
                ? "二月六日前後のご宿泊は、例年お問い合わせが集中いたします。お早めにご相談ください。"
                : "Lodging around February 6 fills up quickly each year. Please enquire well in advance."}
              </p>
              <a className="otou-position__cta" href="#book" onClick={onClose}>
                {ja ? "二月のご予約・お問い合わせ" : "Reserve for February"}
                <span className="en">{ja ? "Reserve for February" : "二月のご予約"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers band ── */}
      <section className="otou-sec otou-sec--ink">
        <div className="otou-sec__inner">
          <div className="otou-prose__index" style={{ color: "rgba(244,239,232,.55)", marginBottom: 20 }}>
            <span className="num" style={{ color: "var(--paper)" }}>05</span>
            {ja ? "数字でみる御燈祭" : "05 / In numbers"}
          </div>
          <h3 style={{ fontFamily: "var(--mincho)", fontWeight: 500, fontSize: "clamp(28px, 3.4vw, 44px)", margin: "0 0 16px", letterSpacing: ".04em" }}>
            {ja ? "数字でたどる御燈祭" : "The festival in numbers"}
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.95, color: "rgba(244,239,232,.7)", maxWidth: "60ch", margin: 0 }}>
            {ja ? "歴史・石段・参加者数など、御燈祭にまつわる数字をまとめました。" : "A few figures behind the festival — its history, steps, and participants."}
          </p>

          <div className="otou-band">
            <div className="otou-band__cell">
              <div className="otou-band__num">1,400<span style={{ fontSize: ".6em", opacity: .7 }}>+</span></div>
              <div className="otou-band__lbl">{ja ? "年の歴史" : "Years of tradition"}</div>
            </div>
            <div className="otou-band__cell">
              <div className="otou-band__num">538</div>
              <div className="otou-band__lbl">{ja ? "石段の数" : "Stone steps"}</div>
            </div>
            <div className="otou-band__cell">
              <div className="otou-band__num">1,580</div>
              <div className="otou-band__lbl">{ja ? "上り子（2025年）" : "Participants (2025)"}</div>
            </div>
            <div className="otou-band__cell">
              <div className="otou-band__num">2 / 6</div>
              <div className="otou-band__lbl">{ja ? "例年の開催日" : "Annual date"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sources & back ── */}
      <footer className="otou-foot">
        <div className="otou-foot__inner">
          <div>
            <h6>{ja ? "References · 出典" : "References"}</h6>
            <ul>
              <li><a href="https://www.city.shingu.lg.jp/info/35" target="_blank" rel="noreferrer">{ja ? "御燈祭｜新宮市" : "Otō Matsuri — Shingū City"}</a></li>
              <li><a href="https://travel.nankikumano.jp/omatsuri/otoumatsuri/" target="_blank" rel="noreferrer">{ja ? "お燈まつりガイド｜南紀・熊野お祭りガイド" : "Festival guide — Nanki-Kumano"}</a></li>
              <li><a href="https://ja.wikipedia.org/wiki/御燈祭" target="_blank" rel="noreferrer">{ja ? "御燈祭｜Wikipedia" : "Wikipedia (JA)"}</a></li>
            </ul>
          </div>
          <div>
            <button className="otou-foot__back" onClick={onClose}>
              {ja ? "熊野古道KURA トップへ戻る" : "Back to KURA"}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ── Generic special-page overlay wrapper ─────────────── */
function FestivalOverlay({ open, lang, onClose, children }) {
  const ref = React.useRef(null);

  // Lock body scroll + Escape key
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    if (ref.current) ref.current.scrollTop = 0;
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div className={"festival-overlay" + (open ? " is-open" : "")} role="dialog" aria-modal="true" aria-hidden={!open}>
      <div className="festival-overlay__curtain" aria-hidden="true"></div>
      <button className="festival-overlay__close" onClick={onClose} aria-label="Close">
        <span></span><span></span>
      </button>
      <div className="festival-overlay__scroll" ref={ref}>
        {open && children}
      </div>
    </div>
  );
}

window.FestivalOverlay = FestivalOverlay;
window.FestivalContent = FestivalContent;

/* ─────────────────────────────────────────────────────────────
   KINEGADANI — 貴祢谷社 special page content
   ───────────────────────────────────────────────────────────── */
function KinegadaniContent({ lang, onClose }) {
  const ja = lang === "ja";
  return (
    <>
      {/* HERO */}
      <section className="otou-hero otou-hero--forest">
        <div className="otou-hero__img">
          <img src="web/kinegadani/kinegadani-shrine.jpg" alt="" />
        </div>
        <div className="otou-hero__scrim"></div>

        <div className="otou-hero__shell">
          <div className="otou-hero__topmeta">
            <button className="otou-hero__back" onClick={onClose}>
              <span className="arrow">←</span> {ja ? "戻る" : "Back"}
            </button>
            <span>Special · {ja ? "貴祢谷社" : "Kinegadani-sha"}</span>
          </div>

          <div className="otou-hero__center">
            <div>
              <div className="otou-hero__eyebrow">
                <span className="rule"></span>
                <span className="vm">{ja ? "熊野信仰の源流" : "The roots of Kumano faith"}</span>
              </div>
              <h1 className="otou-hero__title">
                {ja ? <>貴祢谷社<small style={{ display: "block", fontSize: ".5em", letterSpacing: ".4em", marginTop: 10, fontWeight: 400, opacity: .85 }}>きねがだにしゃ</small></> : "Kinegadani-sha"}
                <span className="small">{ja ? "Kinegadani Shrine · Mie, Kihō" : "貴祢谷社 · 三重・紀宝"}</span>
              </h1>
              <p className="otou-hero__sub">
                {ja
                  ? <>熊野の神が、神倉山を降りたあとに移ったと伝えられる地。<br/>静かな森に、紀州熊野の古い祭祀の場が残ります。</>
                  : <>Where the Kumano deities are said to have moved after first descending on Kamikura.<br/>A quiet forest, an ancient place of worship in Kishū-Kumano.</>
                }
              </p>
            </div>
          </div>

          <div className="otou-hero__bottom">
            <div className="otou-hero__date">
              <strong>≈ 2,500</strong>
              {ja ? "年前、神々の遷座" : "years of recorded tradition"}
            </div>
            <div>{ja ? "紀宝町指定文化財" : "Cultural Property of Kihō Town"}</div>
          </div>
        </div>
      </section>

      {/* 概要・歴史・実用情報 */}
      <section className="otou-sec">
        <div className="otou-sec__inner">

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">01</span>
              {ja ? "概要 / Outline" : "01 / Outline"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "紀州熊野、最も古い祭祀の地。" : "An ancient place of Kumano worship."}</h3>
              <p>{ja
                ? "貴祢谷社は、三重県紀宝町にある熊野信仰ゆかりの古い神社です。"
                : "Kinegadani-sha is an old shrine in Kihō Town, Mie Prefecture, deeply tied to the Kumano faith."}
              </p>
              <p>{ja
                ? "熊野三所権現（速玉大神・夫須美大神・家津御子大神）をお祀りしています。"
                : "It enshrines the three Kumano deities — Hayatama, Fusumi, and Ketsu-mi-ko."}
              </p>
              <div className="otou-prose__pull">{ja
                ? "境内からは古墳時代末期（約1,500年前）の土器も出土しており、熊野地方でもとくに古い祭祀の場とされています。"
                : "Pottery from the late Kofun period (about 1,500 years ago) has been excavated on the grounds — among the oldest ritual sites in Kumano."}
              </div>
            </div>
          </article>

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">02</span>
              {ja ? "歴史 / Heritage" : "02 / Heritage"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "神倉山から、貴祢谷へ。" : "From Kamikura, to Kinegadani."}</h3>
              <p>{ja
                ? "神代の頃、新宮の神倉山に降りた熊野の神が、約2,500年前にこの貴祢谷へ移ったと伝えられています。"
                : "In the age of the gods, the Kumano deities are said to have descended on Mt. Kamikura in Shingū, then moved here to Kinegadani about 2,500 years ago."}
              </p>
              <p>{ja
                ? "約2,000年前には三所権現が熊野本宮へ遷座しました。さらに約1,900年前、熊野神が新宮へ移る際に、鵜殿の諸手船が神船を先導したと伝えられ、これが熊野速玉大社・御船祭の起源とも言われます。"
                : "About 2,000 years ago, the three deities moved on to Kumano Hongū. Then about 1,900 years ago, when the Kumano god moved to Shingū, the morote-bune of Udono are said to have led the divine vessel — the origin of the Mifune Festival at Kumano Hayatama Shrine."}
              </p>
              <p className="muted">{ja
                ? "紀宝町指定文化財 / Designated cultural property of Kihō Town."
                : "Designated cultural property of Kihō Town."}
              </p>
            </div>
          </article>

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">03</span>
              {ja ? "実用情報 / Practical" : "03 / Practical"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "静かな森のなかへ。" : "A quiet forest visit."}</h3>
              <p>{ja
                ? "三重県南牟婁郡紀宝町に鎮座しています。森のなかの石段を登った先に、社殿があります。"
                : "Located in Kihō Town, Minamimuro District, Mie. The shrine stands at the top of a stone stair through the forest."}
              </p>
              <p className="muted">{ja
                ? "※詳しいアクセス・駐車場・参拝の作法は、現地にてご確認ください。"
                : "Please check on-site for detailed access, parking and visiting customs."}
              </p>

              <div className="otou-info" style={{ marginTop: 36 }}>
                <div className="otou-info__cell">
                  <h5>Where · {ja ? "所在地" : "Location"}</h5>
                  <div className="val">{ja ? "三重県紀宝町" : "Kihō, Mie"}<em>Kihō, Minamimuro, Mie</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Enshrined · {ja ? "御祭神" : "Deities"}</h5>
                  <div className="val">{ja ? "熊野三所権現" : "3 Kumano deities"}<em>Hayatama · Fusumi · Ketsu-mi-ko</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Status · {ja ? "文化財" : "Heritage"}</h5>
                  <div className="val">{ja ? "町指定文化財" : "Town designated"}<em>Cultural Property of Kihō</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Visit · {ja ? "参拝" : "Access"}</h5>
                  <div className="val">{ja ? "要確認" : "Check on site"}<em>Refer to signage on arrival</em></div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* KURAから */}
      <section className="otou-sec otou-sec--paper-deep">
        <div className="otou-sec__inner">
          <div className="otou-position">
            <div className="otou-position__media">
              <img src="web/kinegadani/kinegadani-ritual.jpg" alt="" />
            </div>
            <div className="otou-position__copy">
              <div className="otou-prose__index" style={{ marginBottom: 22 }}>
                <span className="num">04</span>
                {ja ? "KURAから / From the inn" : "04 / From the inn"}
              </div>
              <h3>{ja ? "新宮の対岸、車で渡って。" : "Across the Kumano River."}</h3>
              <p>{ja
                ? "貴祢谷社は、熊野川を渡った三重県側にあります。KURAから車でお出かけいただける距離です。"
                : "Kinegadani-sha sits on the Mie side of the Kumano River. From KURA, it's a short drive across the bridge."}
              </p>
              <p>{ja
                ? "神倉神社（御燈祭）が「神が降りた地」、貴祢谷社が「神が移った地」。あわせてご参拝いただくと、熊野信仰のはじまりを順にたどることができます。"
                : "Kamikura is where the gods descended; Kinegadani is where they moved. Visited together, you trace the beginning of the Kumano faith in order."}
              </p>
              <a className="otou-position__cta" href="#access" onClick={onClose}>
                {ja ? "アクセスを見る" : "See access details"}
                <span className="en">{ja ? "Access" : "アクセス"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of the deities' migration */}
      <section className="otou-sec otou-sec--ink">
        <div className="otou-sec__inner">
          <div className="otou-prose__index" style={{ color: "rgba(244,239,232,.55)", marginBottom: 20 }}>
            <span className="num" style={{ color: "var(--paper)" }}>05</span>
            {ja ? "熊野の神々の道のり" : "05 / The migration of the gods"}
          </div>
          <h3 style={{ fontFamily: "var(--mincho)", fontWeight: 500, fontSize: "clamp(28px, 3.4vw, 44px)", margin: "0 0 16px", letterSpacing: ".04em" }}>
            {ja ? "神倉山から、本宮、新宮へ。" : "From Kamikura, to Hongū, to Shingū."}
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.95, color: "rgba(244,239,232,.7)", maxWidth: "60ch", margin: "0 0 clamp(40px, 5vw, 70px)" }}>
            {ja
              ? "伝承と出土資料から見えてくる、熊野の神々の遷座のあゆみです。"
              : "The path of the Kumano deities, as told through tradition and archaeology."}
          </p>

          <ol className="otou-timeline">
            <li className="otou-timeline__item">
              <div className="otou-timeline__year">{ja ? "神代" : "Mythic"}</div>
              <div className="otou-timeline__node"></div>
              <div className="otou-timeline__body">
                <h4>{ja ? "神倉山へ降臨" : "Descent on Mt. Kamikura"}</h4>
                <p>{ja
                  ? "熊野の神が、新宮の神倉山に降りたと伝えられています。"
                  : "The Kumano deities are said to have descended on Mt. Kamikura in Shingū."}
                </p>
              </div>
            </li>
            <li className="otou-timeline__item is-here">
              <div className="otou-timeline__year">{ja ? "約2,500年前" : "≈ 2,500 yrs"}</div>
              <div className="otou-timeline__node"></div>
              <div className="otou-timeline__body">
                <h4>{ja ? "貴祢谷へ遷座" : "Moved to Kinegadani"}</h4>
                <p>{ja
                  ? "神倉山から、この貴祢谷の地へ移り、三柱を二つの社殿に祀ったと伝わります。"
                  : "The deities are said to have moved here, and were enshrined in two halls."}
                </p>
                <div className="otou-timeline__pin">{ja ? "← この地" : "← Here"}</div>
              </div>
            </li>
            <li className="otou-timeline__item">
              <div className="otou-timeline__year">{ja ? "約2,000年前" : "≈ 2,000 yrs"}</div>
              <div className="otou-timeline__node"></div>
              <div className="otou-timeline__body">
                <h4>{ja ? "熊野本宮へ" : "On to Kumano Hongū"}</h4>
                <p>{ja
                  ? "三所権現は、熊野本宮の地へ遷座しました。"
                  : "The three deities moved on to the site of Kumano Hongū Taisha."}
                </p>
              </div>
            </li>
            <li className="otou-timeline__item">
              <div className="otou-timeline__year">{ja ? "約1,900年前" : "≈ 1,900 yrs"}</div>
              <div className="otou-timeline__node"></div>
              <div className="otou-timeline__body">
                <h4>{ja ? "新宮・速玉大社へ" : "To Shingū / Hayatama Taisha"}</h4>
                <p>{ja
                  ? "熊野神が新宮へ移る際に、鵜殿の諸手船が神船を先導したとされ、これが速玉大社・御船祭の起源とも言われます。"
                  : "When the god moved to Shingū, the morote-bune of Udono are said to have led the divine vessel — the origin of the Mifune Festival."}
                </p>
              </div>
            </li>
            <li className="otou-timeline__item">
              <div className="otou-timeline__year">{ja ? "約1,500年前" : "≈ 1,500 yrs"}</div>
              <div className="otou-timeline__node"></div>
              <div className="otou-timeline__body">
                <h4>{ja ? "境内に祭祀の跡" : "Continued ritual use"}</h4>
                <p>{ja
                  ? "古墳時代末期の土器が、貴祢谷社の境内から出土しています。"
                  : "Pottery from the late Kofun period has been excavated on the grounds."}
                </p>
              </div>
            </li>
            <li className="otou-timeline__item is-now">
              <div className="otou-timeline__year">{ja ? "現在" : "Today"}</div>
              <div className="otou-timeline__node"></div>
              <div className="otou-timeline__body">
                <h4>{ja ? "紀宝町指定文化財" : "Cultural Property of Kihō"}</h4>
                <p>{ja
                  ? "紀宝町の指定文化財として、地域の人々に大切に守られています。"
                  : "Designated as a cultural property by Kihō Town, cared for by the local community."}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Sources & back */}
      <footer className="otou-foot">
        <div className="otou-foot__inner">
          <div>
            <h6>{ja ? "References · 出典" : "References"}</h6>
            <ul>
              <li><a href="https://www.town.kiho.lg.jp/tourisms/1714/" target="_blank" rel="noreferrer">{ja ? "貴祢谷社｜紀宝町" : "Kinegadani-sha — Kihō Town"}</a></li>
              <li>{ja ? "現地案内板「紀州熊野 貴祢谷社略記」（貴祢谷社保存会）" : "On-site signage by the Kinegadani-sha Preservation Society"}</li>
            </ul>
          </div>
          <div>
            <button className="otou-foot__back" onClick={onClose}>
              {ja ? "熊野古道KURA トップへ戻る" : "Back to KURA"}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

window.KinegadaniContent = KinegadaniContent;

/* ─────────────────────────────────────────────────────────────
   HAYATAMA — 熊野速玉大社 special page content
   ───────────────────────────────────────────────────────────── */
function HayatamaContent({ lang, onClose }) {
  const ja = lang === "ja";
  return (
    <>
      {/* HERO */}
      <section className="otou-hero otou-hero--vermillion">
        <div className="otou-hero__img">
          <img src="web/hayatama/hayatama-gate.jpg" alt="" />
        </div>
        <div className="otou-hero__scrim"></div>

        <div className="otou-hero__shell">
          <div className="otou-hero__topmeta">
            <button className="otou-hero__back" onClick={onClose}>
              <span className="arrow">←</span> {ja ? "戻る" : "Back"}
            </button>
            <span>Special · {ja ? "熊野速玉大社" : "Hayatama-Taisha"}</span>
          </div>

          <div className="otou-hero__center">
            <div>
              <div className="otou-hero__eyebrow">
                <span className="rule"></span>
                <span className="vm">{ja ? "熊野三山の一社" : "One of the three Kumano Grand Shrines"}</span>
              </div>
              <h1 className="otou-hero__title">
                {ja ? <>熊野速玉大社<small style={{ display: "block", fontSize: ".42em", letterSpacing: ".4em", marginTop: 10, fontWeight: 400, opacity: .85 }}>はやたまたいしゃ</small></> : "Kumano Hayatama-Taisha"}
                <span className="small">{ja ? "Hayatama Taisha · Shingū" : "熊野速玉大社 · 新宮"}</span>
              </h1>
              <p className="otou-hero__sub">
                {ja
                  ? <>神倉山のゴトビキ岩に祀られていた熊野の神を、この地にお迎えして造営されたと伝えられています（景行天皇58年遷座）。<br/>熊野三山のひとつで、世界遺産にも登録されています。</>
                  : <>The shrine built to enshrine the Kumano deities after their descent on Gotobiki-iwa.<br/>One of the three Kumano Grand Shrines, a UNESCO World Heritage site.</>}
              </p>
            </div>
          </div>

          <div className="otou-hero__bottom">
            <div className="otou-hero__date">
              <strong>世界遺産</strong>
              {ja ? "紀伊山地の霊場と参詣道" : "Sacred Sites of the Kii Mountain Range"}
            </div>
            <div>{ja ? "全國熊野神社總本宮" : "Head shrine of all Kumano shrines"}</div>
          </div>
        </div>
      </section>

      {/* 概要・御祭神 */}
      <section className="otou-sec">
        <div className="otou-sec__inner">

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">01</span>
              {ja ? "概要 / Outline" : "01 / Outline"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "神倉山から、この地へ。" : "From Kamikura, to this place."}</h3>
              <p>{ja
                ? "熊野速玉大社は、熊野三山の一社です。"
                : "Kumano Hayatama-Taisha is one of the three Kumano Grand Shrines."}
              </p>
              <p>{ja
                ? "神倉山のゴトビキ岩に祀られていた熊野の神を、この地にお迎えして造営されたと伝えられています（景行天皇58年遷座）。神倉が「元宮」、速玉大社が「新宮」と呼ばれ、それが新宮市の地名の由来とも伝えられています。"
                : "The shrine was founded to receive the Kumano deities who first descended on Gotobiki-iwa at Kamikura Shrine. Kamikura is called the 'old shrine', Hayatama-Taisha the 'new shrine' — the origin of the city's name, Shingū."}
              </p>
              <div className="otou-prose__pull">
                {ja
                  ? "2004年7月、世界遺産「紀伊山地の霊場と参詣道」の構成資産として登録されました。"
                  : "In July 2004 it was registered as part of the UNESCO World Heritage Sites and Pilgrimage Routes in the Kii Mountain Range."}
              </div>
            </div>
          </article>

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">02</span>
              {ja ? "御祭神・見どころ / Highlights" : "02 / Highlights"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "夫婦神と、千年のナギ。" : "A divine couple, and a thousand-year nagi tree."}</h3>
              <p>{ja
                ? "熊野速玉大神と熊野夫須美大神の夫婦神をはじめ、十二神をお祀りしています。境内には樹齢約千年・平重盛の手植えと伝わるナギの大樹が立ち、国の天然記念物に指定されています。"
                : "The shrine enshrines a divine couple — Hayatama and Fusumi — among twelve deities. In its grounds stands a nagi tree, said to be a thousand years old and planted by Taira no Shigemori, designated a National Natural Monument."}
              </p>
              <p>{ja
                ? "ナギの木は夫婦円満・縁結びのご利益で知られ、葉を護符として持ち帰る参拝者も多くおられます。"
                : "The tree is associated with marital harmony and the tying of fates. Visitors often take a leaf home as a charm."}
              </p>
              <p>{ja
                ? "境内の熊野神宝館（1957年築）には、室町時代に奉納された蒔絵手箱や檜扇などの神宝、約一千二百点が収められています。"
                : "The shrine's treasure house preserves about 1,200 sacred objects, including lacquered boxes and folding fans donated during the Muromachi period."}
              </p>
            </div>
          </article>

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">03</span>
              {ja ? "KURAから / From the inn" : "03 / From the inn"}
            </div>
            <div className="otou-prose__body">
              <h3>{ja ? "KURAから、徒歩圏内。" : "Within walking distance of KURA."}</h3>
              <p>{ja
                ? "KURAから徒歩でお越しいただける距離にあります。神倉神社（元宮）とあわせてお参りいただくと、熊野信仰のはじまりの順をたどっていただけます。"
                : "Hayatama-Taisha is a short walk from KURA. Visit Kamikura Shrine (the old shrine) together, and you trace the founding of Kumano faith in order."}
              </p>
              <a className="otou-position__cta" href="#access" onClick={onClose}>
                {ja ? "アクセスを見る" : "See access"}
                <span className="en">{ja ? "Access" : "アクセス"}</span>
              </a>
            </div>
          </article>

          <article className="otou-prose">
            <div className="otou-prose__index">
              <span className="num">04</span>
              {ja ? "実用情報 / Practical" : "04 / Practical"}
            </div>
            <div className="otou-prose__body">
              <div className="otou-info" style={{ marginTop: 0 }}>
                <div className="otou-info__cell">
                  <h5>Where · {ja ? "所在地" : "Location"}</h5>
                  <div className="val">{ja ? "新宮市新宮1番地" : "1 Shingū, Shingū"}<em>Shingū, Wakayama</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Status · {ja ? "認定" : "Status"}</h5>
                  <div className="val">{ja ? "世界遺産" : "World Heritage"}<em>UNESCO listed</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Deities · {ja ? "御祭神" : "Deities"}</h5>
                  <div className="val">{ja ? "夫婦神" : "Divine couple"}<em>Hayatama · Fusumi</em></div>
                </div>
                <div className="otou-info__cell">
                  <h5>Visit · {ja ? "参拝" : "Hours"}</h5>
                  <div className="val">{ja ? "要確認" : "Check on site"}<em>Hours vary</em></div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Sources */}
      <footer className="otou-foot">
        <div className="otou-foot__inner">
          <div>
            <h6>{ja ? "References · 出典" : "References"}</h6>
            <ul>
              <li><a href="https://kumanohayatama.jp/" target="_blank" rel="noreferrer">{ja ? "熊野速玉大社 公式サイト" : "Kumano Hayatama-Taisha (official)"}</a></li>
              <li><a href="https://www.shinguu.jp/spots/detail/A0001" target="_blank" rel="noreferrer">{ja ? "熊野速玉大社｜新宮市観光協会" : "Shingū Tourism Association"}</a></li>
            </ul>
          </div>
          <div>
            <button className="otou-foot__back" onClick={onClose}>
              {ja ? "熊野古道KURA トップへ戻る" : "Back to KURA"}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

window.HayatamaContent = HayatamaContent;
