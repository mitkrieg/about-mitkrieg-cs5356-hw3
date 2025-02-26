import GtfsRealtimeBindings from "gtfs-realtime-bindings";

import './style.css';

console.log('CSS should be injected into the page!');

const head = document.getElementById("headerText");


function wave() {
    console.log('wave!')
    const hand = document.getElementById("wave");
    hand.style.transform = "rotate(45deg)";
    setTimeout(() => {hand.style.transform = "rotate(0deg)";},250);
    setTimeout(() => {hand.style.transform = "rotate(45deg)";},500);
    setTimeout(() => {hand.style.transform = "rotate(0deg)";},750);
}

window.onload = () => {
    setTimeout(wave,500);
    
};

head.addEventListener("mouseover", wave);

function getFeed(line) {
    if (['A','C','E'].includes(line)) {
        return "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace"
    } else if (['G'].includes(line)) {
        return "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-g"
    } else if (['N','Q','R','W'].includes(line)) {
        return "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-nqrw"
    } else if (['1','2','3','4','5','6','7','7X','6X','GS'].includes(line)) {
        return "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs"
    } else if (['B','D','F','M'].includes(line)) {
        return "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm"
    } else if (['J','Z'].includes(line)) {
        return "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-jz"
    } else if (['L'].includes(line)) {
        return "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l"
    } else if (line == 'SIR') {
        return "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-si"
    }
    return ''

}

const stationIds = {
    '627': '77 St',
    '628': '68 St-Hunter College',
    '632': '33 St',
    '633': '28 St',
    '634': '23 St',
    '636': 'Astor Pl',
    '638': 'Spring St',
    '419': 'Wall St',
    '420': 'Bowling Green',
    '201': 'Wakefield-241 St',
    '204': 'Nereid Av',
    '205': '233 St',
    '206': '225 St',
    '207': '219 St',
    '208': 'Gun Hill Rd',
    '209': 'Burke Av',
    '210': 'Allerton Av',
    '211': 'Pelham Pkwy',
    '212': 'Bronx Park East',
    '213': 'E 180 St',
    '214': 'West Farms Sq-E Tremont Av',
    '215': '174 St',
    '216': 'Freeman St',
    '217': 'Simpson St',
    '218': 'Intervale Av',
    '219': 'Prospect Av',
    '220': 'Jackson Av',
    '221': '3 Av-149 St',
    '301': 'Harlem-148 St',
    '302': '145 St',
    '224': '135 St',
    '225': '125 St',
    '226': '116 St',
    '227': 'Central Park North (110 St)',
    '501': 'Eastchester-Dyre Av',
    '502': 'Baychester Av',
    '503': 'Gun Hill Rd',
    '504': 'Pelham Pkwy',
    '505': 'Morris Park',
    '701': 'Flushing-Main St',
    '702': 'Mets-Willets Point',
    '705': '111 St',
    '706': '103 St-Corona Plaza',
    '707': 'Junction Blvd',
    '708': '90 St-Elmhurst Av',
    '709': '82 St-Jackson Hts',
    '711': '69 St',
    '712': '61 St-Woodside',
    '713': '52 St',
    '714': '46 St-Bliss St',
    '715': '40 St-Lowery St',
    '716': '33 St-Rawson St',
    '718': 'Queensboro Plaza',
    'R09': 'Queensboro Plaza',
    '720': 'Hunters Point Av',
    '721': 'Vernon Blvd-Jackson Av',
    '726': '34 St-Hudson Yards',
    'Q05': '96 St',
    'Q04': '86 St',
    'Q03': '72 St',
    'S31': 'St George',
    'S30': 'Tompkinsville',
    'S29': 'Stapleton',
    'S28': 'Clifton',
    'S27': 'Grasmere',
    'S26': 'Old Town',
    'S25': 'Dongan Hills',
    'S24': 'Jefferson Av',
    'S23': 'Grant City',
    'S22': 'New Dorp',
    'S21': 'Oakwood Heights',
    'S20': 'Bay Terrace',
    'S19': 'Great Kills',
    'S18': 'Eltingville',
    'S17': 'Annadale',
    'S16': 'Huguenot',
    'S15': "Prince's Bay",
    'S14': 'Pleasant Plains',
    'S13': 'Richmond Valley',
    'S09': 'Tottenville',
    'S11': 'Arthur Kill',
    '132': '14 St; 6 Av',
    'D19': '14 St; 6 Av',
    'L02': '14 St; 6 Av',
    '635': '14 St-Union Sq',
    'L03': '14 St-Union Sq',
    'R20': '14 St-Union Sq',
    '222': '149 St-Grand Concourse',
    '415': '149 St-Grand Concourse',
    '414': '161 St-Yankee Stadium',
    'D11': '161 St-Yankee Stadium',
    '112': '168 St; 168 St-Washington Hts',
    'A09': '168 St; 168 St-Washington Hts',
    '719': 'Court Sq; Court Sq-23 St',
    'F09': 'Court Sq; Court Sq-23 St',
    'G22': 'Court Sq; Court Sq-23 St',
    'D17': '34 St-Herald Sq',
    'R17': '34 St-Herald Sq',
    'F23': '4 Av-9 St',
    'R33': '4 Av-9 St',
    '724': '42 St-Bryant Pk; 5 Av',
    'D16': '42 St-Bryant Pk; 5 Av',
    '631': 'Grand Central-42 St',
    '723': 'Grand Central-42 St',
    '901': 'Grand Central-42 St',
    '127': '42 St-Port Authority Bus Terminal; Times Sq-42 St',
    '725': '42 St-Port Authority Bus Terminal; Times Sq-42 St',
    '902': '42 St-Port Authority Bus Terminal; Times Sq-42 St',
    'A27': '42 St-Port Authority Bus Terminal; Times Sq-42 St',
    'R16': '42 St-Port Authority Bus Terminal; Times Sq-42 St',
    '630': '51 St; Lexington Av/53 St',
    'F11': '51 St; Lexington Av/53 St',
    '629': '59 St; Lexington Av/59 St',
    'R11': '59 St; Lexington Av/59 St',
    '125': '59 St-Columbus Circle',
    'A24': '59 St-Columbus Circle',
    'B16': '62 St; New Utrecht Av',
    'N04': '62 St; New Utrecht Av',
    '710': '74 St-Broadway; Jackson Hts-Roosevelt Av',
    'G14': '74 St-Broadway; Jackson Hts-Roosevelt Av',
    '235': 'Atlantic Av-Barclays Ctr',
    'D24': 'Atlantic Av-Barclays Ctr',
    'R31': 'Atlantic Av-Barclays Ctr',
    'A31': '14 St; 8 Av',
    'L01': '14 St; 8 Av',
    '637': 'Bleecker St; Broadway-Lafayette St',
    'D21': 'Bleecker St; Broadway-Lafayette St',
    '232': 'Borough Hall; Court St',
    '423': 'Borough Hall; Court St',
    'R28': 'Borough Hall; Court St',
    'A51': 'Broadway Junction',
    'J27': 'Broadway Junction',
    'L22': 'Broadway Junction',
    '640': 'Brooklyn Bridge-City Hall; Chambers St',
    'M21': 'Brooklyn Bridge-City Hall; Chambers St',
    '639': 'Canal St',
    'M20': 'Canal St',
    'Q01': 'Canal St',
    'R23': 'Canal St',
    '228': 'Chambers St; Cortlandt St; Park Place; World Trade Center',
    'A36': 'Chambers St; Cortlandt St; Park Place; World Trade Center',
    'E01': 'Chambers St; Cortlandt St; Park Place; World Trade Center',
    'R25': 'Chambers St; Cortlandt St; Park Place; World Trade Center',
    'F15': 'Delancey St-Essex St',
    'M18': 'Delancey St-Essex St',
    '239': 'Botanic Garden; Franklin Av-Medgar Evers College',
    'S04': 'Botanic Garden; Franklin Av-Medgar Evers College',
    'A45': 'Franklin Av',
    'S01': 'Franklin Av',
    '229': 'Fulton St',
    '418': 'Fulton St',
    'A38': 'Fulton St',
    'M22': 'Fulton St',
    'G29': 'Lorimer St; Metropolitan Av',
    'L10': 'Lorimer St; Metropolitan Av',
    'L17': 'Myrtle-Wyckoff Avs',
    'M08': 'Myrtle-Wyckoff Avs',
    '142': 'South Ferry; Whitehall St-South Ferry',
    'R27': 'South Ferry; Whitehall St-South Ferry',
    'A41': 'Jay St-MetroTech',
    'R29': 'Jay St-MetroTech',
    'G19': 'Steinway St',
    'G20': '36 St',
    'G21': 'Queens Plaza',
    'F12': '5 Av/53 St',
    'D14': '7 Av',
    'G05': 'Jamaica Center-Parsons/Archer',
    'G06': 'Sutphin Blvd-Archer Av-JFK Airport',
    'G07': 'Jamaica-Van Wyck',
    'G24': '21 St',
    'G26': 'Greenpoint Av',
    'G28': 'Nassau Av',
    'G30': 'Broadway',
    'G31': 'Flushing Av',
    'G32': 'Myrtle-Willoughby Avs',
    'G33': 'Bedford-Nostrand Avs',
    'G34': 'Classon Av',
    'G35': 'Clinton-Washington Avs',
    'G36': 'Fulton St',
    '101': 'Van Cortlandt Park-242 St',
    '103': '238 St',
    '104': '231 St',
    '106': 'Marble Hill-225 St',
    '107': '215 St',
    '108': '207 St',
    '109': 'Dyckman St',
    '110': '191 St',
    '111': '181 St',
    '113': '157 St',
    '114': '145 St',
    '115': '137 St-City College',
    '116': '125 St',
    '117': '116 St-Columbia University',
    '118': 'Cathedral Pkwy (110 St)',
    '119': '103 St',
    '120': '96 St',
    '121': '86 St',
    '122': '79 St',
    '123': '72 St',
    '124': '66 St-Lincoln Center',
    '126': '50 St',
    '128': '34 St-Penn Station',
    '129': '28 St',
    '130': '23 St',
    '131': '18 St',
    '133': 'Christopher St-Stonewall',
    '134': 'Houston St',
    '135': 'Canal St',
    '136': 'Franklin St',
    '137': 'Chambers St',
    '138': 'WTC Cortlandt',
    '139': 'Rector St',
    '230': 'Wall St',
    '231': 'Clark St',
    '233': 'Hoyt St',
    '234': 'Nevins St',
    '236': 'Bergen St',
    '237': 'Grand Army Plaza',
    '238': 'Eastern Pkwy-Brooklyn Museum',
    '248': 'Nostrand Av',
    '249': 'Kingston Av',
    '250': 'Crown Hts-Utica Av',
    '251': 'Sutter Av-Rutland Rd',
    '252': 'Saratoga Av',
    '253': 'Rockaway Av',
    '254': 'Junius St',
    '255': 'Pennsylvania Av',
    '256': 'Van Siclen Av',
    '257': 'New Lots Av',
    '241': 'President St-Medgar Evers College',
    '242': 'Sterling St',
    '243': 'Winthrop St',
    '244': 'Church Av',
    '245': 'Beverly Rd',
    '246': 'Newkirk Av-Little Haiti',
    '247': 'Flatbush Av-Brooklyn College',
    '601': 'Pelham Bay Park',
    '602': 'Buhre Av',
    '603': 'Middletown Rd',
    '604': 'Westchester Sq-E Tremont Av',
    '606': 'Zerega Av',
    '607': 'Castle Hill Av',
    '608': 'Parkchester',
    '609': 'St Lawrence Av',
    '610': 'Morrison Av-Soundview',
    '611': 'Elder Av',
    '612': 'Whitlock Av',
    '613': 'Hunts Point Av',
    '614': 'Longwood Av',
    '615': 'E 149 St',
    '616': "E 143 St-St Mary's St",
    '617': 'Cypress Av',
    '618': 'Brook Av',
    '619': '3 Av-138 St',
    '401': 'Woodlawn',
    '402': 'Mosholu Pkwy',
    '405': 'Bedford Park Blvd-Lehman College',
    '406': 'Kingsbridge Rd',
    '407': 'Fordham Rd',
    '408': '183 St',
    '409': 'Burnside Av',
    '410': '176 St',
    '411': 'Mt Eden Av',
    '412': '170 St',
    '413': '167 St',
    '416': '138 St-Grand Concourse',
    '621': '125 St',
    '622': '116 St',
    '623': '110 St',
    '624': '103 St',
    '625': '96 St',
    '626': '86 St',
    'S03': 'Park Pl',
    'A02': 'Inwood-207 St',
    'A03': 'Dyckman St',
    'A05': '190 St',
    'A06': '181 St',
    'A07': '175 St',
    'A10': '163 St-Amsterdam Av',
    'A11': '155 St',
    'A12': '145 St',
    'D13': '145 St',
    'A14': '135 St',
    'A15': '125 St',
    'A16': '116 St',
    'A17': 'Cathedral Pkwy (110 St)',
    'A18': '103 St',
    'A19': '96 St',
    'A20': '86 St',
    'A21': '81 St-Museum of Natural History',
    'A22': '72 St',
    'A25': '50 St',
    'A28': '34 St-Penn Station',
    'A30': '23 St',
    'A32': 'W 4 St-Wash Sq',
    'D20': 'W 4 St-Wash Sq',
    'A33': 'Spring St',
    'A34': 'Canal St',
    'A40': 'High St',
    'A42': 'Hoyt-Schermerhorn Sts',
    'A43': 'Lafayette Av',
    'A44': 'Clinton-Washington Avs',
    'A46': 'Nostrand Av',
    'A47': 'Kingston-Throop Avs',
    'A48': 'Utica Av',
    'A49': 'Ralph Av',
    'A50': 'Rockaway Av',
    'A52': 'Liberty Av',
    'A53': 'Van Siclen Av',
    'A54': 'Shepherd Av',
    'A55': 'Euclid Av',
    'A57': 'Grant Av',
    'A59': '80 St',
    'A60': '88 St',
    'A61': 'Rockaway Blvd',
    'A63': '104 St',
    'A64': '111 St',
    'A65': 'Ozone Park-Lefferts Blvd',
    'H01': 'Aqueduct Racetrack',
    'H02': 'Aqueduct-N Conduit Av',
    'H03': 'Howard Beach-JFK Airport',
    'H04': 'Broad Channel',
    'H12': 'Beach 90 St',
    'H13': 'Beach 98 St',
    'H14': 'Beach 105 St',
    'H15': 'Rockaway Park-Beach 116 St',
    'H06': 'Beach 67 St',
    'H07': 'Beach 60 St',
    'H08': 'Beach 44 St',
    'H09': 'Beach 36 St',
    'H10': 'Beach 25 St',
    'H11': 'Far Rockaway-Mott Av',
    'D01': 'Norwood-205 St',
    'D03': 'Bedford Park Blvd',
    'D04': 'Kingsbridge Rd',
    'D05': 'Fordham Rd',
    'D06': '182-183 Sts',
    'D07': 'Tremont Av',
    'D08': '174-175 Sts',
    'D09': '170 St',
    'D10': '167 St',
    'D12': '155 St',
    'B04': '21 St-Queensbridge',
    'B06': 'Roosevelt Island',
    'B08': 'Lexington Av/63 St',
    'B10': '57 St',
    'D15': '47-50 Sts-Rockefeller Ctr',
    'D18': '23 St',
    'D22': 'Grand St',
    'F14': '2 Av',
    'F16': 'East Broadway',
    'F18': 'York St',
    'F20': 'Bergen St',
    'F21': 'Carroll St',
    'F22': 'Smith-9 Sts',
    'F24': '7 Av',
    'F25': '15 St-Prospect Park',
    'F26': 'Fort Hamilton Pkwy',
    'F27': 'Church Av',
    'F29': 'Ditmas Av',
    'F30': '18 Av',
    'F31': 'Avenue I',
    'F32': 'Bay Pkwy',
    'F33': 'Avenue N',
    'F34': 'Avenue P',
    'F35': 'Kings Hwy',
    'F36': 'Avenue U',
    'F38': 'Avenue X',
    'F39': 'Neptune Av',
    'F01': 'Jamaica-179 St',
    'F02': '169 St',
    'F03': 'Parsons Blvd',
    'F04': 'Sutphin Blvd',
    'F05': 'Briarwood',
    'F06': 'Kew Gardens-Union Tpke',
    'F07': '75 Av',
    'G08': 'Forest Hills-71 Av',
    'G09': '67 Av',
    'G10': '63 Dr-Rego Park',
    'G11': 'Woodhaven Blvd',
    'G12': 'Grand Av-Newtown',
    'G13': 'Elmhurst Av',
    'G15': '65 St',
    'G16': 'Northern Blvd',
    'G18': '46 St',
    'R01': 'Astoria-Ditmars Blvd',
    'R03': 'Astoria Blvd',
    'R04': '30 Av',
    'R05': 'Broadway',
    'R06': '36 Av',
    'R08': '39 Av-Dutch Kills',
    'R13': '5 Av/59 St',
    'R14': '57 St-7 Av',
    'R15': '49 St',
    'R18': '28 St',
    'R19': '23 St',
    'R21': '8 St-NYU',
    'R22': 'Prince St',
    'R24': 'City Hall',
    'R26': 'Rector St',
    'R30': 'DeKalb Av',
    'R32': 'Union St',
    'R34': 'Prospect Av',
    'R35': '25 St',
    'R36': '36 St',
    'R39': '45 St',
    'R40': '53 St',
    'R41': '59 St',
    'R42': 'Bay Ridge Av',
    'R43': '77 St',
    'R44': '86 St',
    'R45': 'Bay Ridge-95 St',
    'D25': '7 Av',
    'D26': 'Prospect Park',
    'D27': 'Parkside Av',
    'D28': 'Church Av',
    'D29': 'Beverley Rd',
    'D30': 'Cortelyou Rd',
    'D31': 'Newkirk Plaza',
    'D32': 'Avenue H',
    'D33': 'Avenue J',
    'D34': 'Avenue M',
    'D35': 'Kings Hwy',
    'D37': 'Avenue U',
    'D38': 'Neck Rd',
    'D39': 'Sheepshead Bay',
    'D40': 'Brighton Beach',
    'D41': 'Ocean Pkwy',
    'D42': 'W 8 St-NY Aquarium',
    'D43': 'Coney Island-Stillwell Av',
    'B12': '9 Av',
    'B13': 'Fort Hamilton Pkwy',
    'B14': '50 St',
    'B15': '55 St',
    'B17': '71 St',
    'B18': '79 St',
    'B19': '18 Av',
    'B20': '20 Av',
    'B21': 'Bay Pkwy',
    'B22': '25 Av',
    'B23': 'Bay 50 St',
    'N02': '8 Av',
    'N03': 'Fort Hamilton Pkwy',
    'N05': '18 Av',
    'N06': '20 Av',
    'N07': 'Bay Pkwy',
    'N08': 'Kings Hwy',
    'N09': 'Avenue U',
    'N10': '86 St',
    'J12': '121 St',
    'J13': '111 St',
    'J14': '104 St',
    'J15': 'Woodhaven Blvd',
    'J16': '85 St-Forest Pkwy',
    'J17': '75 St-Elderts Ln',
    'J19': 'Cypress Hills',
    'J20': 'Crescent St',
    'J21': 'Norwood Av',
    'J22': 'Cleveland St',
    'J23': 'Van Siclen Av',
    'J24': 'Alabama Av',
    'J28': 'Chauncey St',
    'J29': 'Halsey St',
    'J30': 'Gates Av',
    'J31': 'Kosciuszko St',
    'M11': 'Myrtle Av',
    'M12': 'Flushing Av',
    'M13': 'Lorimer St',
    'M14': 'Hewes St',
    'M16': 'Marcy Av',
    'M19': 'Bowery',
    'M23': 'Broad St',
    'M01': 'Middle Village-Metropolitan Av',
    'M04': 'Fresh Pond Rd',
    'M05': 'Forest Av',
    'M06': 'Seneca Av',
    'M09': 'Knickerbocker Av',
    'M10': 'Central Av',
    'L05': '3 Av',
    'L06': '1 Av',
    'L08': 'Bedford Av',
    'L11': 'Graham Av',
    'L12': 'Grand St',
    'L13': 'Montrose Av',
    'L14': 'Morgan Av',
    'L15': 'Jefferson St',
    'L16': 'DeKalb Av',
    'L19': 'Halsey St',
    'L20': 'Wilson Av',
    'L21': 'Bushwick Av-Aberdeen St',
    'L24': 'Atlantic Av',
    'L25': 'Sutter Av',
    'L26': 'Livonia Av',
    'L27': 'New Lots Av',
    'L28': 'East 105 St',
    'L29': 'Canarsie-Rockaway Pkwy'
}

function unixTimeToDateTime(unixTime) {
    const date = new Date(unixTime * 1000);
    return date.toLocaleString();
  }

  function parseGtfs(entity, line) {
    if (entity.tripUpdate && entity.tripUpdate.trip.routeId === line) {
      for (let update of entity.tripUpdate.stopTimeUpdate) {

        let time = update.arrival ? update.arrival.time : update.departure;
        
        if (time == null) {
          console.log('Time is null');
          continue;
        }
        
        if (time >= Math.floor(Date.now() / 1000) && time <= Math.floor(Date.now() / 1000) + (3600*2)) {

          let directionChar = update.stopId.slice(-1);
          let direction;
          if (directionChar === 'N') {
            direction = 'Uptown';
          } else if (directionChar === 'S') {
            direction = 'Downtown';
          } else {
            direction = 'ERROR';
          }
          

          return {
            line: line,
            nextStopId: update.stopId,
            nextStop: stationIds[update.stopId.slice(0, -1)], 
            direction: direction,
            arrivalUnix: update.arrival ? update.arrival.time : null,
            arrival: unixTimeToDateTime(update.arrival ? update.arrival.time : null),
            departure: unixTimeToDateTime(update.departure)
          };
        }
      }
    }

    return null;
  }

  function createArrivalTable(updates, title) {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    // title
    const caption = table.createCaption();
    caption.textContent = title;
    caption.style.fontWeight = 'bold';
    caption.style.padding = '8px';
  
    // header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
  
    const headers = ['Next Stop', 'Arrival Time'];
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
    //   th.style.border = '1px solid #000';
    //   th.style.padding = '8px';
      headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    //body
    const tbody = document.createElement('tbody');
  
    updates.forEach(update => {
      const row = document.createElement('tr');
  
      const tdStop = document.createElement('td');
      tdStop.textContent = update.nextStop;
      row.appendChild(tdStop);
  
      const tdArrival = document.createElement('td');
      tdArrival.textContent = update.arrival;
      row.appendChild(tdArrival);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
  
    return table
  }

async function fetchSubway(line) {
    console.log('were in')

    try {
        let url = getFeed(line)
        console.log(`Attempt to get subway line ${line} from ${url}`)
        const response = await fetch(url);

        console.log(response.ok)
        if (!response.ok) {
            const error = new Error(
                `${response.url}: ${response.status} ${response.statusText}`
            );
        
        } 
        console.log('fsdf');
        const buffer = await response.arrayBuffer();
        const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
            new Uint8Array(buffer)
        );
        let updates = [];
        console.log('fetching updates')
        feed.entity.forEach((entity) => {
            let parsed = parseGtfs(entity, line)
            if (parsed != null) {
                updates.push(parsed);
            }
        });
        if (updates.length == 0) {
            let display = document.getElementById('subwayDisplay')
            let text = document.createElement('p')
            text.innerText = 'No Upcoming Trains'
            display.append(text)
        } else {
            updates.sort((a, b) => {
                if (a.arrivalUnix < b.arrivalUnix) {
                    return -1
                }
                if (a.arrivalUnix > b.arrivalUnix) {
                    return 1
                }
                return 0
            })
            let uptown = []
            let downtown = []
            updates.forEach((stop) => {
                if (stop.direction == 'Uptown') {
                    uptown.push(stop);
                } else if  (stop.direction == 'Downtown') {
                    downtown.push(stop);
                } 
            })
    
            let tablediv = document.getElementById('tables')
            let uptownTable = createArrivalTable(uptown, 'Downtown-bound Arrivals');
            let downtownTable = createArrivalTable(downtown, 'Uptown-bound Arrivals');
            tablediv.appendChild(uptownTable)
            tablediv.appendChild(downtownTable)
        }

    } catch(error) {
        console.log('Error!');
        console.log(error);
    } finally {
        console.log('end');
    }

}

const subwayIcons = document.getElementsByClassName('subwayIcon')


Array.prototype.forEach.call(subwayIcons, function (icon) {
    
    icon.addEventListener('click', (event) => {
        let line = icon.id.split('-')[1]
        let display = document.getElementById('subwayDisplay')

        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }
        let clone = icon.cloneNode(true)
        clone.className = 'activeLine'
        display.appendChild(clone)
        let tablediv = document.createElement('div')
        tablediv.id = 'tables'
        display.appendChild(tablediv)
        fetchSubway(line)
    })
})

