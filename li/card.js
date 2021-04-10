var item_data = {
    goods_id: 123434535,
    title: "2021明前龙井新茶上市 一款好喝的绿茶平肝护目抗衰老 此绿茶非比绿茶",
    image_url: "../images/tea.jpg",
    item_url: "http://www.baidu.com",
    vendor: "淘宝",
    coupon: 999,
    tag: "单品超万人已种草",
    real_price: 38.8,
    price: 58.8,
    sale: 11600,
    commission: 3.88,
};

function item(data) {
    var html = '';
    html = '<li class="item" key="'+ data.goods_id + '">';
    html += '  <div class="detail col">';
    html += '    <img class="goods-pic" src="' + data.image_url + '" alt="tea">';
    html += '    <div class="title">'+ data.title + '</div>';
    html += '    <div class="row">';
    html += '      <div class="coupon">';
    html += '        <div class="left">券</div>';
    html += '        <div class="right">' + data.coupon + ' 元</div>';
    html += '      </div>';
    html += '      <div class="tag">' + data.tag + '</div>';
    html += '    </div>';
    html += '    <div class="row price">';
    html += '      <span>券后 ￥</span><span class="new-price">' + data.real_price + '</span>' + '<sub class="old-price">￥ ' + data.price + '</sub>';
    html += '    </div>';
    html += '    <div class="row commission">';
    html += '      <div>';
    html += '        <span>佣金 ￥</span><span class="new-price">' + data.commission + '</span>';
    html += '      </div>';
    html += '      <div class="sale">';
    html += '        已售' + data.sale + '件';
    html += '      </div>';
    html += '    </div>';
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
$('.container').on('click', '.goods-pic', function() {
    console.log($(this));
    // window.location.href= "http://www.baidu.com";
});

$('.container').on('mouseover', '.goods-pic', function() {
    $(this).css('cursor', 'pointer');
});

$('.container').on("click", '.toolbar', function() {
    let barText = $(this).children('span').html();
    if (barText === "请选择") {
        $(this).children('span').html("已选择");
        $(this).css('background','#07C160');
        $(this).parent().css('border', '2px solid #07C160')

        $("#total").trigger("select", $(this).parent().attr("key"));
    } else {
        $(this).children('span').html("请选择");
        $(this).parent().css('border', '0')
        $(this).css('background','linear-gradient(-60deg, #ff5858 0%, #f09819 100%)');

        $("#total").trigger("unselect", $(this).parent().attr("key"));
    }
});

$('#total').on("select", function(event, data) {
    console.log(event);
    console.log(data);
    var total = $('#total').html();
    $('#total').html(Number(total) + 1);
    console.log(total)
});

$('#total').on("unselect", function(event, data) {
    var total = $('#total').html();
    $('#total').html(Number(total) - 1);
    console.log(total)
});