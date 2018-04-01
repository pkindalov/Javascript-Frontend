
$(document).ready(function(){

    function increment(selector) {
        let container = $(selector);
    
        let textarea = $('<textarea class="counter" value="0" disabled="disabled"></textarea><br /> ');
        let incrementBtn = $('<button class="btn" id="incrementBtn">Increment</button>  ');
        let addBtn = $('<button class="btn" id="addBtn">Add</button>  ');
        let list = $('<ul class="results"></ul>');
    
       $(container).append(textarea);
       $(container).append(list);
       $(container).append(incrementBtn);
       $(container).append(addBtn);


        $('#incrementBtn').on('click', function(){
            let textAreaOldValue = $('.counter').attr('value');
            textAreaOldValue++;

            $('.counter').attr('value', textAreaOldValue);
            $('.counter').text(textAreaOldValue);
        });


        $('#addBtn').on('click', function(){
           let textAreaCurrentValue = $('.counter').text();
           
           let listElement = $('<li>' + textAreaCurrentValue + '</li>');
           $('.results').append(listElement);

        });


     }

     increment("#wrapper");

});

