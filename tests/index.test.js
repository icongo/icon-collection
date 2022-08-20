const fs = require('fs');
const path = require('path');

it('ad: does the directory exist?', async () => {
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/ad/data/packages/icons-svg/svg'))).toEqual(expect.arrayContaining([ 'filled', 'outlined', 'twotone' ]));
});

it('ae: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ae/data/SVG'))).toBeTruthy();
});

it('bi: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/bi/data/svg'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/bi/data/svg'))).toEqual(expect.arrayContaining(["logos", "regular", "solid"]));
});

it('bl: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/bl/data/logos'))).toBeTruthy();
});

it('br: does the directory exist?', async () => {
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/br/data/src/archive'))).toEqual(
    expect.arrayContaining([
      // "360-secure",
      // "amigo",
      // "android",
      "aol-explorer",
      "arora",
      // "axis",
      // "beaker",
      "bezillabrowser",
      // "brave_1",
      "brave_2",
      // "camino",
      "chrome-android_18-36",
      "chrome-beta-android_25-36",
      "chrome-beta_37-58",
      "chrome-canary_19-48",
      "chrome-canary_49-99",
      "chrome-dev_37-59",
      "chrome_1-11",
      // "chrome_12-48",
      "chrome_49-99",
      "chromium_1-11",
      "chromium_12-48",
      "chromium_49-99",
      "coast",
      "cruz",
      "cờ-rôm+",
      "dolphin-beta",
      "dolphin-zero_1",
      "dolphin-zero_2",
      "dolphin_1",
      "dolphin_2",
      "edge-beta_12-18",
      "edge-canary_12-18",
      "edge-dev_12-18",
      "edge-tile",
      "edge_12-18",
      "epic",
      "epiphany",
      "epiphany-technology-preview_1",
      "fake",
      "fennec",
      "firefox-aurora_23-35",
      "firefox-aurora_5-22",
      "firefox-beta_1",
      "firefox-beta_57-70",
      "firefox-developer-edition_35-56",
      "firefox-developer-edition_57-70",
      "firefox-focus_1",
      "firefox-focus_2",
      "firefox-lite",
      "firefox-nightly_23-56",
      "firefox-nightly_57-70",
      "firefox-nightly_6-22",
      "firefox-preview",
      "firefox-preview-beta",
      "firefox-preview-nightly",
      "firefox-reality",
      "firefox_1",
      "firefox_1.5-3",
      "firefox_23-56",
      "firefox_3.5-22",
      "firefox_57-70",
      "flock",
      "iceape",
      "iceweasel",
      "internet-explorer-developer-channel",
      "internet-explorer-tile_10-11",
      "internet-explorer_6",
      "internet-explorer_7-8",
      "internet-explorer_9-11",
      "k-meleon",
      "konqueror_1-3",
      "konqueror_4",
      "links",
      "maxthon-beta_1",
      "maxthon_1",
      "mosaic",
      "netscape_4-6",
      "netscape_8",
      "netscape_9",
      "omniweb_1-5",
      "omniweb_6",
      "opera-beta_25-32",
      "opera-developer_16-33",
      "opera-mini-beta_1",
      "opera-mini_1",
      "opera-mini_2",
      "opera-next_15-24",
      "opera_10-14",
      "opera_15-32",
      "opera_2-6",
      "opera_7-9",
      "orca",
      "pale-moon",
      "phantomjs",
      "phoenix-firebird",
      "puffin",
      "qupzilla",
      "rekonq",
      "rockmelt",
      "rockmelt-ios",
      "safari-ios_1-6",
      "safari-technology-preview_9-13",
      "safari_1-7",
      "safari_8-13",
      "samsung-internet-beta_5.4-9.1",
      "samsung-internet-beta_9.2-9.4",
      "samsung-internet-gear-vr",
      "samsung-internet_3-4.2",
      "samsung-internet_5",
      "samsung-internet_5.4-9.0",
      "servo_1",
      "shiira",
      "silk_1",
      "silk_3",
      "silk_4",
      "skyfire-android",
      "skyfire-ios",
      "sogou-mobile_1",
      "sogou-mobile_2",
      "sogou-mobile_3",
      "srware-iron",
      "surf",
      "tor",
      "uc",
      "vivaldi",
      "vivaldi-snapshot",
      "web_1",
      "web_2",
      "web_3",
      "webkit-nightly_1-7",
      "webkit-nightly_10-13",
      "webkit-nightly_8-9",
      "webpositive",
      "wyzo",
      "xpress",
      "yandex",
    ]
  ));
});

it('bs: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/bs/data/icons'))).toBeTruthy();
});

it('bts: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/bts/data/dist/icons'))).toBeTruthy();
});

it('ccp: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ccp/data'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/ccp/data'))).toEqual(expect.arrayContaining([
    "flat",
    "flat-rounded",
    "logo",
    "logo-border",
    "mono",
    "mono-outline",
  ]));
});

it('cg: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/cg/data/icons/svg'))).toBeTruthy();
});

it('ci: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ci/data/svg'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/ci/data/svg'))).toEqual(expect.arrayContaining(["brand", "flag", "free"]));
});

it('ct: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ct/data/svg'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/ct/data/svg'))).toEqual(expect.arrayContaining(["icon", "black"]));
});

it('di: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/di/data/!SVG'))).toBeTruthy();
});

it('ei: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ei/data/assets/icons'))).toBeTruthy();
});

it('ev: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ev/data/package/icons'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ev/data/package/icons/fill/svg'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ev/data/package/icons/outline/svg'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/ev/data/package/icons'))).toEqual(expect.arrayContaining(["fill", "outline"]));
});

it('fa: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/fa/data/svgs'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/fa/data/svgs'))).toEqual(expect.arrayContaining(["brands", "regular", "solid"]));
});

it('fc: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/fc/data/svg'))).toBeTruthy();
});

it('fd: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/fd/data/svgs'))).toBeTruthy();
});

it('fg: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/fg/data/flags/1x1'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/fg/data/flags/4x3'))).toBeTruthy();
});

it('fi: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/fi/data/icons'))).toBeTruthy();
});

it('gi: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/gi/data'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/gi/data'))).toEqual(expect.arrayContaining([
    "andymeneely",
    "aussiesim",
    "badges",
    "carl-olsen",
    "caro-asercion",
    "cathelineau",
    "catsu",
    "darkzaitzev",
    "delapouite",
    "faithtoken",
    "felbrigg",
    "generalace135",
    "guard13007",
    "heavenly-dog",
    "irongamer",
    "john-colburn",
    "john-redman",
    "kier-heyl",
    "lorc",
    "lord-berandas",
    "lucasms",
    "pepijn-poolman",
    "pierre-leducq",
    "priorblue",
    "quoting",
    "rihlsul",
    "sbed",
    "skoll",
    "sparker",
    "spencerdub",
    "starseeker",
    "various-artists",
    "viscious-speed",
    "willdabeast",
    "zajkonur",
    "zeromancer",
  ]));
});

it('go: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/go/data/icons'))).toBeTruthy();
});

it('gr: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/gr/data/public/img'))).toBeTruthy();
});

it('gy: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/gy/data/svg'))).toBeTruthy();
});

it('hi: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/hi/data/src/solid'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/hi/data/src/outline'))).toBeTruthy();
});

it('ic: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ic/data/azure-cds'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ic/data/azure-docs'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ic/data/azure-icons'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ic/data/azure-patterns'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ic/data/logos'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ic/data/other/out'))).toBeTruthy();
});

it('ii: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ii/data/svg'))).toBeTruthy();
});

it('ik: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ik/data/icons'))).toBeTruthy();
});

it('im: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/im/data/SVG'))).toBeTruthy();
});

it('io: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/io/data/src/svg'))).toBeTruthy();
});

it('ir: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ir/data/icons'))).toBeTruthy();
});

it('ji: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ji/data/icons'))).toBeTruthy();
});

it('lg: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/lg/data/logos'))).toBeTruthy();
});

it('li: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/li/data/svg'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/li/data/svg-color'))).toBeTruthy();
});

it('lu: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/lu/data/icons'))).toBeTruthy();
});

it('mc: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/mc/data/icons/mdl2'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/mc/data/icons/webbrand'))).toBeTruthy();
});

it('md: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/md/data/svg/filled'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/md/data/svg/outlined'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/md/data/svg/round'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/md/data/svg/sharp'))).toBeTruthy();
});

it('mi: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/mi/data/icons'))).toBeTruthy();
});

it('mp: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/mp/data/src/icons'))).toBeTruthy();
});

it('pbi: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/pbi/data/SVG'))).toBeTruthy();
});

it('pk: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/pk/data/source'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/pk/data/source'))).toEqual(expect.arrayContaining([
    "Abstract",
    "Animals",
    "Arrows",
    "Baby",
    "Base",
    "Brand",
    "Build",
    "Character",
    "Charts",
    "Clothes",
    "Communicate",
    "Components",
    "Connect",
    "Constellation",
    "Datas",
    "Edit",
    "Emoji",
    "Energy",
    "Foods",
    "Game",
    "Graphics",
    "Hands",
    "Hardware",
    "Health",
    "Industry",
    "Life",
    "Makeups",
    "Measurement",
    "Money",
    "Music",
    "Office",
    "Operate",
    "Others",
    "Peoples",
    "Safe",
    "Sports",
    "Time",
    "Travel",
    "Weather",
  ]));
});

it('ri: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ri/data/icons'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/ri/data/icons'))).toEqual(expect.arrayContaining([
    "Buildings",
    "Business",
    "Communication",
    "Design",
    "Development",
    "Device",
    "Document",
    "Editor",
    "Finance",
    "Health",
    "Logos",
    "Map",
    "Media",
    "Others",
    "System",
    "User",
    "Weather",
  ]));
});

it('scwi: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/scwi/data/dist/spectrum-css-ccx-workflow-icons/dist/22'))).toBeTruthy();
});

it('si: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/si/data/icons'))).toBeTruthy();
});
it('sn: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/sn/data/svg'))).toBeTruthy();
});
it('sti: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/sti/data/images/svg'))).toBeTruthy();
});
it('tb: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/tb/data/icons'))).toBeTruthy();
});
it('ti: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/ti/data/src/svg'))).toBeTruthy();
});

it('tn: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/tn/data/src/solid'))).toBeTruthy();
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/tn/data/src/outline'))).toBeTruthy();
});

it('uiw: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/uiw/data/icon'))).toBeTruthy();
});

it('vl: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/vl/data/www/logos'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/vl/data/www/logos'))).toEqual(expect.arrayContaining([
    "statelessmoney",
    "staticmannet",
    "statista",
    "statnews",
    "statsbot_cubejs",
    "statsbotco",
    "statsbotco_cubejs",
    "statuscake",
    "statusfyco",
    "statusio",
    "statuslabs",
  ]));
});


it('vsc: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/vsc/data/src/icons'))).toBeTruthy();
});

it('vv: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/vv/data/icons'))).toBeTruthy();
});

it('wi: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/wi/data/svg'))).toBeTruthy();
});

it('wl: does the directory exist?', async () => {
  expect(fs.existsSync(path.resolve(process.cwd(), 'icons/wl/data/libs'))).toBeTruthy();
  expect(fs.readdirSync(path.resolve(process.cwd(), 'icons/wl/data/libs'))).toEqual(expect.arrayContaining([
    "brandico", "elusive-icons", "entypo", "font-awesome", "fontelico", "foundation-icons", "glyphicons-halflings",
  ]));
});
