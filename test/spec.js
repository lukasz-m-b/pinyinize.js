var expect = require('chai').expect;
var { tonify } = require('../index');
var { describe, it } = require('mocha');

describe('tonify', function() {
  describe('number tone marks', function() {
    it('should convert a1 a2 a3 a4 a', function() {
      expect(tonify('a1 a2 a3 a4 a')).to.equal('ā á ǎ à a');
    });

    it('should convert ma1 ma2 ma3 ma4 ma', function() {
      expect(tonify('ma1 ma2 ma3 ma4 ma')).to.equal('mā má mǎ mà ma');
    });

    it('should convert ai1 ai2 ai3 ai4 ai', function() {
      expect(tonify('ai1 ai2 ai3 ai4 ai')).to.equal('āi ái ǎi ài ai');
    });

    it('should convert kai1 kai2 kai3 kai4 kai', function() {
      expect(tonify('kai1 kai2 kai3 kai4 kai')).to.equal('kāi kái kǎi kài kai');
    });

    it('should convert an1 an2 an3 an4 an', function() {
      expect(tonify('an1 an2 an3 an4 an')).to.equal('ān án ǎn àn an');
    });

    it('should convert fan1 fan2 fan3 fan4 fan', function() {
      expect(tonify('fan1 fan2 fan3 fan4 fan')).to.equal('fān fán fǎn fàn fan');
    });

    it('should convert ang1 ang2 ang3 ang4 ang', function() {
      expect(tonify('ang1 ang2 ang3 ang4 ang')).to.equal('āng áng ǎng àng ang');
    });

    it('should convert tang1 tang2 tang3 tang4 tang', function() {
      expect(tonify('tang1 tang2 tang3 tang4 tang')).to.equal('tāng táng tǎng tàng tang');
    });

    it('should convert ao1 ao2 ao3 ao4 ao', function() {
      expect(tonify('ao1 ao2 ao3 ao4 ao')).to.equal('āo áo ǎo ào ao');
    });

    it('should convert mao1 mao2 mao3 mao4 mao', function() {
      expect(tonify('mao1 mao2 mao3 mao4 mao')).to.equal('māo máo mǎo mào mao');
    });

    it('should convert e1 e2 e3 e4 e', function() {
      expect(tonify('e1 e2 e3 e4 e')).to.equal('ē é ě è e');
    });

    it('should convert ke1 ke2 ke3 ke4 ke', function() {
      expect(tonify('ke1 ke2 ke3 ke4 ke')).to.equal('kē ké kě kè ke');
    });

    it('should convert ei1 ei2 ei3 ei4 ei', function() {
      expect(tonify('ei1 ei2 ei3 ei4 ei')).to.equal('ēi éi ěi èi ei');
    });

    it('should convert wei1 wei2 wei3 wei4 wei', function() {
      expect(tonify('wei1 wei2 wei3 wei4 wei')).to.equal('wēi wéi wěi wèi wei');
    });

    it('should convert en1 en2 en3 en4 en', function() {
      expect(tonify('en1 en2 en3 en4 en')).to.equal('ēn én ěn èn en');
    });

    it('should convert shen1 shen2 shen3 shen4 shen', function() {
      expect(tonify('shen1 shen2 shen3 shen4 shen')).to.equal('shēn shén shěn shèn shen');
    });

    it('should convert eng1 eng2 eng3 eng4 eng', function() {
      expect(tonify('eng1 eng2 eng3 eng4 eng')).to.equal('ēng éng ěng èng eng');
    });

    it('should convert geng1 geng2 geng3 geng4 geng', function() {
      expect(tonify('geng1 geng2 geng3 geng4 geng')).to.equal('gēng géng gěng gèng geng');
    });

    it('should convert er1 er2 er3 er4 er', function() {
      expect(tonify('er1 er2 er3 er4 er')).to.equal('ēr ér ěr èr er');
    });

    it('should convert yi1 yi2 yi3 yi4 yi', function() {
      expect(tonify('yi1 yi2 yi3 yi4 yi')).to.equal('yī yí yǐ yì yi');
    });

    it('should convert xia1 xia2 xia3 xia4 xia', function() {
      expect(tonify('xia1 xia2 xia3 xia4 xia')).to.equal('xiā xiá xiǎ xià xia');
    });

    it('should convert jian1 jian2 jian3 jian4 jian', function() {
      expect(tonify('jian1 jian2 jian3 jian4 jian')).to.equal('jiān jián jiǎn jiàn jian');
    });

    it('should convert dianr1 dianr2 dianr3 dianr4 dianr', function() {
      expect(tonify('dianr1 dianr2 dianr3 dianr4 dianr')).to.equal('diānr diánr diǎnr diànr dianr');
    });

    it('should convert niang1 niang2 niang3 niang4 niang', function() {
      expect(tonify('niang1 niang2 niang3 niang4 niang')).to.equal('niāng niáng niǎng niàng niang');
    });

    it('should convert biao1 biao2 biao3 biao4 biao', function() {
      expect(tonify('biao1 biao2 biao3 biao4 biao')).to.equal('biāo biáo biǎo biào biao');
    });

    it('should convert tie1 tie2 tie3 tie4 tie', function() {
      expect(tonify('tie1 tie2 tie3 tie4 tie')).to.equal('tiē tié tiě tiè tie');
    });

    it('should convert pin1 pin2 pin3 pin4 pin', function() {
      expect(tonify('pin1 pin2 pin3 pin4 pin')).to.equal('pīn pín pǐn pìn pin');
    });

    it('should convert ling1 ling2 ling3 ling4 ling', function() {
      expect(tonify('ling1 ling2 ling3 ling4 ling')).to.equal('līng líng lǐng lìng ling');
    });

    it('should convert xiong1 xiong2 xiong3 xiong4 xiong', function() {
      expect(tonify('xiong1 xiong2 xiong3 xiong4 xiong')).to.equal('xiōng xióng xiǒng xiòng xiong');
    });

    it('should convert qiu1 qiu2 qiu3 qiu4 qiu', function() {
      expect(tonify('qiu1 qiu2 qiu3 qiu4 qiu')).to.equal('qiū qiú qiǔ qiù qiu');
    });

    it('should convert o1 o2 o3 o4 o', function() {
      expect(tonify('o1 o2 o3 o4 o')).to.equal('ō ó ǒ ò o');
    });

    it('should convert mo1 mo2 mo3 mo4 mo', function() {
      expect(tonify('mo1 mo2 mo3 mo4 mo')).to.equal('mō mó mǒ mò mo');
    });

    it('should convert rong1 rong2 rong3 rong4 rong', function() {
      expect(tonify('rong1 rong2 rong3 rong4 rong')).to.equal('rōng róng rǒng ròng rong');
    });

    it('should convert ou1 ou2 ou3 ou4 ou', function() {
      expect(tonify('ou1 ou2 ou3 ou4 ou')).to.equal('ōu óu ǒu òu ou');
    });

    it('should convert chou1 chou2 chou3 chou4 chou', function() {
      expect(tonify('chou1 chou2 chou3 chou4 chou')).to.equal('chōu chóu chǒu chòu chou');
    });

    it('should convert lu1 lu2 lu3 lu4 lu', function() {
      expect(tonify('lu1 lu2 lu3 lu4 lu')).to.equal('lū lú lǔ lù lu');
    });

    it('should convert gua1 gua2 gua3 gua4 gua', function() {
      expect(tonify('gua1 gua2 gua3 gua4 gua')).to.equal('guā guá guǎ guà gua');
    });

    it('should convert shuai1 shuai2 shuai3 shuai4 shuai', function() {
      expect(tonify('shuai1 shuai2 shuai3 shuai4 shuai')).to.equal('shuāi shuái shuǎi shuài shuai');
    });

    it('should convert shuai1 shuai2 shuai3 shuai4 shuai', function() {
      expect(tonify('shuai1 shuai2 shuai3 shuai4 shuai')).to.equal('shuāi shuái shuǎi shuài shuai');
    });

    it('should convert suan1 suan2 suan3 suan4 suan', function() {
      expect(tonify('suan1 suan2 suan3 suan4 suan')).to.equal('suān suán suǎn suàn suan');
    });

    it('should convert huang1 huang2 huang3 huang4 huang', function() {
      expect(tonify('huang1 huang2 huang3 huang4 huang')).to.equal('huāng huáng huǎng huàng huang');
    });

    it('should convert xue1 xue2 xue3 xue4 xue', function() {
      expect(tonify('xue1 xue2 xue3 xue4 xue')).to.equal('xuē xué xuě xuè xue');
    });

    it('should convert lue1 lue2 lue3 lue4 lue', function() {
      expect(tonify('lue1 lue2 lue3 lue4 lue')).to.equal('lüē lüé lüě lüè lüe');
    });

    it('should convert nue1 nue2 nue3 nue4 nue', function() {
      expect(tonify('nue1 nue2 nue3 nue4 nue')).to.equal('nüē nüé nüě nüè nüe');
    });

    it('should convert dui1 dui2 dui3 dui4 dui', function() {
      expect(tonify('dui1 dui2 dui3 dui4 dui')).to.equal('duī duí duǐ duì dui');
    });

    it('should convert zhun1 zhun2 zhun3 zhun4 zhun', function() {
      expect(tonify('zhun1 zhun2 zhun3 zhun4 zhun')).to.equal('zhūn zhún zhǔn zhùn zhun');
    });

    it('should convert luo1 luo2 luo3 luo4 luo', function() {
      expect(tonify('luo1 luo2 luo3 luo4 luo')).to.equal('luō luó luǒ luò luo');
    });

    it('should convert lv1 lv2 lv3 lv4 lv', function() {
      expect(tonify('lv1 lv2 lv3 lv4 lv')).to.equal('lǖ lǘ lǚ lǜ lü');
    });

    it('should convert nü1 nü2 nü3 nü4 nü', function() {
      expect(tonify('nü1 nü2 nü3 nü4 nü')).to.equal('nǖ nǘ nǚ nǜ nü');
    });

    it('should not convert non-pinyin words', function() {
      expect(tonify('foo1 dian2 3')).to.equal('foo1 dián 3');
    });

    describe('whitespace and punctuation handling', function() {
      it('line end', function() {
        expect(tonify('luo1 luo2 luo3\nluo4')).to.equal('luō luó luǒ\nluò');
      });

      it('multiple line ends', function() {
        expect(tonify('luo1 luo2 luo3\n\nluo4')).to.equal('luō luó luǒ\n\nluò');
      });

      it('multiple spaces', function() {
        expect(tonify('luo1 luo2 luo3   luo4')).to.equal('luō luó luǒ   luò');
      });

      it('tabs', function() {
        expect(tonify('luo1 luo2 luo3\t\tluo4')).to.equal('luō luó luǒ\t\tluò');
      });

      it('punctuation', function() {
        expect(tonify('luo1. luo2, luo3! luo4? ma1: ma2;')).to.equal('luō. luó, luǒ! luò? mā: má;');
      });
    });
  });

  describe('slash tone marks', function() {
    it('should convert slash tone marks', function() {
      expect(tonify('ma-- ma/ ma\\/ ma\\, ma1 ma2 ma3 ma4 ma')).to.equal('mā má mǎ mà, mā má mǎ mà ma');
    });
  });
});
