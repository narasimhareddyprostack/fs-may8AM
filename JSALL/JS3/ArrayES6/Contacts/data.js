let contacts = [{ "id": 1, "name": "Janaya", "email": "jinseal0@virginia.edu", "gender": "Female" },
{ "id": 2, "name": "Mackenzie", "email": "mditchett1@ucoz.com", "gender": "Male" },
{ "id": 3, "name": "Dorree", "email": "dmitkcov2@instagram.com", "gender": "Female" },
{ "id": 4, "name": "Fernanda", "email": "faizikovitch3@noaa.gov", "gender": "Female" },
{ "id": 5, "name": "Chelsy", "email": "carkle4@seesaa.net", "gender": "Female" },
{ "id": 6, "name": "Danice", "email": "dnaismith5@alexa.com", "gender": "Genderfluid" },
{ "id": 7, "name": "Gretel", "email": "gwalcher6@de.vu", "gender": "Female" },
{ "id": 8, "name": "Sanders", "email": "sleisk7@chicagotribune.com", "gender": "Male" },
{ "id": 9, "name": "Caria", "email": "cfeldhuhn8@stanford.edu", "gender": "Female" },
{ "id": 10, "name": "Marlon", "email": "mdavidescu9@yolasite.com", "gender": "Male" },
{ "id": 11, "name": "Welbie", "email": "wtookea@smugmug.com", "gender": "Male" },
{ "id": 12, "name": "Debbi", "email": "dpacquetb@businesswire.com", "gender": "Female" },
{ "id": 13, "name": "Cathie", "email": "ccollingsc@naver.com", "gender": "Female" },
{ "id": 14, "name": "Viva", "email": "vreicheltd@cmu.edu", "gender": "Female" },
{ "id": 15, "name": "Leonhard", "email": "ldiville@dion.ne.jp", "gender": "Male" },
{ "id": 16, "name": "Misha", "email": "mcolacof@weather.com", "gender": "Female" },
{ "id": 17, "name": "Caril", "email": "cdugdaleg@freewebs.com", "gender": "Female" },
{ "id": 18, "name": "Gertruda", "email": "gstearh@cpanel.net", "gender": "Female" },
{ "id": 19, "name": "Simmonds", "email": "sfossetti@patch.com", "gender": "Male" },
{ "id": 20, "name": "Jerrilee", "email": "jhaslockj@theatlantic.com", "gender": "Female" },
{ "id": 21, "name": "Josefa", "email": "jlegallek@blogger.com", "gender": "Female" },
{ "id": 22, "name": "Tessi", "email": "tpindarl@miitbeian.gov.cn", "gender": "Female" },
{ "id": 23, "name": "Emma", "email": "esilvertonm@instagram.com", "gender": "Female" },
{ "id": 24, "name": "Boycie", "email": "bwahnern@infoseek.co.jp", "gender": "Male" },
{ "id": 25, "name": "Kenon", "email": "kberggreno@acquirethisname.com", "gender": "Male" },
{ "id": 26, "name": "Charlie", "email": "cshildrickp@xing.com", "gender": "Male" },
{ "id": 27, "name": "Gwyneth", "email": "garendsq@etsy.com", "gender": "Female" },
{ "id": 28, "name": "Kirk", "email": "kbeefonr@tamu.edu", "gender": "Polygender" },
{ "id": 29, "name": "Robinetta", "email": "rbraidfords@blogger.com", "gender": "Female" },
{ "id": 30, "name": "Shaine", "email": "sodyt@google.ca", "gender": "Female" },
{ "id": 31, "name": "Shirley", "email": "shanrottu@histats.com", "gender": "Female" },
{ "id": 32, "name": "Helge", "email": "hbofieldv@kickstarter.com", "gender": "Female" },
{ "id": 33, "name": "Aime", "email": "afulgerw@nba.com", "gender": "Female" },
{ "id": 34, "name": "Corrie", "email": "cclausx@cornell.edu", "gender": "Male" },
{ "id": 35, "name": "Dasi", "email": "dhorleyy@hhs.gov", "gender": "Female" },
{ "id": 36, "name": "Hubey", "email": "hchattoez@issuu.com", "gender": "Male" },
{ "id": 37, "name": "Wendell", "email": "wpencot10@loc.gov", "gender": "Male" },
{ "id": 38, "name": "Minetta", "email": "msugden11@usatoday.com", "gender": "Female" },
{ "id": 39, "name": "Any", "email": "asugden12@g.co", "gender": "Male" },
{ "id": 40, "name": "Krista", "email": "kprestwich13@geocities.jp", "gender": "Female" },
{ "id": 41, "name": "Jessy", "email": "jhryniewicki14@list-manage.com", "gender": "Female" },
{ "id": 42, "name": "Gay", "email": "gfearney15@csmonitor.com", "gender": "Polygender" },
{ "id": 43, "name": "Thorvald", "email": "ttibbs16@indiegogo.com", "gender": "Male" },
{ "id": 44, "name": "Toddie", "email": "tfibbitts17@wikimedia.org", "gender": "Male" },
{ "id": 45, "name": "Berty", "email": "blafont18@mozilla.org", "gender": "Male" },
{ "id": 46, "name": "Cobby", "email": "cyewman19@g.co", "gender": "Bigender" },
{ "id": 47, "name": "Rozanna", "email": "rwogan1a@home.pl", "gender": "Female" },
{ "id": 48, "name": "Hobart", "email": "hsimpkins1b@yahoo.co.jp", "gender": "Male" },
{ "id": 49, "name": "Misty", "email": "mledington1c@soup.io", "gender": "Female" },
{ "id": 50, "name": "Thomasine", "email": "tjagger1d@yelp.com", "gender": "Female" }];

function display_Contact() {
    let rows = ""
    contacts.forEach((contact) => {
        rows = rows + `<tr>
                            <td>${contact.id}</td>
                            <td>${contact.name}</td>
                            <td>${contact.email}</td>
                            <td>${contact.gender}</td>
                       </tr>`
    })
    document.getElementById('amar').innerHTML = rows
}
