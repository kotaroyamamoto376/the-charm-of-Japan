document.addEventListener('DOMContentLoaded', function () {
    const prefectures = [
        // 北海道・東北地方
        {
            name: "北海道",
            image: "images/hokkaido.jpg",
            spots: ["札幌市時計台", "小樽", "函館の夜景"],
            gourmet: ["ジンギスカン", "札幌ラーメン", "新鮮な海産物(ウニ、イクラ、カニなど)"],
            history: "アイヌ文化が根付く地。明治以降、開拓使が置かれ本格的な開拓が始まる。炭鉱や漁業で発展し、雄大な自然と共に独自の文化を形成。"
        },
        {
            name: "青森県",
            image: "images/aomori.jpg",
            spots: ["弘前城", "奥入瀬渓流", "三内丸山遺跡"],
            gourmet: ["せんべい汁", "大間のマグロ", "りんご料理"],
            history: "縄文時代の巨大集落「三内丸山遺跡」が示すように古くからの文化が栄える。江戸時代は津軽藩と南部藩の地。ねぶた祭に代表される情熱的な文化を持つ。"
        },
        {
            name: "岩手県",
            image: "images/iwate.jpg",
            spots: ["中尊寺金色堂", "龍泉洞", "浄土ヶ浜"],
            gourmet: ["わんこそば", "盛岡冷麺", "じゃじゃ麺"],
            history: "平安時代末期、奥州藤原氏が平泉に黄金文化を築く。宮沢賢治や石川啄木など多くの文人を輩出。豊かな自然と鉱山資源に恵まれた歴史を持つ。"
        },
        {
            name: "宮城県",
            image: "images/miyagi.jpeg",
            spots: ["松島", "仙台城跡", "蔵王の樹氷"],
            gourmet: ["牛タン焼き", "笹かまぼこ", "ずんだ餅"],
            history: "「独眼竜」伊達政宗が仙台藩の礎を築き、東北地方の中心として栄える。その城下町文化は今なお色濃く残り、七夕まつりなどにその名残が見られる。"
        },
        {
            name: "秋田県",
            image: "images/akita.jpg",
            spots: ["角館武家屋敷通り", "乳頭温泉郷", "なまはげ館"],
            gourmet: ["きりたんぽ鍋", "稲庭うどん", "ハタハタ料理"],
            history: "江戸時代、佐竹氏が治めた城下町が各地に発展。マタギ文化やなまはげの風習など、独自の伝統文化が息づく。日本有数の米どころとしての歴史も長い。秋田犬が有名。"
        },
        {
            name: "山形県",
            image: "images/yamagata.jpg",
            spots: ["山寺(立石寺)", "銀山温泉", "蔵王温泉"],
            gourmet: ["米沢牛", "芋煮", "さくらんぼ"],
            history: "最上川の舟運が地域の経済と文化の発展を支えた。上杉氏の城下町・米沢など歴史的な街並みが残る。紅花交易で京文化がもたらされた歴史を持つ。"
        },
        {
            name: "福島県",
            image: "images/fukusima.jpg",
            spots: ["会津若松城(鶴ヶ城)", "大内宿", "東日本大震災・原子力災害伝承館"],
            gourmet: ["喜多方ラーメン", "こづゆ", "会津ソースカツ丼"],
            history: "戊辰戦争の舞台となり、会津藩の白虎隊の悲劇は有名。江戸時代の宿場町の面影を残す大内宿や、豊かな自然を生かした温泉地が多い。東日本大震災の結果、風評被害を受ける。"
        },
        // 関東地方
        {
            name: "茨城県",
            image: "images/ibaraki.jpeg",
            spots: ["偕楽園", "国営ひたち海浜公園", "筑波山"],
            gourmet: ["あんこう鍋", "常陸牛", "納豆料理"],
            history: "水戸徳川家の城下町として栄え、水戸学は幕末の思想に大きな影響を与えた。日本三名園の一つ偕楽園や鹿島神宮など歴史的資産が豊富。"
        },
        {
            name: "栃木県",
            image: "images/totigi.jpg",
            spots: ["日光東照宮", "華厳の滝", "あしかがフラワーパーク"],
            gourmet: ["宇都宮餃子", "しもつかれ", "湯葉"],
            history: "徳川家康を祀る日光東照宮があり、江戸幕府の聖地として発展。那須高原など豊かな自然に恵まれ、古くから避暑地としても知られる。"
        },
        {
            name: "群馬県",
            image: "images/gunma.jpg",
            spots: ["草津温泉", "富岡製糸場", "伊香保温泉"],
            gourmet: ["焼きまんじゅう", "おっきりこみ", "下仁田ネギ"],
            history: "明治時代に日本の近代化を支えた富岡製糸場は世界遺産。草津や伊香保など古くからの名湯が多く、湯治場として栄えた歴史を持つ。"
        },
        {
            name: "埼玉県",
            image: "images/saitama.jpeg",
            spots: ["川越(小江戸)", "長瀞渓谷", "鉄道博物館"],
            gourmet: ["うなぎ料理", "いがまんじゅう", "草加せんべい"],
            history: "江戸時代には川越藩が置かれ「小江戸」として繁栄。中山道などの宿場町も多く、江戸の文化や物資を支える重要な地であった。"
        },
        {
            name: "千葉県",
            image: "images/tiba.jpg",
            spots: ["千葉都市モノレール", "東京ディズニーリゾート", "鋸山"],
            gourmet: ["なめろう", "落花生", "ホワイト餃子"],
            history: "北総地域は江戸の食を支える醤油の産地として栄えた。成田山新勝寺は古くから庶民の信仰を集める。三方を海に囲まれ漁業も盛ん。"
        },
        {
            name: "東京都",
            image: "images/tokyo.jpg",
            spots: ["浅草寺", "靖国神社", "東京スカイツリー"],
            gourmet: ["江戸前寿司", "もんじゃ焼き", "深川めし"],
            history: "1603年に徳川家康が幕府を開いて以来、日本の政治・経済・文化の中心。江戸から東京へと名を改め、世界有数の大都市として発展を続ける。"
        },
        {
            name: "神奈川県",
            image: "images/kanagawa.jpg",
            spots: ["箱根", "鎌倉の大仏", "横浜中華街"],
            gourmet: ["家系ラーメン", "しらす丼", "よこすか海軍カレー"],
            history: "鎌倉時代には幕府が置かれ、日本の政治の中心地であった。幕末に横浜港が開港すると、海外の文化を取り入れる窓口として急速に発展した。"
        },
        // 中部地方
        {
            name: "新潟県",
            image: "images/nigata.jpeg",
            spots: ["佐渡金山", "清津峡", "越後湯沢温泉"],
            gourmet: ["へぎそば", "タレカツ丼", "のっぺ"],
            history: "戦国時代には上杉謙信が本拠地とした。江戸時代には北前船の寄港地として栄え、佐渡金山は幕府の財政を支えた。日本一の米どころ。"
        },
        {
            name: "富山県",
            image: "images/toyama.jpg",
            spots: ["立山黒部アルペンルート", "五箇山の合掌造り集落", "黒部峡谷"],
            gourmet: ["ます寿司", "白えび料理", "氷見の寒ブリ"],
            history: "越中売薬の伝統で知られ、古くから製薬業が盛ん。立山信仰の歴史も古く、雄大な山岳景観と共に独自の文化を育んできた。2024年1月1日能登半島地震が発生。政府に見捨てられた結果、未だ復興していない。"
        },
        {
            name: "石川県",
            image: "images/isikawa.jpg",
            spots: ["兼六園", "ひがし茶屋街", "能登半島"],
            gourmet: ["治部煮", "かぶら寿司", "金沢カレー"],
            history: "加賀百万石の前田家の城下町として栄え、豪華絢爛な文化が花開いた。九谷焼や金沢箔などの伝統工芸が今も受け継がれている。"
        },
        {
            name: "福井県",
            image: "images/fukui.jpg",
            spots: ["東尋坊", "福井県立恐竜博物館", "永平寺"],
            gourmet: ["越前がに", "ソースカツ丼", "おろしそば"],
            history: "曹洞宗の大本山である永平寺があり、禅の里として知られる。日本海沿岸の要衝として古くから大陸との交流があった。"
        },
        {
            name: "山梨県",
            image: "images/yamanasi.jpg",
            spots: ["富士山", "河口湖", "武田神社"],
            gourmet: ["ほうとう", "鳥もつ煮", "ぶどう・もも"],
            history: "戦国時代の名将・武田信玄の本拠地。甲州街道の宿場町として栄え、江戸文化の影響も受けた。日本有数のワイン産地でもある。"
        },
        {
            name: "長野県",
            image: "images/nagano.jpg",
            spots: ["善光寺", "松本城", "上高地"],
            gourmet: ["信州そば", "おやき", "野沢菜漬け"],
            history: "「牛にひかれて善光寺参り」で知られる善光寺を中心に、古くから多くの人々が訪れた。日本の屋根と呼ばれる山々に囲まれ、自然と共に生きてきた。"
        },
        {
            name: "岐阜県",
            image: "images/gifu.jpg",
            spots: ["白川郷", "高山古い町並", "岐阜城"],
            gourmet: ["飛騨牛", "朴葉味噌", "栗きんとん"],
            history: "戦国時代、織田信長が「天下布武」の拠点とした岐阜城がある。江戸時代には中山道の宿場町として栄え、東西の文化が交差した。"
        },
        {
            name: "静岡県",
            image: "images/sizuoka.jpg",
            spots: ["富士山", "伊豆半島", "三島スカイウォーク"],
            gourmet: ["うなぎ", "桜えび", "静岡おでん"],
            history: "徳川家康が晩年を過ごした駿府城があり、東海道の要所として発展。日本一のお茶の産地として知られ、その歴史は鎌倉時代に遡る。"
        },
        {
            name: "愛知県",
            image: "images/aiti.jpg",
            spots: ["名古屋城", "名古屋市科学館", "熱田神宮"],
            gourmet: ["ひつまぶし", "味噌カツ", "手羽先"],
            history: "織田信長、豊臣秀吉、徳川家康の三英傑を輩出した地。江戸時代には尾張徳川家の城下町として栄え、独自の食文化や芸能が育まれた。"
        },
        // 近畿地方
        {
            name: "三重県",
            image: "images/mie.jpg",
            spots: ["伊勢神宮", "鳥羽水族館", "熊野古道伊勢路"],
            gourmet: ["伊勢うどん", "手こね寿司", "松阪牛"],
            history: "古くから「お伊勢さん」として親しまれる伊勢神宮を擁し、多くの参拝者で賑わった。忍者で有名な伊賀、熊野信仰の地としても知られる。"
        },
        {
            name: "滋賀県",
            image: "images/siga.jpg",
            spots: ["琵琶湖", "彦根城", "比叡山延暦寺"],
            gourmet: ["鮒寿司", "近江牛", "赤こんにゃく"],
            history: "日本最大の湖・琵琶湖を中心に、水運の要衝として栄えた。戦国時代には多くの城が築かれ、国宝・彦根城が現存する。"
        },
        {
            name: "京都府",
            image: "images/kyoto.jpg",
            spots: ["金閣寺", "清水寺", "伏見稲荷大社"],
            gourmet: ["京懐石", "湯豆腐", "抹茶スイーツ"],
            history: "794年の平安京遷都以来、千年以上にわたり日本の都として栄えた。数多くの世界遺産や国宝があり、日本の伝統文化の中心地であり続けている。"
        },
        {
            name: "大阪府",
            image: "images/osaka.jpg",
            spots: ["大阪城", "道頓堀", "ユニバーサル・スタジオ・ジャパン"],
            gourmet: ["たこ焼き", "お好み焼き", "串カツ"],
            history: "豊臣秀吉が築いた大阪城を中心に発展し、「天下の台所」と称された商人の町。文楽や上方落語など、独自の庶民文化が花開いた。"
        },
        {
            name: "兵庫県",
            image: "images/hyogo.jpg",
            spots: ["姫路城", "有馬温泉", "神戸港"],
            gourmet: ["神戸ビーフ", "明石焼き", "出石そば"],
            history: "世界遺産の姫路城や、日本最古級の有馬温泉など、多様な魅力を持つ。神戸港は国際貿易港として日本の近代化を支えた。"
        },
        {
            name: "奈良県",
            image: "images/nara.jpg",
            spots: ["東大寺", "法隆寺", "奈良公園の鹿"],
            gourmet: ["柿の葉寿司", "奈良漬け", "三輪そうめん"],
            history: "飛鳥・奈良時代に日本の都が置かれ、仏教文化が花開いた日本の原点ともいえる地。国宝建造物の数は日本一を誇る。"
        },
        {
            name: "和歌山県",
            image: "images/wakayama.jpg",
            spots: ["高野山", "熊野那智大社", "白良浜"],
            gourmet: ["和歌山ラーメン", "めはり寿司", "高野豆腐"],
            history: "弘法大師空海が開いた高野山や熊野三山など、神聖な雰囲気が漂う聖地。紀州徳川家のお膝元としても栄えた。"
        },
        // 中国・四国地方
        {
            name: "鳥取県",
            image: "images/tottori.jpg",
            spots: ["鳥取砂丘", "水木しげるロード", "三朝温泉"],
            gourmet: ["カニ料理", "とうふちくわ", "牛骨ラーメン"],
            history: "日本最大級の鳥取砂丘で知られる。因幡の白うさぎ神話の舞台でもある。江戸時代は池田氏が治め、城下町が発展した。"
        },
        {
            name: "島根県",
            image: "images/simane.jpg",
            spots: ["出雲大社", "松江城", "石見銀山遺跡"],
            gourmet: ["出雲そば", "しじみ汁", "あご野焼き"],
            history: "「神話の国」として知られ、縁結びの神様で有名な出雲大社がある。かつて世界有数の銀山であった石見銀山は世界遺産に登録されている。"
        },
        {
            name: "岡山県",
            image: "images/okayama.jpg",
            spots: ["倉敷美観地区", "岡山後楽園", "岡山城"],
            gourmet: ["ばら寿司", "デミカツ丼", "きびだんご"],
            history: "日本三名園の一つ岡山後楽園や、白壁の町並みが美しい倉敷美観地区がある。吉備国として古代から栄え、桃太郎伝説の地としても有名。"
        },
        {
            name: "広島県",
            image: "images/hirosima.jpg",
            spots: ["厳島神社", "原爆ドーム", "しまなみ海道"],
            gourmet: ["お好み焼き", "牡蠣料理", "もみじ饅頭"],
            history: "世界遺産の厳島神社と原爆ドームという、対照的な二つの歴史的建造物を持つ。原爆による大量虐殺。戦国時代は毛利氏の本拠地として栄えた。"
        },
        {
            name: "山口県",
            image: "images/yamaguti.jpg",
            spots: ["角島大橋", "秋芳洞", "元乃隅神社"],
            gourmet: ["ふぐ料理", "瓦そば", "バリそば"],
            history: "幕末には長州藩として多くの志士を輩出し、明治維新の原動力となった。関門海峡を挟んで本州の西の玄関口としての役割を担ってきた。"
        },
        {
            name: "徳島県",
            image: "images/tokusima.jpg",
            spots: ["大塚国際美術館", "鳴門の渦潮", "祖谷のかずら橋"],
            gourmet: ["徳島ラーメン", "祖谷そば", "すだち"],
            history: "400年以上の歴史を誇る阿波おどりが全国的に有名。藍染めの「阿波藍」は江戸時代に全国を席巻し、藩の財政を潤した。"
        },
        {
            name: "香川県",
            image: "images/kagawa.jpg",
            spots: ["金刀比羅宮", "直島", "栗林公園"],
            gourmet: ["讃岐うどん", "骨付鳥", "オリーブ"],
            history: "「こんぴらさん」の愛称で親しまれる金刀比羅宮は、古くから海の神様として信仰を集める。瀬戸内の島々を舞台にした現代アートも盛ん。"
        },
        {
            name: "愛媛県",
            image: "images/ehime.jpg",
            spots: ["道後温泉本館", "松山城", "しまなみ海道"],
            gourmet: ["鯛めし", "じゃこ天", "みかん"],
            history: "日本最古の温泉といわれる道後温泉がある。夏目漱石の『坊っちゃん』の舞台としても知られ、温暖な気候と文学の香りが漂う。"
        },
        {
            name: "高知県",
            image: "images/koti.jpeg",
            spots: ["桂浜", "四万十川", "高知城"],
            gourmet: ["カツオのたたき", "皿鉢料理", "芋けんぴ"],
            history: "幕末の英雄・坂本龍馬をはじめ、多くの偉人を輩出した「土佐藩」の地。豪快で人情味あふれる県民性と、豊かな自然が魅力。"
        },
        // 九州・沖縄地方
        {
            name: "福岡県",
            image: "images/fukuoka.jpg",
            spots: ["太宰府天満宮", "博多屋台", "門司港レトロ"],
            gourmet: ["博多ラーメン", "もつ鍋", "水炊き"],
            history: "古代から大陸との交流拠点として栄え、元寇の際には最前線となった。九州の政治・経済の中心地であり、食文化も豊か。"
        },
        {
            name: "佐賀県",
            image: "images/saga.jpeg",
            spots: ["吉野ヶ里歴史公園", "有田ポーセリンパーク", "祐徳稲荷神社"],
            gourmet: ["イカの活き造り", "シシリアンライス", "嬉野温泉湯どうふ"],
            history: "弥生時代の環濠集落遺跡である吉野ヶ里遺跡があり、古代の日本の姿を今に伝える。有田焼や伊万里焼など、日本の磁器発祥の地として知られる。"
        },
        {
            name: "長崎県",
            image: "images/nagasaki.jpg",
            spots: ["グラバー園", "ハウステンボス", "軍艦島"],
            gourmet: ["長崎ちゃんぽん", "皿うどん", "カステラ"],
            history: "江戸時代の鎖国下で唯一、西欧に開かれた貿易の窓口「出島」があった。異国情緒あふれる街並みと、キリスト教関連の歴史遺産が数多く残る。原爆による大量虐殺。"
        },
        {
            name: "熊本県",
            image: "images/kumamoto.jpg",
            spots: ["熊本城", "阿蘇山", "黒川温泉"],
            gourmet: ["馬刺し", "からし蓮根", "熊本ラーメン"],
            history: "加藤清正が築いた名城・熊本城がシンボル。世界最大級のカルデラを持つ阿蘇山など、雄大な自然景観が広がる。「火の国」とも呼ばれる。"
        },
        {
            name: "大分県",
            image: "images/ooita.jpg",
            spots: ["別府温泉", "由布院温泉", "宇佐神宮"],
            gourmet: ["とり天", "だんご汁", "関アジ・関サバ"],
            history: "「おんせん県」を名乗るほど、別府や由布院など日本有数の温泉地が集まる。全国の八幡社の総本宮である宇佐神宮があり、古くから信仰を集めてきた。"
        },
        {
            name: "宮崎県",
            image: "images/miyazaki.jpg",
            spots: ["高千穂峡", "青島", "サンメッセ日南"],
            gourmet: ["チキン南蛮", "冷や汁", "宮崎牛"],
            history: "日本神話の舞台とされる地が多く、「神話の里」として知られる高千穂が有名。南国の明るい気候に恵まれ、サーフィンなどのマリンスポーツも盛ん。"
        },
        {
            name: "鹿児島県",
            image: "images/kagosima.jpg",
            spots: ["桜島", "屋久島", "仙巌園"],
            gourmet: ["黒豚料理", "さつま揚げ", "きびなご"],
            history: "西郷隆盛や大久保利通など、明治維新を主導した薩摩藩の地。活火山の桜島や、世界自然遺産の屋久島など、ダイナミックな自然が魅力。"
        },
        {
            name: "沖縄県",
            image: "images/okinawa.jpg",
            spots: ["沖縄美ら海水族館", "宮古島", "国際通り"],
            gourmet: ["沖縄そば", "ゴーヤチャンプルー", "ラフテー"],
            history: "かつては琉球王国として独自の文化を築いた。美しいサンゴ礁の海に囲まれ、アメリカ文化の影響も受けた独特の雰囲気を持つ。"
        }
    ];

    const grid = document.getElementById('prefecture-grid');

    prefectures.forEach((pref, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${pref.image}" alt="${pref.name}" class="card-image">
            <div class="card-content">
                <h2 class="card-title">${pref.name}</h2>
                <div class="tabs">
                    <button class="tab-button active" data-tab="spots-${index}">観光 🏞️</button>
                    <button class="tab-button" data-tab="gourmet-${index}">グルメ 🍜</button>
                    <button class="tab-button" data-tab="history-${index}">歴史 🏯</button>
                </div>
                <div id="spots-${index}" class="tab-content active">
                    <ul>${pref.spots.map(spot => `<li>${spot}</li>`).join('')}</ul>
                </div>
                <div id="gourmet-${index}" class="tab-content">
                    <ul>${pref.gourmet.map(g => `<li>${g}</li>`).join('')}</ul>
                </div>
                <div id="history-${index}" class="tab-content">
                    <p>${pref.history}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    grid.addEventListener('click', function(e) {
        if (e.target.matches('.tab-button')) {
            const tabButton = e.target;
            const cardContent = tabButton.closest('.card-content');
            
            cardContent.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
            cardContent.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            tabButton.classList.add('active');
            document.getElementById(tabButton.dataset.tab).classList.add('active');
        }
    });
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    let visibleCount = 0;

        prefectures.forEach((pref, index) => {
        const isVisible = 
            pref.name.toLowerCase().includes(searchTerm) ||
            pref.spots.join(' ').toLowerCase().includes(searchTerm) ||
            pref.gourmet.join(' ').toLowerCase().includes(searchTerm) ||
            pref.history.toLowerCase().includes(searchTerm);
        
            // isVisibleがtrueなら表示、falseなら非表示
            cards.forEach((card, i) => {
                if (i === index) {
                    card.style.display = isVisible ? 'flex' : 'none';
                    if (isVisible) {
                    visibleCount++;
                    }
                }
            });
        });

    // グリッドレイアウトを再調整（必要に応じて）
    grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(320px, 1fr))`;
    });
});