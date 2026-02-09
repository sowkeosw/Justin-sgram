import { UserProfile, Post, Story, Chat, FollowUser } from './types';

const DEFAULT_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";
const DYLAN_AVATAR = "https://raw.githubusercontent.com/sowkeosw/Dylan/refs/heads/main/1.png";
const JUSTIN_AVATAR = "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/Z.png";

// Set other users to default avatar
const USER_AVATAR = DEFAULT_AVATAR;

export const currentUser: UserProfile = {
    username: "justin_fox",
    name: "Justin Fox",
    avatarUrl: JUSTIN_AVATAR,
    postsCount: 9,
    followers: "2.3k",
    following: 193,
    bio: [
        "실버우드 대학교 실용음악과 🎹 | Vocal 🎤",
        "Nightshade Sorority 🐍",
        "Bratty & Haughty",
        "재미없으면 말 걸지 마.",
        "📍 Misty Harbor, The Neon Prism"
    ],
    link: "https://theta-fawn-65.vercel.app/",
    linkText: "실버우드 대학",
    rank: "Omega",
    isVerified: true
};

export const highlights: Story[] = [
    { id: '1', title: 'Vibes 🎶', imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/G.png" },
    { id: '2', title: 'Parties 🍸', imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/F.png" },
    { id: '3', title: 'OOTD 💅', imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/H.png" },
    { id: '4', title: 'Secret 🤫', imageUrl: "https://placehold.co/400x400/000000/000000.png" },
];

export const posts: Post[] = [
    {
        id: '1',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/M.png",
        likes: 3500,
        caption: "오늘 밤 힘 좀 쓰려면 달달한 게 필요해. ☕️😈\n누구 때문에 잠 못 잘 것 같으니까 미리 카페인 수혈 중.\n준비는 완벽해. 기대해도 좋아, Darling. 💋\n\n#CoffeeTime #Caffeine #NightVibes #SecretPlan #Sweet #Silverwood #Ready",
        location: "Cafe Misto",
        timestamp: "1시간 전",
        isLiked: false,
        comments: [
            { id: 'c1', username: "alpha_jake", text: "오늘 밤? 내 방으로 오는 건가? 🔥", isLiked: false },
            { id: 'c2', username: "justin_fox", text: "@alpha_jake 착각은 자유라지만 좀 심하네. 😉", isLiked: true },
             { id: 'c3', username: "dylan_h_99", text: "커피 마시고 헛소리하지 말고 잠이나 자라.", isLiked: false },
        ]
    },
    {
        id: '2',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/A.png",
        likes: 4502,
        caption: "드디어 내 품에. 🎸✨\n새로운 아가(Guitar) 영입 기념 샷.\n이 소리, 이 울림... 완벽해.\n앞으로 잘 부탁해, 내 영혼의 단짝. 💋\n다른 건 다 필요 없어, 너만 있으면 돼.\n\n#NewGear #Guitar #Fender #CustomShop #MusicLife #실용음악과 #MyBaby #Soulmate #Silverwood",
        location: "Silverwood Music Studio A",
        timestamp: "1일 전",
        isLiked: true,
        comments: [
            { id: 'c4', username: "music_prod", text: "와 때깔 보소. 소리 한번 들어보자.", isLiked: true },
            { id: 'c5', username: "alpha_jake", text: "너만큼 예쁘네. 언제 연주해줄 거야?", isLiked: false },
            { id: 'c6', username: "justin_fox", text: "@alpha_jake 줄 서. 비싼 몸이라 아무한테나 안 들려줘. 💅", isLiked: true },
        ]
    },
    {
        id: '3',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/N.png",
        likes: 2800,
        caption: "과제 폭탄 실화야? 📚😩\n노래나 부르고 싶은데 이딴 레포트가 무슨 소용이라고.\n누가 나 대신 해줄 사람? 보상은 달콤하게 해줄게. 💋\n교수님 미워. 진짜 싫어.\n\n#과제지옥 #실용음악과 #하기싫어 #살려줘 #Silverwood #Bored #레포트 #과제대행구함",
        location: "The Neon Prism Dorms",
        timestamp: "3일 전",
        isLiked: false,
        comments: [
            { id: 'c7', username: "alpha_jake", text: "내가 다 해줄까? 오늘 밤 시간 비워두면.", isLiked: true },
            { id: 'c8', username: "justin_fox", text: "@alpha_jake 콜. 근데 퀄리티 구리면 각오해. 😉", isLiked: false },
            { id: 'c9', username: "dylan_h_99", text: "징징거릴 시간에 한 글자라도 더 적어라. 한심하긴.", isLiked: false },
        ]
    },
    {
        id: '4',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/D.png",
        likes: 2100,
        caption: "오늘 하루도 길었다. 🛁\n기숙사 도착하자마자 침대로 다이빙 하고 싶지만,\n피부 관리는 포기 못하지.\n씻기 전이 제일 예쁜 거 알지? 😉\n다들 굿나잇. 꿈에서 나 만나. 🌙\n\n#DormLife #EndOfDay #Selfie #NightRoutine #Silverwood #TiredButCute #GoodNight #TheNeonPrism",
        location: "The Neon Prism Dorms",
        timestamp: "1주 전",
        isLiked: true,
        comments: [
            { id: 'c20', username: "sorority_queen", text: "피부에서 광나는 거 봐... 비결 좀 공유해줘.", isLiked: true },
            { id: 'c21', username: "justin_fox", text: "@sorority_queen 타고나는 거야. 노력으로 안 되는 게 있지. 💅", isLiked: true },
            { id: 'c22', username: "alpha_jake", text: "지금 갈까? 팔베개 해줄게.", isLiked: false },
             { id: 'c23', username: "dylan_h_99", text: "새벽에 노래 부르지 마라. 옆방까지 다 들린다.", isLiked: false },
        ]
    },
    {
        id: '5',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/V.png",
        likes: 5200,
        caption: "New Beanie. 🤍\n하얀색이 나만큼 잘 어울리는 사람 있으면 나와보라 그래.\n쇼핑은 역시 정신건강에 좋아. 통장은 좀 아프겠지만? 💸\n\n#OOTD #Beanie #White #Shopping #Flex #Silverwood #Daily #Fashion",
        location: "Misty Harbor Mall",
        timestamp: "2주 전",
        isLiked: false,
        comments: [
            { id: 'c11', username: "sorority_queen", text: "오 찰떡인데? 나랑 커플로 하나 더 사오지 그랬어.", isLiked: true },
            { id: 'c12', username: "alpha_jake", text: "귀엽네. 오늘 쓰고 나와.", isLiked: false },
             { id: 'c12_reply', username: "justin_fox", text: "@alpha_jake 맛있는 거 사주면 생각해봄.", isLiked: false },
        ]
    },
    {
        id: '6',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/C.png",
        likes: 3500,
        caption: "영감이 떠올라서 수업 째고 작업실 박혀있는 중. 🎹\n이번 곡 멜로디 라인 진짜 미쳤다.\n완성되면 제일 먼저 들려줄게. 누구한테인지는 비밀. 🤫\n\n#Music #Composing #작업중 #실용음악과 #Genius #Vibe #영감 #땡땡이",
        location: "Silverwood Music Studio B",
        timestamp: "3주 전",
        isLiked: true,
        comments: [
            { id: 'c13', username: "music_prod", text: "비트 좀 찍어봤는데 들어봐라. 네 보컬이랑 찰떡임.", isLiked: true },
        ]
    },
    {
        id: '7',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/B.png",
        likes: 5800,
        caption: "클라우드 털다가 발견한 고딩 시절. 📸\n저 촌스러운 교복 입기 싫어서 맨날 수선하고 난리 쳤었는데.\n학교 다니기 진짜 싫었지만 미모는 여전했네. ✨\n\n#Throwback #HighSchool #교복 #추억팔이 #SilverwoodHigh #Teenager",
        location: "Silverwood High School",
        timestamp: "1달 전",
        isLiked: true,
        comments: [
             { id: 'c15', username: "alpha_jake", text: "이때가 좋았지... 순수했잖아 우리.", isLiked: false },
             { id: 'c16', username: "justin_fox", text: "@alpha_jake 순수는 무슨. 너 사고 치고 다닌 거 다 기억하거든? ㅋ", isLiked: true },
        ]
    },
    {
        id: '8',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/S.png",
        likes: 1500,
        caption: "달콤 쌉싸름한 아포가토. ☕️🍦\n차가운 바닐라 아이스크림에 뜨거운 에스프레소 붓기.\n온도차 확실한 게 꼭 나 같지 않아?\n녹아버리기 전에 즐겨야 해. 난 기다리는 거 딱 질색이니까. ❄️🔥\n\n#Affogato #CoffeeTime #Dessert #SweetAndBitter #CafeVibes #아포가토 #당충전 #Silverwood",
        location: "Cafe Misto",
        timestamp: "2달 전",
        isLiked: true,
        comments: [
            { id: 'c17', username: "alpha_jake", text: "너처럼 차가운데 뜨거운 거네. 매력 있어.", isLiked: true },
            { id: 'c18', username: "justin_fox", text: "@alpha_jake 아는 척 하지 마. 😒", isLiked: false },
             { id: 'c19', username: "sorority_queen", text: "오 여기 어디야? 분위기 좋아 보이네.", isLiked: true },
        ]
    },
    {
        id: '9',
        imageUrl: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/X.png",
        likes: 4200,
        caption: "거울 볼 때마다 짜릿해. ✨\n오늘도 흠잡을 데 없이 완벽한 나.\n이 미모를 담기엔 카메라 렌즈가 너무 부족해. \n질투하는 시선들은 나의 덤. 즐겨야지 어쩌겠어? 💅\n\n#Selfie #OOTD #Perfect #Daily #Omega #미모성수기 #자아도취 #Silverwood",
        location: "The Neon Prism Dorms",
        timestamp: "2달 전",
        isLiked: true,
        comments: [
             { id: 'c18', username: "alpha_jake", text: "폰 배경화면 바꿀 때 됐네. 저장. 🔥", isLiked: true },
             { id: 'c19', username: "fan_club_president", text: "오빠 날 가져요 엉엉 😭", isLiked: false },
        ]
    }
];

export const chats: Chat[] = [
    {
        id: 'chat_user',
        username: 'my_angel_00',
        name: 'Angel 🤍',
        avatarUrl: USER_AVATAR,
        lastMessage: '오늘 밤에 내 방으로 올래? 너한테만 보여줄 게 있어서 그래. 딜런한테는 비밀로 하고. 💋',
        lastMessageTime: '방금',
        isUnread: false,
        isOnline: true,
        messages: [
            { id: 'm1', senderId: 'me', text: 'Angel, 오늘 수업 때 나 봤어? 눈 마주친 것 같았는데. 😉', timestamp: '5시간 전' },
            { id: 'm2', senderId: 'me', text: '왜 답이 없어? 딜런이랑 같이 있어?', timestamp: '3시간 전' },
            { id: 'm3', senderId: 'me', text: '읽씹이라니... 상처받네. 그래도 예쁘니까 봐줄게. 💕', timestamp: '1시간 전' },
            { id: 'm4', senderId: 'me', text: '딜런 몰래 잠깐 볼까? 내가 재밌는 거 보여줄 수 있는데.', timestamp: '30분 전' },
            { id: 'm5', senderId: 'me', text: '오늘 밤에 내 방으로 올래? 너한테만 보여줄 게 있어서 그래. 딜런한테는 비밀로 하고. 💋', timestamp: '방금' }
        ]
    },
    {
        id: 'chat_dylan',
        username: 'dylan_h_99',
        name: '재수탱이 ⚾️',
        avatarUrl: DYLAN_AVATAR,
        lastMessage: '내 애인 근처에서 알짱거리지 마. 경고했다.',
        lastMessageTime: '1시간',
        isUnread: false,
        isOnline: false,
        messages: [
            { id: 'm1', senderId: 'me', text: '야 딜런, 아까 관중석에서 봤는데 유니폼 핏 죽이더라? 🤤 침 흘릴 뻔.', timestamp: '오전 11:00' },
            { id: 'm2', senderId: 'other', text: '할 일 없으면 가서 과제나 해. 얼쩡거리지 말고.', timestamp: '오전 11:05' },
            { id: 'm3', senderId: 'me', text: '너무 까칠하네. 근데 오늘 너한테서 단내 쩔던데. 억제제 먹은 거 맞아? 슬슬 \'그날\' 아니야?', timestamp: '오전 11:07' },
            { id: 'm4', senderId: 'other', text: '남 이사 신경 꺼. 내 주기는 내 애인만 알면 돼.', timestamp: '오전 11:30' },
            { id: 'm5', senderId: 'me', text: '혹시나 해서. 네 애인 바쁘면 내가 대신 \'봉사\' 해줄 수도 있잖아. 나 테크닉 좋은 거 알지? 😉', timestamp: '오전 11:32' },
            { id: 'm6', senderId: 'other', text: '미친 새끼가. 눈앞에 띄면 뒤진다. 차단함.', timestamp: '오후 12:00' }
        ]
    },
    {
        id: 'chat_jake',
        username: 'alpha_jake',
        name: 'Jake Miller',
        avatarUrl: DEFAULT_AVATAR,
        lastMessage: '오늘 밤에 내 방 올래? 넷플릭스 앤 칠? 😉',
        lastMessageTime: '3시간',
        isUnread: true,
        isOnline: true,
        messages: [
            { id: 'm1', senderId: 'other', text: '저스틴, 아까 수업 때 너만 보이더라.', timestamp: '오후 1:00' },
            { id: 'm2', senderId: 'me', text: '당연하지. 내가 좀 빛이 나잖아? ✨', timestamp: '오후 1:10' },
            { id: 'm3', senderId: 'other', text: 'ㅋㅋㅋ 인정. 근데 너 향기 좀 바뀐 것 같아. 더 달달해졌어.', timestamp: '오후 1:12' },
            { id: 'm4', senderId: 'me', text: '개코냐? 쓸데없는 소리 말고 용건만 말해.', timestamp: '오후 1:15' },
            { id: 'm5', senderId: 'other', text: '까칠하긴... 오늘 밤에 내 방 올래? 새로 나온 게임 있는데. 넷플릭스 앤 칠? 😉', timestamp: '오후 1:20' },
            { id: 'm6', senderId: 'me', text: '고민 좀 해보고. 딜런네 커플 깨지면 갈게. ㅋㅋㅋ', timestamp: '오후 1:25' }
        ]
    },
];

export const followingList: FollowUser[] = [
    { id: 'f1', username: 'my_angel_00', name: 'Angel 🤍', avatarUrl: USER_AVATAR, isFollowing: true },
    { id: 'f2', username: 'dylan_h_99', name: 'Dylan Holland', avatarUrl: DYLAN_AVATAR, isFollowing: true },
    { id: 'f3', username: 'alpha_jake', name: 'Jake Miller', avatarUrl: DEFAULT_AVATAR, isFollowing: true },
    { id: 'f4', username: 'sorority_queen', name: 'Regina G', avatarUrl: DEFAULT_AVATAR, isFollowing: true },
    { id: 'f5', username: 'music_prod', name: 'DJ Max', avatarUrl: DEFAULT_AVATAR, isFollowing: true }
];