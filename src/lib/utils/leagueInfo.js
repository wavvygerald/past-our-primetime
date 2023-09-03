/*   STEP 1   */
export const leagueID = "992634809161703424"; // your league ID
export const leagueName = "Past Our Primetime"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Fantasy football fanatics of the Past Our Primetime League,</p>

<p>As we embark on our initial epic season, remember the immortal words of Tim Robinson: “I’ve “never fought for anything in my entire life, but I’m fighting for this hat.” This league is about standing by your decisions and results, no matter how fucking stupid.</p>

<p>Then, just like the Hot Dog Car we might encounter some unexpected twists and turns, but that's what makes this league exciting So in the face of adversity, channel your inner "Honk if You're Horny" energy and push through. Remember, it's not about being the "Baby of the Year"; it's about winning the league and not being a fucking loser.</p>

<p>Similar to Stanza brand fedoras let’s have a nice season.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    // {
    //   "roster": 78625633772912640,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "CJ",
    //   "photo": "/managers/cj.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Freddie", // Can be anything (usually your rival's name)
    //     link: 472239892525477888, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/fred.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": 472239892525477888,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Fred",
    //   "photo": "/managers/fred.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "CJ", // Can be anything (usually your rival's name)
    //     link: 78625633772912640, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/cj.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": 994345391984365568,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Tyler",
    //   "photo": "/managers/tyler.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Austin", // Can be anything (usually your rival's name)
    //     link: 1002763579147382784, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/austin.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": 1002763579147382784,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Austin",
    //   "photo": "/managers/austin.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Tyler", // Can be anything (usually your rival's name)
    //     link: 994345391984365568, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/tyler.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": 1003708656194215936,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Bert",
    //   "photo": "/managers/bert.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Ryan", // Can be anything (usually your rival's name)
    //     link: 78625633772912640, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/ryan.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": 1003743070661238784,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Ryan",
    //   "photo": "/managers/ryan.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Bert", // Can be anything (usually your rival's name)
    //     link: 1003708656194215936, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/bert.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": 1004087556678606848,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Scott",
    //   "photo": "/managers/dad.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Gary", // Can be anything (usually your rival's name)
    //     link: , // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/gary.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": 1004095331539234816,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Josh",
    //   "photo": "/managers/josh.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Devin", // Can be anything (usually your rival's name)
    //     link: 1004113394829508608, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/devin.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": 1004113394829508608,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Devin",
    //   "photo": "/managers/devin.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Josh", // Can be anything (usually your rival's name)
    //     link: 1004095331539234816, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/josh.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
    // {
    //   "roster": ,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Gary",
    //   "photo": "/managers/gary.jpg", // square ratio recommended (no larger than 500x500)
    //   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Scott", // Can be anything (usually your rival's name)
    //     link: 1004087556678606848, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/scott.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "positionNeed": RB, // QB, RB, WR, TE, FLX, IDP
    //   "willingnessToTrade": 10, // 1 - 10
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
