import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('utils.getGasPrices', () => {
  it('returns correctly with no options', async () => {
    await withPolly(
      { recordingName: 'query-getGasPrices-base', recordIfMissing: true },
      async () => {
        const data = await api.utils.getGasPrices({});
        expect(data).toStrictEqual({
          gasPrices: [
            {
              blockNumber: 17343892,
              total: 6031147351865,
              average: 43389549293.992805,
              ceiling: 420418266710,
              floor: 36924268157,
              median: 37924268157,
            },
            {
              blockNumber: 17343891,
              total: 7011316892392,
              average: 40064667956.52571,
              ceiling: 435714285715,
              floor: 34915727231,
              median: 35504117435,
            },
            {
              blockNumber: 17343890,
              total: 5301668348558,
              average: 37869059632.557144,
              ceiling: 61603014824,
              floor: 35410117434,
              median: 36410117434,
            },
            {
              blockNumber: 17343889,
              total: 6979764432739,
              average: 38140789249.93989,
              ceiling: 64859033432,
              floor: 34702710773,
              median: 35702710773,
            },
            {
              blockNumber: 17343888,
              total: 6865726069874,
              average: 42121018833.582825,
              ceiling: 819391950912,
              floor: 35202184298,
              median: 35802184298,
            },
            {
              blockNumber: 17343887,
              total: 4545057035633,
              average: 38517432505.36441,
              ceiling: 67438796350,
              floor: 35938796350,
              median: 36938796350,
            },
            {
              blockNumber: 17343886,
              total: 5696433917785,
              average: 40115731815.38732,
              ceiling: 135603014824,
              floor: 35603014824,
              median: 36603014824,
            },
            {
              blockNumber: 17343885,
              total: 6378915155421,
              average: 39376019477.90741,
              ceiling: 235471772518,
              floor: 35471772518,
              median: 36000000000,
            },
            {
              blockNumber: 17343884,
              total: 5989647862131,
              average: 38642889433.103226,
              ceiling: 66447924632,
              floor: 35447924632,
              median: 36447924632,
            },
            {
              blockNumber: 17343883,
              total: 6437959650069,
              average: 42078167647.5098,
              ceiling: 335700599492,
              floor: 35700599492,
              median: 36700599492,
            },
            {
              blockNumber: 17343882,
              total: 5966088927979,
              average: 40585638965.84354,
              ceiling: 182133095620,
              floor: 36645372154,
              median: 37645372154,
            },
            {
              blockNumber: 17343881,
              total: 5614694261701,
              average: 41284516630.15441,
              ceiling: 135272825192,
              floor: 37901873589,
              median: 38901873589,
            },
            {
              blockNumber: 17343880,
              total: 5161605402452,
              average: 41292843219.616,
              ceiling: 249742661006,
              floor: 36742661006,
              median: 38742661006,
            },
            {
              blockNumber: 17343879,
              total: 7155927394889,
              average: 40658678380.05114,
              ceiling: 333616312712,
              floor: 35390299740,
              median: 36390299740,
            },
            {
              blockNumber: 17343878,
              total: 4657459199395,
              average: 39469993215.21186,
              ceiling: 63828385835,
              floor: 37146622382,
              median: 38146622382,
            },
            {
              blockNumber: 17343877,
              total: 6739073230949,
              average: 40596826692.46385,
              ceiling: 385257703962,
              floor: 36213199404,
              median: 36929390324,
            },
            {
              blockNumber: 17343876,
              total: 6364463387592,
              average: 43592214983.50685,
              ceiling: 657880484366,
              floor: 37045437190,
              median: 38045437190,
            },
            {
              blockNumber: 17343875,
              total: 6165730678048,
              average: 41660342419.24324,
              ceiling: 88850396116,
              floor: 37418815224,
              median: 39168815224,
            },
            {
              blockNumber: 17343874,
              total: 8284003572623,
              average: 45021758546.86413,
              ceiling: 768328760388,
              floor: 36267618160,
              median: 37340667691,
            },
            {
              blockNumber: 17343873,
              total: 5473027768196,
              average: 44496160717.04065,
              ceiling: 337828385835,
              floor: 37828385835,
              median: 39328385835,
            },
            {
              blockNumber: 17343872,
              total: 6572186957304,
              average: 40821037001.8882,
              ceiling: 199985717441,
              floor: 37246667690,
              median: 37972709759,
            },
            {
              blockNumber: 17343871,
              total: 8496922766955,
              average: 60261863595.42553,
              ceiling: 2772400184259,
              floor: 37191620992,
              median: 38191620992,
            },
            {
              blockNumber: 17343870,
              total: 9653508336679,
              average: 39890530316.85537,
              ceiling: 69322248986,
              floor: 37197687314,
              median: 39197687314,
            },
            {
              blockNumber: 17343869,
              total: 24009161712335,
              average: 36104002574.93985,
              ceiling: 171914807567,
              floor: 33322555915,
              median: 35322555915,
            },
            {
              blockNumber: 17343868,
              total: 5247373411201,
              average: 38869432675.562965,
              ceiling: 289567124492,
              floor: 34567124492,
              median: 35567124492,
            },
            {
              blockNumber: 17343867,
              total: 5309352717615,
              average: 40222369072.84091,
              ceiling: 152380952380,
              floor: 35504937410,
              median: 36504937410,
            },
            {
              blockNumber: 17343866,
              total: 7007811926944,
              average: 38932288483.022224,
              ceiling: 363155409251,
              floor: 33807545090,
              median: 34307545090,
            },
            {
              blockNumber: 17343865,
              total: 4758839036062,
              average: 40329144373.40678,
              ceiling: 196006815107,
              floor: 34006815107,
              median: 34617815113,
            },
            {
              blockNumber: 17343864,
              total: 6578216781366,
              average: 41634283426.36709,
              ceiling: 383593730738,
              floor: 35016625125,
              median: 36266625125,
            },
            {
              blockNumber: 17343863,
              total: 7922198876208,
              average: 43528565253.89011,
              ceiling: 855968735762,
              floor: 33374643029,
              median: 34136456674.5,
            },
            {
              blockNumber: 17343862,
              total: 6205387395479,
              average: 44009839684.24823,
              ceiling: 778475301980,
              floor: 34396370297,
              median: 35396370297,
            },
            {
              blockNumber: 17343861,
              total: 5957423690781,
              average: 40804271854.66438,
              ceiling: 262778678381,
              floor: 34959925164,
              median: 35959925164,
            },
            {
              blockNumber: 17343860,
              total: 6127093148044,
              average: 47131485754.184616,
              ceiling: 898554494567,
              floor: 36128883623,
              median: 36628883623,
            },
            {
              blockNumber: 17343859,
              total: 7047148608731,
              average: 41453815345.47647,
              ceiling: 197901322195,
              floor: 35901322195,
              median: 36901322195,
            },
            {
              blockNumber: 17343858,
              total: 8380063972786,
              average: 37079929083.12389,
              ceiling: 120000000000,
              floor: 34488492756,
              median: 35488492755,
            },
            {
              blockNumber: 17343857,
              total: 4854410168457,
              average: 37056566171.42748,
              ceiling: 65267660060,
              floor: 34035453079,
              median: 35035453079,
            },
            {
              blockNumber: 17343856,
              total: 6553464984039,
              average: 37448371337.365715,
              ceiling: 65267660060,
              floor: 32423581208,
              median: 33423581208,
            },
            {
              blockNumber: 17343855,
              total: 6713575786864,
              average: 38806796455.861275,
              ceiling: 347837376722,
              floor: 32064607242,
              median: 33314607242,
            },
            {
              blockNumber: 17343854,
              total: 6180250099964,
              average: 39364650318.242035,
              ceiling: 298919290866,
              floor: 31576405490,
              median: 32076405490,
            },
            {
              blockNumber: 17343853,
              total: 7424640354477,
              average: 42670346864.81035,
              ceiling: 1075867340099,
              floor: 31810513372,
              median: 32616013375,
            },
            {
              blockNumber: 17343852,
              total: 5353606870476,
              average: 41181591311.35384,
              ceiling: 620200732039,
              floor: 32200732039,
              median: 32860232042,
            },
            {
              blockNumber: 17343851,
              total: 5297401772428,
              average: 36036746751.21088,
              ceiling: 90000000000,
              floor: 33060293894,
              median: 34060293894,
            },
            {
              blockNumber: 17343850,
              total: 8528388672392,
              average: 36291015627.2,
              ceiling: 531795481121,
              floor: 31526701913,
              median: 32526701913,
            },
            {
              blockNumber: 17343849,
              total: 4307798065159,
              average: 35601636902.140495,
              ceiling: 301133274669,
              floor: 31958261482,
              median: 32372736445,
            },
            {
              blockNumber: 17343848,
              total: 5163942742339,
              average: 37150667211.071945,
              ceiling: 202955784257,
              floor: 32469318269,
              median: 32769318269,
            },
            {
              blockNumber: 17343847,
              total: 6108311702705,
              average: 33935065015.02778,
              ceiling: 70000000000,
              floor: 31817850693,
              median: 32083093205,
            },
            {
              blockNumber: 17343846,
              total: 5846964115459,
              average: 41175803629.99296,
              ceiling: 951256245239,
              floor: 32278736444,
              median: 32834236447,
            },
            {
              blockNumber: 17343845,
              total: 7284091625948,
              average: 43617315125.437126,
              ceiling: 1176538819176,
              floor: 32269518119,
              median: 33269518119,
            },
            {
              blockNumber: 17343844,
              total: 5020393934515,
              average: 34152339690.57823,
              ceiling: 53000000000,
              floor: 32035352984,
              median: 32313344138,
            },
            {
              blockNumber: 17343843,
              total: 5616431243851,
              average: 38207015264.29252,
              ceiling: 342350315688,
              floor: 32199353092,
              median: 33199353092,
            },
            {
              blockNumber: 17343842,
              total: 4878362331909,
              average: 35870311264.036766,
              ceiling: 120000000000,
              floor: 33231391906,
              median: 33943028112.5,
            },
            {
              blockNumber: 17343841,
              total: 5840007926843,
              average: 36962075486.3481,
              ceiling: 133959564490,
              floor: 33959564490,
              median: 34934644313.5,
            },
            {
              blockNumber: 17343840,
              total: 7820953947469,
              average: 46832059565.68263,
              ceiling: 1574879108289,
              floor: 34286727587,
              median: 35286727587,
            },
            {
              blockNumber: 17343839,
              total: 5648633953477,
              average: 44830428202.19841,
              ceiling: 598250207160,
              floor: 34390227843,
              median: 35740227843,
            },
            {
              blockNumber: 17343838,
              total: 6765397922653,
              average: 36768466970.940216,
              ceiling: 275908187785,
              floor: 31182627632,
              median: 31677404568,
            },
            {
              blockNumber: 17343837,
              total: 4710333395294,
              average: 37089239333.02362,
              ceiling: 350798689737,
              floor: 31946992983,
              median: 32188992983,
            },
            {
              blockNumber: 17343836,
              total: 7446191339862,
              average: 39190480736.11579,
              ceiling: 703358493793,
              floor: 31583404567,
              median: 32583404567,
            },
            {
              blockNumber: 17343835,
              total: 5839375764515,
              average: 34552519316.65681,
              ceiling: 111118961842,
              floor: 31118961842,
              median: 32078839174,
            },
            {
              blockNumber: 17343834,
              total: 4414203722643,
              average: 35598417118.08871,
              ceiling: 132320506570,
              floor: 32320506570,
              median: 33320506570,
            },
            {
              blockNumber: 17343833,
              total: 5284668753954,
              average: 35707221310.5,
              ceiling: 70000000000,
              floor: 33468291589,
              median: 34468291589,
            },
            {
              blockNumber: 17343832,
              total: 7092573236690,
              average: 35286434013.38309,
              ceiling: 112207779223,
              floor: 32207779223,
              median: 33000000000,
            },
            {
              blockNumber: 17343831,
              total: 3243812319994,
              average: 36447329438.134834,
              ceiling: 50622453693,
              floor: 34897880422,
              median: 35346000000,
            },
            {
              blockNumber: 17343830,
              total: 9990821317966,
              average: 44801889318.233185,
              ceiling: 1808440805053,
              floor: 33015139949,
              median: 34015139949,
            },
            {
              blockNumber: 17343829,
              total: 5648753587658,
              average: 38690093066.15069,
              ceiling: 404940824036,
              floor: 33654302461,
              median: 34654302461,
            },
            {
              blockNumber: 17343828,
              total: 5064136995740,
              average: 39256875935.968994,
              ceiling: 152858078940,
              floor: 34970047587,
              median: 36000000000,
            },
            {
              blockNumber: 17343827,
              total: 4887151470184,
              average: 42496969305.94782,
              ceiling: 360496044647,
              floor: 36266898065,
              median: 37266898065,
            },
            {
              blockNumber: 17343826,
              total: 6669491052130,
              average: 50912145436.10687,
              ceiling: 1325682073264,
              floor: 37897607481,
              median: 39397607486,
            },
            {
              blockNumber: 17343825,
              total: 6959210137595,
              average: 40936530221.14706,
              ceiling: 391373347206,
              floor: 36373347206,
              median: 37373347206,
            },
            {
              blockNumber: 17343824,
              total: 9357701971445,
              average: 39153564734.0795,
              ceiling: 608554675564,
              floor: 33536171709,
              median: 34536171709,
            },
            {
              blockNumber: 17343823,
              total: 5164855594820,
              average: 36630181523.5461,
              ceiling: 71395855710,
              floor: 34077262697,
              median: 35077262697,
            },
            {
              blockNumber: 17343822,
              total: 6023997173060,
              average: 41260254610,
              ceiling: 622788861758,
              floor: 34382492702,
              median: 35382492702,
            },
            {
              blockNumber: 17343821,
              total: 7348800041530,
              average: 54035294423.01471,
              ceiling: 1933419587296,
              floor: 35295429577,
              median: 36295429577,
            },
            {
              blockNumber: 17343820,
              total: 8019869294422,
              average: 41339532445.47423,
              ceiling: 623306327757,
              floor: 35306327757,
              median: 36306327757,
            },
            {
              blockNumber: 17343819,
              total: 10299710547956,
              average: 41364299389.38152,
              ceiling: 172754794219,
              floor: 33616773646,
              median: 39038400000,
            },
            {
              blockNumber: 17343818,
              total: 5205365913618,
              average: 37448675637.539566,
              ceiling: 84812874384,
              floor: 34812874384,
              median: 35812874384,
            },
            {
              blockNumber: 17343817,
              total: 7956607521793,
              average: 45207997282.91477,
              ceiling: 549611518885,
              floor: 34506522316,
              median: 35506522316,
            },
            {
              blockNumber: 17343816,
              total: 7401659486306,
              average: 44858542341.24848,
              ceiling: 1142543419415,
              floor: 34421021074,
              median: 35421021074,
            },
            {
              blockNumber: 17343815,
              total: 6561396164014,
              average: 40253964196.40491,
              ceiling: 325824027554,
              floor: 34667482317,
              median: 35667482317,
            },
            {
              blockNumber: 17343814,
              total: 4447825128097,
              average: 38343320069.80173,
              ceiling: 85731437377,
              floor: 35731437377,
              median: 35985937377,
            },
            {
              blockNumber: 17343813,
              total: 4391813999133,
              average: 39925581810.3,
              ceiling: 68098711872,
              floor: 36601813007,
              median: 37501813007,
            },
            {
              blockNumber: 17343812,
              total: 6953474868813,
              average: 42659355023.39264,
              ceiling: 536415937087,
              floor: 35603427855,
              median: 36558607259,
            },
            {
              blockNumber: 17343811,
              total: 6165592528954,
              average: 42816614784.40278,
              ceiling: 222772658143,
              floor: 36244915130,
              median: 36949915130,
            },
            {
              blockNumber: 17343810,
              total: 7904905102661,
              average: 44660480805.99435,
              ceiling: 840504824808,
              floor: 36464107259,
              median: 37464107259,
            },
            {
              blockNumber: 17343809,
              total: 5528565100348,
              average: 42527423848.83077,
              ceiling: 353396435919,
              floor: 37664439032,
              median: 39164439032,
            },
            {
              blockNumber: 17343808,
              total: 6628690172947,
              average: 45093130428.21088,
              ceiling: 719778669676,
              floor: 38054303788,
              median: 38774063577,
            },
            {
              blockNumber: 17343807,
              total: 7028971856738,
              average: 40396389981.25288,
              ceiling: 62764048681,
              floor: 37764048681,
              median: 39264048681,
            },
            {
              blockNumber: 17343806,
              total: 4761221392250,
              average: 40694199933.76068,
              ceiling: 84378804956,
              floor: 38674063577,
              median: 39674063577,
            },
            {
              blockNumber: 17343805,
              total: 6869664724208,
              average: 42668724995.08074,
              ceiling: 140463669111,
              floor: 39463669111,
              median: 40463669111,
            },
            {
              blockNumber: 17343804,
              total: 6437582727764,
              average: 45982733769.74286,
              ceiling: 380169754309,
              floor: 40204303066,
              median: 40564824895,
            },
            {
              blockNumber: 17343803,
              total: 5553714640707,
              average: 45152151550.46342,
              ceiling: 160491945213,
              floor: 41049751431,
              median: 42049751431,
            },
            {
              blockNumber: 17343802,
              total: 8183147435407,
              average: 46495155882.99432,
              ceiling: 354042581058,
              floor: 39789149283,
              median: 40789149283,
            },
            {
              blockNumber: 17343801,
              total: 5767179388585,
              average: 46887637305.56911,
              ceiling: 189713329762,
              floor: 40475346724,
              median: 41163844455,
            },
            {
              blockNumber: 17343800,
              total: 12711853648172,
              average: 44918210770.9258,
              ceiling: 104351097643,
              floor: 38351097643,
              median: 39772245484,
            },
            {
              blockNumber: 17343799,
              total: 6044042582020,
              average: 49541332639.508194,
              ceiling: 713576384417,
              floor: 39285099575,
              median: 40494397331.5,
            },
            {
              blockNumber: 17343798,
              total: 6464328983933,
              average: 46505963913.18705,
              ceiling: 201932030928,
              floor: 40488794663,
              median: 41688794663,
            },
            {
              blockNumber: 17343797,
              total: 12946714218392,
              average: 42728429763.66997,
              ceiling: 383399965648,
              floor: 39718452952,
              median: 40718452952,
            },
            {
              blockNumber: 17343796,
              total: 6750502461597,
              average: 45305385648.30202,
              ceiling: 101063844455,
              floor: 41063844455,
              median: 42563844455,
            },
            {
              blockNumber: 17343795,
              total: 9134732287500,
              average: 45446429291.04478,
              ceiling: 166437342892,
              floor: 40675752357,
              median: 41675752357,
            },
            {
              blockNumber: 17343794,
              total: 6639731310861,
              average: 51872900866.10156,
              ceiling: 690019481041,
              floor: 41971198649,
              median: 42707329630,
            },
            {
              blockNumber: 17343793,
              total: 7463826159822,
              average: 56975772212.38168,
              ceiling: 1075115576348,
              floor: 42607329630,
              median: 42907329632,
            },
          ],
        });
      }
    );
  });

  it('returns correct with filter options', async () => {
    await withPolly(
      {
        recordingName: 'query-getGasPrices-filter-options',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.utils.getGasPrices({
          filter: {
            blockNumber: {
              eq: 17343891,
            },
          },
        });

        expect(data).toStrictEqual({
          gasPrices: [
            {
              blockNumber: 17343891,
              total: 7011316892392,
              average: 40064667956.52571,
              ceiling: 435714285715,
              floor: 34915727231,
              median: 35504117435,
            },
          ],
        });
      }
    );
  });

  it('returns correctly with returnInGwei option', async () => {
    await withPolly(
      {
        recordingName: 'query-getGasPrices-filter-and-gwei',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.utils.getGasPrices({
          filter: {
            blockNumber: {
              eq: 17343891,
            },
          },
          returnInGwei: true,
        });

        expect(data).toStrictEqual({
          gasPrices: [
            {
              blockNumber: 17343891,
              total: 7011.32,
              average: 40.06,
              ceiling: 435.71,
              floor: 34.92,
              median: 35.5,
            },
          ],
        });
      }
    );
  });

  it('can return no data', async () => {
    await withPolly(
      {
        recordingName: 'query-getGasPrices-no-data',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.utils.getGasPrices({
          filter: {
            blockNumber: {
              eq: 10,
            },
          },
        });

        expect(data).toStrictEqual({
          gasPrices: [],
        });
      }
    );
  });

  it('throws error with invalid params', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(api.utils.getGasPrices(input)).rejects.toThrowError(
      /Unrecognized key\(s\) in object: 'foo'/
    );
  });

  it('throws error with invalid filter param', async () => {
    const input: any = {
      filter: {
        foo: 'bar',
      },
    };
    await expect(api.utils.getGasPrices(input)).rejects.toThrowError(
      /Unrecognized key\(s\) in object: 'foo'/
    );
  });

  it('throws error with invalid filter blockNumber param', async () => {
    const input: any = {
      filter: {
        blockNumber: 'bar',
      },
    };
    await expect(api.utils.getGasPrices(input)).rejects.toThrowError(
      /filter,blockNumber: Expected object, received string/
    );
  });

  it('throws error with invalid returnInGwei param', async () => {
    const input: any = {
      returnInGwei: 'foo',
    };
    await expect(api.utils.getGasPrices(input)).rejects.toThrowError(
      /returnInGwei: Expected boolean, received string/
    );
  });
});
