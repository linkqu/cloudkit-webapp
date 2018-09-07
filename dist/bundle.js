'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

/*
 * Copyright (c) 2018, Linkqu and/or its affiliates. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 *   - Neither the name of Linkqu or the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Icon
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Color {}

defineProperty(Color, "RED", ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"]);

defineProperty(Color, "VOLCANO", ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"]);

defineProperty(Color, "ORANGE", ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"]);

defineProperty(Color, "GOLD", ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"]);

defineProperty(Color, "YELLOW", ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"]);

defineProperty(Color, "LIME", ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"]);

defineProperty(Color, "GREEN", ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"]);

defineProperty(Color, "CYAN", ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"]);

defineProperty(Color, "BLUE", ["#e6f7ff", "#bae7ff", "#91d5ff", "#69c0ff", "#40a9ff", "#1890ff", "#096dd9", "#0050b3", "#003a8c", "#002766"]);

defineProperty(Color, "GEEK_BLUE", ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"]);

defineProperty(Color, "PURPLE", ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"]);

defineProperty(Color, "MAGENTA", ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"]);
// 赤白橡 #deab8a
// 油色 #817936
// 绀桔梗 #444693
// 踯躅色 #ef5b9c
// 肌色 #fedcbd
// 伽罗色 #7f7522
// 花色 #2b4490
// 桜色 #feeeed
// 橙色 #f47920
// 青丹 #80752c
// 瑠璃色 #2a5caa
// 蔷薇色 #f05b72
// 灰茶 #905a3d
// 莺色 #87843b
// 琉璃绀 #224b8f
// 韩红 #f15b6c
// 茶色 #8f4b2e
// 利久色 #726930
// 绀色 #003a6c
// 珊瑚色 #f8aba6
// 桦茶色 #87481f
// 媚茶 #454926
// 青蓝 #102b6a
// 红梅色 #f69c9f
// 枯茶 #5f3c23
// 蓝海松茶 #2e3a1f
// 杜若色 #426ab3
// 桃色 #f58f98
// 焦茶 #6b473c
// 青钝 #4d4f36
// 胜色 #46485f
// 薄柿 #ca8687
// 柑子色 #faa755
// 抹茶色 #b7ba6b
// 群青色 #4e72b8
// 薄红梅 #f391a9
// 杏色 #fab27b
// 黄緑 #b2d235
// 铁绀 #181d4b
// 曙色 #bd6758
// 蜜柑色 #f58220
// 苔色 #5c7a29
// 蓝铁 #1a2933
// 红色 #d71345
// 褐色 #843900
// 若草色 #bed742
// 青褐 #121a2a
// 赤丹 #d64f44
// 路考茶 #905d1d
// 若緑 #7fb80e
// 褐返 #0c212b
// 红赤 #d93a49
// 饴色 #8a5d19
// 萌黄 #a3cf62
// 藤纳戸 #6a6da9
// 臙脂色 #b3424a
// 丁子色 #8c531b
// 苗色 #769149
// 桔梗色 #585eaa
// 真赭 #c76968
// 丁子茶 #826858
// 草色 #6d8346
// 绀蓝 #494e8f
// 今様色 #bb505d
// 黄栌 #64492b
// 柳色 #78a355
// 藤色 #afb4db
// 梅染 #987165
// 土器色 #ae6642
// 若草色 #abc88b
// 藤紫 #9b95c9
// 退红色 #ac6767
// 黄枯茶 #56452d
// 松叶色 #74905d
// 青紫 #6950a1
// 苏芳 #973c3f
// 狐色 #96582a
// 白緑 #cde6c7
// 菫色 #6f60aa
// 茜色 #b22c46
// 黄橡 #705628
// 薄緑 #1d953f
// 鸠羽色 #867892
// 红 #a7324a
// 银煤竹 #4a3113
// 千草色 #77ac98
// 薄色 #918597
// 银朱 #aa363d
// 涅色 #412f1f
// 青緑 #007d65
// 薄鼠 #6f6d85
// 赤 #ed1941
// 胡桃色 #845538
// 浅緑 #84bf96
// 鸠羽鼠 #594c6d
// 朱色 #f26522
// 香色 #8e7437
// 緑 #45b97c
// 菖蒲色 #694d9f
// 洗朱 #d2553d
// 国防色 #69541b
// 草色 #225a1f
// 江戸紫 #6f599c
// 红桦色 #b4534b
// 练色 #d5c59f
// 木贼色 #367459
// 紫 #8552a1
// 红绯 #ef4136
// 肉色 #cd9a5b
// 常盘色 #007947
// 灭紫 #543044
// 桦色 #c63c26
// 人色 #cd9a5b
// 緑青色 #40835e
// 葡萄鼠 #63434f
// 铅丹色 #f3715c
// 土色 #b36d41
// 千歳緑 #2b6447
// 古代紫 #7d5886
// 赭 #a7573b
// 小麦色 #df9464
// 深緑 #005831
// 暗红 #401c44
// 绯色 #aa2116
// 琥珀色 #b76f40
// 萌葱色 #006c54
// 葡萄 #472d56
// 丹 #b64533
// 木兰色 #ad8b3d
// 青白橡 #375830
// 茄子绀 #45224a
// 土 #b54334
// 栀子色 #dea32c
// 革色 #274d3d
// 紫绀 #411445
// 焦香 #853f04
// 朽叶 #d1923f
// 麹尘 #375830
// 浓色 #4b2f3d
// 真红 #840228
// 萱草色 #c88400
// 仙斎茶 #27342b
// 二蓝 #402e4c
// 绯 #7a1723
// 黄金 #c37e00
// 若竹色 #65c294
// 菖蒲色 #c77eb5
// 红海老茶 #a03939
// 金色 #c37e00
// 青磁色 #73b9a2
// 牡丹色 #ea66a6
// 浅苏芳 #8a2e3b
// 金茶 #e0861a
// 青竹色 #72baa7
// 赤紫 #f173ac
// 鸢色 #8e453f
// 卵色 #ffce7b
// 铁色 #005344
// 白 #fffffb
// 小豆色 #8f4b4a
// 山吹色 #fcaf17
// 锖鼠 #122e29
// 胡粉色 #fffef9
// 弁柄色 #892f1b
// 黄土色 #ba8448
// 铁御纳戸 #293047
// 生成色 #f6f5ec
// 栗梅 #6b2c25
// 朽叶色 #896a45
// 青緑 #00ae9d
// 灰白 #d9d6c3
// 海老茶 #733a31
// 空五倍子色 #76624c
// 锖浅葱 #508a88
// 石竹色 #d1c7b7
// 深绯 #54211d
// 莺茶 #6d5826
// 水浅葱 #70a19f
// 象牙色 #f2eada
// 赤铜色 #78331e
// 向日葵色 #ffc20e
// 新桥色 #50b7c1
// 乳白色 #d3d7d4
// 赤褐色 #53261f
// 郁金色 #fdb933
// 浅葱色 #00a6ac
// 薄钝 #999d9c
// 金赤 #f15a22
// 砂色 #d3c6a6
// 白群 #78cdd1
// 银鼠 #a1a3a6
// 赤茶 #b4533c
// 芥子色 #c7a252
// 御纳戸色 #008792
// 茶鼠 #9d9087
// 赤锖色 #84331f
// 淡黄 #dec674
// 瓮覗 #94d6da
// 鼠色 #8a8c8e
// 黄丹 #f47a55
// 亜麻色 #b69968
// 水色 #afdfe4
// 薄墨色 #74787c
// 赤橙 #f15a22
// 枯色 #c1a173
// 蓝鼠 #5e7c85
// 利休鼠 #7c8577
// 柿色 #f3704b
// 鸟子色 #dbce8f
// 秘色 #76becc
// 铅色 #72777b
// 肉桂色 #da765b
// 黄色 #ffd400
// 空色 #90d7ec
// 灰色 #77787b
// 桦色 #c85d44
// 蒲公英色 #ffd400
// 青 #009ad6
// 钝色 #4f5555
// 炼瓦色 #ae5039
// 中黄 #ffe600
// 蓝色 #145b7d
// 煤竹色 #6c4c49
// 锖色 #6a3427
// 刈安色 #f0dc70
// 浓蓝 #11264f
// 黒茶 #563624
// 桧皮色 #8f4b38
// 黄檗色 #fcf16e
// 勿忘草色 #7bbfea
// 黒橡 #3e4145
// 栗色 #8e3e1f
// 緑黄色 #decb00
// 露草色 #33a3dc
// 浓鼠 #3c3645
// 黄赤 #f36c21
// 鶸色 #cbc547
// 缥色 #228fbd
// 墨 #464547
// 代赭 #b4532a
// 海松色 #6e6b41
// 浅缥 #2468a2
// 黒 #130c0e
// 骆驼色 #b7704f
// 鶸茶 #596032
// 薄缥 #2570a1
// 黒铁 #281f1d
// 黄茶 #de773f
// 山鸠色 #525f42
// 薄花色 #2585a6
// 蝋色 #2f271d
// 洗柿 #c99979
// 生壁色 #5f5d46
// 绀青 #1b315e
// 紫黒 #1d1626
// AliceBlue, 爱丽丝蓝, #F0F8FF, 240,248,255, 西奥多·罗斯福长女爱丽丝·罗斯福·朗沃斯创造的时尚色
// AntiqueWhite, 古董白, #FAEBD7, 250,235,215
// AquaMarine, 碧绿, #7FFFD4, 127,255,212, 亦作“碧蓝”，但其主色调为绿色
// Azure, 青白色, #F0FFFF, 240,255,255, 本为湛蓝，但在Web色中是一种浅色
// Beige, 米色, #F5F5DC, 245,245,220
// Bisque, 陶坯黄, #FFE4C4, 255,228,196
// Black, 黑色, #000000, 0,0,0
// BlanchedAlmond, 杏仁白, #FFEBCD, 255,235,205
// Blue, 蓝色, #0000FF, 0,0,255
// BlueViolet, 蓝紫色, #8A2BE2, 138,43,226, 即“蓝紫罗兰色”，直译名称过长
// Brown, 褐色, #A52A2A, 165,42,42, 亦作“棕色”
// BurlyWood, 硬木褐, #DEB887, 222,184,135
// CadetBlue, 军服蓝, #5F9EA0, 95,158,160
// ChartReuse, 查特酒绿, #7FFF00, 127,255,0, 一种药酒，诞生于17世纪的法国
// Chocolate, 巧克力色, #D2691E, 210,105,30
// Coral, 珊瑚红, #FF7F50, 255,127,80
// CornFlowerBlue, 矢车菊蓝, #6495ED, 100,149,237, 矢车菊是德国和马其顿的国花
// CornSilk, 玉米穗黄, #FFF8DC, 255,248,220
// Crimson, 绯红 #DC143C, 220,20,60, 较之猩红(Scarlet)蓝色分量要多些
// Cyan/Aqua, 青色, #00FFFF, 0,255,255
// DarkBlue, 深蓝, #00008B, 0,0,139
// DarkCyan, 深青, #008B8B, 0,139,139
// DarkGoldenRod, 深金菊黄, #B8860B, 184,134,11, 见“GoldenRod”
// DarkGray, 暗灰, #A9A9A9, 169,169,169
// DarkGreen, 深绿, #006400, 0,100,0
// DarkKhaki, 深卡其色, #BDB76B, 189,183,107, 见“Khaki”
// DarkMagenta, 深品红, #8B008B, 139,0,139
// DarkOliveGreen, 深橄榄绿, #556B2F, 85,107,47
// DarkOrange, 深橙, #FF8C00, 255,140,0
// DarkOrchid, 深洋兰紫, #9932CC, 153,50,204, 见“Orchid”
// DarkRed, 深红, #8B0000, 139,0,0
// DarkSalmon, 深鲑红, #E9967A, 233,150,122, 见“Salmon”
// DarkSeaGreen, 深海藻绿, #8FBC8F, 143,188,143
// DarkSlateBlue, 深岩蓝, #483D8B, 72,61,139
// DarkSlateGray, 深岩灰 #2F4F4F, 47,79,79
// DarkTurquoise, 深松石绿, #00CED1, 0,206,209, 见“Turquoise”
// DarkViolet, 深紫, #9400d3, 148,0,211, 即“深紫罗兰色”，直译名称过长
// DeepPink, 深粉, #FF1493, 255,20,147
// DeepSkyBlue, 深天蓝, #00BFFF, 0,191,255
// DimGray, 昏灰, #696969, 105,105,105, 是命名颜色中最深的一种灰色
// DodgerBlue, 湖蓝, #1E90FF, 30,144,255, 洛杉矶道奇棒球队队标的颜色
// FireBrick, 火砖红, #B22222, 178,34,34, 耐火砖的颜色比普通红砖要深
// FloralWhite, 花卉白, #FFFAF0, 255,250,240, 不可简称“花白”(后者与斑白同义)
// ForestGreen, 森林绿, #228B22, 34,139,34
// GainsBoro, 庚氏灰, #DCDCDC, 220,220,220, 托马斯·庚斯博罗，18世纪英国画家
// GhostWhite, 幽灵白, #F8F8FF, 248,248,255
// Gold, 金色, #FFD700, 255,215,0
// GoldenRod, 金菊黄, #DAA520, 218,165,32, 一枝黄花，一种菊科花卉
// Gray, 灰色, #808080, 128,128,128
// Green, 调和绿, #008000, 0,128,0, 视觉上的正绿色
// GreenYellow, 黄绿色, #ADFF2F, 173,255,47, 请注意与YellowGreen区分
// HoneyDew, 蜜瓜绿, #F0FFF0, 240,255,240, Honeydew即白兰瓜、蜜瓜
// HotPink, 艳粉, #FF69B4, 255,105,180, 不是暖粉，后者应是偏黄的粉色
// IndianRed, 印度红, #CD5C5C, 205,92,92
// Indigo, 靛蓝, #4B0082, 75,0,130
// Ivory, 象牙白, #FFFFF0, 255,255,240
// Khaki, 卡其色, #F0E68C, 240,230,140, Khaki是一种布料的名称
// Lavender, 薰衣草紫, #E6E6FA, 230,230,250
// LavenderBlush, 薰衣草红, #FFF0F5, 255,240,245, “薰衣草紫红色”的简略
// LawnGreen, 草坪绿, #7CFC00, 124,252,0
// LemonChiffon, 柠檬绸黄, #FFFACD, 255,250,205
// LightBlue, 浅蓝, #ADD8E6, 173,216,230
// LightCoral, 浅珊瑚红, #F08080, 240,128,128
// LightCyan, 浅青, #E0FFFF, 224,255,255
// LightGoldenRodYellow, 浅金菊黄, #FAFAD2, 250,250,210, 见“GoldenRod”
// LightGray, 亮灰, #D3D3D3, 211,211,211
// LightGreen, 浅绿, #90EE90, 144,238,144
// LightPink, 浅粉, #FFB6C1, 255,182,193
// LightSalmon, 浅鲑红, #FFA07A, 255,160,122, 见“Salmon”
// LightSeaGreen, 浅海藻绿, #20B2AA, 32,178,170
// LightSkyBlue, 浅天蓝, #87CEFA, 135,206,250
// LightSlateGray, 浅岩灰, #778899, 119,136,153
// LightSteelBlue, 浅钢青 #0C4DE, 176, 196, 222
// LightYellow, 浅黄, #FFFFE0, 255,255,224
// Lime, 绿色, #00FF00, 0,255,0, RGB颜色空间的正绿色
// LimeGreen, 青柠绿, #32CD32, 50,205,50, Lime是青柠，Lemon才是柠檬
// Linen, 亚麻色, #FAF0E6, 250,240,230
// Magenta/Fuchsia, 洋红, #FF00FF, 255,0,255
// Maroon, 栗色, #800000, 128,0,0
// MediumAquaMarine, 中碧绿, #66CDAA, 102,205,170
// MediumBlue, 中蓝, #0000CD, 0,0,205
// MediumOrchid, 中洋兰紫, #BA55D3, 186,85,211, 见“Orchid”
// MediumPurple, 中紫, #9370D8, 147,112,219
// MediumSeaGreen, 中海藻绿, #3CB371, 60,179,113
// MediumSlateBlue, 中岩蓝, #7B68EE, 123,104,238
// MediumSpringGreen, 中嫩绿, #00FA9A, 0,250,154
// MediumTurquoise, 中松石绿, #48D1CC, 72,209,204, 见“Turquoise”
// MediumVioletRed, 中紫红, #C71585, 199,21,133, “中紫罗兰红”，直译名称过长
// MidNightBlue, 午夜蓝, #191970, 25,25,112
// MintCream, 薄荷乳白, #F5FFFA, 245,255,250
// MistyRose, 雾玫瑰红, #FFE4E1, 255,228,225, 薄雾玫瑰，玫瑰品种之一
// Moccasin, 鹿皮色, #FFE4B5, 255,228,181, Moccasin本意为鹿皮鞋
// NavajoWhite, 土著白, #FFDEAD, 255,222,173, 纳瓦霍(Navajo)是北美印第安人的一支
// Navy, 藏青, #000080, 0,0,128, 美国海军军服的颜色，Navy意为海军
// OldLace, 旧蕾丝白, #FDF5E6, 253,245,230
// Olive, 橄榄色, #808000, 128,128,0
// OliveDrab, 橄榄绿, #6B8E23, 107,142,35
// Orange, 橙色, #FFA500, 255,165,0
// OrangeRed, 橘红, #FF4500, 255,69,0
// Orchid, 洋兰紫, #DA70D6, 218,112,214, 西洋兰花某品种的颜色
// PaleGoldenRod, 白金菊黄, #EEE8AA, 238,232,170, 见“GoldenRod”
// PaleGreen, 白绿色, #98FB98, 152,251,152
// PaleTurquoise, 白松石绿, #AFEEEE, 175,238,238, 见“Turquoise”
// PaleVioletRed, 白紫红, #D87093, 219,112,147, “白紫罗兰红色”的简略
// PapayaWhip, 番木瓜橙, #FFEFD5, 255,239,213, 本意为番木瓜(一种热带水果)汁
// PeachPuff, 粉扑桃色, #FFDAB9, 255,218,185, Peach是桃，Puff是化妆用的粉扑
// Peru, 秘鲁红, #CD853F, 205,133,63, 从秘鲁国树金鸡纳树中提炼的一种颜料
// Pink, 粉色, #FFC0CB, 255,192,203
// Plum, 李紫, #DDA0DD, 221,160,221, Plum意为李子、梅子
// PowderBlue, 粉末蓝, #B0E0E6, 176,224,230, 得名自洗衣店用来漂染衣物的物质大青
// Purple, 紫色, #800080, 128,0,128
// Red, 红色, #FF0000, 255,0,0
// RosyBrown, 玫瑰褐, #BC8F8F, 188,143,143
// RoyalBlue, 品蓝, #4169E1, 65,105,225, 直译为“皇家蓝”
// SaddleBrown, 鞍褐, #8B4513, 139,69,19, 亦作“马鞍棕”，马鞍常见的颜色
// Salmon, 鲑红, #FA8072, 250,128,114, 本意为三文鱼，一种鲑科冷水鱼类
// SandyBrown, 沙褐, #F4A460, 244,164,96
// SeaGreen, 海藻绿, #2E8B57, 46,139,87
// SeaShell, 贝壳白, #FFF5EE, 255,245,238
// Sienna, 土黄赭, #A0522D, 160,82,45
// Silver, 银色, #C0C0C0, 192,192,192
// SkyBlue, 天蓝, #87CEEB, 135,206,235
// SlateBlue, 岩蓝, #6A5ACD, 106,90,205, Slate本意为“板岩”
// SlateGray, 岩灰, #708090, 112,128,144
// Snow, 雪白, #FFFAFA, 255,250,250
// SpringGreen, 春绿, #00FF7F, 0,255,127
// SteelBlue, 钢青, #4682B4, 70,130,180
// Tan, 日晒褐, #D2B48C, 210,180,140
// Teal, 鸭翅绿, #008080, 0,128,128, Teal意为绿翅鸭，一种水鸭
// Thistle, 蓟紫, #D8BFD8, 216,191,216, 菊科蓟属，多刺花卉，旧时苏格兰国花
// Tomato, 番茄红, #FF6347, 255,99,71
// Turquoise, 松石绿, #40E0D0, 64,224,208, 本意为土耳其石即绿松石，一种宝石
// Violet, 紫罗兰色, #EE82EE, 238,130,238
// Wheat, 麦色, #F5DEB3, 245,222,179
// White, 白色, #FFFFFF, 255,255,255
// WhiteSmoke, 烟雾白, #F5F5F5, 245,245,245
// Yellow, 黄色, #FFFF00, 255,255,0
// YellowGreen, 暗黄绿色, #9ACD32, 154,205,50, 注意与GreenYellow区分
// LightPink, 浅粉红, #FFB6C1, 255,182,193
// Pink, 粉红, #FFC0CB, 255,192,203
// Crimson, 猩红, #DC143C, 220,20,60
// LavenderBlush, 脸红的淡紫色, #FFF0F5, 255,240,245
// PaleVioletRed, 苍白的紫罗兰红色, #DB7093, 219,112,147
// HotPink, 热情的粉红, #FF69B4, 255,105,180
// DeepPink, 深粉色, #FF1493, 255,20,147
// MediumVioletRed, 适中的紫罗兰红色, #C71585, 199,21,133
// Orchid, 兰花的紫色, #DA70D6, 218,112,214
// Thistle, 蓟, #D8BFD8, 216,191,216
// plum, 李子, #DDA0DD, 221,160,221
// Violet, 紫罗兰, #EE82EE, 238,130,238
// Magenta, 洋红, #FF00FF, 255,0,255
// Fuchsia, 灯笼海棠(紫红色), #FF00FF, 255,0,255
// DarkMagenta, 深洋红色, #8B008B, 139,0,139
// Purple, 紫色, #800080, 128,0,128
// MediumOrchid, 适中的兰花紫, #BA55D3, 186,85,211
// DarkViolet, 深紫罗兰色, #9400D3, 148,0,211
// DarkOrchid, 深兰花紫, #9932CC, 153,50,204
// Indigo, 靛青, #4B0082, 75,0,130
// BlueViolet, 深紫罗兰的蓝色, #8A2BE2, 138,43,226
// MediumPurple, 适中的紫色, #9370DB, 147,112,219
// MediumSlateBlue, 适中的板岩暗蓝灰色, #7B68EE, 123,104,238
// SlateBlue, 板岩暗蓝灰色, #6A5ACD, 106,90,205
// DarkSlateBlue, 深岩暗蓝灰色, #483D8B, 72,61,139
// Lavender, 熏衣草花的淡紫色, #E6E6FA, 230,230,250
// GhostWhite, 幽灵的白色, #F8F8FF, 248,248,255
// Blue, 纯蓝, #0000FF, 0,0,255
// MediumBlue, 适中的蓝色, #0000CD, 0,0,205
// MidnightBlue, 午夜的蓝色, #191970, 25,25,112
// DarkBlue, 深蓝色, #00008B, 0,0,139
// Navy, 海军蓝, #000080, 0,0,128
// RoyalBlue, 皇军蓝, #4169E1, 65,105,225
// CornflowerBlue, 矢车菊的蓝色, #6495ED, 100,149,237
// LightSteelBlue, 淡钢蓝, #B0C4DE, 176,196,222
// LightSlateGray, 浅石板灰, #778899, 119,136,153
// SlateGray, 石板灰, #708090, 112,128,144
// DodgerBlue, 道奇蓝, #1E90FF, 30,144,255
// AliceBlue, 爱丽丝蓝, #F0F8FF, 240,248,255
// SteelBlue, 钢蓝, #4682B4, 70,130,180
// LightSkyBlue, 淡蓝色, #87CEFA, 135,206,250
// SkyBlue, 天蓝色, #87CEEB, 135,206,235
// DeepSkyBlue, 深天蓝, #00BFFF, 0,191,255
// LightBLue, 淡蓝, #ADD8E6, 173,216,230
// PowDerBlue, 火药蓝, #B0E0E6, 176,224,230
// CadetBlue, 军校蓝, #5F9EA0, 95,158,160
// Azure, 蔚蓝色, #F0FFFF, 240,255,255
// LightCyan, 淡青色, #E1FFFF, 225,255,255
// PaleTurquoise, 苍白的绿宝石, #AFEEEE, 175,238,238
// Cyan, 青色, #00FFFF, 0,255,255
// Aqua, 水绿色, #00FFFF, 0,255,255
// DarkTurquoise, 深绿宝石, #00CED1, 0,206,209
// DarkSlateGray, 深石板灰, #2F4F4F, 47,79,79
// DarkCyan, 深青色, #008B8B, 0,139,139
// Teal, 水鸭色, #008080, 0,128,128
// MediumTurquoise, 适中的绿宝石, #48D1CC, 72,209,204
// LightSeaGreen, 浅海洋绿, #20B2AA, 32,178,170
// Turquoise, 绿宝石, #40E0D0, 64,224,208
// Aquamarine, 绿玉\碧绿色, #7FFFAA, 127,255,170
// MediumAquamarine, 适中的碧绿色, #00FA9A, 0,250,154
// MediumSpringGreen, 适中的春天的绿色, #F5FFFA, 245,255,250
// MintCream, 薄荷奶油, #00FF7F, 0,255,127
// SpringGreen, 春天的绿色, #3CB371, 60,179,113
// SeaGreen, 海洋绿, #2E8B57, 46,139,87
// Honeydew, 蜂蜜, #F0FFF0, 240,255,240
// LightGreen, 淡绿色, #90EE90, 144,238,144
// PaleGreen, 苍白的绿色, #98FB98, 152,251,152
// DarkSeaGreen, 深海洋绿, #8FBC8F, 143,188,143
// LimeGreen, 酸橙绿, #32CD32, 50,205,50
// Lime, 酸橙色, #00FF00, 0,255,0
// ForestGreen, 森林绿, #228B22, 34,139,34
// Green, 纯绿, #008000, 0,128,0
// DarkGreen, 深绿色, #006400, 0,100,0
// Chartreuse, 查特酒绿, #7FFF00, 127,255,0
// LawnGreen, 草坪绿, #7CFC00, 124,252,0
// GreenYellow, 绿黄色, #ADFF2F, 173,255,47
// OliveDrab, 橄榄土褐色, #556B2F, 85,107,47
// Beige, 米色(浅褐色), #6B8E23, 107,142,35
// LightGoldenrodYellow, 浅秋麒麟黄, #FAFAD2, 250,250,210
// Ivory, 象牙, #FFFFF0, 255,255,240
// LightYellow, 浅黄色, #FFFFE0, 255,255,224
// Yellow, 纯黄, #FFFF00, 255,255,0
// Olive, 橄榄, #808000, 128,128,0
// DarkKhaki, 深卡其布, #BDB76B, 189,183,107
// LemonChiffon, 柠檬薄纱, #FFFACD, 255,250,205
// PaleGoldenRod, 灰秋麒麟, #EEE8AA, 238,232,170
// Khaki, 卡其布, #F0E68C, 240,230,140
// Gold, 金, #FFD700, 255,215,0
// CornSilk, 玉米色, #FFF8DC, 255,248,220
// GoldenRod, 秋麒麟, #DAA520, 218,165,32
// FloralWhite, 花的白色, #FFFAF0, 255,250,240
// OldLace, 老饰带, #FDF5E6, 253,245,230
// Wheat, 小麦色, #F5DEB3, 245,222,179
// Moccasin, 鹿皮鞋, #FFE4B5, 255,228,181
// Orange, 橙色, #FFA500, 255,165,0
// PapayaWhip, 番木瓜, #FFEFD5, 255,239,213
// BlanchedAlmond, 漂白的杏仁, #FFEBCD, 255,235,205
// NavajoWhite, Navajo白, #FFDEAD, 255,222,173
// AntiqueWhite, 古代的白色, #FAEBD7, 250,235,215
// Tan, 晒黑, #D2B48C, 210,180,140
// BurlyWood, 结实的树, #DEB887, 222,184,135
// Bisque, (浓汤)乳脂,番茄等, #FFE4C4, 255,228,196
// DarkOrange, 深橙色, #FF8C00, 255,140,0
// Linen, 亚麻布, #FAF0E6, 250,240,230
// Peru, 秘鲁, #CD853F, 205,133,63
// PeachPuff, 桃色, #FFDAB9, 255,218,185
// SandyBrown, 沙棕色, #F4A460, 244,164,96
// Chocolate, 巧克力, #D2691E, 210,105,30
// SaddleBrown, 马鞍棕色, #8B4513, 139,69,19
// SeaShell, 海贝壳, #FFF5EE, 255,245,238
// Sienna, 黄土赭色, #A0522D, 160,82,45
// LightSalmon, 浅鲜肉(鲑鱼)色, #FFA07A, 255,160,122
// Coral, 珊瑚, #FF7F50, 255,127,80
// OrangeRed, 橙红色, #FF4500, 255,69,0
// DarkSalmon, 深鲜肉(鲑鱼)色, #E9967A, 233,150,122
// Tomato, 番茄, #FF6347, 255,99,71
// MistyRose, 薄雾玫瑰, #FFE4E1, 255,228,225
// Salmon, 鲜肉(鲑鱼)色, #FA8072, 250,128,114
// Snow, 雪, #FFFAFA, 255,250,250
// LightCoral, 淡珊瑚色, #F08080, 240,128,128
// RosyBrown, 玫瑰棕色, #BC8F8F, 188,143,143
// IndianRed, 印度红, #CD5C5C, 205,92,92
// Red, 纯红, #FF0000, 255,0,0
// Brown, 棕色, #A52A2A, 165,42,42
// FireBrick, 耐火砖, #B22222, 178,34,34
// DarkRed, 深红色, #8B0000, 139,0,0
// Maroon, 栗色, #800000, 128,0,0
// White, 纯白, #FFFFFF, 255,255,255
// WhiteSmoke, 白烟, #F5F5F5, 245,245,245
// GainsBoro, 庚氏灰, #DCDCDC, 220,220,220
// LightGrey, 浅灰色, #D3D3D3, 211,211,211
// Silver, 银白色, #C0C0C0, 192,192,192
// DarkGray, 深灰色, #A9A9A9, 169,169,169
// Gray, 灰色, #808080, 128,128,128
// DimGray, 暗淡的灰色, #696969, 105,105,105
// Black, 纯黑, #000000, 0,0,0

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* theme-default */\n.widget-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    touch-action: manipulation;\n    cursor: pointer;\n    padding: 3px 15px 3px 15px;\n    font-size: 12px;\n    line-height: 1.5;\n    background: #ffffff none;\n    border: 1px solid #dcdee2;\n    transition: color .2s linear, background-color .2s linear, border .2s linear, box-shadow .2s linear;\n    /*box-shadow: 0 7px 24px 0 rgba(239,57,57,0.25);*/\n    /*transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/\n}\n\n.button-round-corner {\n    border-radius: 4px;\n}\n\n.button:hover {\n    color: #57a3f3;\n    background-color: #fff;\n    border-color: #57a3f3\n}\n\n.button-primary {\n    color: #fff;\n    background-color: #2d8cf0;\n    border-color: #2d8cf0;\n}\n\n.button-dashed {\n    color: #515a6e;\n    background-color: #fff;\n    border: dashed #dcdee2;\n}\n\n.button-text {\n    color: #515a6e;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.button-success {\n    color: #fff;\n    background-color: #19be6b;\n    border-color: #19be6b;\n}\n\n.button-warning {\n    color: #fff;\n    background-color: #f90;\n    border-color: #f90;\n}\n\n.button-error {\n    color: #fff;\n    background-color: #ed4014;\n    border-color: #ed4014;\n}\n\n.button-info {\n    color: #fff;\n    background-color: #2db7f5;\n    border-color: #2db7f5;\n}\n\n.button-outline {\n    color: #007bff;\n    background: transparent none;\n    border-color: #007bff;\n}\n\n.button-circle {\n    /*border-radius: 32px;*/\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    border-radius: 50%;\n}\n\n.button-small {\n    padding: 1px 7px 2px;\n    font-size: 12px;\n    border-radius: 3px;\n}\n\n.button-large {\n    padding: 6px 15px;\n    font-size: 14px;\n    border-radius: 4px;\n}\n\n.button-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.button-group:not(.button-group-vertical)>.button:first-child:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.button-group:not(.button-group-vertical)>.button:last-child:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n";
styleInject(css);

/**
 * Button
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */

class Button {
  /**
   * constructor
   *
   * @param options
   */
  constructor(options) {
    defineProperty(this, "options", void 0);

    // default setting
    this.defaultSetting = {
      type: null,
      text: "Button",
      visible: false,
      width: 0,
      height: 0,
      css: [],
      // parent: ,
      classes: ["button"]
    };
    this.options = options;
    this.build();
  }
  /**
   * build
   */


  build() {
    let button = document.createElement("button");
    let fragment = document.createDocumentFragment(); // Add default class

    button.classList.add("widget-button"); // Add type class

    if (this.options["type"]) {
      button.classList.add("button-" + this.options["type"]);
    } // classes


    let classes = this.options["classes"];

    if (classes) {
      classes.forEach(function (value) {
        button.classList.add(value);
      });
    } // text


    if (this.options["text"]) {
      let text = document.createTextNode(this.options["text"]);
      /**
       * 参考
       * Node.removeChild()
       * Node.replaceChild()
       * Node.appendChild()
       * Node.insertBefore()
       * Node.hasChildNodes()
       */

      fragment.appendChild(text);
    }

    button.appendChild(fragment); // events

    let events = this.options["events"];

    if (events) {
      for (let prop in events) {
        if (events.hasOwnProperty(prop)) {
          button.addEventListener(prop, events[prop]);
        }
      }
    }

    let css = this.options["css"];

    if (css) {
      for (let key in css) {
        if (css.hasOwnProperty(key)) {
          button.style[key] = css[key];
        }
      }
    }

    if (this.options["parent"]) {
      // console.log(this.options["parent"]);
      this.options["parent"].appendChild(button);
    } // document.body.appendChild(button);
    // button.nextElementSibling
    // button.nextSibling
    // button.parentElement
    // button.previousElementSibling
    // button.previousSibling


    return button;
  }

}

var css$1 = ".widget-text-field {\r\n    display: inline-block;\r\n    width: 100%;\r\n    line-height: 1.5;\r\n    padding: 3px 7px;\r\n    font-size: 12px;\r\n    border: 1px solid #dcdee2;\r\n    /*border-radius: 4px;*/\r\n    color: #515a6e;\r\n    background: #fff none;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    cursor: text;\r\n    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;\r\n}\r\n\r\n.widget-text-field::-moz-placeholder {\r\n    color: #c5c8ce;\r\n    opacity: 1\r\n}\r\n\r\n.widget-text-field:-ms-input-placeholder {\r\n    color: #c5c8ce\r\n}\r\n\r\n.widget-text-field::-webkit-input-placeholder {\r\n    color: #c5c8ce\r\n}\r\n\r\n.widget-text-field:focus, .ivu-input:hover {\r\n    border-color: #57a3f3\r\n}\r\n\r\n.widget-text-field:focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 2px #2D8CF0\r\n}\r\n\r\n.widget-text-field[disabled], fieldset[disabled] .text-field {\r\n    background-color: #f3f3f3;\r\n    opacity: 1;\r\n    cursor: not-allowed;\r\n    color: #ccc\r\n}\r\n\r\n.widget-text-field[disabled]:hover, fieldset[disabled] .text-field:hover {\r\n    border-color: #e3e5e8\r\n}\r\n";
styleInject(css$1);

/**
 * TextField
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */

class TextField {
  /**
   * constructor
   *
   * @param options
   */
  constructor(options) {
    defineProperty(this, "options", void 0);

    // default setting
    this.defaultSetting = {
      visible: false,
      width: 0,
      height: 0,
      css: [],
      // parent: ,
      classes: ["widget-text-field"]
    };
    this.options = options;
    this.build();
  }
  /**
   * build
   */


  build() {
    let input = document.createElement("input");
    let type = this.options["type"];

    if (type === "password") {
      input.setAttribute("type", type);
    } else {
      input.setAttribute("type", "text");
    }

    let fragment = document.createDocumentFragment();
    let width = this.options["width"];

    if (width) {
      input.style["width"] = width;
    } // Add default class


    input.classList.add("widget-text-field"); // Add class

    let classes = this.options["classes"];

    if (classes) {
      classes.forEach(function (value) {
        input.classList.add(value);
      });
    }

    input.appendChild(fragment);
    let events = this.options["events"];

    if (events) {
      for (let prop in events) {
        if (events.hasOwnProperty(prop)) {
          input.addEventListener(prop, events[prop]);
        }
      }
    }

    if (this.options["parent"]) {
      // console.log(this.options["parent"]);
      this.options["parent"].appendChild(input);
    }

    let css = this.options["css"];

    if (css) {
      for (let key in css) {
        if (css.hasOwnProperty(key)) {
          input.style[key] = css[key];
        }
      }
    }

    return input;
  }

}

var css$2 = ".widget-table {\n    box-sizing: border-box;\n    position: relative;\n    background-color: #ffffff;\n    border: 1px solid #dddddd;\n    overflow: hidden;\n}\n\n.widget-table .table-title {\n    padding: 8px;\n    font-weight: bold;\n    background-color: #f7f7f7;\n}\n\n.widget-table .table-header {\n    border-top: 1px solid #dddddd;\n    border-bottom: 1px solid #dddddd;\n    overflow: hidden;\n}\n\n.widget-table .table {\n    position: relative;\n    table-layout: fixed;\n    width: 100%;\n    border-collapse: separate;\n    box-sizing: border-box;\n    border-spacing: 0;\n    margin: 0;\n    padding: 0;\n}\n\n.widget-table .table tr th {\n    vertical-align: middle;\n    box-sizing: border-box;\n    min-height: 2rem;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    background-color: #f7f7f7;\n    color: #333333;\n    border-right: 1px solid #dddddd;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.widget-table .table tr th:first-child {\n    border-left: none;\n}\n\n.widget-table .table tr th:last-child {\n    border-right: none;\n}\n\n.widget-table .table tbody tr {\n    height: 33px;\n    color: #333333;\n    font-weight: normal;\n    box-sizing: border-box;\n}\n\n.widget-table .table tr td:first-child {\n    border-left: none;\n}\n\n.widget-table .table tr td:last-child {\n    border-right: none;\n}\n\n.widget-table .table tr td {\n    vertical-align: middle;\n    box-sizing: border-box;\n    border-right: 1px solid #dddddd;\n    border-bottom: 1px solid #e5e5e5;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    padding: 0 0.5rem;\n    word-wrap: break-word;\n    cursor: text;\n    line-height: normal;\n    color: #333333;\n}\n\n.widget-table .table tbody tr:first-child td {\n    border-top: 1px solid #e5e5e5;\n}\n\n.widget-table .table tbody tr:nth-child(2n) td {\n    background-color: #f8f8f9\n}\n\n.widget-table .table tbody tr:hover td {\n    background-color: #ebf7ff\n}\n\n.widget-table .table-content {\n    box-sizing: border-box;\n    position: relative;\n    overflow: auto;\n}\n";
styleInject(css$2);

var css$3 = ".widget-checkbox {\n\n}\n\n.widget-checkbox input[type=\"checkbox\"] {\n    display: none;\n}\n\n.widget-checkbox .checkbox-rectangle {\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    vertical-align: middle;\n    position: relative;\n    border: 1px solid #dcdee2;\n    /*border-radius: 2px;*/\n    background-color: #ffffff;\n}\n\n.widget-checkbox label {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.widget-checkbox label svg path {\n    transition: fill .4s linear;\n}\n\n.widget-checkbox input[type=\"checkbox\"]:checked ~ label .checkbox-rectangle {\n    border-color: #2d8cf0;\n}\n\n.widget-checkbox input[type=\"checkbox\"]:checked ~ label svg path {\n    fill: #2d8cf0;\n}\n\n.widget-checkbox input[type=\"checkbox\"]:disabled {\n    border-color: #dcdee2;\n}\n\n.widget-checkbox input[type=\"checkbox\"]:disabled ~ label svg path {\n    fill: #dcdee2;\n}\n\n.widget-checkbox input[type=\"checkbox\"] ~ label svg path {\n    background: #ffffff;\n}\n";
styleInject(css$3);

/**
 * Checkbox
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */

class Checkbox {
  /**
   * constructor
   *
   * @param options
   */
  constructor(options) {
    defineProperty(this, "options", void 0);

    // default setting
    this.defaultSetting = {};
    this.options = options;
    this.build();
  }
  /**
   * build
   */


  build() {
    let widgetCheckbox = document.createElement("div");
    widgetCheckbox.classList.add("widget-checkbox");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.id = this.options["id"] ? this.options["id"] : null;
    input.name = this.options["name"] ? this.options["name"] : null;

    if (this.options["disabled"] !== undefined) {
      input.setAttribute("disabled", this.options["disabled"]);
    }

    widgetCheckbox.appendChild(input);
    let label = document.createElement("label");
    label.setAttribute("for", input.id);
    widgetCheckbox.appendChild(label);
    let checkboxRectangle = document.createElement("span");
    checkboxRectangle.classList.add("checkbox-rectangle"); // language=HTML

    checkboxRectangle.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"14\" height=\"14\">" + "    <path d=\"M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z\"" + "        fill=\"none\"" + "    />" + "</svg>";
    label.appendChild(checkboxRectangle);
    let textSpan = document.createElement("span");
    textSpan.appendChild(document.createTextNode(" " + (this.options["text"] ? this.options["text"] : "")));
    label.appendChild(textSpan);

    if (this.options["parent"]) {
      // console.log(this.options["parent"]);
      this.options["parent"].appendChild(widgetCheckbox);
    }

    return widgetCheckbox;
  }

}

var css$4 = ".total-elements-text {\n    margin-left: 10px;\n    margin-right: 10px;\n    padding: 0;\n}\n.widget-pagination .widget-button {\n    margin: 0 -1px 0 0;\n}\n";
styleInject(css$4);

/**
 * Pagination
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */

class Pagination {
  /**
   * constructor
   *
   * @param options
   */
  constructor(options) {
    defineProperty(this, "options", void 0);

    // default setting
    this.defaultSetting = {};
    this.options = options;
    this.build();
  }
  /**
   * build
   */


  build() {
    let pagination = document.createElement("div");
    pagination.classList.add("widget-pagination"); // pageable
    // offset
    // totalElements
    // pageSize size
    // totalPages
    // pageNumber number
    // hasNext first true
    // isLast last false
    // numberOfElements 当前实际element数量

    let pageable = this.options["pageable"];

    if (pageable) {
      let totalElements = pageable["totalElements"] ? pageable["totalElements"] : 0;
      let pageSize = pageable["pageSize"] ? pageable["pageSize"] : 0;
      let totalPages = pageSize === 0 ? 1 : Math.ceil(totalElements / pageSize);
      let pageNumber = pageable["pageNumber"] ? pageable["pageNumber"] : 0;
      let isLast = pageNumber === totalPages;
      let numberOfElements = pageable["numberOfElements"] ? pageable["numberOfElements"] : 0;
      let groupSize = pageable["groupSize"] || pageable["groupSize"] < 0 || pageable["groupSize"] > totalPages ? pageable["groupSize"] : 5;
      let totalElementText = document.createElement("span");
      totalElementText.classList.add("total-elements-text");
      totalElementText.appendChild(document.createTextNode("共 " + pageable["totalElements"] + " 条"));
      pagination.appendChild(totalElementText);
      let currentGroupIndex = totalPages > groupSize ? Math.ceil((pageNumber + (groupSize > 1 ? 1 : 0)) / (groupSize > 0 ? groupSize : 1)) : 1; // console.log("groupIndex: %s", currentGroupIndex);

      new Button({
        text: pageable["previousLinkText"] ? pageable["previousLinkText"] : "上一页",
        parent: pagination,
        events: {
          "click": function () {
            alert(pageNumber - 1);
          }
        }
      });

      if (groupSize && currentGroupIndex > 1 && pageNumber !== 1) {
        new Button({
          text: pageNumber,
          parent: pagination,
          events: {
            "click": function () {
              alert(pageNumber);
            }
          }
        });
      }

      let halve = Math.floor((groupSize - 1) / 2);
      let start = currentGroupIndex > 1 ? pageNumber - halve : 1;
      let max = pageNumber + (groupSize - halve - 1);
      let end = currentGroupIndex > 1 ? max > totalPages ? totalPages : max : groupSize;

      if (end - start < groupSize - 1) {
        start = end - groupSize + 1;
      }

      if (pageNumber !== 1 && start > 2) {
        new Button({
          text: "...",
          parent: pagination
        });
      }

      for (; start <= end; start++) {
        if (start === pageNumber) {
          // 当前页
          new Button({
            text: pageNumber,
            css: {
              "backgroundColor": Color.VOLCANO[5],
              "borderColor": Color.VOLCANO[5]
            },
            parent: pagination,
            events: {
              "click": function () {
                alert(pageNumber);
              }
            }
          });
        } else {
          let currentNumber = start;
          new Button({
            text: currentNumber,
            parent: pagination,
            events: {
              "click": function () {
                alert(currentNumber);
              }
            }
          });
        }
      } // 输出输出...与末页


      if (totalPages > groupSize && totalPages > end && !isLast) {
        if (end + 1 < totalPages) {
          new Button({
            text: "...",
            parent: pagination
          });
        }

        if (groupSize !== 0) {
          new Button({
            text: totalPages,
            parent: pagination,
            events: {
              "click": function () {
                alert(totalPages);
              }
            }
          });
        }
      }

      new Button({
        text: pageable["nextLinkText"] ? pageable["nextLinkText"] : "下一页",
        parent: pagination,
        events: {
          "click": function () {
            alert(pageNumber + 1);
          }
        }
      });
    } // N条/页
    // refresh
    // 到第N页 确定


    if (this.options["parent"]) {
      // console.log(this.options["parent"]);
      this.options["parent"].appendChild(pagination);
    }

    return pagination;
  }

}

/**
 * Table
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */

class Table {
  /**
   * constructor
   *
   * @param options
   */
  constructor(options) {
    defineProperty(this, "options", void 0);

    // default setting
    this.defaultSetting = {};
    this.options = options;
    this.build();
  }
  /**
   * build
   */


  build() {
    let scrollWidth = Table.getVerticalScrollBarWidth();
    let tableWrapper = document.createElement("div");
    let width = this.options["width"],
        height = this.options["height"];
    tableWrapper.style.width = width ? width + "px" : null;
    tableWrapper.style.height = height ? height + "px" : null;
    tableWrapper.classList.add("widget-table");
    let tableTitle;

    if (this.options["title"]) {
      tableTitle = document.createElement("div");
      tableTitle.classList.add("table-title");
      let text = document.createTextNode(this.options["title"]);
      tableTitle.appendChild(text);
      tableWrapper.appendChild(tableTitle);
    } // Table Header


    let tableHeaderWrapper = document.createElement("div");
    tableHeaderWrapper.style.width = width ? width + "px" : null;
    tableHeaderWrapper.classList.add("table-header");
    tableWrapper.appendChild(tableHeaderWrapper);
    let tableHeader = document.createElement("table");
    tableHeader.classList.add("table");
    tableHeaderWrapper.appendChild(tableHeader);
    let tableHeaderColgroup = document.createElement("colgroup");
    tableHeader.appendChild(tableHeaderColgroup);
    let tableHeaderThead = document.createElement("thead");
    tableHeader.appendChild(tableHeaderThead); // Table Content

    let tableContentWrapper = document.createElement("div");
    tableContentWrapper.style.width = width ? width + "px" : null;
    tableContentWrapper.classList.add("table-content");
    tableWrapper.appendChild(tableContentWrapper);
    tableContentWrapper.addEventListener("scroll", function (e) {
      /*
      screen.availWidth screen.availHeight screen.width screen.height
      window.innerheight window.innerwidth window.outerwidth window.outerheight screenLeft screenTop screenX screenY
      console.log("offsetLeft: %s, offsetTop: %s", tableContentWrapper.offsetLeft, tableContentWrapper.offsetTop);
      console.log("scrollX: %s, scrollY: %s", window.scrollX, window.scrollY);
      console.log("pageXOffset: %s, pageYOffset: %s", window.pageXOffset, window.pageYOffset);
      console.log("offsetWidth: %s, offsetHeight: %s", tableContentWrapper.offsetWidth, tableContentWrapper.offsetHeight);
      console.log("scrollWidth: %s, scrollHeight: %s", tableContentWrapper.scrollWidth, tableContentWrapper.scrollHeight);
      console.log("clientWidth: %s, clientHeight: %s", tableContentWrapper.clientWidth, tableContentWrapper.clientHeight);
      console.log("scrollLeft: %s, scrollTop: %s", tableContentWrapper.scrollLeft, tableContentWrapper.scrollTop);
      */
      let scrollAllowWidth = tableContentWrapper.scrollWidth - tableContentWrapper.clientWidth;
      let scrollAllowHeight = tableContentWrapper.scrollHeight - tableContentWrapper.clientHeight; // console.log("scrollWidth: %s, scrollHeight: %s", scrollWidth, scrollHeight);

      if (scrollAllowWidth && scrollAllowHeight) {
        if (!tableHeader.querySelector('.table-patch')) {
          // let patchWidth = tableHeader.scrollWidth - scrollWidth;
          // let patchHeight = tableHeader.scrollHeight - scrollHeight;
          // console.log("patch width: %d, patch height: %d", patchWidth, patchHeight);
          // 补丁元素
          let patchElement = document.createElement("th");
          patchElement.classList.add("table-patch");
          patchElement.width = scrollAllowWidth;
          tableHeader.querySelector('tr').appendChild(patchElement);
        }
      } else {
        let tablePatch = tableHeader.querySelector('.table-patch');

        if (tablePatch) {
          tablePatch.remove();
        }
      }

      tableHeaderWrapper.scrollLeft = tableContentWrapper.scrollLeft;
    });
    window.addEventListener('resize', function () {});
    let tableContent = document.createElement("table");
    tableContent.classList.add("table");
    tableContentWrapper.appendChild(tableContent);
    let tableContentColgroup = document.createElement("colgroup");
    tableContent.appendChild(tableContentColgroup);
    let tableContentThead = document.createElement("thead"); // tableContent.appendChild(tableContentThead);

    let tableContentTbody = document.createElement("tbody");
    tableContent.appendChild(tableContentTbody);
    let columns = this.options['columns'];

    if (columns) {
      let tableHeaderTr = document.createElement("tr");
      tableHeaderThead.appendChild(tableHeaderTr);
      let tableContentTr = document.createElement("tr");
      tableContentThead.appendChild(tableContentTr);
      columns.forEach(function (item, index, objs) {
        let tableHeaderCol = document.createElement("col");
        tableHeaderColgroup.appendChild(tableHeaderCol);
        let tableContentCol = document.createElement("col");
        tableContentColgroup.appendChild(tableContentCol);
        let tableHeaderTh = document.createElement("th");
        tableHeaderTh.setAttribute("title", item["text"]);
        let tableContentTh = document.createElement("th");
        tableHeaderTr.appendChild(tableHeaderTh);
        tableContentTr.appendChild(tableContentTh);
        let text = document.createTextNode(item["text"]);
        tableHeaderTh.appendChild(text); // tableContentTh.appendChild(document.createTextNode(""));

        if (item["width"]) {
          tableHeaderCol.setAttribute("width", item["width"]);
          tableContentCol.setAttribute("width", item["width"]); // tableHeaderTh.setAttribute("width", item["width"]);
          // tableContentTh.setAttribute("width", item["width"]);
        }
      }); // let tableHeaderCol = document.createElement("col");
      // // tableHeaderCol.setAttribute("width", 0);
      // tableHeaderColgroup.appendChild(tableHeaderCol);
      //
      // let tableContentCol = document.createElement("col");
      // tableContentColgroup.appendChild(tableContentCol);
      //
      // let tableHeaderTh = document.createElement("th");
      // tableHeaderTr.appendChild(tableHeaderTh);
      //
      // let tableContentTh = document.createElement("th");
      // tableContentTr.appendChild(tableContentTh);
    }

    let data = this.options["data"];

    if (data && data.length > 0) {
      data.forEach(function (item, index, objs) {
        let tableContentTr = document.createElement("tr");
        item.forEach(function (item, index, objs) {
          let tableContentTd = document.createElement("td"); // let width = columns[index]["width"];
          // if(width) {
          //     tableContentTd.setAttribute("width", width);
          // }

          tableContentTr.appendChild(tableContentTd);
          let renderer = columns[index]["renderer"];

          if (renderer) {
            tableContentTd.innerHTML = renderer(item);
          } else {
            let text = document.createTextNode(item);
            tableContentTd.appendChild(text);
          }
        });
        tableContentTbody.appendChild(tableContentTr);
      });
    } // footer


    if (this.options["parent"]) {
      // console.log(this.options["parent"]);
      this.options["parent"].appendChild(tableWrapper);
    } // document.body.appendChild(table);
    // console.debug(tableHeaderWrapper.clientHeight);


    let tableContentHeight = height ? height - (tableTitle ? tableTitle.clientHeight : 0) : null;
    tableContentHeight = tableContentHeight ? tableContentHeight - tableHeaderWrapper.clientHeight : null;
    tableContentWrapper.style.height = tableContentHeight + "px";
    return tableWrapper;
  }
  /**
   * 获取滚动条本身的宽度
   *
   * @returns {number}
   */


  static getVerticalScrollBarWidth() {
    let noScroll,
        scroll,
        scrollView = document.createElement("div"); // scrollView.style.cssText = "position:absolute;top:-1000px;width:100px;height:100px; overflow:hidden;";

    scrollView.style.position = "absolute";
    scrollView.style.top = "-1000px";
    scrollView.style.width = "100px";
    scrollView.style.height = "100px";
    scrollView.style.overflow = "hidden";
    noScroll = document.body.appendChild(scrollView).clientWidth;
    scrollView.style.overflowY = "scroll";
    scroll = scrollView.clientWidth;
    document.body.removeChild(scrollView);
    return noScroll - scroll;
  }

}

var css$5 = ".border-layout {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-flex: 1;\n    -ms-flex: auto;\n    flex: auto;\n    background: #f5f7f9;\n    height: 100%;\n}\n\n.border-layout .north, .border-layout .south {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n}\n\n.border-layout .north, .border-layout .south {\n    background: #7cbce9;\n    /*background: #515a6e;*/\n    color: #fff;\n}\n\n.border-layout .has-side {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    height: 100%;\n}\n\n.border-layout .west, .border-layout .east {\n    position: relative;\n    height: 100%;\n    /*width: 200px;*/\n    /*min-width: 200px;*/\n    /*max-width: 200px;*/\n    /*flex: 0 0 200px;*/\n    background: #3a9fe8;\n    color: #fff;\n    transition: all .2s ease-in-out;\n}\n\n.border-layout .has-side > .center {\n    overflow-x: hidden;\n}\n\n.border-layout .center {\n    -webkit-box-flex: 1;\n    -ms-flex: auto;\n    flex: auto;\n    background: #8ee8e0;\n}\n";
styleInject(css$5);

/**
 * BorderLayout
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */

class BorderLayout {
  /**
   * constructor
   *
   * @param options
   */
  constructor(options) {
    defineProperty(this, "options", void 0);

    // default setting
    this.defaultSetting = {};
    this.options = options;
    this.build();
  }
  /**
   * build
   */


  build() {
    let borderLayout = document.createElement("div");
    borderLayout.setAttribute("layout", "border-layout");
    let width = this.options["width"],
        height = this.options["height"];
    borderLayout.style.width = width ? width + "px" : null;
    borderLayout.style.height = height ? height + "px" : null;
    borderLayout.classList.add("border-layout");
    let panels = {};
    let items = this.options["items"];
    items.forEach(function (item, index, objs) {
      let panel = document.createElement("div");
      panel.setAttribute("region", item["region"]);
      panel.setAttribute("title", item["title"]); // let text = document.createTextNode(item["title"]);
      // panel.appendChild(text);

      let width = item["width"],
          height = item["height"]; // console.log("width: %d, height: %d", width, height);

      panel.style.width = width ? width + "px" : null;
      panel.style.height = height ? height + "px" : null; // console.log("panel width: %d, panel height: %d", panel.style.width, panel.style.height);

      panels[item["region"]] = panel;
    }); // CENTER、EAST、WEST、NORTH、SOUTH

    let northPanel = panels["north"],
        southPanel = panels["south"];
    let westPanel = panels["west"],
        centerPanel = panels["center"],
        eastPanel = panels["east"];

    if (northPanel) {
      northPanel.classList.add("north");
      borderLayout.appendChild(northPanel);
    }

    if (westPanel || eastPanel) {
      let mainPanel = document.createElement("div");
      mainPanel.classList.add("border-layout");
      mainPanel.classList.add("has-side");
      borderLayout.appendChild(mainPanel);

      if (westPanel) {
        westPanel.classList.add("west");
        mainPanel.appendChild(westPanel);
      }

      if (centerPanel) {
        centerPanel.classList.add("center");
        mainPanel.appendChild(centerPanel);
      }

      if (eastPanel) {
        eastPanel.classList.add("east");
        mainPanel.appendChild(eastPanel);
      }
    } else {
      if (centerPanel) {
        centerPanel.classList.add("center");
        borderLayout.appendChild(centerPanel);
      }
    }

    if (southPanel) {
      southPanel.classList.add("south");
      borderLayout.appendChild(southPanel);
    }

    if (this.options["parent"]) {
      // console.log(this.options["parent"]);
      this.options["parent"].appendChild(borderLayout);
    }

    return borderLayout;
  }

}

var css$6 = ".widget-radio input[type=\"radio\"] {\n    display: none;\n}\n\n.widget-radio label .radio-circle {\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    vertical-align: middle;\n    position: relative;\n    border: 1px solid #dcdee2;\n    border-radius: 8px;\n    /*background: #ffffff url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDE1MmMtNTcuMiAwLTEwNCA0Ni44LTEwNCAxMDRzNDYuOCAxMDQgMTA0IDEwNCAxMDQtNDYuOCAxMDQtMTA0LTQ2LjgtMTA0LTEwNC0xMDR6bTAtMTA0QzE0MS42MDEgNDggNDggMTQxLjYwMSA0OCAyNTZzOTMuNjAxIDIwOCAyMDggMjA4IDIwOC05My42MDEgMjA4LTIwOFMzNzAuMzk5IDQ4IDI1NiA0OHptMCAzNzQuNGMtOTEuNTE4IDAtMTY2LjQtNzQuODgzLTE2Ni40LTE2Ni40UzE2NC40ODIgODkuNiAyNTYgODkuNiA0MjIuNCAxNjQuNDgyIDQyMi40IDI1NiAzNDcuNTE4IDQyMi40IDI1NiA0MjIuNHoiLz48L3N2Zz4=\");*/\n    /*background: #ffffff url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z' fill='none' /></svg>\");*/\n    /*background: transparent url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z' fill='#2d8cf0' /></svg>\");*/\n}\n\n.widget-radio label {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.widget-radio label svg {\n    vertical-align: text-bottom;\n    display: inline-block;\n    /*vertical-align: text-top;*/\n    fill: currentColor;\n}\n\n.widget-radio label svg {\n    visibility: hidden;\n}\n\n.widget-radio label svg path {\n    transition: fill .4s linear;\n}\n\n.widget-radio input[type=\"radio\"]:checked {\n    border-color: #2d8cf0;\n}\n\n.widget-radio input[type=\"radio\"]:checked ~ label .radio-circle,\n.widget-radio input[type=\"radio\"]:disabled ~ label .radio-circle {\n    width: 16px;\n    height: 16px;\n    border: 0;\n}\n\n.widget-radio input[type=\"radio\"]:checked ~ label svg,\n.widget-radio input[type=\"radio\"]:disabled ~ label svg {\n    visibility: visible;\n}\n\n.widget-radio input[type=\"radio\"]:checked ~ label svg path {\n    fill: #2d8cf0;\n}\n\n.widget-radio input[type=\"radio\"]:disabled {\n    border-color: #dcdee2;\n}\n\n.widget-radio input[type=\"radio\"]:disabled ~ label svg path {\n    fill: #dcdee2;\n}\n\n.widget-radio input[type=\"radio\"] ~ label svg path {\n    background: #ffffff;\n    fill: #ffffff;\n}\n";
styleInject(css$6);

/**
 * Radio
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */

class Radio {
  /**
   * constructor
   *
   * @param options
   */
  constructor(options) {
    defineProperty(this, "options", void 0);

    // default setting
    this.defaultSetting = {};
    this.options = options;
    this.build();
  }
  /**
   * build
   */


  build() {
    let widgetRadio = document.createElement("div");
    widgetRadio.classList.add("widget-radio");
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.id = this.options["id"] ? this.options["id"] : null;
    input.name = this.options["name"] ? this.options["name"] : null;

    if (this.options["disabled"] != undefined) {
      input.setAttribute("disabled", this.options["disabled"]);
    }

    widgetRadio.appendChild(input);
    let label = document.createElement("label");
    label.setAttribute("for", input.id);
    widgetRadio.appendChild(label);
    let radioCircle = document.createElement("span");
    radioCircle.classList.add("radio-circle");
    radioCircle.innerHTML = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"" + " viewBox=\"0 0 16 16\">" + "<path fill=\"#040000\" d=\"M8,4C5.8,4,4,5.8,4,8s1.8,4,4,4s4-1.8,4-4S10.2,4,8,4z M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8" + "c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.4c-3.52,0-6.4-2.881-6.4-6.4c0-3.52,2.88-6.4,6.4-6.4c3.52,0,6.4,2.88,6.4,6.4" + "C14.4,11.52,11.52,14.4,8,14.4z\"/>" + "</svg>";
    label.appendChild(radioCircle);
    let textSpan = document.createElement("span");
    textSpan.appendChild(document.createTextNode(" " + (this.options["text"] ? this.options["text"] : "")));
    label.appendChild(textSpan);

    if (this.options["parent"]) {
      // console.log(this.options["parent"]);
      this.options["parent"].appendChild(widgetRadio);
    }

    return widgetRadio;
  }

}

/*
 * Copyright (c) 2018, Linkqu and/or its affiliates. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 *   - Neither the name of Linkqu or the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Modal
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Modal {
  /**
   * constructor
   *
   * @param options
   */
  constructor(options) {
    defineProperty(this, "options", void 0);

    // Horizontal Vertical
    // default setting
    this.defaultSetting = {};
    this.options = options;
    this.build();
  }
  /**
   * build
   */


  build() {
    let modal = document.createElement("div");
    modal.classList.add("widget-modal");
    let close = document.createElement("span");
    close.classList.add("modal-close");
    modal.appendChild(close);
    let title = document.createElement("div");
    title.classList.add("modal-title");
    modal.appendChild(title);
    let content = document.createElement("div");
    content.classList.add("modal-content");
    modal.appendChild(content);

    if (this.options["parent"]) {
      // console.log(this.options["parent"]);
      this.options["parent"].appendChild(modal);
    }

    return modal;
  }

}

/*
 * Copyright (c) 2018, Linkqu and/or its affiliates. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 *   - Neither the name of Linkqu or the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
// console.log(`running version ${pkg.version}`);

let button = new Button({
  type: "primary",
  text: "Button",
  // classes: ["button"],
  css: {
    "backgroundColor": Color.VOLCANO[5],
    "borderColor": Color.VOLCANO[5]
  },
  parent: document.body,
  events: {
    "click": function () {
      alert("hello!");
    }
  }
});
let textField = new TextField({
  type: "password",
  width: "200px",
  // classes: ["text-field"],
  css: {
    "color": Color.VOLCANO[5]
  },
  // renderTo
  parent: document.body
});
let table = new Table({
  width: 800,
  height: 200,
  // classes: [""],
  // css: {
  //     "color": Color.RED[9]
  // },
  parent: document.body,
  title: "Employee Information Table",
  columns: [{
    index: "employee",
    text: "Employee Name",
    width: 120,
    sortable: false,
    renderer: function (value) {
      // language=HTML
      return `<a href='index.html'>Hello ${value}!</a>`;
    }
  }, {
    index: "sex",
    text: "Sex",
    width: 75,
    sortable: false,
    renderer: undefined
  }, {
    index: "age",
    text: "Age",
    width: 75,
    sortable: false,
    renderer: undefined
  }, {
    index: "mobile",
    text: "Mobile",
    width: 120,
    sortable: false,
    renderer: undefined
  }, {
    index: "email",
    text: "Email",
    width: 120,
    sortable: false,
    renderer: undefined
  }, {
    index: "birthday",
    text: "Birthday Date",
    width: 400,
    sortable: false,
    renderer: undefined
  }],
  data: [["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"], ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"], ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"], ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"], ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"], ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"], ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"], ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"], ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"]]
});
let checkbox = new Checkbox({
  id: "c1",
  text: "Checkbox",
  parent: document.body
});
new Checkbox({
  id: "c2",
  disabled: true,
  text: "Checkbox",
  parent: document.body
});
let radio = new Radio({
  id: "t1",
  name: "type",
  text: "Radio",
  parent: document.body
});
new Radio({
  id: "t2",
  name: "type",
  text: "Radio",
  parent: document.body
});
new Radio({
  id: "t3",
  disabled: true,
  name: "test",
  text: "Radio",
  parent: document.body
});
let borderLayout = new BorderLayout({
  parent: document.body,
  width: 1024,
  height: 300,
  items: [{
    title: "North Panel",
    region: "north",
    height: 50
  }, {
    title: "West Panel",
    region: "west",
    width: 184 // split: true

  }, {
    title: "South Panel",
    region: "south",
    height: 50
  }, {
    title: "Center Panel",
    region: "center"
  }, {
    title: "East Panel",
    region: "east",
    width: 184 // split: true,

  }]
});
let pagination = new Pagination({
  pageable: {
    totalElements: 220,
    pageSize: 20,
    // java: pageSize == 0 ? 1 : (int) Math.ceil((double) totalElements / (double) pageSize);
    // javascript: (pageSize === 0) ? 1 : Math.ceil(totalElements / pageSize)
    // totalPages: 11,
    pageNumber: 5,
    // hasNext: true,
    // isLast: false,
    numberOfElements: 20,
    // [10, 20, 30, 40, 50]
    previousLinkText: "Previous Page",
    nextLinkText: "Next Page"
  },
  parent: document.body
});
new Modal({
  parent: document.body
});
