/* Fighters are orderdd by release date */
export default {
  roster: [
    {
      id: "0",
      name: "Medusa",
      back: "assets/backs/000.png",
      minis: ["assets/minis/000.png"],
      desc: "Medusa is a ranged character, supported by 3 harpy melee sidekicks. She can deal massive combat damage, do direct (unavoidable) damage and force her opponent to discard cards. Without mentioning the harpies' resurrection... She's traditionally considered as one of the strongest fighters released.",
      ability: "At the start of her turn, she may deal 1 damage to an opposing fighter in her zone.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=tVO2F9Q7E2w"
      }, {
        name: "Lord of the Board", url: "https://www.youtube.com/watch?v=g_zHhLJMGxE"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=H0U3-QYjwVM"
      }],
      set: ["Battle of Legends, Volume One", "https://boardgamegeek.com/boardgame/274637/unmatched-battle-legends-volume-one"],
      deck: 'https://unmatched.cards/umdb/decks/medusa',
      lore: 'https://en.wikipedia.org/wiki/Medusa'
    },
    {
      id: "1",
      name: "Sinbad",
      back: "assets/backs/001.png",
      minis: ["assets/minis/001.png"],
      desc: "Sinbad is a melee fighter, supported by a porter sidekick. Sinbad grows in power as he gains experience on each of his voyages. His <i>Voyage</i> cards (6 in total) get +1 power per other <i>Voyage</i> in his discard pile. He gets also faster: +1 move per <i>Voyage</i> in his discard pile.",
      ability: "When he maneuvers, he may move his fighters +1 space for each <i>Voyage</i> card in his discard pile.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=bhkbYVAJxYk"
      }, {
        name: "Lord of the Board", url: "https://www.youtube.com/watch?v=Z_z-xlByMRA"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=VD4EVEptj54"
      }],
      set: ["Battle of Legends, Volume One", "https://boardgamegeek.com/boardgame/274637/unmatched-battle-legends-volume-one"],
      deck: 'https://unmatched.cards/umdb/decks/sinbad',
      lore: 'https://en.wikipedia.org/wiki/Sinbad_the_Sailor'
    },
    {
      id: "2",
      name: "Alice",
      back: "assets/backs/002.png",
      minis: ["assets/minis/002.png"],
      desc: "Alice is a melee fighter with a Jabberwock sidekick. She has two stances: <i>Big</i>, which increases the value of her attacks and <i>Small</i>, which increases the value of her defense. She can switch from one to the other with card effects.",
      ability: "Player chooses if Alice starts the game <i>Big</i> or <i>Small</i>. When Alice is <i>Big</i>, she adds 2 to the value of her attack cards. When she's <i>Small</i>, she adds 1 to the value of her defense cards.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=hWJtQbat4r4"
      }, {
        name: "Lord of the Board", url: "https://www.youtube.com/watch?v=GOVtdPRfBEg"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=H9zbBlbrL6k"
      }],
      set: ["Battle of Legends, Volume One", "https://boardgamegeek.com/boardgame/274637/unmatched-battle-legends-volume-one"],
      deck: 'https://unmatched.cards/umdb/decks/alice',
      lore: 'https://en.wikipedia.org/wiki/Alice_(Alice%27s_Adventures_in_Wonderland)'
    },
    {
      id: "3",
      name: "King Arthur",
      back: "assets/backs/003.png",
      minis: ["assets/minis/003.png"],
      desc: "King Arthur is a melee fighter, supported by Merlin, a ranged sidekick. King Arthur can <i>Boost</i> his attacks.",
      ability: "When King Arthur attacks, he may <i>Boost</i> that attack. If opponent cancels the effects on the attack card, the <i>Boost</i> card is discarded without effect.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=iTjdJQVqke4"
      }, {
        name: "Lord of the Board", url: "https://www.youtube.com/watch?v=8Wd_OIFdYXk"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=5h2oGrXxW_I"
      }],
      set: ["Battle of Legends, Volume One", "https://boardgamegeek.com/boardgame/274637/unmatched-battle-legends-volume-one"],
      deck: 'https://unmatched.cards/umdb/decks/king-arthur',
      lore: 'https://en.wikipedia.org/wiki/King_Arthur'
    },
    {
      id: "8",
      name: "Bruce Lee",
      back: "assets/backs/008.png",
      minis: ["assets/minis/008a.png", "assets/minis/008b.png"],
      desc: "Bruce Lee is a solo melee hero, able to attack many times in a single round with the help of his \"Gain 1 action\" cards.",
      ability: "At the end of his turn, he may move 1 space.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=hsaKs9C0gio"
      }, {
        name: "Watch It Played", url: "https://www.youtube.com/watch?v=dKJM0n75b7g"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=dDuWijP8T40"
      }],
      set: ["Bruce Lee", "https://boardgamegeek.com/boardgame/279645/unmatched-bruce-lee"],
      deck: 'https://unmatched.cards/umdb/decks/bruce-lee',
      lore: 'https://en.wikipedia.org/wiki/Bruce_Lee'
    },
    {
      id: "4",
      name: "Robin Hood",
      back: "assets/backs/004.png",
      minis: ["assets/minis/004.png"],
      desc: "Robin Hood is a ranged (obviously) fighter, supported by 4 melee outlaw sidekicks. He excels at hit and run.",
      ability: "After an attack, he may move the attacking fighter up to 2 spaces.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=45BTbi7hOy4"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=lcHWdRt1EYc"
      }],
      set: ["Robin Hood vs. Bigfoot", "https://boardgamegeek.com/boardgame/274638/unmatched-robin-hood-vs-bigfoot"],
      deck: 'https://unmatched.cards/umdb/decks/robin-hood',
      lore: 'https://en.wikipedia.org/wiki/Robin_Hood'
    },
    {
      id: "5",
      name: "Bigfoot",
      back: "assets/backs/005.png",
      minis: ["assets/minis/005.png"],
      desc: "Bigfoot is a melee fighter, supported by a Jackalope sidekick. He has large raw damage and can refill his hand quickly. He's traditionally considered one of the strongest fighters released.",
      ability: "At the end of his turn, if there are no opposing fighters in Bigfoot's zone, he may draw 1 card.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=igVVCDxrRHE"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=LWEYzLcPCH4"
      }],
      set: ["Robin Hood vs. Bigfoot", "https://boardgamegeek.com/boardgame/274638/unmatched-robin-hood-vs-bigfoot"],
      deck: 'https://unmatched.cards/umdb/decks/bigfoot',
      lore: 'https://en.wikipedia.org/wiki/Bigfoot'
    },
    {
      id: "9",
      name: "InGen",
      back: "assets/backs/009.png",
      minis: ["assets/minis/009.png"],
      desc: "Robert Muldoon is a ranged fighter, supported by 3 ranged ingen workers. They can slow their opponent down and damage them by placing traps on the board.",
      ability: "At the start of his turn, he may place a trap in an empty space of his current zone . When an opposing fighter enters a space with a trap, the trap goes off: the fighter immediately stops moving and takes 1 damage. Allies may land and move through traps freely without setting them off.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=hjcUhfmne8c"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=ZGxNQn7P-to"
      }],
      set: ["Jurassic Park - Ingen vs. Raptors", "https://boardgamegeek.com/boardgame/284777/unmatched-jurassic-park-ingen-vs-raptors"],
      deck: 'https://unmatched.cards/umdb/decks/ingen',
      lore: 'https://en.wikipedia.org/wiki/List_of_Jurassic_Park_characters#Robert_Muldoon'
    },
    {
      id: "10",
      name: "Raptors",
      back: "assets/backs/010.png",
      minis: ["assets/minis/010a.png", "assets/minis/010b.png", "assets/minis/010c.png"],
      desc: "Raptors are three fast melee fighters that are trying to surround their opponent to make their attacks stronger.",
      ability: "<i>Raptors</i> add 1 to the value of their attack cards for each of other <i>Raptors</i> adjacent to the defender.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=1r42rsXhHkg"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=ZnmSTcz1v9A"
      }],
      set: ["Jurassic Park - Ingen vs. Raptors", "https://boardgamegeek.com/boardgame/284777/unmatched-jurassic-park-ingen-vs-raptors"],
      deck: 'https://unmatched.cards/umdb/decks/raptors',
      lore: 'https://en.wikipedia.org/wiki/Dinosaurs_in_Jurassic_Park#Velociraptor'
    },
    {
      id: "15",
      name: "Invisible Man",
      back: "assets/backs/015.png",
      minis: ["assets/minis/015.png"],
      desc: "Invisible Man is a melee fighter who uses fog tokens placed on the board to quickly teleport around and trigger stronger card effects if he or his opponent is standing on one of them.",
      ability: "At the start of the game he places 3 fog tokens in separate spaces in his zone. When he is on a space with a fog token, he adds 1 to the value of his defense cards. He may move between two spaces with fog tokens as if they were adjacent.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=tGGpBqHV8Vo"
      }, {
        name: "Watch It Played", url: "https://www.youtube.com/watch?v=hYLqGBLt8sM&t=152s"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=Qdk8rHHAXmE"
      }],
      set: ["Cobble & Fog", "https://boardgamegeek.com/boardgame/294484/unmatched-cobble-fog"],
      deck: 'https://unmatched.cards/umdb/decks/invisible-man',
      lore: 'https://en.wikipedia.org/wiki/Invisible_Man'
    },
    {
      id: "16",
      name: "Jekyll & Hyde",
      back: "assets/backs/016.png",
      minis: ["assets/minis/016.png"],
      desc: "Jekyll & Hyde is a melee fighter which uses two stances: <i>Jekyll</i> or <i>Hyde</i>. <i>Hyde</i> can do devastating damage but this also exhausts the fighter in different ways.",
      ability: "He starts the game as Dr. Jekyll. At the start of his turn, he may transform into Dr. <i>Jekyll</i> or Mr. <i>Hyde</i>. When he does a maneuver while being Mr. <i>Hyde</i>, he takes 1 damage.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=9DW9KCzypDo"
      }, {
        name: "Watch It Played", url: "https://www.youtube.com/watch?v=hYLqGBLt8sM&t=393s"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=qmnRkqxFVbQ"
      }],
      set: ["Cobble & Fog", "https://boardgamegeek.com/boardgame/294484/unmatched-cobble-fog"],
      deck: 'https://unmatched.cards/umdb/decks/jekyll-hyde',
      lore: 'https://en.wikipedia.org/wiki/Dr._Jekyll_and_Mr._Hyde_(character)'
    },
    {
      id: "17",
      name: "Dracula",
      back: "assets/backs/017.png",
      minis: ["assets/minis/017.png"],
      desc: "Dracula is a melee fighter, supported by 3 sisters sidekicks. He has different ways to move around, he can boost some of his attacks and also (of course) regain life.",
      ability: "At the start of his turn, he may deal 1 damage to a fighter adjacent to him. If he does, he draws a card.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=hNkqbvBH_5k"
      }, {
        name: "Watch It Played", url: "https://www.youtube.com/watch?v=hYLqGBLt8sM&t=309s"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=xTXYm6nPnvI"
      }],
      set: ["Cobble & Fog", "https://boardgamegeek.com/boardgame/294484/unmatched-cobble-fog"],
      deck: 'https://unmatched.cards/umdb/decks/dracula',
      lore: 'https://en.wikipedia.org/wiki/Dracula'
    },
    {
      id: "18",
      name: "Sherlock Holmes",
      back: "assets/backs/018.png",
      minis: ["assets/minis/018.png"],
      desc: "Sherlock is a melee fighter, supported by Dr. Watson, a ranged sidekick. He has multiple ways of looking at the opponent's hand and can trigger powerful effects if he can guess some characteristics of the opponent's cards. He's traditionally considered one of the strongest fighters released when played by a skilled player.",
      ability: "Effects on <i>Holmes</i> and <i>Dr. Watson</i> cards cannot be cancelled by an opponent. Effects on <i>Any</i> cards can still be cancelled.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=YlKzLNe9sD0"
      }, {
        name: "Watch It Played", url: "https://www.youtube.com/watch?v=hYLqGBLt8sM&t=496s"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=6RzuFuqsvhQ"
      }],
      set: ["Cobble & Fog", "https://boardgamegeek.com/boardgame/294484/unmatched-cobble-fog"],
      deck: 'https://unmatched.cards/umdb/decks/sherlock-holmes',
      lore: 'https://en.wikipedia.org/wiki/Sherlock_Holmes'
    },
    {
      id: "11",
      name: "Buffy",
      back: "assets/backs/011.png",
      minis: ["assets/minis/011.png"],
      desc: "Buffy is a melee fighter, supported by either Giles or Xander sidekick.",
      ability: "Buffy may move through spaces containing opposing fighters. At the start of the game, she can choose Xander or Giles as sidekick and shuffle their 5 cards into her base deck of 25 cards.",
      guides: [{
        name: "Watch It Played", url: "https://youtu.be/QthjkXuo4D0?t=93"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=kDJlND0SKrY"
      }],
      set: ["Buffy the Vampire Slayer", "https://boardgamegeek.com/boardgame/315060/unmatched-buffy-vampire-slayer"],
      deck: 'https://unmatched.cards/umdb/decks/buffy',
      lore: 'https://en.wikipedia.org/wiki/Buffy_Summers'
    },
    {
      id: "12",
      name: "Willow",
      back: "assets/backs/012.png",
      minis: ["assets/minis/012.png"],
      desc: "Willow is a ranged fighter, supported by Tara, a ranged sidekick. When Willow is dealt damage, she turns into Dark Willow who allows some of her cards to have additional powerful effects that often also exhaust her.",
      ability: "When Willow or Tara is dealt damage, Willow becomes Dark Willow. At the end of her turn, if Dark Willow is adjacent to Tara, she becomes Willow.",
      guides: [{
        name: "Watch It Played", url: "https://youtu.be/QthjkXuo4D0?t=242"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=PkhsccVP3sA"
      }],
      set: ["Buffy the Vampire Slayer", "https://boardgamegeek.com/boardgame/315060/unmatched-buffy-vampire-slayer"],
      deck: 'https://unmatched.cards/umdb/decks/willow',
      lore: 'https://en.wikipedia.org/wiki/Willow_Rosenberg'
    },
    {
      id: "13",
      name: "Angel",
      back: "assets/backs/013.png",
      minis: ["assets/minis/013.png"],
      desc: "Angel is a melee fighter, supported by Faith sidekick.",
      ability: "After Angel or Faith attacks, if you lost the combat, draw 1 card.",
      guides: [{
        name: "Watch It Played", url: "https://youtu.be/QthjkXuo4D0?t=468"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=_5v7nKsLIC0"
      }],
      set: ["Buffy the Vampire Slayer", "https://boardgamegeek.com/boardgame/315060/unmatched-buffy-vampire-slayer"],
      deck: 'https://unmatched.cards/umdb/decks/angel',
      lore: 'https://en.wikipedia.org/wiki/Angel_(Buffy_the_Vampire_Slayer)'
    },
    {
      id: "14",
      name: "Spike",
      back: "assets/backs/014.png",
      minis: ["assets/minis/014.png"],
      desc: "Spike is a melee fighter, suported by Drusilla sidekick. They are placing <i>Shadow</i> tokens on the board that are used by their card effects.",
      ability: "At the start of his turn, he may place a <i>Shadow</i> token in any space adjacent to Spike or Drusilla.",
      guides: [{
        name: "Watch It Played", url: "https://www.youtube.com/watch?v=QthjkXuo4D0&t=368s"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=r5hqxS3txqo"
      }],
      set: ["Buffy the Vampire Slayer", "https://boardgamegeek.com/boardgame/315060/unmatched-buffy-vampire-slayer"],
      deck: 'https://unmatched.cards/umdb/decks/spike',
      lore: 'https://en.wikipedia.org/wiki/Spike_(Buffy_the_Vampire_Slayer)'
    },
    {
      id: "6",
      name: "Little Red Riding Hood",
      back: "assets/backs/006.png",
      minis: ["assets/minis/006.png"],
      desc: "Little Red is a melee fighter, supported by a Huntsman sidekick. She features a card-combo mechanism: matching icons on the cards she plays to the one in her \"basket\" (discard pile), triggers potent effects.",
      ability: "Resolve an effect on a card she plays if the symbol next to the effect matches the item in her basket.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=FfcDojVIbI4"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=RS8r05kTOis"
      }],
      set: ["Little Red Riding Hood vs. Beowulf", "https://boardgamegeek.com/boardgame/325635/unmatched-little-red-riding-hood-vs-beowulf"],
      deck: 'https://unmatched.cards/umdb/decks/little-red',
      lore: 'https://en.wikipedia.org/wiki/Little_Red_Riding_Hood'
    },
    {
      id: "7",
      name: "Beowulf",
      back: "assets/backs/007.png",
      minis: ["assets/minis/007.png"],
      desc: "Beowulf is a melee fighter, supported by Wiglaf sidekick. Beowulf uses rage points to increase the effects of his cards. He gets one rage point every time he loses life or from card effects.",
      ability: "Beowulf starts with 1 Rage. When Beowulf is dealt damage, he gains 1 Rage. Beowulf has a maximum of 3 rage.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=oUaiVR2PlwY"
      }, {
        name: "Lord of the Board", url: "https://www.youtube.com/watch?v=5HixnGp8mbE"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=hPfrcSdpD84"
      }],
      set: ["Little Red Riding Hood vs. Beowulf", "https://boardgamegeek.com/boardgame/325635/unmatched-little-red-riding-hood-vs-beowulf"],
      deck: 'https://unmatched.cards/umdb/decks/beowulf',
      lore: 'https://en.wikipedia.org/wiki/Beowulf'
    },
    {
      id: "23",
      name: "Deadpool",
      back: "assets/backs/023.png",
      minis: ["assets/minis/023.png"],
      desc: "Deadpool is a joke character, he is to Unmatched what Unglued is to Magic the Gathering.",
      ability: "After attacking, Deadpool recovers 1 health. Also, if his opponent's real name is Logan, all of his attacks are +5.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=U-1Ot_x4E7Q"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=NvZ6sxee6_o"
      }],
      set: ["Deadpool", "https://boardgamegeek.com/boardgameexpansion/335386/unmatched-deadpool"],
      deck: 'https://unmatched.cards/umdb/decks/deadpool',
      lore: 'https://en.wikipedia.org/wiki/Deadpool'
    },
    {
      id: "19",
      name: "Sun Wukong",
      back: "assets/backs/019.png",
      minis: ["assets/minis/019.png"],
      desc: "Sun Wukong is a melee fighter with three <i>Clones</i> as sidekicks. He can take damage to put clones out. All of Sun Wukong’s cards can be used for him or any of his <i>Clones</i>.",
      ability: "At the start of his turn, he may take 1 damage to summon a <i>Clone</i> in an empty space adjacent to him. He does not start with any <i>Clones</i> on the board.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=JUVKcHjIVa8"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=DpTCxwW3w_E"
      }],
      set: ["Unmatched: Battle of Legends, Volume Two", "https://boardgamegeek.com/boardgame/335764/unmatched-battle-legends-volume-two"],
      deck: 'https://unmatched.cards/umdb/decks/sun-wukong',
      lore: 'https://en.wikipedia.org/wiki/Monkey_King'
    },
    {
      id: "20",
      name: "Yennenga",
      back: "assets/backs/020.png",
      minis: ["assets/minis/020.png"],
      desc: "Yennenga is a ranged fighter, supported by 2 ranged <i>Archers</i> sidekicks. She has many effects based on after-battle movement. She can redirect damage assigned to her to one of her <i>Archer</i> sidekicks, which she can also resurrect.",
      ability: "If Yennenga would take damage, she may assign any amount of that damage to one or more <i>Archers</i> in her zone instead.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=1y_oc8YJdOQ"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=LCGjjjleRBs"
      }],
      set: ["Unmatched: Battle of Legends, Volume Two", "https://boardgamegeek.com/boardgame/335764/unmatched-battle-legends-volume-two"],
      deck: 'https://unmatched.cards/umdb/decks/yennenga',
      lore: 'https://en.wikipedia.org/wiki/Yennenga'
    },
    {
      id: "21",
      name: "Achilles",
      back: "assets/backs/021.png",
      minis: ["assets/minis/021.png"],
      desc: "Achilles is a melee fighter, supported by <i>Patroclus</i> sidekick. If <i>Patroclus</i> is defeated, Achilles becomes much stronger and can draw a card for every battle he wins.",
      ability: "When <i>Patroclus</i> is defeated, he discards 2 random cards. While <i>Patroclus</i> is defeated, he adds +2 to the value of all of his attacks. When he wins a combat, he draws 1 card.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=QLeuule53S8"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=WuJrxr3LlAI"
      }],
      set: ["Unmatched: Battle of Legends, Volume Two", "https://boardgamegeek.com/boardgame/335764/unmatched-battle-legends-volume-two"],
      deck: 'https://unmatched.cards/umdb/decks/achilles',
      lore: 'https://en.wikipedia.org/wiki/Achilles'
    },
    {
      id: "22",
      name: "Bloody Mary",
      back: "assets/backs/022.png",
      minis: ["assets/minis/022.png"],
      desc: "Bloody Mary is a melee fighter who cares about the number 3. If she has 3 cards in her hand at the beginning of her turn, she can get an extra action. Some of her cards are devastating if done as a third action. Since she's in a mirror, she can trigger some attacks with opponent's cards values.",
      ability: "At the start of her turn, if she has exactly 3 cards her hand, she gains 1 action.",
      guides: [{
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=0avhxkitc7A"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=pEL31AareYM"
      }],
      set: ["Unmatched: Battle of Legends, Volume Two", "https://boardgamegeek.com/boardgame/335764/unmatched-battle-legends-volume-two"],
      deck: 'https://unmatched.cards/umdb/decks/bloody-mary',
      lore: 'https://en.wikipedia.org/wiki/Bloody_Mary_folklore_in_popular_culture'
    },
    {
      id: "31",
      name: "Ghost Rider",
      back: "assets/backs/031.png",
      minis: ["assets/minis/031.png"],
      desc: "Ghost Rider is a melee fighter using <i>Hellfire</i> tokens to increase his cards' effects and roll over his opponent's face, doing them damage by doing so.",
      ability: "Ghost Rider starts the game with 5 <i>Hellfire</i>. When he maneuvers he may spend 1 <i>Hellfire</i>. If he does, he increases his movement to 4 and may move through opposing fighters. Then he deals 1 damage to each opposing fighter he moved through.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=LC0t8eQMkI4"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=VdCuD5Bw7-M"
      }],
      set: ["Redemption Row", "https://boardgamegeek.com/boardgame/326933/unmatched-redemption-row"],
      deck: 'https://unmatched.cards/umdb/decks/ghost-rider',
      lore: 'https://en.wikipedia.org/wiki/Ghost_Rider'
    },
    {
      id: "32",
      name: "Luke Cage",
      back: "assets/backs/032.png",
      minis: ["assets/minis/032.png"],
      desc: "Luke Cage is a melee fighter, supported by ranged Misty Knight sidekick. In general, from his ability and also card's effects, he is very good at defending.",
      ability: "Luke Cage takes 2 less combat damage from attacks. When defending, Luke Cage wins combat if he takes no damage, even if he didn't play a card.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=_ZgWf_PRMrg"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=GVdtYMAT7lA"
      }],
      set: ["Redemption Row", "https://boardgamegeek.com/boardgame/326933/unmatched-redemption-row"],
      deck: 'https://unmatched.cards/umdb/decks/luke-cage',
      lore: 'https://en.wikipedia.org/wiki/Luke_Cage'
    },
    {
      id: "33",
      name: "Moon Knight",
      back: "assets/backs/033.png",
      minis: ["assets/minis/033.png"],
      desc: "Moon Knight is a melee fighter who switches every turn between his different forms that have different abilities.",
      ability: "As <i>Moon Knight</i>, at the start of your turn, move up to 2 spaces. As <i>Khonshu</i> adds +2 to the value of attack cards. He does not take damage from effects other than combat. As <i>Mr. Knight</i>, adds +1 to all defense values. As <i>all of them</i>: at the end of turn, change to your next identity.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=bVbjc44uzwU"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=yIotoLiC-QU"
      }],
      set: ["Redemption Row", "https://boardgamegeek.com/boardgame/326933/unmatched-redemption-row"],
      deck: 'https://unmatched.cards/umdb/decks/moon-knight',
      lore: 'https://en.wikipedia.org/wiki/Moon_Knight'
    },
    {
      id: "28",
      name: "Bullseye",
      back: "assets/backs/028.png",
      minis: ["assets/minis/028.png"],
      desc: "Bullseye is a ranged fighter also able to attack 5 spaces away ignoring zones. A lot of his cards care about having already won a combat during the turn to trigger additional effects or increase values, and he has multiple ways to attack with large numbers.",
      ability: "Bullseye can attack from up to 5 spaces away (ignoring zones). This is in addition to also being able to attack in his zone.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=P_Kuca-8IA0"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=1B5X3cK6hl8"
      }],
      set: ["Hell's Kitchen", "https://boardgamegeek.com/boardgame/326934/unmatched-hells-kitchen"],
      deck: 'https://unmatched.cards/umdb/decks/bullseye',
      lore: 'https://en.wikipedia.org/wiki/Bullseye_(character)'
    },
    {
      id: "29",
      name: "Daredevil",
      back: "assets/backs/029.png",
      minis: ["assets/minis/029.png"],
      desc: "Daredevil is a melee fighter able to blind boost his cards. He has 22 cards instead of 30, but he can easily re-use cards from his discard pile. His fight style cares about being on the edge (of remaining cards in the deck, of cards in hand...) to get powerful effects.",
      ability: "During combat, if Daredevil has 2 or fewer cards in his hand, he may blind boost his attack or defense.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=w_diciqXDqQ"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=7b4lHIAATAU"
      }],
      set: ["Hell's Kitchen", "https://boardgamegeek.com/boardgame/326934/unmatched-hells-kitchen"],
      deck: 'https://unmatched.cards/umdb/decks/daredevil',
      lore: 'https://en.wikipedia.org/wiki/Daredevil_(Marvel_Comics_character)'
    },
    {
      id: "30",
      name: "Elektra",
      back: "assets/backs/030.png",
      minis: ["assets/minis/030.png"],
      desc: "Elektra is a melee fighter, supported by 4 <i>The Hand</i> sidekicks. Once knocked down to zero hit points, she resurrects as a more powerful version of herself, triggering special abilities on her cards.",
      ability: "The first time Elektra is defeated, remove her and all <i>The Hand</i> from the board. Next turn, she resurrects: she flips her health dial, shuffles her discard pile into her deck. Place her and all Hand back onto the board with each fighter in a different zone. She now resolves <i>Resurrect</i> effects on her cards.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=Un3FXcyDqlU"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=Xn6IPWpaDaY"
      }],
      set: ["Hell's Kitchen", "https://boardgamegeek.com/boardgame/326934/unmatched-hells-kitchen"],
      deck: 'https://unmatched.cards/umdb/decks/elektra',
      lore: 'https://en.wikipedia.org/wiki/Elektra_(character)'
    },
    {
      id: "26",
      name: "T. Rex",
      back: "assets/backs/026.png",
      minis: ["assets/minis/026.png"],
      desc: "T. Rex is a large melee fighter able to attack up to 2 spaces away. She has multiple possibilities to boost her cards.",
      ability: "T-Rex is a large fighter: she can attack up to 2 spaces away. At the end of your turn, draw a card.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=lbS2xd_1A00"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=rIs1F2miyKc"
      }],
      set: ["Jurassic Park - Sattler vs. T-Rex", "https://boardgamegeek.com/boardgame/284778/unmatched-jurassic-park-dr-sattler-vs-t-rex"],
      deck: 'https://unmatched.cards/umdb/decks/t-rex',
      lore: 'https://en.wikipedia.org/wiki/Rexy'
    },
    {
      id: "27",
      name: "Dr. Sattler",
      back: "assets/backs/027.png",
      minis: ["assets/minis/027.png"],
      desc: "Dr. Sattler is a melee fighter, supported by Dr. Malcolm melee sidekick. They can heal for a huge amount of life. They leverage <i>Insight</i> tokens that they place on the board.",
      ability: "After Dr. Sattler or Dr. Malcolm move, they place an <i>Insight</i> token in their new space. They have 5 <i>Insight</i> tokens. Whenever either of them moves to a new space, place an <i>Insight</i> token in their new space. Those tokens have no effect themselves but some cards interact with them.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=Ft4JNGHuPp8"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=MpJJ9cCHL3s&t=1581s"
      }],
      set: ["Jurassic Park - Sattler vs. T-Rex", "https://boardgamegeek.com/boardgame/284778/unmatched-jurassic-park-dr-sattler-vs-t-rex"],
      deck: 'https://unmatched.cards/umdb/decks/dr-ellie-sattler',
      lore: 'https://en.wikipedia.org/wiki/Ellie_Sattler'
    },
    {
      id: "24",
      name: "Houdini",
      back: "assets/backs/024.png",
      minis: ["assets/minis/024.png"],
      desc: "Houdini and his sidekick Bess are melee characters. When Houdini boosts his maneuver, he can move to any space on the board. Some of his cards have an ability attached to their boost value, which triggers when used as a boost.",
      ability: "When he maneuvers and <i>Boost</i> it, he may teleport in any free space instead of moving. Bess moves as normal.",
      guides: [{
        name: "Lord of the Board", url: "https://www.youtube.com/watch?v=i47pLhncBlc&t=546s"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=nexf5onWJeI"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=UAM84ZlFD4A"
      }],
      set: ["Houdini vs. The Genie", "https://boardgamegeek.com/boardgame/354544/unmatched-houdini-vs-genie"],
      deck: 'https://unmatched.cards/umdb/decks/harry-houdini',
      lore: 'https://en.wikipedia.org/wiki/Harry_Houdini'
    },
    {
      id: "25",
      name: "The Genie",
      back: "assets/backs/025.png",
      minis: ["assets/minis/025.png"],
      desc: "The Genie is a ranged fighter who deals more damage when adjacent to the opponent. He can draw a lot of cards and discard them to play more actions.",
      ability: "At the start of his turn, he may discard 1 card to gain 1 action.",
      guides: [{
        name: "Lord of the Board", url: "https://www.youtube.com/watch?v=i47pLhncBlc&t=96s"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=enaUsIlGbjU"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=eA2MfPV0wp0"
      }],
      set: ["Houdini vs. The Genie", "https://boardgamegeek.com/boardgame/354544/unmatched-houdini-vs-genie"],
      deck: 'https://unmatched.cards/umdb/decks/the-genie',
      lore: 'https://en.wikipedia.org/wiki/Genies_in_popular_culture'
    },
    {
      id: "34",
      name: "Squirrel Girl",
      back: "assets/backs/034.png",
      minis: ["assets/minis/034.png"],
      desc: "Squirrel Girl is a melee fighter, supported by 8 <i>Squirrels</i> small fighters sidekicks. Small fighters can be stacked up to 4 in a single space, even if there is already a normal fighter on it. They can also move through enemies. She cares about having a lot of squirrels around her or enemies to trigger improved card effects.",
      ability: "At the start of her turn, she summons a squirrel in a space adjacent to her. Squirrels are small fighters.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=YxARGfUu0vQ"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=o5qHzhbOw7E"
      }],
      set: ["Teen Spirit", "https://boardgamegeek.com/boardgame/326936/unmatched-teen-spirit"],
      deck: "https://unmatched.cards/umdb/decks/squirrel-girl",
      lore: 'https://en.wikipedia.org/wiki/Squirrel_Girl'
    },
    {
      id: "35",
      name: "Cloak & Dagger",
      back: "assets/backs/035.png",
      minis: ["assets/minis/035a.png", "assets/minis/035b.png"],
      desc: "Cloak & Dagger are melee fighters that have a lot of interactions: they can bounce an opponent from one to the other, they can balance their life points total between them, heal each other, they can swap their places and more.",
      ability: "After attacking, if <i>Cloak</i> dealt at least 2 combat damage, his opponent discards 1 card. After attacking, if <i>Dagger</i> dealt at least 2 combat damage, gain 1 action.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=L4lKirHrfSk"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=5bgmQGRcLyM"
      }],
      set: ["Teen Spirit", "https://boardgamegeek.com/boardgame/326936/unmatched-teen-spirit"],
      deck: "https://unmatched.cards/umdb/decks/cloak-and-dagger",
      lore: 'https://en.wikipedia.org/wiki/Cloak_and_Dagger_(characters)'
    },
    {
      id: "36",
      name: "Ms. Marvel",
      back: "assets/backs/036.png",
      minis: ["assets/minis/036.png"],
      desc: "Ms Marvel is a melee fighter who cares about the zone(s) she's in and about having a large hand.",
      ability: "At the start of her turn, she may move 1 space. She can attack from up to 2 spaces away, ignoring zones.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=kIBhEhVQYHs"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=L8RoDnRiRHg"
      }],
      set: ["Teen Spirit", "https://boardgamegeek.com/boardgame/326936/unmatched-teen-spirit"],
      deck: "https://unmatched.cards/umdb/decks/ms-marvel",
      lore: 'https://en.wikipedia.org/wiki/Kamala_Khan'
    },
    {
      id: "41",
      name: "Black Widow",
      back: "assets/backs/041.png",
      minis: ["assets/minis/041.png"],
      desc: "Black Widow and her Maria Hill sidekick are ranged fighters. She tries to meet her special Missions cards condition to obtain different kind of advantages. She has multiple ways to save her sidekick's life.",
      ability: "Black Widow has special scheme cards called Missions requiring special conditions to be played. Whenever a mission is completed, she gets a new one. She starts the game with a mission in her hand.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=-XFE0Kg7hpI"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=4YvCpuvREaU"
      }],
      set: ["For King and Country", "https://boardgamegeek.com/boardgame/326937/unmatched-king-and-country"],
      deck: "https://unmatched.cards/umdb/decks/black-widow",
      lore: ''
    },
    {
      id: "42",
      name: "Black Panther",
      back: "assets/backs/042.png",
      minis: ["assets/minis/042.png"],
      desc: "Black Panther is a melee fighter and his sidekick Shuri a ranged one. He can steal opponents cards from the top of their deck and use them later to Boost for movement or some of his attacks. He has multiple attacks that can be boosted.",
      ability: "Whenever he Boosts, he draws 1 card. Some of his cards effects lets him store opponents cards in his Vibranium Suit. He can use them to Boost.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=CP3_EH6tWu8"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=3cIPViTdsnQ"
      }],
      set: ["For King and Country", "https://boardgamegeek.com/boardgame/326937/unmatched-king-and-country"],
      deck: "https://unmatched.cards/umdb/decks/black-panther",
      lore: ''
    },
    {
      id: "43",
      name: "Winter Soldier",
      back: "assets/backs/043.png",
      minis: ["assets/minis/043.png"],
      desc: "Winter Soldier is a ranged fighter. His cards effects cannot be canceled but the drawback is that a lot of them include effects beneficial for his opponent. Those unwanted effects can be mitigated when playing well.",
      ability: "Effects on his cards cannot be canceled.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=3mpB5W2Df38"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=DrluaIQtAvc"
      }],
      set: ["For King and Country", "https://boardgamegeek.com/boardgame/326937/unmatched-king-and-country"],
      deck: "https://unmatched.cards/umdb/decks/winter-soldier",
      lore: ''
    },
    {
      id: "44",
      name: "Spider-Man",
      back: "assets/backs/044.png",
      minis: ["assets/minis/044.png"],
      desc: "Spider-Man is a melee fighter able to foresee the attacks thrown at him. If player knows well his opponent's deck, it can be devastating. He has multiple cards allowing him to move in any space in his zone.",
      ability: "When an opponent attacks him, before he plays a defense card, they must tell the printed value of their card.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=gEgLSIm-vdg"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=U4bP5UtCw00"
      }],
      set: ["Brains and Brawn", "https://boardgamegeek.com/boardgame/383467/unmatched-brains-and-brawn"],
      deck: "https://unmatched.cards/umdb/decks/spider_man",
      lore: 'https://fr.wikipedia.org/wiki/Spider-Man'
    },
    {
      id: "45",
      name: "She-Hulk",
      back: "assets/backs/045.png",
      minis: ["assets/minis/045.png"],
      desc: "She-Hulk is a melee fighter. Her ability to deal direct unconditional damages every turn combined with her incredibly high number of life points makes her very dangerous.",
      ability: "At the start of her turn, she may discard a card to deal damage equal to its Boost value to a fighter in her zone.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=muCiR09GZgQ"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=4Nw6pdTepN4"
      }],
      set: ["Brains and Brawn", "https://boardgamegeek.com/boardgame/383467/unmatched-brains-and-brawn"],
      deck: "https://unmatched.cards/umdb/decks/she_hulk",
      lore: 'https://fr.wikipedia.org/wiki/She-Hulk_:_Avocate'
    },
    {
      id: "46",
      name: "Doctor Strange",
      back: "assets/backs/046.png",
      minis: ["assets/minis/046.png"],
      desc: "Doctor Strange and his sidekick Wong are ranged fighters. His ability and heal cards allow him to use his life as a resource to draw cards. His cards are full of tricks like forcing his opponent to randomly change a played card or gamble on his top deck card values to deal more damages (or do none).",
      ability: "After each combat, if he played a card, he may deal 1 damage to himself. If he does, he puts that card on the bottom of his deck and draws 1 card.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=0gmfVRPKRic"
      }, {
        name: "Baked Goods", url: "https://www.youtube.com/watch?v=FxczZKOimG8"
      }],
      set: ["Brains and Brawn", "https://boardgamegeek.com/boardgame/383467/unmatched-brains-and-brawn"],
      deck: "https://unmatched.cards/umdb/decks/doctor_strange",
      lore: 'https://fr.wikipedia.org/wiki/Docteur_Strange'
    },
    {
      id: "37",
      name: "Nikola Tesla",
      back: "assets/backs/037.png",
      minis: ["assets/minis/037.png"],
      desc: "Nikola Tesla is a ranged fighter juggling with the charges of his two coils to get additional bonuses and interesting effects from his cards.",
      ability: "He has two coils and starts the game with one charged. At the end of his turn, he charges one coil. At the start of his turn, if both coils are charged, he deals 1 damage to each opposing fighter adjacent to him and he moves them up to 1 space.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=L3K-MRw84to"
      }],
      set: ["Unmatched Adventures: Tales to Amaze", "https://boardgamegeek.com/boardgame/381297/unmatched-adventures-tales-amaze"],
      deck: "https://unmatched.cards/umdb/decks/nikola-tesla",
      lore: 'https://en.wikipedia.org/wiki/Nikola_Tesla'
    },
    {
      id: "38",
      name: "Dr. Jill Trent",
      back: "assets/backs/038.png",
      minis: ["assets/minis/038.png"],
      desc: "Dr. Jill Trent and her side kick Daisy are melee fighters. She can choose between two different stances represented by her active gadget.",
      ability: "At the start of her turn, she activates one of her two gadgets. Whenever she attacks, the active gadget's effect resolves.<br/>- Gadget Hypnoray Blaster: DURING COMBAT: <i>If your card's printed value is lower than your opponent's, reveal the top card of your opponent's deck. Increase the value of your attack by the BOOST value of the revealed card.</i><br/>- Gadget Ultrabiotic Tonic: <i>AFTER COMBAT: If your card's printed value is higher than your opponent's, Jill Trent Recovers 1 health.</i>",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=UQ4SBsbwdoE"
      }],
      set: ["Unmatched Adventures: Tales to Amaze", "https://boardgamegeek.com/boardgame/381297/unmatched-adventures-tales-amaze"],
      deck: "https://unmatched.cards/umdb/decks/dr-jill-trent",
      lore: { name: 'The Revengerists', url: 'https://revengerists.fandom.com/wiki/Jill_Trent,_Science_Sleuth' }
    },
    {
      id: "39",
      name: "The Golden Bat",
      back: "assets/backs/039.png",
      minis: ["assets/minis/039.png"],
      desc: "The Golden Bat is a melee fighter who can hit hard when attacking before doing any maneuver. He is also quite fast with 3 movement and has a couple of ways to move around with some of his cards effects.",
      ability: "If he hasn't taken a Maneuver action this turn, he adds +2 to the value of his attacks.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=cmg7TOSyugs"
      }],
      set: ["Unmatched Adventures: Tales to Amaze", "https://boardgamegeek.com/boardgame/381297/unmatched-adventures-tales-amaze"],
      deck: "https://unmatched.cards/umdb/decks/golden-bat",
      lore: 'https://en.wikipedia.org/wiki/The_Golden_Bat'
    },
    {
      id: "40",
      name: "Annie Christmas",
      back: "assets/backs/040.png",
      minis: ["assets/minis/040.png"],
      desc: "Annie Christmas is a melee fighter and her sidekick Charlie a ranged one. Annie Christmas can hit particularly hard when she has less life point than her opponent and with direct damages from card effects.",
      ability: "She adds +2 to the value of her attacks if she has less health than the defender.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=XesXRXsPPeQ"
      }],
      set: ["Unmatched Adventures: Tales to Amaze", "https://boardgamegeek.com/boardgame/381297/unmatched-adventures-tales-amaze"],
      deck: "https://unmatched.cards/umdb/decks/annie-christmas",
      lore: 'https://en.wikipedia.org/wiki/Annie_Christmas'
    },
    {
      id: "47",
      name: "Oda Nobunaga",
      back: "assets/backs/047.png",
      minis: ["assets/minis/047.png"],
      desc: "Oda Nobunaga is a melee fighter who has 2 melee sidekicks with 6 life points. Oda's ability is already giving a bonus to friendly fighters in his zone is already good by itself and it becomes extremely impactful when playing with other friendly heroes (2 vs 2 or collaborative).",
      ability: "Other friendly fighters in his zone add +1 to the value of their played combat cards.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=MssOtIW4THA"
      }],
      set: ["Sun's Origin", "https://boardgamegeek.com/boardgame/383469/unmatched-suns-origin"],
      deck: "https://unmatched.cards/umdb/decks/oda-nobunaga",
      lore: 'https://fr.wikipedia.org/wiki/Oda_Nobunaga'
    },
    {
      id: "48",
      name: "Tomoe Gozen",
      back: "assets/backs/048.png",
      minis: ["assets/minis/048.png"],
      desc: "Tomoe Gozen is a ranged fighter who paradoxically tries to be adjacent to her opponents to get the most out of her cards. And if flee too far, they get shot by her attack of opportunity special ability.",
      ability: "When an opposing hero leaves her zone, deal 1 damage to that hero.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=C0FJXyHQ2yE"
      }],
      set: ["Sun's Origin", "https://boardgamegeek.com/boardgame/383469/unmatched-suns-origin"],
      deck: "https://unmatched.cards/umdb/decks/tomoe-gozen",
      lore: 'https://fr.wikipedia.org/wiki/Tomoe_Gozen'
    },
    {
      id: "49",
      name: "William Shakespeare",
      back: "assets/backs/049.png",
      minis: ["assets/minis/049.png"],
      desc: "A ranged/mixed attacker who gains power by composing iambic‑pentameter—play cards sequentially to build ten‑syllable lines and trigger dramatic effects. His gimmick rewards careful planning and line‑completion, offering powerful combos once you hit that poetic sweet spot.",
      ability: "After you attack or defend, add your card to your line.<br/>When you line has 10 or more syllables, discard your line. If there are exactly 10 syllables, resolve the completion effect on the last card.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=QosmjsUDPnA"
      }],
      set: ["Slings and Arrows", "https://boardgamegeek.com/boardgame/415945/unmatched-slings-and-arrows"],
      deck: "https://unmatched.cards/umdb/decks/william-shakespeare",
      lore: 'https://en.wikipedia.org/wiki/William_Shakespeare'
    },
    {
      id: "50",
      name: "The Wayward Sisters",
      back: "assets/backs/050.png",
      minis: ["assets/minis/050a.png", "assets/minis/050b.png", "assets/minis/050c.png"],
      desc: "A trio of witches (no sidekicks) who mix cards into a shared cauldron instead of discarding them, triggering potent spells when the right ingredients accumulate. Their win condition relies on synergizing ingredient builds and timing big magic bursts for maximum board control.",
      ability: "Your cards go into your cauldron instead of your discard pile. After you attack, you may cast one spell that you have the ingredients for. If you do, discard all the cards in your cauldron.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=D2R-suPXFL4"
      }],
      set: ["Slings and Arrows", "https://boardgamegeek.com/boardgame/415945/unmatched-slings-and-arrows"],
      deck: "https://unmatched.cards/umdb/decks/the-wayward-sisters",
      lore: 'https://en.wikipedia.org/wiki/Three_Witches'
    },
    {
      id: "51",
      name: "Hamlet",
      back: "assets/backs/051.png",
      minis: ["assets/minis/051.png"],
      desc: "A melee-focused fighter supported by Rosencrantz & Guildenstern, who toggles between “To Be” (draw more cards when moving) and “Not To Be” (deal self‑damage to boost attack power). His core strategy is to balance life and cards—bait hits to empower stronger counters.",
      ability: "At the start of your turn, choose TO BE or NOT TO BE. If you choose NOT TO BE, deal 2 damage to one of your fighters.<br/>-TO BE: When you maneuver, draw 1 additional card.<br/>-NOT TO BE: Add +2 to the value of Hamlet's attacks.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=1Igd5MYvkAU"
      }],
      set: ["Slings and Arrows", "https://boardgamegeek.com/boardgame/415945/unmatched-slings-and-arrows"],
      deck: "https://unmatched.cards/umdb/decks/hamlet",
      lore: 'https://en.wikipedia.org/wiki/Hamlet'
    },
    {
      id: "52",
      name: "Titania",
      back: "assets/backs/052.png",
      minis: ["assets/minis/052.png"],
      desc: "Titania attacks as a ranged fighter and empowers her melee sidekick Oberon using Glamour cards that level up their strikes, but these resources are finite and must be spent judiciously. Best used by weaving fairies around the battlefield and timing Glamour plays to maximize each attack.",
      ability: "If you do not have a face-up glamour at the start of your turn, flip the top card of your glamour deck face-up. Its effect is ongoing while it remains face-up.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=adALr5SJjLc"
      }],
      set: ["Slings and Arrows", "https://boardgamegeek.com/boardgame/415945/unmatched-slings-and-arrows"],
      deck: "https://unmatched.cards/umdb/decks/titania",
      lore: 'https://en.wikipedia.org/wiki/Titania_(A_Midsummer_Night%27s_Dream)'
    },
    {
      id: "53",
      name: "Geralt of Rivia",
      back: "assets/backs/053.png",
      minis: ["assets/minis/053a.png", "assets/minis/053b.png"],
      desc: "A melee-focused fighter supported by the ranged bard Dandelion sidekick, Geralt uses customizable gear (swords, armor, potions) to adapt to any matchup and gain situational advantages. His strength lies in tailor-making your deck during setup to counter your opponent’s strengths.",
      ability: "At the start of the game, choose your gear. Select a POTION, ARMOR, and SWORD, and shuffle 2 copies of each into your deck.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=WVVyPrw-XeE"
      }],
      set: ["Steel and Silver", "https://boardgamegeek.com/boardgame/411860/unmatched-the-witcher-steel-and-silver"],
      deck: "https://unmatched.cards/umdb/decks/geralt-of-rivia",
      lore: 'https://en.wikipedia.org/wiki/Geralt_of_Rivia'
    },
    {
      id: "54",
      name: "Ciri",
      back: "assets/backs/054.png",
      minis: ["assets/minis/054.png"],
      desc: "A fast-moving melee combatant with her unicorn sidekick Ihuarraquax, Ciri harnesses raw power from “Source” cards—each played into her discard pile —and once seven are there, her attacks become unblockable. Players should build momentum early while dancing around the board, then strike decisively before the deck runs out. ",
      ability: "Effects on Ciri's cards cannot be canceled.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=_0qphBhbAeI"
      }],
      set: ["Steel and Silver", "https://boardgamegeek.com/boardgame/411860/unmatched-the-witcher-steel-and-silver"],
      deck: "https://unmatched.cards/umdb/decks/ciri",
      lore: 'https://en.wikipedia.org/wiki/List_of_characters_in_The_Witcher_series#Ciri_of_Cintra'
    },
    {
      id: "55",
      name: "Ancient Leshen",
      back: "assets/backs/055.png",
      minis: ["assets/minis/055.png"],
      desc: "A ranged monster with quick wolf sidekicks that harass opponents, the Leshen excels at positional play and board control, with abilities like “Heart of the Forest” that boost his presence and allow teleportation via crows. Maintain your wolves and leverage his ranged power to pressure foes across the battlefield.",
      ability: "Add +3 to the value of the Leshen's attacks if it already attacked this turn.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=_CzsjNMdhQk"
      }],
      set: ["Steel and Silver", "https://boardgamegeek.com/boardgame/411860/unmatched-the-witcher-steel-and-silver"],
      deck: "https://unmatched.cards/umdb/decks/ancient-leshen",
      lore: 'https://en.wikipedia.org/wiki/Leshy'
    },
    {
      id: "56",
      name: "Eredin",
      back: "assets/backs/056.png",
      minis: ["assets/minis/056.png"],
      desc: "A melee-centered villain commanding the Wild Hunt, Eredin gains strength from the riders he summons and sacrifices, turning battlefield losses into bruising blows. His strategy thrives on sustaining and bolstering sidekicks to amplify his own assault, while teleporting across the board to strike decisively.",
      ability: "While all of your Red Riders are defeated, Eredin is ENRAGED. <br/>If Eredin is ENRAGED, add +1 to the value of your combat cards, and your move value is 3.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=3is-DUhamNg"
      }],
      set: ["Realms Fall","https://boardgamegeek.com/boardgame/411861/unmatched-the-witcher-realms-fall"],
      deck: "https://unmatched.cards/umdb/decks/eredin",
      lore: 'https://en.wikipedia.org/wiki/List_of_characters_in_The_Witcher_series#Eredin_Br%C3%A9acc_Glas_(King_of_the_Wild_Hunt)'
    },
    {
      id: "57",
      name: "Philippa",
      back: "assets/backs/057.png",
      minis: ["assets/minis/057.png"],
      desc: "This powerful ranaged sorceress wields explosive magical control with mixed-range attacks, never running out of cards thanks to clever deck recursion. Her gimmick revolves around relentless tempo—dumping spells and looping them to overwhelm opponents with an endless avalanche.",
      ability: "At the end of your turn, you may draw until you have a hand of 4 cards.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=f5sD4kGI0Ls"
      }],
      set: ["Realms Fall","https://boardgamegeek.com/boardgame/411861/unmatched-the-witcher-realms-fall"],
      deck: "https://unmatched.cards/umdb/decks/philippa",
      lore: 'https://en.wikipedia.org/wiki/List_of_characters_in_The_Witcher_series#Philippa_Eilhart'
    },
    {
      id: "58",
      name: "Yennefer & Triss",
      back: "assets/backs/058.png",
      minis: ["assets/minis/058a.png", "assets/minis/058b.png"],
      desc: "A ranged duo who embody a new Unmatched twist: you choose who leads and who supports each game, unlocking distinct special abilities that suit your matchup. Whether it's Yennefer’s raw arcane control or Triss’s agile, fiery assaults, their strength lies in fluid role-swapping to maintain battlefield supremacy.",
      ability: "At the beginning of the game, choose Yennefer or Triss to be your hero. <br/>-Sorceress of Vengerberg<br/>IMMEDIATELY: If Yennefer is attacking, you may BOOST her attack. (This effect cannot be canceled.)<br/>-Merigold the Fearless<br/>After Triss plays a scheme, deal 2 damage to a fighter adjacent to Triss.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=wXQtUyryXr0"
      }],
      set: ["Realms Fall","https://boardgamegeek.com/boardgame/411861/unmatched-the-witcher-realms-fall"],
      deck: "https://unmatched.cards/umdb/decks/yennefer-triss",
      lore: 'https://en.wikipedia.org/wiki/List_of_characters_in_The_Witcher_series#Triss_Merigold'
    },
    {
      id: "59",
      name: "Chupacabra",
      back: "assets/backs/059.png",
      minis: ["assets/minis/059.png"],
      desc: "",
      ability: "After you attack, you may draw a card.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=zVhfEmAmdnE"
      }, {
        name: "Taytertots", url: "https://www.youtube.com/watch?v=BZaNvq6CxD4"
      }
      ],
      set: ["Battle of Legends, Volume Three","https://boardgamegeek.com/boardgame/439765/unmatched-battle-of-legends-volume-three"],
      deck: "https://unmatched.cards/umdb/decks/chupacabra",
      lore: "https://en.wikipedia.org/wiki/Chupacabra"
    },
    {
      id: "60",
      name: "Blackbeard",
      back: "assets/backs/060.png",
      minis: ["assets/minis/060.png"],
      desc: "",
      ability: "Start the game with 1 doubloon in the treasury, you have the other 2. <br/>- At the start of your turn, you may pay 1 doubloon to gain 1 action. <br/>- When Blackbeard takes combat damage, pay 1 doubloon.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=q_t1NjQtAog"
      }, {
        name: "Taytertots", url: "https://www.youtube.com/watch?v=ta8RRGFj0jI"
      }],
      set: ["Battle of Legends, Volume Three","https://boardgamegeek.com/boardgame/439765/unmatched-battle-of-legends-volume-three"],
      deck: "https://unmatched.cards/umdb/decks/blackbeard",
      lore: "https://en.wikipedia.org/wiki/Blackbeard"
    },
    {
      id: "61",
      name: "Pandora",
      back: "assets/backs/061.png",
      minis: ["assets/minis/061.png"],
      desc: "",
      ability: "Do not start with any Kakodamons on the board. At the start of your turn, open Pandora's box. <br/>Pandora's Box is a deck of seven cards called MISERIES. When you open Pandora's Box, reveal the top card and resolve its effect if any.) You may keep revealing and resolving additional cards, one at a time, until you choose to stop. If there are three or more total feathers on revealed cards, you must stop revealing, then Pandora takes 1 damage for each revealed MISERY. At the end of your turn, shuffle all revealed MISERIES back into Pandora's Box.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=Si9wSXOe0mw"
      }, {
        name: "Taytertots", url: "https://www.youtube.com/watch?v=AHfkFbLxFhQ"
      }],
      set: ["Battle of Legends, Volume Three","https://boardgamegeek.com/boardgame/439765/unmatched-battle-of-legends-volume-three"],
      deck: "https://unmatched.cards/umdb/decks/pandora",
      lore: "https://en.wikipedia.org/wiki/Pandora"
    },
    {
      id: "62",
      name: "Loki",
      back: "assets/backs/062.png",
      minis: ["assets/minis/062.png"],
      desc: "",
      ability: "After you play a TRICK, put that card into your opponent's hand instead of your discord pile. If an opponent discards a TRICK from their hand, return that card to your hand or the top of your deck. Add +1 to your move value for each TRICK in your opponents hands.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=Dau1USHCAr4"
      }, {
        name: "Taytertots", url: "https://www.youtube.com/watch?v=nVwG9oZvqSo"
      }],
      set: ["Battle of Legends, Volume Three","https://boardgamegeek.com/boardgame/439765/unmatched-battle-of-legends-volume-three"],
      deck: "https://unmatched.cards/umdb/decks/loki",
      lore: "https://en.wikipedia.org/wiki/Loki"
    },
    {
      id: "63",
      name: "Muhammad Ali",
      back: "assets/backs/063.png",
      minis: ["assets/minis/063.png"],
      desc: "Ali is a melee fighter able to switch between two different stances, one giving him some attack distance and the other stronger punches. He's often able to read opponent's mind by looking at his cards.",
      ability: "Ali has two stances: one allows him to attack 2 spaces away and empowers some of his cards, the other one gives him +2 to all of his attacks.",
      guides: [{
        name: "Unmatched Playtesting Guild", url: "https://www.youtube.com/watch?v=-CgEKhM_Hlc"
      }, {
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=ouQlosnRceI"
      }],
      set: ["Lee vs Ali","https://boardgamegeek.com/boardgame/428308/unmatched-lee-vs-ali"],
      deck: "https://www.the-unmatched.club/heroes/muhammad-ali",
      lore: "https://en.wikipedia.org/wiki/Muhammad_Ali"
    },
    {
      id: "64",
      name: "Raphael",
      back: "assets/backs/064.png",
      minis: ["assets/minis/064.png"],
      desc: "",
      ability: "On each of your turns, the first time you lose combat, gain 1 action.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=IUsvOVTWMaA"
      }, {
        name: "Taytertots", url: "https://www.youtube.com/watch?v=hNLOPvSJAIQ"
      }],
      set: ["Unmatched Adventures: Teenage Mutant Ninja Turtles","https://boardgamegeek.com/boardgame/425276/unmatched-adventures-teenage-mutant-ninja-turtles"],
      deck: "https://www.the-unmatched.club/heroes/raphael",
      lore: "https://en.wikipedia.org/wiki/Raphael_(Teenage_Mutant_Ninja_Turtles)"
    },
    {
      id: "65",
      name: "Donatello",
      back: "assets/backs/065.png",
      minis: ["assets/minis/065.png"],
      desc: "",
      ability: "When you maneuver, you may draw 2 cards instead of 1. If you do, put a card in your hand on the bottom of your deck. After you play an invention, tuck it under this card. For the rest of the game, its invention bonus aplies.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=Hg-PGA0_00o"
      }, {
        name: "Taytertots", url: "https://www.youtube.com/watch?v=68lXV-XjUPM"
      }],
      set: ["Unmatched Adventures: Teenage Mutant Ninja Turtles","https://boardgamegeek.com/boardgame/425276/unmatched-adventures-teenage-mutant-ninja-turtles"],
      deck: "https://www.the-unmatched.club/heroes/donatello",
      lore: "https://en.wikipedia.org/wiki/Donatello_(Teenage_Mutant_Ninja_Turtles)"
    },
    {
      id: "66",
      name: "Michelangelo",
      back: "assets/backs/066.png",
      minis: ["assets/minis/066.png"],
      desc: "",
      ability: "After you attack or scheme, draw 1 card. Your starting and maximum hand size is 3.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=qz_IjUhDkIs"
      }, {
        name: "Taytertots", url: "https://www.youtube.com/watch?v=4OvqCLSRhcw"
      }],
      set: ["Unmatched Adventures: Teenage Mutant Ninja Turtles","https://boardgamegeek.com/boardgame/425276/unmatched-adventures-teenage-mutant-ninja-turtles"],
      deck: "https://www.the-unmatched.club/heroes/michelangelo",
      lore: "https://en.wikipedia.org/wiki/Michelangelo_(Teenage_Mutant_Ninja_Turtles)"
    },
    {
      id: "67",
      name: "Leonardo",
      back: "assets/backs/067.png",
      minis: ["assets/minis/067.png"],
      desc: "",
      ability: "At the start of your turn, move any fighter up to 1 space.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=hR9D-w5OjlA"
      }, {
        name: "Taytertots", url: "https://www.youtube.com/watch?v=2CZ9xjRcsGQ"
      }],
      set: ["Unmatched Adventures: Teenage Mutant Ninja Turtles","https://boardgamegeek.com/boardgame/425276/unmatched-adventures-teenage-mutant-ninja-turtles"],
      deck: "https://www.the-unmatched.club/heroes/leonardo",
      lore: "https://en.wikipedia.org/wiki/Leonardo_(Teenage_Mutant_Ninja_Turtles)"
    },
    {
      id: "68",
      name: "Shredder",
      back: "assets/backs/068.png",
      minis: ["assets/minis/068a.png", "assets/minis/068b.png"],
      desc: "",
      ability: "At the start of your turn, deploy a Foot soldier to a path adjacent to a friendly fighter. <br/>You may attack opposing fighters adjacent to Foot soldiers.<br />If an opponent boosts their maneuver, they may remove any Foot soldier their hero moves through.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=74Bwr_GsPg0"
      }],
      set: ["Unmatched Adventures: Teenage Mutant Ninja Turtles - Shredder and Krang","https://boardgamegeek.com/boardgameexpansion/429397/unmatched-adventures-teenage-mutant-ninja-turtles"],
      deck: "https://www.the-unmatched.club/heroes/shredder",
      lore: "https://en.wikipedia.org/wiki/Shredder_(Teenage_Mutant_Ninja_Turtles)"
    },
    {
      id: "69",
      name: "Krang",
      back: "assets/backs/069.png",
      minis: ["assets/minis/069a.png", "assets/minis/069b.png"],
      desc: "",
      ability: "Krang has 3 doomsday machines. Start with one machine active. <br/>After you roll the Dice of Ultimate Destruction, you can deactive an active machine to reroll the die. <br/>Add +1 to your move value for each active machine.",
      guides: [{
        name: "To The Table Top!", url: "https://www.youtube.com/watch?v=EcKAE5XoihY"
      }],
      set: ["Unmatched Adventures: Teenage Mutant Ninja Turtles - Shredder and Krang","https://boardgamegeek.com/boardgameexpansion/429397/unmatched-adventures-teenage-mutant-ninja-turtles"],
      deck: "https://www.the-unmatched.club/heroes/krang",
      lore: "https://en.wikipedia.org/wiki/Krang"
    },
  ]
};
