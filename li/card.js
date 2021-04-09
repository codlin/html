var item_data = {
    title: "2021明前龙井新茶上市 一款好喝的绿茶平肝护目抗衰老 此绿茶非比绿茶",
    image_url: "../images/tea.jpg",
    item_url: "http://www.baidu.com",
    vendor: "tb",
    coupon: 100,
    tag: "单品超万人已种草",
    real_price: 38.8,
    price: 58.8,
    sale: 11600,
    commission: 0.88,
};

function item(data) {
    var html = '';
    html = '<li class="item">';
    html += '  <div class="detail">';
    html += '    <img class="goods-pic" src="' + data.image_url + '" alt="tea">';
    html += '    <span class="title">'+ data.title + '</span>';
    html += '    <div class="row">';
    html += '      <div class="coupon">';
    html += '        <div class="left">券</div>';
    html += '        <div class="right">' + data.coupon + ' 元</div>';
    html += '      </div>';
    html += '      <div class="tag">' + data.tag + '</div>';
    html += '    </div>';
    html += '    <span class="row">';
    html += '      券后￥62';
    html += '    </span>';
    html += '    <span class="row">';
    html += '      已售123件';
    html += '    </span>';
    html += '  </div>';
    html += '  <div class="toolbar">';
    html += '    <span>请选择</span>';
    html += '  </div>';
    html += '</li>';

    return html;
}
$('#add-li').click(function() {
    $('.container').append(item(item_data));
});

//事件委托
$('.container').delegate('div:first-child', 'click', function(e) {
    console.log($(this).children("img"));
    window.location.href= "http://www.baidu.com";
});

$('.container').delegate('li', 'click', function() {
    // this.style.background = 'red';
    // $(this).css('background','red');
    // $(this).children("i").html("&#xe627;")
    $(this).toggleClass("selected");
});