let btnList = document.querySelector('.btnList')
let btnSelect = document.querySelector('.btnSelect')
let resultChamp = document.querySelector('.resultChamp')
let buildMiticos = ["Colhedor Noturno","Regenerador de Pedra Lunar","Proteção Imutável","Medalhão dos Solari de Ferro","Coroa da Rainha Esquartejada","Glacieterno","Manopla do Raio de Gelo","Quimiotanque Turbo","Crepúsculo de Draktharr","Garra do Espreitador","Eclipse","Angústia de Liandry","Tormenta de Luden","Explocinturão Hextec","Criafendas","Égide de Fogo Solar","Quebrapassos","Hemodrenario","Ruptor Divino","Força de Trindade","Mata Krakens","Força do Vendaval","Arco Escudo Imoral"]
let lolBuild = ["Ladrão de Almas de Mejai","Turíbulo Ardente","Putrificador Quimtec","Cajado Aquafluxo","Benção de Mikael","Redenção","Glaive Sombria","Juramento de Cavaleiro","Convergência de Zeke","Coração Congelado","Murilonomicon","Canhão Fumegante","Lembrete Mortal","Correntes de Anatema","Cajado do Arcanjo","Véu de Banshee","Centro de Cristal de Rylai","Ampulheta de Zonya","Presa da Serpente","Lâmina da Fúria de Guinsoo","Furacão de Runaan","Dançarina Fantasma","Serrespada Quimiopunk","Aproximação Invernal","Chuva de Canivete","Máscara Abissal","Pressagio de Randuin","Armadura de Espinhos","Cajado do Vazio","Colhedor de Essência","Quebracascos","Anjo Guardião","Manamune","Limiar da Noite","Mandíbula de MalMorbius","Semblante Espiritual","Força da Natureza","Couraça do Defunto","Dente de Na'Shor","Chama Sombria","Foco do Horizonte","Perdição de Lich","Ímpeto Cósmico","Abraço Domaniaco","Lâmina Fantasma de Youmuu","A Coletora","Arco de Axioma","Cimitarra Mercurial","Lembranças do Lorde Dominik","Alvorada de Pratania","Armadura de Warmog","Limite da Razão","Cutelo Negro","Sinal de Sterak","Rancor de Serylda","Placa Gargolitica","Espada do Gay Destruído","Hidra Raivosa","Hidra Titânica","Dança da Morte","Gume do Infinito","Adagas Rápidas Navori","Sedenta por Sangue","Capuz da Morte de Megatron","Hino Bélico de Shurelya","Mandato Imperial"]
function buildRandomizer(){
    return Math.floor(Math.random() * (lolBuild.length))
}
function mythicRandomizer(){
    return Math.floor(Math.random() * (buildMiticos.length))
}
btnList.addEventListener('click',() =>{
    let madeList = document.querySelector('.champList').value
    let madeListArray = madeList.split(",")
    resultChamp.innerHTML = madeListArray[Math.floor(Math.random() * (madeListArray.length))] + ', Build: ' + buildMiticos[mythicRandomizer()] + ', ' + lolBuild[buildRandomizer()] +  ', ' + lolBuild[buildRandomizer()] + ', ' + lolBuild[buildRandomizer()] + ', ' + lolBuild[buildRandomizer()]
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
        break;
    }
    function fullChampRandomizer(){
        return Math.floor(Math.random() * (lolChamps.length))
    }
    resultChamp.innerHTML = (lolChamps[fullChampRandomizer()] + ', Build: ' + buildMiticos[mythicRandomizer()] + ', ' + lolBuild[buildRandomizer()] +  ', ' + lolBuild[buildRandomizer()] + ', ' + lolBuild[buildRandomizer()] + ', ' + lolBuild[buildRandomizer()])
})