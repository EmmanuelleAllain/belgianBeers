const bars = document.querySelector(".bars");


const barList = [
    {
        nameOfBar : 'Dikkenek',
        picture : "./places/Dikkenek_cafe.jpeg",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=dikkenek+lyon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwis68Htw8r2AhUOExoKHWuDBF8Q_AUoAXoECAEQAw",
        description1 : 'Grand choix de bières',
        description2 : 'Déco sympa', 
    }
    ,{
        nameOfBar : 'Hopstore',
        picture : "./places/Hopstore.jpeg",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=hopstore&um=1&ie=UTF-8&sa=X&ved=2ahUKEwif_ou2xMr2AhXjyIUKHb_fC2AQ_AUoAXoECAEQAw",
        description1 : 'Terrasse sur le fleuve',
        description2 : 'Ouvert uniquement aux beaux jours', 
    }
    ,{
        nameOfBar : 'Platypus Brewpub',
        picture : "./places/platypus.jpeg",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=platypus+brewpub+lyon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi4xZHl0sr2AhUpxIUKHQZ2BmAQ_AUoAXoECAEQAw",
        description1 : 'Grand choix de bières',
        description2 : 'Les rhums arrangés en fin de soirée', 
    }
    ,{
        nameOfBar : 'Bieristan',
        picture : "./places/bieristan.jpg",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=bieristan+lyon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjWvazW08r2AhVO14UKHat6BEUQ_AUoAXoECAEQAw",
        description1 : 'La terrasse',
        description2 : 'La sympathie des barmans', 
    }
    ,{
        nameOfBar : 'Les fleurs du malt',
        picture : "./places/Fleurs_du_malt.png",
        route : "https://www.google.com/maps?channel=fs&client=ubuntu&q=les+fleurs+du+malt+lyon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwie0Z_r08r2AhVRXhoKHeUHDl8Q_AUoAXoECAEQAw",
        description1 : 'Grand choix de bières',
        description2 : 'Déco sympa'
    }    
    ,{
        nameOfBar : 'StarFerry',
        picture : "./places/Star_Ferry.png",
        route : "https://goo.gl/maps/CPeZGqrJ6s5rvZwC8",
        description1 : "Cadre agréable", 
        description2 : "Repas sur le pouce", 
    }

]

function createBar(name, imgSrc, link, descr1, descr2 = null){
    //creation of h2 element with the title of the pub, argument name
    const barName = document.createElement("h2");
    barName.className = "bars-name"
    barName.innerHTML = name;
    bars.appendChild(barName);

    //creation of image element with a picture of the pub, argument imgSrc
    const barImg = document.createElement("img");
    barImg.className = "bars-img";
    barImg.src = imgSrc;
    bars.appendChild(barImg);

    //creation of the button section within the bars class
    const linkButton = document.createElement("button");
    linkButton.className = "link-btn";
    bars.appendChild(linkButton);

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
    bars.appendChild(descrList);
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
    
}

for(let i=0; i<barList.length; i++){
    createBar(barList[i].nameOfBar, barList[i].picture, barList[i].route, 
        barList[i].description1, barList[i].description2);
}