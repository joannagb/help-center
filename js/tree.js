(function enableJsNavigation($) {
    'use strict';
    var tree = {
        'le web' : {
            //'web' : '/web-web',
            'un ordinateur' : ['/web-ordinateur','Acheter un ebook sur Internet et le lire sur son ordinateur</a>'],
            'une liseuse basic2' : ['/web-basic2','Acheter un ebook sur Internet et le lire sur sa liseuse Pocketbook Basic 2</a>'],
            'une liseuse cybook' : ['/web-cybook','Acheter un ebook sur Internet et le lire sur sa liseuse Cybook</a>'],
            'une liseuse Pocketbook firmware 4' : ['/web-pbv4','Acheter un ebook sur Internet et le lire sur sa liseuse Pocketbook v4</a>'],
            'une liseuse Pocketbook firmware 4 "MesAchats"' : ['/web-pbv4MesAchats','Acheter un ebook sur Internet et le lire sur sa liseuse Pocketbook v4 « mes achats »</a>'],
            'une liseuse Pocketbook firmware 5' : ['/web-pbv5','Acheter un ebook sur Internet et le lire sur sa liseuse Pocketbook v5</a>'],
            'l\'application android v1' : ['/web-androidv1','Acheter un ebook sur Internet et le lire sur sa tablette Android (app v1)</a>'],
            //'l\'application android v2' : '/web-androidv2',
            'l\'application iOs v1' : ['/web-iosv1','Acheter un ebook sur Internet et le lire sur son iPad/iPhone (app v1)</a>']
            //'l\'application iOs v2' : '/web-iosv2'
        },
        'une liseuse' : {
            'une liseuse cybook' : ['/liseuse-cybook','Acheter un ebook et le lire sur sa liseuse Cybook</a>'],
            'une liseuse Pocketbook firmware 4' : ['/liseuse-pbv4','Acheter un ebook et le lire sur sa liseuse Pocketbook v4</a>'],
            'une liseuse Pocketbook firmware 5' : ['/liseuse-pbv5','Acheter un ebook et le lire sur sa liseuse Pocketbook v5</a>']
        },
        'l\'application android v1' : {
            'l\'application android v1' : ['/androidv1-androidv1','Acheter un ebook et le lire sur sa tablette Android (app v1)</a>']
        }
        /*'l\'application android v2' : {
            'l\'application android v2' : '/androidv2-androidv2'
        }*/
    };

    var $achat = $('#select_achat');
    for (var achat in tree) {
        var $option = $('<option></option>');
        $option.val(achat);
        $option.text(achat);
        $achat.append($option);
    }

    function updateLectureSelect(e) {
        var $lecture;
        $lecture = $('<select></select>');
        $lecture.attr('id', 'select_lecture');
        achat = $achat.val();
        for (var lecture in tree[achat]) {
            $option = $('<option></option>');
            $option.val(lecture);
            $option.text(lecture);
            $lecture.append($option);
        }
        $('#select_lecture_wrapper').html($lecture);
        $lecture.change();
    }
    $('#select_container').on('click', '#select_achat', updateLectureSelect);
    $('#select_container').on('change', '#select_achat', updateLectureSelect);

    function updateSelectResult(e, t) {
        var achat = $achat.val();
        var lecture = $(e.target).val();
        console.log(achat, lecture);
        var resultat = tree[achat][lecture];
        var htmlResultat = '<a class="btn btn-default btn-home" role="button" href="'+resultat[0]+'">'+resultat[1]+'</a>';
        $('#select_result').html(htmlResultat);
    }
    $('#select_container').on('change', '#select_lecture', updateSelectResult);
}(jQuery, undefined));
