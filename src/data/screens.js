// Screen cards for the Design and Edge-case rails.
// To swap a screen, drop a new image in public/images/... and update `image` here.
// Cards with `goal` + `decisions` use the numbered format; `bullets` use the plain list.

export const screens = {
  ask: [
    {
      title: 'Splash',
      level: 3,
      image: '/images/ask/01-splash.jpg',
      alt: 'Splash screen',
      goal: 'Set a calm, personal tone in one second.',
      decisions: [
        {
          title: 'Brand, nothing else',
          text: 'Wordmark on deep purple. No tagline, spinner or sign-up wall.',
        },
        {
          title: 'Gone as soon as it can be',
          text: 'Hands over to Home the moment the library is ready.',
        },
        {
          title: 'Purple, the colour of remembering',
          text: 'Deep violet reads like dusk: reflective, nostalgic, the mood of looking back.',
        },
      ],
    },
    {
      title: 'Home',
      level: 3,
      image: '/images/ask/02-home.jpg',
      alt: 'Home screen',
      goal: 'Make asking the obvious next step.',
      decisions: [
        {
          title: 'Ask from the thumb zone',
          text: 'One bar at the bottom: add a photo, type or speak. No magnifier to hunt for.',
        },
        {
          title: 'Start from real faces',
          text: '“Try asking” uses Nani, Mishti and Maa, so the first question is one tap.',
        },
        {
          title: 'Browse up top, ask below',
          text: 'Tabs, “On this day” and Moments sit above; the bottom belongs to asking.',
        },
      ],
    },
    {
      title: 'Search open',
      level: 3,
      image: '/images/ask/03-search-open.jpg',
      alt: 'Search open screen',
      goal: 'Pick up where you left off, or start fresh.',
      decisions: [
        {
          title: 'Home stays in view',
          text: 'Search opens over a frosted Home, so people always know where they are.',
        },
        {
          title: 'Recent questions, not a chat log',
          text: 'One tap reopens a past question with its results. No thread to scroll.',
        },
        {
          title: 'One clear way out',
          text: 'Cancel always returns Home.',
        },
      ],
    },
    {
      title: 'Typing',
      level: 3,
      image: '/images/ask/04-typing.jpg',
      alt: 'Typing screen',
      goal: 'Catch a misunderstanding before it’s sent.',
      decisions: [
        {
          title: 'Show the reading while typing',
          text: '“Last summer” becomes Apr – Jun 2026 · 1,248 photos, fixable before sending.',
        },
        {
          title: 'Suggest the missing detail',
          text: '“That photo” is vague, so completions offer one: with Mishti, at the farmhouse, with Nani.',
        },
        {
          title: 'One button, one job',
          text: 'The mic turns into Send as soon as there is text.',
        },
      ],
    },
    {
      title: 'Thinking',
      level: 3,
      image: '/images/ask/05-thinking.jpg',
      alt: 'Thinking screen',
      goal: 'Show it understood, even before photos arrive.',
      decisions: [
        {
          title: 'Only when it’s slow',
          text: 'Appears only if results take longer than about 300 ms.',
        },
        {
          title: 'Understanding first, photos next',
          text: 'The question, reply and date chip land at once; moments shimmer in.',
        },
        {
          title: 'Nothing to tap that isn’t ready',
          text: 'Save and the follow-up chips stay dimmed until results exist.',
        },
      ],
    },
    {
      title: 'Results',
      level: 3,
      image: '/images/ask/06-results.jpg',
      alt: 'Results screen',
      goal: 'Help her recognise the moment, not scan a grid.',
      decisions: [
        {
          title: 'Vague question, moments back',
          text: '“Last summer” returns moments to recognise, plus the most shared or reopened.',
        },
        {
          title: 'Question small, answer big',
          text: 'Her words sit in quotes; the reply leads in large type.',
        },
        {
          title: 'No dead ends',
          text: '“Or summer 2025?”, “Browse all of last summer” and “Add a detail…” always offer a next step.',
        },
      ],
    },
    {
      title: 'Second question',
      level: 3,
      image: '/images/ask/07-second-question.jpg',
      alt: 'Second question screen',
      goal: 'Narrow down without starting over.',
      decisions: [
        {
          title: 'Specific question, photos back',
          text: '“With Mishti” cuts 1,248 photos to 112: best matches first, then every moment she’s in.',
        },
        {
          title: 'Answer, then ask one thing',
          text: '“Here’s Mishti, last summer. Is it one of these?”',
        },
        {
          title: 'Say it once',
          text: 'The added detail shows once, as a chip; ✕ steps back.',
        },
      ],
    },
  ],
  share: [
    {
      title: 'Photo view',
      level: 3,
      image: '/images/share/01-photo-view.jpg',
      alt: 'Photo view screen',
      bullets: [
        '“Is this the one?” appears only when a search ends on a single photo, once per search, and is easy to ignore.',
        'The filmstrip keeps the other likely photos one swipe away, so opening a photo never ends the search.',
        'Share is the primary action; More like this searches with the photo.',
      ],
    },
    {
      title: 'Share one photo',
      level: 3,
      image: '/images/share/02-share-one.jpg',
      alt: 'Share one photo screen',
      bullets: [
        'One tap goes straight to the iOS share sheet: no link and no extra Memoirs step.',
        'WhatsApp, Messages and AirDrop work exactly as people expect; Memoirs uploads nothing.',
        'Photos go out as normal photos; Memoirs adds no actions of its own.',
      ],
    },
    {
      title: 'Sent',
      level: 3,
      image: '/images/share/03-sent.jpg',
      alt: 'Sent screen',
      bullets: [
        'Sharing answers “Is this the one?”, so the question goes away.',
        'A share is the strongest sign the photo was right, so it ranks higher for similar searches.',
        'A small toast confirms where it went: “Sent to WhatsApp”.',
      ],
    },
    {
      title: 'Select several',
      level: 3,
      image: '/images/share/04-select-several.jpg',
      alt: 'Select several screen',
      bullets: [
        'Long-press a photo or tap Select; the top row reads Cancel · 3 selected · Select all.',
        'Chips and the search bar give way to a selection bar: Favourite, Add to album and “Share 3”.',
        'Selected photos get a filled check, the rest an empty circle, so state never relies on colour alone.',
      ],
    },
    {
      title: 'Share 3 photos',
      level: 3,
      image: '/images/share/05-share-three.jpg',
      alt: 'Share 3 photos screen',
      bullets: [
        'The same sheet for one or many. The header confirms what’s going out: 3 photos, 7.1 MB.',
        'iOS fills in the people, apps and actions.',
        'Memoirs only hides what makes no sense here: Save Image (it’s already in the library), Print, Assign to Contact.',
      ],
    },
  ],
  edgeA: [
    {
      title: 'Doesn’t know a name',
      level: 4,
      image: '/images/edge/01-unknown-name.jpg',
      alt: 'Doesn’t know a name screen',
      goal: 'Turn an unknown name into a one-tap answer.',
      decisions: [
        {
          title: 'Admit it, warmly',
          text: '“I don’t know ‘Bua’ yet.” A dashed chip marks exactly what’s unknown.',
        },
        {
          title: 'Answer with faces, not typing',
          text: 'Unnamed faces, most photos first. One tap and it remembers.',
        },
        {
          title: 'A way out, and reassurance',
          text: 'Add a face or From Contacts if she isn’t here. Names stay on the phone.',
        },
      ],
    },
    {
      title: 'Puts a face to the name',
      level: 4,
      image: '/images/edge/02-face-to-name.jpg',
      alt: 'Face matched to a name screen',
      goal: 'Confirm what it learned, and pay off right away.',
      decisions: [
        {
          title: 'Show the proof',
          text: 'Bua’s face is circled on the photo, beside faces it already knows.',
        },
        {
          title: 'Correct in one tap',
          text: 'Tap a different face to change it, or Undo from the toast.',
        },
        {
          title: 'Pay off instantly',
          text: 'Her moments appear at once: 38 photos, newest first.',
        },
      ],
    },
    {
      title: 'Understands part of it',
      level: 4,
      image: '/images/edge/03-part-understood.jpg',
      alt: 'Understands part of it screen',
      goal: 'Keep what it understood; ask only about the rest.',
      decisions: [
        {
          title: 'Keep what it got',
          text: 'Mishti stays a solid chip; only ‘Nanaghar’ is dashed and underlined.',
        },
        {
          title: 'One question, picture answers',
          text: 'Her most-visited places, with visits and photos, ready to tap.',
        },
        {
          title: 'Learns family words',
          text: 'One tap teaches ‘Nanaghar’ for good. All of Mishti’s photos is the way out.',
        },
      ],
    },
    {
      title: 'Understands nothing',
      level: 4,
      image: '/images/edge/04-nothing-understood.jpg',
      alt: 'Understands nothing screen',
      goal: 'Turn “I can’t” into “let’s find it together”.',
      decisions: [
        {
          title: 'Own it, then team up',
          text: '“I couldn’t place that day. Let’s find it together.”',
        },
        {
          title: 'Ask what photos can show',
          text: 'Who was there, the place, or roughly when. Any one is enough.',
        },
        {
          title: 'Low effort, real exit',
          text: '“Even just the year helps”, or browse month by month.',
        },
      ],
    },
  ],
  edgeB: [
    {
      title: 'Nothing matches',
      level: 4,
      image: '/images/edge/05-nothing-matches.jpg',
      alt: 'Nothing matches screen',
      goal: 'Never show an empty screen.',
      decisions: [
        {
          title: 'The person matters most',
          text: 'Mishti stays; the date is what gives way.',
        },
        {
          title: 'Show what didn’t match',
          text: 'The dashed date chip marks the part that found nothing.',
        },
        {
          title: 'Nearest answers first',
          text: 'Mishti at the farmhouse in Dec 2024, then all her photos.',
        },
      ],
    },
    {
      title: 'A follow-up finds nothing',
      level: 4,
      image: '/images/edge/06-followup-nothing.jpg',
      alt: 'A follow-up finds nothing screen',
      goal: 'A failed follow-up never undoes progress.',
      decisions: [
        {
          title: 'Keep the progress',
          text: 'Mishti’s summer stays on screen; nothing resets.',
        },
        {
          title: 'Mark what was tried',
          text: '“beach” stays as a dashed chip; ✕ removes it.',
        },
        {
          title: 'Offer the nearest retry',
          text: '“The beach with Mishti, any time”, one tap away.',
        },
      ],
    },
    {
      title: 'Only some photos shared',
      level: 4,
      image: '/images/edge/07-some-photos-shared.jpg',
      alt: 'Only some photos shared screen',
      goal: 'Explain the gap without blame, and offer the fix.',
      decisions: [
        {
          title: 'Name the real reason',
          text: 'Not “no results”: the birthday isn’t in the 120 photos she shared.',
        },
        {
          title: 'Show what it can see',
          text: 'The 8 photos of Mishti it can see come first.',
        },
        {
          title: 'Fix it in place',
          text: 'Allow all photos, or add a few more. Search stays on the phone.',
        },
      ],
    },
  ],
};
