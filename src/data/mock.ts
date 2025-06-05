
import type { ContentPost } from '@/types';

export const mockPosts: ContentPost[] = [
  {
    id: '1',
    slug: 'the-good-samaritan',
    title: 'The Good Samaritan',
    category: 'bible-story',
    date: '2023-01-15T10:00:00Z',
    author: 'Luke',
    excerpt: 'A parable about compassion and neighborly love, transcending societal boundaries.',
    content: '<p>A man was going down from Jerusalem to Jericho, when he was attacked by robbers. They stripped him of his clothes, beat him and went away, leaving him half dead. A priest happened to be going down the same road, and when he saw the man, he passed by on the other side. So too, a Levite, when he came to the place and saw him, passed by on the other side. But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him. He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him. The next day he took out two denarii and gave them to the innkeeper. ‘Look after him,’ he said, ‘and when I return, I will reimburse you for any extra expense you may have.’</p><p>“Which of these three do you think was a neighbor to the man who fell into the hands of robbers?”</p><p>The expert in the law replied, “The one who had mercy on him.”</p><p>Jesus told him, “Go and do likewise.”</p>',
    imageUrl: '/assets/images/goodsamaritan.jpeg',
    dataAiHint: 'parable compassion',
  },
  {
    id: '2',
    slug: 'finding-peace-in-prayer',
    title: 'Finding Peace in Daily Prayer',
    category: 'blog',
    date: '2023-03-22T14:30:00Z',
    author: 'Jane Doe',
    excerpt: 'Exploring how incorporating daily prayer can bring tranquility and strength to our lives.',
    content: '<p>In the hustle and bustle of modern life, finding moments of peace can seem like a luxury. However, the practice of daily prayer offers a sanctuary for the soul, a dedicated time to connect with the divine and find inner calm. It is not about the length of the prayer, but the sincerity and consistency of the practice. Whether it’s a quiet moment in the morning, a brief pause during a busy day, or a reflective period before sleep, prayer can anchor us.</p><p>Many find that starting their day with prayer sets a positive tone, helping them to approach challenges with a clearer mind and a more resilient spirit. It can be a source of guidance, comfort, and strength. Over time, this daily ritual can cultivate a deeper sense of gratitude and mindfulness, enriching our spiritual lives and improving our overall well-being. Consider setting aside just a few minutes each day to explore the profound peace that prayer can offer.</p>',
    imageUrl: '/assets/images/dailyprayer.png',
    dataAiHint: 'prayer reflection',
  },
  {
    id: '3',
    slug: 'hymns-of-faith',
    title: 'Hymns of Faith - Vol. 1',
    category: 'gospel-track',
    date: '2023-02-10T09:00:00Z',
    description: 'A collection of uplifting hymns to inspire and comfort. Downloadable in PDF format.',
    downloadUrl: '/downloads/hymns-of-faith-vol1.pdf',
    fileType: 'PDF',
    imageUrl: '/assets/hymns-of-faith-vol1.png',
    dataAiHint: 'music sheet',
  },
  {
    id: '4',
    slug: 'genesis-creation-study',
    title: 'Genesis: The Story of Creation',
    category: 'sunday-school',
    date: '2023-04-05T11:00:00Z',
    description: 'An outline for Sunday School lessons covering the first chapter of Genesis. Printable.',
    downloadUrl: '/downloads/genesis-creation-study.pdf',
    fileType: 'PDF',
    imageUrl: '/assets/images/storyofcreation.jpg',
    dataAiHint: 'lesson plan',
  },
  {
    id: '5',
    slug: 'community-outreach-event',
    title: 'Community Outreach Event',
    category: 'flyer',
    date: '2023-05-01T00:00:00Z',
    description: 'Join us for a day of fellowship, food, and fun for the whole family!',
    imageUrl: '/assets/images/communityout.jpg',
    dataAiHint: 'community gathering',
    eventDate: '2023-06-15T10:00:00Z',
    location: 'Community Park, Main Street',
  },
  {
    id: '6',
    slug: 'the-prodigal-son',
    title: 'The Prodigal Son',
    category: 'bible-story',
    date: '2023-01-20T10:00:00Z',
    author: 'Luke',
    excerpt: 'A story of forgiveness, repentance, and unconditional love from a father.',
    content: '<p>Jesus continued: “There was a man who had two sons. The younger one said to his father, ‘Father, give me my share of the estate.’ So he divided his property between them.</p><p>“Not long after that, the younger son got together all he had, set off for a distant country and there squandered his wealth in wild living. After he had spent everything, there was a severe famine in that whole country, and he began to be in need. So he went and hired himself out to a citizen of that country, who sent him to his fields to feed pigs. He longed to fill his stomach with the pods that the pigs were eating, but no one gave him anything.</p><p>“When he came to his senses, he said, ‘How many of my father’s hired servants have food to spare, and here I am starving to death! I will set out and go back to my father and say to him: Father, I have sinned against heaven and against you. I am no longer worthy to be called your son; make me like one of your hired servants.’ So he got up and went to his father.</p><p>“But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.</p><p>“The son said to him, ‘Father, I have sinned against heaven and against you. I am no longer worthy to be called your son.’</p><p>“But the father said to his servants, ‘Quick! Bring the best robe and put it on him. Put a ring on his finger and sandals on his feet. Bring the fattened calf and kill it. Let’s have a feast and celebrate. For this son of mine was dead and is alive again; he was lost and is found.’ So they began to celebrate.”</p>',
    imageUrl: '/assets/images/prodigalson.jpeg',
    dataAiHint: 'forgiveness redemption',
  },
  {
    id: '7',
    slug: 'gratitude-journaling',
    title: 'The Power of Gratitude Journaling',
    category: 'blog',
    date: '2023-04-10T14:30:00Z',
    author: 'Sarah Michaels',
    excerpt: 'Discover how simple act of writing down what you are thankful for can transform your perspective.',
    content: '<p>Gratitude journaling is a simple yet powerful practice that can significantly enhance your emotional well-being. It involves regularly taking the time to reflect on and write down things for which you are grateful. This act of conscious appreciation shifts your focus from what might be lacking in your life to the abundance that already surrounds you.</p><p>Studies have shown that practicing gratitude can lead to increased happiness, reduced stress, better sleep, and stronger relationships. It doesn’t require a lot of time – even a few minutes each day can make a difference. You can use a dedicated notebook or a digital app. The key is consistency and sincerity. Start by listing three to five things you are thankful for, no matter how small they may seem. Over time, you may find yourself noticing more and more blessings in your daily life, fostering a more positive and optimistic outlook.</p>',
    imageUrl: '/assets/images/powerofgrat.jpg',
    dataAiHint: 'mindfulness writing',
  },
  {
    id: '8',
    slug: 'tough-love',
    title: 'Tough Love',
    category: 'story',
    date: '2024-07-20T10:00:00Z',
    author: 'Prophet Atetan V.A (memoirs)',
    excerpt: "A story about two young boys, a bully named Tugba, and an unexpected reaction from their parents when they finally report him.",
    content: `
      <p>Very interesting story.<br/>Two little boys and a bully. Tugba is the bully's name.</p>
      <p>The two boys have gotten used to Tugba's thrashing and have since activated their safety code. "Avoid Tugba's path and stay safe" was the code.</p>
      <p>But Tugba always finds a way to corner them somehow.</p>
      <p>This eventful day was no exception. Tugba would command the two boys to come and stand before him. Demand to know how they dared to not greet him, tell them how many strokes of the cane their rudeness earned them. And like an adult proceed to cane them accordingly.</p>
      <p>They will collect it crying and he will still demand for them to say "thank you sir".</p>
      <p>Tugba is 9 years old while Penda is 8 and Wase is 7plus.</p>
      <p>On this fateful day, they were on their way home from playing ball with other kids when Tugba caught them. For some reason this time they only collected 2 knocks each.</p>
      <p>As they went their way pressing their heads in pain and marveling at their good fortune, they spied a group of parents playing board games and discussing politics near the market place.</p>
      <p>Surely their salvation army is here! Both boys parents are among too.</p>
      <p>The courage to report their bully rises up. Their resolve in place.</p>
      <p>Tiny shoulders squared up, chest heaving, chin thrust out, nose running, wails ringing eyes streaming.</p>
      <p>The sniffling and wailing crested a higher tempo.</p>
      <p>Sure enough they got the attention they wanted.</p>
      <p>"Kanyi kwagh?" Asks one father</p>
      <p>"Why are you two crying 😭?" Echoes another</p>
      <p>"Who beat you" yet another parent barks his inquiry</p>
      <p>" It's..... it's" hiccups Penda pointing at the direction Tugba went.</p>
      <p>"It's Tugba" Wase was more eloquent</p>
      <p>"What did you two do?"</p>
      <p>"Nothing.....we did him nothing" piques Wase the eloquent.</p>
      <p>"He said we are bad boys and he beat us" Penda narrates, chaste heaving, eyes tearing up, wiping nose with the tail of his shirt.</p>
      <p>"Wait a moment, you mean Tugba, fourth son of the third wife of Akume, whom we married from Mbayongo is the one that beat you?" Asked Penda's father</p>
      <p>"Yes Papa"</p>
      <p>"I see, it was Tugba and who that beat you two?" Wase's father was now standing up, both hands on his waist.</p>
      <p>"He was with nobody " says Penda</p>
      <p>"Uwu, Orne, se maa ka sasev o" (O boy we are raising women here o") this was Wase's father to Penda's father, rolling up his shirt sleeves.</p>
      <p>He reached out and grabbed his son by the ear. "Did I just hear you say one boy beat the two of you?"</p>
      <p>No answer. The encounter was not going according to plan. Wase's father was supposed to roll up his shirt sleeve and go get Tugba, not Wase's ears.</p>
      <p>"Are you girls? What were you doing while he beat you up?"</p>
      <p>This was from Penda senior who had already used his tall height to snag a twig from the overhanging branch of a Marina tree 🎄</p>
      <p>"Nothing Papa, he beat us" Penda had to reemphasize the point. It's like these adults were slow on the uptake.</p>
      <p>"You are always washing plates with your mother, why won't ordinary Tugba beat the two of you like girls" this was followed by a stinging smack on his buttocks with the twig.</p>
      <p>"Yeeeeyeee Papa I beg oooo Papa, please Papa"<br/>"Shut up that mouth" snaps his very angry father, three more swings of the twig had Penda rolling on the ground.</p>
      <p>Wase was not faring any better.</p>
      <p>His father was pulling and twisting his ears amidst intermittent slaps on his backside assisted by Akiki, his colleague at the work place.</p>
      <p>Penda was wailing and squirming in pain as they tossed him between them like a ball. He is trying to figure out which of the two men had the meanest swing of the palm.</p>
      <p>None of the adults was helping matters at all.</p>
      <p>Some were back to their board games while others were telling each other stories of their wrestling prowess when they were younger.</p>
      <p>Apparently none of them were ever beat up by anyone; or ever allowed the back of their heads to touch ground for any reason.</p>
      <p>"if I ever get to hear that your age mate beat you up again, you will see the other side of me, now shut up and get of my sight before I get a good whip for you."</p>
      <p>Wase's father gave his ear one final twist and a smack in the small of his back which got him on all fours.</p>
      <p>"Now run and don't let me get home before you. Let me see you follow your mother to the market again. Useless boy" Penda's father threw the twig after his scrambling son.</p>
      <p>"Tugba beat us....... Tugba beat us. Have you ever heard such a thing?" Wase's's father angrily asks after his running son.</p>
      <p>"Tugba beat you! Did water wet your muscles that you allow someone to beat you?" Asked one of the parents.</p>
      <p>"No he dried his muscles in the sun and rain soak it, that's why?" Answered another father.</p>
      <p>Everyone burst into laugher which echoed after the two youngsters all the way home.</p>
      <p>Of course they dare not cry to Mama either. Nothing is normal today.</p>
      <p>Who knows what these mother's can do with cooking utensils if provoked.</p>
      <p>All the adults are thinking upside down today anyways!</p>
      <p>But the real issue is how to prove that their muscles are neither wet nor damp.</p>
      <p>Suffice it to say that the two boys didn't get to sleep that night until they planned what to do with the indomitable Tugba.</p>
      <p>The next encounter with Tugba is a story for another day................</p>
      <p><small>Culled from Prophet Atetan V.A memoirs and embellished for effects</small></p>
    `,
    imageUrl: '/assets/images/prodigalson.jpeg',
    dataAiHint: 'children conflict',
  },
];

    