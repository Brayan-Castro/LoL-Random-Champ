let btnList = document.querySelector('.btnList')
let btnSelect = document.querySelector('.btnSelect')
let resultChamp = document.querySelector('.resultChamp')
let lolBuild = ['Full Crit', 'Full Ap', 'Full Tank', 'Full Lethality', 'Full Sup', 'Bruiser (Tank + AD)', 'Battle Mage (Tank + AP)', 'Mixed Build (AP + AD)']
btnList.addEventListener('click',() =>{
    let madeList = document.querySelector('.champList').value
    let madeListArray = madeList.split(",")
    resultChamp.innerHTML = madeListArray[Math.floor(Math.random() * (madeListArray.length))] + ', Build: ' + lolBuild[Math.floor(Math.random() * (lolBuild.length))]
})
btnSelect.addEventListener('click', () =>{
    let lolChamps = []
    let select = document.querySelector('.select').value
    switch(select){
        case 'all':
        lolChamps.push('Aatrox','Ahri','Akali','Akshan','Alistar','Amumu','Anivia','Annie','Aphelios','Ashe','Aurelion Sol','Azir','Bard','Blitzcrank','Brand','Braum','Caitlyn','Camille','Cassiopeia',"Cho'Gath",'Corki','Darius','Diana','Dr.Mundo','Draven','Ekko','Elise','Evelynn','Ezreal','Fiddlesticks','Fiora','Fizz','Galio','Gangplank','Garen','Gnar','Gragas','Graves','Gwen','Hecarim','Heimerdinger','Illaoi','Irelia','Ivern','Janna','Jarvan IV','Jax','Jayce','Jhin','Jinx',"Kai'Sa",'Kalista','Karma','Karthus','Kassadin','Katarina','Kayle','Kayn','Kennen',"Kha'Zix",'Kindred','Kled',"Kog'Maw",'LeBlanc','LeeSin','Leona','Lillia','Lissandra','Lucian','Lulu','Lux','Malphite','Malzahar','Maokai','Master Yi','Miss Fortune','Mordekaiser','Morgana','Nami','Nasus','Nautilus','Neeko','Nidalee','Nocturne','Nunu & Willump','Olaf','Orianna','Ornn','Pantheon','Poppy','Pyke','Qiyana','Quinn','Rakan','Rammus',"Rek'Sai",'Rell','Renata Glasc','Renekton','Rengar','Riven','Rumble','Ryze','Samira','Sejuani','Senna','Seraphine','Sett','Shaco','Shen','Shyvana','Singed','Sion','Sivir','Skarner','Sona','Soraka','Swain','Sylas','Syndra','Tahm Kench','Taliyah','Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere','Twisted Fate','Twitch','Udyr','Urgot','Varus','Vayne','Veigar',"Vel'Koz",'Vex','Vi','Viego','Viktor','Vladimir','Volibear','Warwick','Wukong','Xayah','Xerath','Xin Zhao','Yasuo','Yone','Yorick','Yuumi','Zac','Zed','Zeri','Ziggs','Zilean','Zoe','Zyra',"Bel'Veth",'Nilah')
        break;
        case 'top':
        lolChamps.push('Aatrox', 'Akali', 'Camille', "Cho'Gath", 'Darius', 'Dr.Mundo', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Gwen', 'Heimerdinger', 'Illaoi', 'Irelia', 'Jax', 'Jayce', 'Kayle', 'Kennen', 'Kled', 'Lillia', 'Malphite', 'Mordekaiser', 'Nasus', 'Olaf', 'Ornn', 'Quinn', 'Renekton', 'Riven', 'Rumble', 'Sett', 'Shen', 'Singed', 'Sion', 'Tahm Kench', 'Teemo', 'Tryndamere', 'Urgot', 'Vayne', 'Volibear', 'Wukong', 'Yasuo', 'Yone', 'Yorick')
        break;
        case 'jg':
        lolChamps.push('Amumu', "Bel'Veth", 'Diana', 'Ekko', 'Elise', 'Evelynn', 'Fiddlesticks', 'Graves', 'Hecarim', 'Ivern', 'Jarvan IV', 'Karthus', 'Kayn', "Kha'Zix", 'Kindred', 'Lee Sin', 'Lillia', 'Master Yi', 'Nidalee', 'Nocturne', 'Nunu & Willump', 'Poppy', 'Rammus', "Rek'Sai", 'Rengar', 'Sejuani', 'Shaco', 'Shyvana', 'Skarner', 'Taliyah', 'Talon', 'Trundle', 'Udyr', 'Vi', 'Viego', 'Volibear', 'Warwick', 'Wukong', 'Xin Zhao', 'Zac', 'Zed')
        break;
        case 'mid':
        lolChamps.push('Ahri', 'Akali', 'Akshan', 'Anivia', 'Annie', 'Aurelion Sol', 'Azir', 'Cassiopeia', 'Corki', 'Ekko', 'Fizz', 'Galio', 'Gangplank', 'Heimerdinger', 'Irelia', 'Kassadin', 'Katarina', 'LeBlanc', 'Lissandra', 'Lux', 'Malzahar', 'Neeko', 'Orianna', 'Qiyana', 'Ryze', 'Swain', 'Sylas', 'Syndra', 'Taliyah', 'Talon', 'Twisted Fate', 'Veigar', 'Vex', 'Viktor', 'Vladimir', 'Xerath', 'Yasuo', 'Yone', 'Zed', 'Zeri', 'Zoe')
        break;
        case 'adc':
        lolChamps.push('Aphelios', 'Ashe', 'Caitlyn', 'Draven', 'Ezreal', 'Jhin', 'Jinx', "Kai'Sa", 'Kalista', "Kog'Maw", 'Lucian', 'Miss Fortune', 'Nilah', 'Samira', 'Sivir', 'Tristana', 'Twitch', 'Varus', 'Vayne', 'Xayah', 'Yasuo', 'Zeri', 'Ziggs')
        break;
        case 'sup':
        lolChamps.push('Alistar', 'Ashe', 'Bardo', 'Blitzcrank', 'Brand', 'Braum', 'Janna', 'Karma', 'Leona', 'Lulu', 'Lux', 'Maokai', 'Morgana', 'Nami', 'Nautilus', 'Pantheon', 'Pyke', 'Rakan', 'Rell', 'Renata Glasc', 'Senna', 'Seraphine', 'Sona', 'Soraka', 'Swain', 'Taric', 'Thresh', "Vek'Koz", 'Xerath', 'Yuumi', 'Zilean', 'Zyra')
        lolBuild.push('Smite Sup')
        break;
    }
    resultChamp.innerHTML = lolChamps[Math.floor(Math.random() * (lolChamps.length))] + ', Build: ' + lolBuild[Math.floor(Math.random() * (lolBuild.length))];
})