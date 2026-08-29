// ============================================================
// 站点内容配置 —— 改价格、联系方式、文案都只需要动这一个文件
// 每个字段 zh = 中文, en = English
// ============================================================

export const BRAND = {
  cn: '培育钻石',
  en: 'LUMINA LAB DIAMONDS',
  tagline: { zh: '真钻同源 · 工厂直供 · 权威证书', en: 'Real Diamonds · Factory Direct · Certified' },
};

// ↓↓↓ 联系方式：上线前把占位内容替换成真实信息 ↓↓↓
export const CONTACT = {
  wechat: 'your-wechat-id',      // 微信号
  whatsapp: '+86 138-0000-0000', // WhatsApp / 电话
  email: 'hello@example.com',    // 邮箱
  note: {
    zh: '支持零售与批发，异形钻 2.0ct 起，大克拉接受定制。',
    en: 'Retail & wholesale welcome. Fancy shapes from 2.0ct; large-carat custom orders accepted.',
  },
};

export type PriceRow = {
  carat: string;
  price: string;          // '暂无' 显示为 需询价 / Ask
  badge?: { zh: string; en: string };
  spec?: { zh: string; en: string };
};

export type Shape = {
  id: string;
  cn: string;
  en: string;
  spec: { zh: string; en: string };
  desc: { zh: string; en: string };
  rows: PriceRow[];
  note?: { zh: string; en: string };
};

export const SHAPES: Shape[] = [
  {
    id: 'round',
    cn: '圆形',
    en: 'Round Brilliant',
    spec: { zh: 'D–E 色 · VVS2 · EX 切工', en: 'D–E Color · VVS2 · EX Cut' },
    desc: {
      zh: '最经典的明亮式切工，57–58 个刻面，火彩最强，永不挑款。',
      en: 'The timeless brilliant cut with 57–58 facets — maximum fire, suits every setting.',
    },
    rows: [
      { carat: '0.50 ct', price: '¥450 – 480', badge: { zh: '特价引流款', en: 'Promo' }, spec: { zh: 'D 色', en: 'D' } },
      { carat: '1.00 ct', price: '¥850 – 900' },
      { carat: '1.50 ct', price: '¥1300 – 1400' },
      { carat: '2.00 ct', price: '¥2200 – 2300' },
      { carat: '3.00 ct', price: '¥3000 – 3100', spec: { zh: 'E 色', en: 'E' } },
      { carat: '4.00 ct', price: '¥4700 – 4800', spec: { zh: 'E 色', en: 'E' } },
      { carat: '5.00 ct', price: '¥5800 – 5900', spec: { zh: 'E 色', en: 'E' } },
    ],
    note: {
      zh: '0.5ct 一次购买 2 / 4 颗享优惠价，适合引流与耳钉配对。',
      en: '0.5ct: discounted bundles of 2 / 4 pcs — great for promos and earring pairs.',
    },
  },
  {
    id: 'oval',
    cn: '椭圆',
    en: 'Oval',
    spec: { zh: 'D 色 · VVS2 · EX', en: 'D Color · VVS2 · EX' },
    desc: {
      zh: '修长轮廓显大显手细，近年婚戒最热门的异形切工。',
      en: 'Elongated silhouette that flatters the finger — the hottest fancy cut for engagement rings.',
    },
    rows: [
      { carat: '2.00 ct', price: '¥2400 – 2500' },
      { carat: '3.00 ct', price: '¥3100 – 3200' },
      { carat: '4.00 ct', price: '¥5400 – 5500' },
      { carat: '5.00 ct', price: '¥7300 – 7400' },
    ],
  },
  {
    id: 'pear',
    cn: '梨形',
    en: 'Pear',
    spec: { zh: 'D 色 · VVS2 · EX', en: 'D Color · VVS2 · EX' },
    desc: {
      zh: '又称水滴形，兼具圆润与尖端，做吊坠与戒指都极优雅。',
      en: 'The teardrop cut — round meets point; elegant for both pendants and rings.',
    },
    rows: [
      { carat: '2.00 ct', price: '¥2400 – 2500' },
      { carat: '3.00 ct', price: '¥3700 – 3800' },
      { carat: '4.00 ct', price: '¥5400 – 5500' },
      { carat: '5.00 ct', price: '¥6800 – 6900' },
    ],
  },
  {
    id: 'emerald',
    cn: '祖母绿',
    en: 'Emerald Cut',
    spec: { zh: 'D 色 · VS1 · EX', en: 'D Color · VS1 · EX' },
    desc: {
      zh: '阶梯式切工，如镜面长廊般的通透光泽，高级感天花板。',
      en: 'Step-cut hall-of-mirrors shine — understated, architectural luxury.',
    },
    rows: [
      { carat: '2.00 ct', price: '¥2800 – 2900' },
      { carat: '3.00 ct', price: '¥3700 – 3800' },
      { carat: '4.00 ct', price: '暂无' },
      { carat: '5.00 ct', price: '¥7500 – 7600' },
    ],
  },
  {
    id: 'radiant',
    cn: '雷迪恩',
    en: 'Radiant',
    spec: { zh: 'D 色 · VVS2 · EX', en: 'D Color · VVS2 · EX' },
    desc: {
      zh: '方中带闪，兼具祖母绿的轮廓与圆钻的火彩。',
      en: 'Emerald outline with brilliant-cut fire — the best of both worlds.',
    },
    rows: [
      { carat: '2.00 ct', price: '¥2500 – 2600' },
      { carat: '3.00 ct', price: '¥3400 – 3500' },
      { carat: '4.00 ct', price: '暂无' },
      { carat: '5.00 ct', price: '暂无' },
    ],
  },
];

export const PRICE_NOTE = {
  zh: '以上价格为裸石人民币参考价（不含邮费），实际以下单当日报价为准；标注「需询价」的规格请联系确认现货。',
  en: 'Reference prices for loose stones in CNY (shipping excluded); final quote confirmed at order. Items marked "Ask" are subject to stock confirmation.',
};

export const VIDEOS = [
  { src: '/media/video/round-pile.mp4', poster: '/media/video/round-pile.jpg', label: { zh: '圆形裸石统货', en: 'Round melee parcel' } },
  { src: '/media/video/emerald-tweezers.mp4', poster: '/media/video/emerald-tweezers.jpg', label: { zh: '祖母绿切工 · 镜厅光泽', en: 'Emerald cut · hall of mirrors' } },
  { src: '/media/video/oval-rotate.mp4', poster: '/media/video/oval-rotate.jpg', label: { zh: '椭圆 · 全角度火彩', en: 'Oval · 360° fire' } },
  { src: '/media/video/marquise-tray.mp4', poster: '/media/video/marquise-tray.jpg', label: { zh: '马眼形 · 自然光', en: 'Marquise · natural light' } },
  { src: '/media/video/oval-pair.mp4', poster: '/media/video/oval-pair.jpg', label: { zh: '椭圆配对 · 耳钉料', en: 'Oval pair · earring grade' } },
];

export const GALLERY = [
  { src: '/media/img/round-sizes.jpg', shape: 'round', label: { zh: '圆形 1.0–5.0ct 对比', en: 'Round 1.0–5.0ct size comparison' } },
  { src: '/media/img/emerald-velvet.jpg', shape: 'emerald', label: { zh: '祖母绿切工 · 丝绒实拍', en: 'Emerald cut on velvet' } },
  { src: '/media/img/marquise-tweezers.jpg', shape: 'marquise', label: { zh: '马眼形 · 镊子实拍', en: 'Marquise in tweezers' } },
  { src: '/media/img/oval-hand.jpg', shape: 'oval', label: { zh: '椭圆 · 上手大小', en: 'Oval in hand for scale' } },
  { src: '/media/img/round-macro.jpg', shape: 'round', label: { zh: '圆形 · 亭部微距', en: 'Round pavilion macro' } },
  { src: '/media/img/emerald-boxes.jpg', shape: 'emerald', label: { zh: '祖母绿切工 · 配对', en: 'Emerald cut matched pair' } },
  { src: '/media/img/marquise-fire.jpg', shape: 'marquise', label: { zh: '马眼形 · 火彩', en: 'Marquise fire' } },
  { src: '/media/img/oval-tweezers.jpg', shape: 'oval', label: { zh: '椭圆 · 净度实拍', en: 'Oval clarity check' } },
  { src: '/media/img/round-cert.jpg', shape: 'round', label: { zh: 'IGI 证书 · HPHT', en: 'IGI certificate · HPHT' } },
  { src: '/media/img/round-white.jpg', shape: 'round', label: { zh: '圆形统包货', en: 'Round parcel goods' } },
  { src: '/media/img/marquise-pair.jpg', shape: 'marquise', label: { zh: '马眼形 · 配对', en: 'Marquise matched pair' } },
  { src: '/media/img/marquise-single.jpg', shape: 'marquise', label: { zh: '马眼形 · 单颗', en: 'Marquise single stone' } },
  { src: '/media/img/round-tray.jpg', shape: 'round', label: { zh: '圆形 · 托盘实拍', en: 'Rounds on tray' } },
  { src: '/media/img/round-gold.jpg', shape: 'round', label: { zh: '圆形 · 金盘陈列', en: 'Rounds on gold tray' } },
];

export const GALLERY_FILTERS = [
  { id: 'all', cn: '全部', en: 'All' },
  { id: 'round', cn: '圆形', en: 'Round' },
  { id: 'oval', cn: '椭圆', en: 'Oval' },
  { id: 'marquise', cn: '马眼形', en: 'Marquise' },
  { id: 'emerald', cn: '祖母绿', en: 'Emerald' },
];
