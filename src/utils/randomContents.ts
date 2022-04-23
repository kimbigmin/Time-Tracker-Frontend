export const randomContents = () => {
  const wises = [
    {
      content: "시간을 지배할 줄 아는 사람은 인생을 지배할 줄 아는 사람이다.",
      author: "-에센 바흐-",
    },
    {
      content:
        "시간의 걸음걸이에는 세 가지가 있다. 미래는 주저하면서 다가오고, 현재는 화살처럼 날아가고, 과거는 영원히 정지하고 있다.",
      author: "F.실러",
    },
    {
      content: "짧은 인생은 시간낭비에 의해 더욱 짧아진다.",
      author: "S.존슨",
    },
    {
      content:
        "시간을 단축시키는 것은 활동이요, 시간을 견디지 못하게 하는 것은 안일함이다.",
      author: "괴테",
    },
    {
      content:
        "미래를 신뢰하지 마라, 죽은 과거는 묻어버려라, 그리고 살아있는 현재에 행동하라.",
      author: "롱펠로",
    },
    {
      content:
        "오늘 하루를 헛되이 보냈다면 그것은 커다란 손실이다. 하루를 유익하게 보낸 사람은 하루의 보물을 파낸 것이다. 하루를 헛되이 보냄은 내 몸을 헛되이 소모하고 있다는 것을 기억해야 한다.",
      author: "앙리 프레데이크 아미엘",
    },
    {
      content: "계획이란 미래에 관한 현재의 결정이다.",
      author: "드래커",
    },
    {
      content: "시간을 선택하는 것은 시간을 절약하는 것이다.",
      author: "베이컨",
    },
    {
      content: "시간이 덜어주거나 부드럽게 해주지 않는 슬픔이란 하나도 없다.",
      author: "키케로",
    },
    {
      content:
        "가장 바쁜 사람이 가장 많은 시간을 갖는다. 부지런히 노력하는 사람이 결국 많은 대가를 얻는다.",
      author: "알렉산드리아 피네",
    },
    {
      content:
        "그대는 인생을 사랑하는가? 그렇다면 시간을 낭비하지 말라. 왜냐하면 시간은 인생을 구성한 재료니까. 똑같이 출발하였는데, 세월이 지난 뒤에 보면 어떤 사람은 뛰어나고 어떤 사람은 낙오자가 되어 있다. 이 두 사람의 거리는 좀처럼 접근할 수 없는 것이 되어 버렸다. 이것은 하루하루 주어진 시간을 잘 이용했느냐 이용하지 않고 허송세월을 보냈느냐에 달려 있다.",
      author: "벤자민 프랭클린",
    },
    {
      content: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라.",
      author: "호라티우스",
    },
    {
      content:
        "내가 헛되이 보낸 오늘 하루는 어제 죽어간 이들이 그토록 바라던 하루이다. 단 하루면 인간적인 모든 것을 멸망시킬 수 있고 다시 소생시킬 수도 있다.",
      author: "소포클레스",
    },
    {
      content:
        '변명 중에서도 가장 어리석고 못난 변명은 "시간이 없어서" 라는 변명이다.',
      author: "에디슨",
    },
    {
      content:
        "사람은 금전을 시간보다 중히 여기지만, 그로 인해 잃어버린 시간은 금전으론 살 수 없다.",
      author: "유태격언",
    },
    {
      content:
        "시간을 최악으로 사용하는 사람들은 시간이 부족하다고 늘 불평하는데 일인자이다.",
      author: "라 브뤼에르",
    },
    {
      content:
        "삼십 분이란 티끌과 같은 시간이라고 말하지 말고, 그 동안이라도 티끌과 같은 일을 처리하는 것이 현명한 방법이다.",
      author: "괴테",
    },
    {
      content:
        "세월은 누구에게나 공평하게 주어진 자본금이다. 이 자본을 잘 이용한 사람에겐 승리가 있다.",
      author: "아뷰난드",
    },
    {
      content: "승자는 시간을 관리하며 살고, 패자는 시간에 끌려 산다.",
      author: "J.하비스",
    },
    {
      content:
        "시간의 참된 가치를 알라. 그것을 붙잡아라. 억류하라. 그리고 그 순간순간을 즐겨라. 게을리 하지 말며, 해이 해지지 말며, 우물거리지 말라. 오늘 하루 이 시간은 당신의 것이다. 하루를 착한 행위로 장식하라.",
      author: "루즈벨트",
    },
    {
      content:
        "오늘의 식사는 내일로 미루지 않으면서 오늘 할 일은 내일로 미루는 사람이 많다.",
      author: "C.힐티",
    },
    {
      content:
        "우리는 일 년 후면 다 잊어버릴 슬픔을 간직하느라고 무엇과도 바꿀 수 없는 소중한 시간을 버리고 있다. 소심하게 굴기에 인생은 너무나 짧다.",
      author: "카네기",
    },
    {
      content:
        "일하는 시간과 노는 시간을 뚜렷이 구분하라. 시간의 중요성을 이해하고 매 순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젊은 날은 유쾌함으로 가득 찰 것이고 늙어서도 후회할 일이 적어질 것이며 비록 가난할 때라도 인생을 아름답게 살아갈 수 있다.",
      author: "루이사 메이 올콧",
    },
    {
      content: "전력을 다해서 시간에 대항하라.",
      author: "톨스토이",
    },
    {
      content:
        "지나가는 시간이란 잃어버린 시간이며, 게으름과 무기력한 시간이며, 몇 번이고 맹세를 해도 지키지 못하는 시간이며, 때때로 이사를 하고 끊임없이 돈을 구하는데 분주한 시간이다.",
      author: "J.P 샤르트르",
    },
    {
      content: "하루의 가장 달콤한 순간은 새벽에 있다.",
      author: "윌콕스",
    },
    {
      content:
        "희망과 근심, 공포와 불안 가운데 그대 앞에 빛나고 있는 하루 하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다.",
      author: "호레스",
    },
  ];

  return wises[Math.floor(Math.random() * wises.length)];
};
