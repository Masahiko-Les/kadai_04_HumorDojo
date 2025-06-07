
// .Theme_Boxをクリックしたら.answer-formを表示する（jQuery版）
$(document).ready(function() {
    $('.Theme_Box').on('click', function() {
        $(this).find('.answer-form').show();
    });
});

//.answer-formをクリックしたら、.Theme_Boxの.answer-formを非表示にする（jQuery版）
// $(document).ready(function() {
//     $('.answer-form').on('click', function(event) {
//         event.stopPropagation(); // イベントのバブリングを防ぐ
//         $(this).hide();
//     });
// };
