const update = {
   thread: "https://www.twitter.com/us3rf",
    time: 1658132830854
}

const sources = [
    // Tier 1
    { name: 'Simon Stone', type: 'journalist', tier: 1, workplace: 'BBC', link: 'sistoney67' },
    { name: 'David Ornstein', type: 'journalist', tier: 1, workplace: 'TheAthletic', link: 'David_Ornstein' },
    { name: 'Laurie Whitwell', type: 'journalist', tier: 1, workplace: 'TheAthletic', link: 'lauriewhitwell' },
    { name: 'James Ducker', type: 'journalist', tier: 1, workplace: 'TheTelegraph', link: 'TelegraphDucker' },
    { name: 'Simon Peach', type: 'journalist', tier: 1, workplace: 'PA, TheIndependent', link: 'SimonPeach' },
    { name: 'Paul Hirst', type: 'journalist', tier: 1, workplace: 'TheTimes', link: 'hirstclass' },

    
    
    // Tier 2
    { name: 'Sami Mokbel', type: 'journalist', tier: 2, workplace: 'DailyMail', link: 'SamiMokbel81_DM' },
    { name: 'Rob Dawson', type: 'journalist', tier: 2, workplace: 'ESPN', link: 'RobDawsonESPN' },
    { name: 'Fabrizio Romano (exclusives only)', type: 'journalist', tier: 2, workplace: 'TheGuardian, youtuber', link: 'FabrizioRomano' },
    { name: 'Jason Burt', type: 'journalist', tier: 2, workplace: 'TheTelegraph', link: 'JBurtTelegraph' },
    { name: 'Charlotte Duncker', type: 'journalist', tier: 2, workplace: 'TheTimes', link: 'CharDuncker' },
    { name: 'Jonathan Northcroft', type: 'journalist', tier: 2, workplace: 'TheTimes', link: 'JNorthcroft' },
    { name: 'Adrian Kajumba', type: 'journalist', tier: 2, workplace: 'DailyMail', link: 'AdrianJKajumba' },
    
    // Tier 3
    { name: 'Andy Mitten', type: 'journalist', tier: 3, workplace: 'TheAthletic, TheNational', link: 'AndyMitten' },
    { name: 'Samuel Luckhurst', type: 'journalist', tier: 3, workplace: 'Manchester Evening News', link: 'samuelluckhurst' },
    { name: 'Tyrone Marshall', type: 'journalist', tier: 3, workplace: 'Manchester Evening News', link: 'TyMarshall_MEN' },
    { name: 'Alex Crook', type: 'journalist', tier: 3, workplace: 'talkSPORT', link: 'alex_crook' },
    { name: 'Chris Wheeler', type: 'journalist', tier: 3, workplace: 'DailyMail', link: 'ChrisWheelerDM' },
    { name: 'Gianluca Di Marzio (2 for Italy)', type: 'journalist', tier: 3, workplace: 'SkyItalia', link: 'DiMarzio' },
    { name: 'Mark Ogden', type: 'journalist', tier: 3, workplace: 'ESPN', link: 'MarkOgden_' },
    { name: 'Simon Mullock (exclusives only)', type: 'journalist', tier: 3, workplace: 'Mirror', link: 'MullockSMirror' },
    { name: 'Rich Fay (youth team)', type: 'journalist', tier: 3, workplace: 'Manchester Evening News', link: 'RichFay' },
    { name: 'Jamie Jackson', type: 'journalist', tier: 3, workplace: 'TheGuardian', link: 'jamiejackson___' },
    { name: 'Melissa Reddy (new)', type: 'journalist', tier: 3, workplace: 'SkySports', link: 'MelissaReddy_' },
    { name: 'Dharmesh Sheth', type: 'journalist', tier: 3, workplace: 'SkySports', link: 'skysports_sheth' },
    { name: 'Pol Ballus (new)', type: 'journalist', tier: 3, workplace: 'TheAthletic', link: 'polballus' },
    { name: 'Simon Jones', type: 'journalist', tier: 3, workplace: 'DailyMail', link: '' },
    { name: 'Mark Critchley', type: 'journalist', tier: 3, workplace: 'TheIndependent', link: 'mjcritchley' },

    // Tier 4
    { name: 'David McDonnell', type: 'journalist', tier: 4, workplace: 'Mirror', link: 'DiscoMirror' },
    { name: 'Alan Nixon (1 for youth/low lvl)', type: 'journalist', tier: 4, workplace: 'TheS*n', link: 'reluctantnicko' },
    { name: 'James Robson (3 for definite news)', type: 'journalist', tier: 4, workplace: 'GOAL', link: 'jamesalanrobson' },
    { name: 'Fred Caldeira (reliable for Andreas)', type: 'journalist', tier: 4, workplace: 'TNT Sports', link: 'fredcaldeira' },
    { name: 'Constantin Eckner', type: 'journalist', tier: 4, workplace: 'TheTimes', link: 'cc_eckner' },
    { name: 'Neil Custis (sometimes, more often 5)', type: 'journalist', tier: 4, workplace: 'TheS*n', link: 'ncustisTheSun' },
    { name: 'Duncan Castles (reliable for Mendes/TheTimes)', type: 'journalist', tier: 4, workplace: 'TheTimes/DailyRecord', link: 'DuncanCastles' },
    { name: 'Jonathan Shrager', type: 'journalist', tier: 4, workplace: 'Twitter', link: 'JonathanShrager' },
    // Tier 5
    { name: 'Phil Thomas', type: 'journalist', tier: 5, workplace: 'TheS*n', link: '' },
    { name: 'Harry Pratt', type: 'journalist', tier: 5, workplace: 'TheS*n', link: 'gharrypratt' },
    { name: 'Jeremy Cross', type: 'journalist', tier: 5, workplace: 'TheDailyStar', link: 'CrossyDailyStar' },
    { name: 'Steve Bates', type: 'journalist', tier: 5, workplace: 'TheS*n', link: 'stevebates' },
    { name: 'Tom Hopkinson', type: 'journalist', tier: 5, workplace: 'TheMirror', link: 'TomHopkinson' },
    { name: 'Tom McDermott', type: 'journalist', tier: 5, workplace: 'unemployed', link: 'mrtommcdermott' },
    { name: 'Sam Pilger', type: 'journalist', tier: 5, workplace: 'Forbes', link: 'sampilger' },
    // Aggregators
    { name: 'United Journal', tier: 'aggregator', link: 'theutdjournal' },
    { name: 'utdreport', tier: 'aggregator', link: 'utdreport' },
];

sources.forEach(source => {
    document.querySelector(`.tier-${source.tier} .tier-content`).appendChild(
        document.createRange().createContextualFragment(
            `<a class="source ${source.type === 'journalist' ? 'journalist' : source.type === 'media' ? 'media' : 'aggregator'}" href="https://twitter.com/${source.link}" target="_blank">
            ${source.type !== 'journalist' ? source.name : `${source.name} <span class="workplace">(${source.workplace})</span>`}
            </a>`
        )
    );
})

document.querySelectorAll('.tier-content').forEach(node => {
    const element = node.querySelector('.media, .aggregator');
    if (element && element.classList.contains('media')) {
        node.insertBefore(document.createRange().createContextualFragment('<div class="flex-break"></div>'), element);
    }
    else if (element && element.classList.contains('aggregator')) {
        node.appendChild(document.createRange().createContextualFragment('<div class="flex-break"></div>'), element);
    }
})

document.querySelector('.tier-aggregator .tier-content').appendChild(
    document.createRange().createContextualFragment(
        `<div class="tier-notes">These are just aggregators.</div>`
    )
);

document.querySelector('.last-update a').setAttribute('href', update.thread);
document.querySelector('.last-update a').textContent = `Last update: ${new Date(update.time).toUTCString().slice(0, 16)}`;