window.addEventListener('scroll', function() {
    const box = document.getElementById('box');
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        box.style.width = '81.4vw'; // 스크롤 위치가 0일 때 너비 836px
        prevPageBtn.style.display = 'none';
        nextPageBtn.style.display = 'none';
    } else {
        box.style.width = '87vw'; // 스크롤 위치가 1 이상일 때 너비 860px
        prevPageBtn.style.display = 'block';
        nextPageBtn.style.display = 'block';
    }
});