// .Theme_Boxをクリックしたら.answer-formを表示する

// $('.Theme_Box').on('click', function() {
//     $(this).find('.answer-form').show();
// });



//#submitを押したら、your_answer1の内容を.answer_output_areaに出力する。
$('#submit').on('click', function() {
    let name= $('#your_name').val();
    let answer = $('#your_answer1').val();
    let html = '<div class="answer"><strong>' + name + ':</strong> ' + answer + '</div>'+ '<br>';
    $('.answer_output_area').append(html);
    
    $('#your_name').val(''); // 名前入力欄をクリア
    $('#your_answer1').val(''); // 入力欄をクリア
    
});
