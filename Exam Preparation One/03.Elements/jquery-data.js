$(document).ready(function () {

    $('.second-layout').hide();
    $('#elementInfo').hide();

    let topHeading = $('<h1>Choose your destiny</h1>');
    $('#elementsContainer').prepend(topHeading);
    
    
    function renderAllElementsInHTML(el1, el2, el3, el4) {

        let divAir = $(`<div id="${el1}" class="first clickable"></div>`);
        let divFire = $(`<div id="${el2}" class="second clickable"></div>`);
        let divWater = $(`<div id="${el3}" class="third clickable"></div>`);
        let divEarth = $(`<div id="${el4}" class="fourth clickable"></div>`);

        let divContainsFirst2Elements = $('<div class="containers"></div>');
        divContainsFirst2Elements.append(divAir);
        divContainsFirst2Elements.append(divFire);

        let divContainsSecond2Elements = $('<div class="containers"></div>');
        divContainsSecond2Elements.append(divWater);
        divContainsSecond2Elements.append(divEarth);

        $('.container').append(divContainsFirst2Elements);
        $('.container').append(divContainsSecond2Elements);


        //Second part
        let btnBackToElements = $('<button id="backToElements">Back To Elements</button>');
        btnBackToElements.appendTo($('.back-button'));

        // let liCreatureContent = $('<li></li>');
        let archangelInput = $('<input class="radio-button checked" name="selector" type="radio" value="Archangel" />');
        let archangelLabel = $('<label>Archangel</label>');

        let elementalInput = $('<input class="radio-button checked" name="selector" type="radio" value="Elemental" />');
        let elementalLabel = $('<label>Elemental</label>');

        let liArchangel = $('<li></li>');
        liArchangel.append(archangelInput);
        liArchangel.append(archangelLabel);
        liArchangel.appendTo($('.creatures'));

        let liElemental = $('<li></li>');
        liElemental.append(elementalInput);
        liElemental.append(elementalLabel);
        liElemental.appendTo($('.creatures'));


    }





    function renderSingleElementInHTML(element) {
        $('.second-layout').show();
        $('#elementInfo').show();
        $('#elementsContainer').hide();

        switch (element){
            case 'air':
                $('.second-layout').empty();
                $('#elementInfoTitle').text('Air');

                let firstAfterClickDiv = $('<div class="first-after-click"></div>');
                firstAfterClickDiv.appendTo($('.second-layout'));

                let ulCreatures = $('<ul class="creatures"></ul>');
                ulCreatures.appendTo($('.first-after-click'));


                let centerAfterClickDiv = $('<div class="center-after-click"></div>');
                centerAfterClickDiv.appendTo($('.second-layout'));

                let rightAfterClickDiv = $('<div id="right-after-click"></div>');
                rightAfterClickDiv.appendTo($('.second-layout'));





                let archangelImage = $('<img id="creature-image" src="images/archangel.jpg" alt="archangel" />');
                archangelImage.appendTo($('.center-after-click'));


                let creaturesTagPIds = ["creature-name", "creature-power", "creature-ultimate", "creature-region"];
                let creaturesTagPTextContent = ["Archangel", "Power:2000", "Ultimate: Wind Justice", "Region: Heaven's Kingdom"];

                for(let counterOfP = 0; counterOfP < creaturesTagPIds.length; counterOfP++){
                    let currentP = $(`<p id="${creaturesTagPIds[counterOfP]}">${creaturesTagPTextContent[counterOfP]}</p>`);

                    $('#right-after-click').append(currentP);
                };
            break;





            case 'fire':
                $('.second-layout').empty();
                $('#elementInfoTitle').text('Fire');

                let firstAfterClickDivF = $('<div class="first-after-click"></div>');
                firstAfterClickDivF.appendTo($('.second-layout'));

                let ulCreaturesF = $('<ul class="creatures"></ul>');
                ulCreaturesF.appendTo($('.first-after-click'));


                let centerAfterClickDivF = $('<div class="center-after-click"></div>');
                centerAfterClickDivF.appendTo($('.second-layout'));

                let rightAfterClickDivF = $('<div id="right-after-click"></div>');
                rightAfterClickDivF.appendTo($('.second-layout'));


                let fireElementImage = $('<img id="creature-image" src="images/fire-dragon.jpg" alt="fire-dragon" />');
                fireElementImage.appendTo($('.center-after-click'));


                let creaturesFireTagPIds = ["creature-name", "creature-power", "creature-ultimate", "creature-region"];
                let creaturesFireTagPTextContent = ["Fire Element", "Power:5000", "Ultimate: Fire Justice", "Region: Hell's Kingdom"];

                for(let counterOfP = 0; counterOfP < creaturesFireTagPIds.length; counterOfP++){
                    let currentP = $(`<p id="${creaturesFireTagPIds[counterOfP]}">${creaturesFireTagPTextContent[counterOfP]}</p>`);

                    $('#right-after-click').append(currentP);
                };


            break;


            case 'water':
                $('.second-layout').empty();
                $('#elementInfoTitle').text('Water');

                let firstAfterClickDivW = $('<div class="first-after-click"></div>');
                firstAfterClickDivW.appendTo($('.second-layout'));

                let ulCreaturesW = $('<ul class="creatures"></ul>');
                ulCreaturesW.appendTo($('.first-after-click'));


                let centerAfterClickDivW = $('<div class="center-after-click"></div>');
                centerAfterClickDivW.appendTo($('.second-layout'));

                let rightAfterClickDivW = $('<div id="right-after-click"></div>');
                rightAfterClickDivW.appendTo($('.second-layout'));





                let waterElImage = $('<img id="creature-image" src="images/mermaid.jpg" alt="mermaid" />');
                waterElImage.appendTo($('.center-after-click'));


                let creaturesTagPIdsW = ["creature-name", "creature-power", "creature-ultimate", "creature-region"];
                let creaturesTagPTextContentW = ["Mermaid", "Power:8000", "Ultimate: Clear the sea from jerks", "Region: Water's Kingdom"];

                for(let counterOfP = 0; counterOfP < creaturesTagPIdsW.length; counterOfP++){
                    let currentP = $(`<p id="${creaturesTagPIdsW[counterOfP]}">${creaturesTagPTextContentW[counterOfP]}</p>`);

                    $('#right-after-click').append(currentP);
                };

            break;



            case 'earth':
                $('.second-layout').empty();
                $('#elementInfoTitle').text('Earth');

                let firstAfterClickDivE = $('<div class="first-after-click"></div>');
                firstAfterClickDivE.appendTo($('.second-layout'));

                let ulCreaturesE = $('<ul class="creatures"></ul>');
                ulCreaturesE.appendTo($('.first-after-click'));


                let centerAfterClickDivE = $('<div class="center-after-click"></div>');
                centerAfterClickDivE.appendTo($('.second-layout'));

                let rightAfterClickDivE = $('<div id="right-after-click"></div>');
                rightAfterClickDivE.appendTo($('.second-layout'));





                let earthELImage = $('<img id="creature-image" src="images/forest-god.jpg" alt="forest-god" />');
                earthELImage.appendTo($('.center-after-click'));


                let creaturesTagPIdsE = ["creature-name", "creature-power", "creature-ultimate", "creature-region"];
                let creaturesTagPTextContentE = ["Run Forest, Run", "Power:20000", "Ultimate: Fast Run", "Region: Earth's Kingdom"];

                for(let counterOfP = 0; counterOfP < creaturesTagPIdsE.length; counterOfP++){
                    let currentP = $(`<p id="${creaturesTagPIdsE[counterOfP]}">${creaturesTagPTextContentE[counterOfP]}</p>`);

                    $('#right-after-click').append(currentP);
                };


            break;

        }



    }




    renderAllElementsInHTML('air', 'fire', 'water', 'earth');


    $('.clickable').click(function () {
        let whichElement = $(this).attr('id');

        renderSingleElementInHTML(whichElement);
    });


    $('#backToElements').click(function () {
        $('.second-layout').hide();
        $('#elementInfo').hide();
        $('#elementsContainer').show();
    });



});