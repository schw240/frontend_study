function scrollHandler() {
  let windowBottom = $(window).scrollTop() + $(window).height();
  
  // 모든 playlist를 하나씩 살펴보고
  // 그 playlist의 중간 지점 좌표가 windowBottom보다 작으면
  // 그 playlist를 보이게 하기
  // let playlists = $('.playlist');
  // for (let i = 0; i < playlists.length; i++) {
  //   let playlist = $(playlists[i])
  //   let playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
    
  //   if (playlistHalf < windowBottom) {
  //     playlist.animate({'opacity': '1'}, 1500);
  //   }
  // }
  $('.playlist').each(function () {
    let playlist = $(this);
    let playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
    
    if (playlistHalf < windowBottom) {
      playlist.animate({'opacity': '1'}, 1500);
    }
  });
  
  if (windowBottom == $(document).height()) {
    $('.to-top-btn').fadeIn();
  } else {
    $('to-top-btn').fadeOut();
  }
  
}

$(window).on('scroll', scrollHandler);

// 처음 로딩될 때 호출
scrollHandler();

$('.to-top-btn').on('click', function() {
  $('html, body').animate({scrollTop: 0}, 1000);
});