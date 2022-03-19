const bars = document.querySelector(".bars");


const barList = [
    {
        nameOfBar : 'Dikkenek',
        picture : "./places/Dikkenek_cafe.jpeg",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=dikkenek+lyon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwis68Htw8r2AhUOExoKHWuDBF8Q_AUoAXoECAEQAw",
        description1 : 'Grand choix de bières',
        description2 : 'Déco sympa', 
        mapFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7569353627036!2d4.83125101522679!3d45.77606127910577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eae25995ca3b%3A0xd5952b88a2a309cf!2sDikkenek%20Caf%C3%A9!5e0!3m2!1sfr!2sfr!4v1647721591670!5m2!1sfr!2sfr"
    }
    ,{
        nameOfBar : 'Hopstore',
        picture : "./places/Hopstore.jpeg",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=hopstore&um=1&ie=UTF-8&sa=X&ved=2ahUKEwif_ou2xMr2AhXjyIUKHb_fC2AQ_AUoAXoECAEQAw",
        description1 : 'Terrasse sur le fleuve',
        description2 : 'Ouvert uniquement aux beaux jours', 
        mapFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.1436363389!2d4.828226015226474!3d45.76831157910572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eafe029b221b%3A0x1e5af6c6b7629cdf!2sHopstore!5e0!3m2!1sfr!2sfr!4v1647723748837!5m2!1sfr!2sfr"
    }
    ,{
        nameOfBar : 'Platypus Brewpub',
        picture : "./places/platypus.jpeg",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=platypus+brewpub+lyon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi4xZHl0sr2AhUpxIUKHQZ2BmAQ_AUoAXoECAEQAw",
        description1 : 'Grand choix de bières',
        description2 : 'Les rhums arrangés en fin de soirée', 
        mapFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.2410982615493!2d4.821442915225608!3d45.74631227910527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebb59e8e0eb7%3A0xd97191bfc7b4bc4f!2sPlatypus%20Brewpub%20-%20brasserie%20artisanale!5e0!3m2!1sfr!2sfr!4v1647723874345!5m2!1sfr!2sfr"
    }
    ,{
        nameOfBar : 'Bieristan',
        picture : "./places/bieristan.jpg",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=bieristan+lyon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjWvazW08r2AhVO14UKHat6BEUQ_AUoAXoECAEQAw",
        description1 : 'La terrasse',
        description2 : 'La sympathie des barmans', 
        mapFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.164472645319!2d4.881349315226458!3d45.767893979105715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c02e3d1da029%3A0xdac07b0981e7f17c!2sLe%20Bieristan!5e0!3m2!1sfr!2sfr!4v1647723955980!5m2!1sfr!2sfr"
    }
    ,{
        nameOfBar : 'Les fleurs du malt',
        picture : "./places/Fleurs_du_malt.png",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=les+fleurs+du+malt+lyon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwie0Z_r08r2AhVRXhoKHeUHDl8Q_AUoAXoECAEQAw",
        description1 : 'Grand choix de bières',
        description2 : 'Déco sympa',
        mapFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.408814205892!2d4.8267132152262695!3d45.76299667910566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebaab66f9663%3A0xbc4605b70e2e8461!2sLes%20Fleurs%20du%20Malt%20le%20Bar%20%22La%20Mise%20en%20Bi%C3%A8re%22!5e0!3m2!1sfr!2sfr!4v1647724019927!5m2!1sfr!2sfr" 
    }    
    ,{
        nameOfBar : 'StarFerry',
        picture : "./places/Star_Ferry.png",
        route : "https://goo.gl/maps/CPeZGqrJ6s5rvZwC8",
        description1 : "Cadre agréable", 
        description2 : "Repas sur le pouce", 
        mapFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.4260465207576!2d4.838403415226273!3d45.76265127910561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea58254e3eb9%3A0x7fe6ea2107653966!2sStar%20Ferry!5e0!3m2!1sfr!2sfr!4v1647724108798!5m2!1sfr!2sfr" 
    }

]

function createBar(name, imgSrc, link, descr1, descr2 = null, mapFrame){
    //creation of h2 element with the title of the pub, argument name
    const barName = document.createElement("h2");
    barName.className = "bars-name"
    barName.innerHTML = name;
    bars.appendChild(barName);

    //class for flexbox with image, button and description
    const barBody = document.createElement("div");
    barBody.className = "bar-body";
    bars.appendChild(barBody);

    //creation of image element with a picture of the pub, argument imgSrc
    const barImg = document.createElement("img");
    barImg.className = "bars-img";
    barImg.src = imgSrc;
    barBody.appendChild(barImg);

    const barFooter = document.createElement("div");
    barFooter.className = "bar-footer";
    barBody.appendChild(barFooter);

    //creation of the button section within the bars class
    const linkButton = document.createElement("button");
    linkButton.className = "link-btn";
    barFooter.appendChild(linkButton);


    //creation of the link section with the link of pub's localisation, argument link
    const barLink = document.createElement("a");
    barLink.href = link;
    barLink.target = "_blank";
    linkButton.appendChild(barLink);

    //creation of the image section for the link of itinerary
    const linkImg = document.createElement("img");
    linkImg.src = "./Icons/feet.png";
    linkImg.alt = "barRoute";
    /*linkImg.style.width = '10vw';*/
    barLink.appendChild(linkImg);

    //creation of a list of description elements
    const descrList = document.createElement("ul"); 
    descrList.className = "descr-list";
    descrList.classList.add = ("descr-list");
    /*descrList.style.display = 'initial';*/

    barFooter.appendChild(descrList);

    //descrList.style.listStyleImage.src = './Icons/beer.png';

    //creation of description element, argument descr1
    const descrItem1 = document.createElement("li");
    descrItem1.className = "bar-descr1";
    descrItem1.innerHTML = descr1;
    /*descrItem1.style.fontSize = '4.5vw';
    descrItem1.style.border = 'none';
    descrItem1.style.fontWeight = 'initial';
    descrItem1.style.margin = '0 18vw 0 18vw';
    descrItem1.style.padding = '1px';
    descrItem1.style.listStyleImage = "url('./Icons/beer.jpg')";*/
    descrList.appendChild(descrItem1);

    if(descr2 !== null){ 
        const descrItem2 = document.createElement("li");
        descrItem2.className = "bar-descr2";
        descrItem2.innerHTML = descr2;
        /*descrItem2.style.fontSize = '4.5vw';
        descrItem2.style.border = 'none';
        descrItem2.style.fontWeight = 'initial';
        descrItem2.style.margin = '0 18vw 0 18vw';
        descrItem2.style.padding = '1px';
        descrItem2.style.listStyleImage = "url('./Icons/beer.jpg')";*/
        descrList.appendChild(descrItem2);
    }

    //creation of maps div
    const map = document.createElement("iframe");
    map.className = "map";
    map.src = mapFrame;
    barFooter.appendChild(map);
}


for(let i=0; i<barList.length; i++){
    createBar(barList[i].nameOfBar, barList[i].picture, barList[i].route, 
        barList[i].description1, barList[i].description2, barList[i].mapFrame);
}