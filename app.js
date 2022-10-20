var future = document.querySelector('#future');
var comp = document.querySelector('#comp');

var fi = document.querySelector('.futures-info');
var ci = document.querySelector('.company-info');

function showFutureInfo()
{
    fi.style.display = "block";
    future.style.backgroundImage = "url(images/icon-arrow-up.svg)"
}

future.addEventListener('mouseenter', showFutureInfo);

function hideFutureInfo()
{
    fi.style.display = "none";
    future.style.backgroundImage = "url(images/icon-arrow-down.svg)"
}

future.addEventListener('mouseleave', hideFutureInfo);

function showCompInfo()
{
    ci.style.display = "block";
    comp.style.backgroundImage = "url(images/icon-arrow-up.svg)"
}

comp.addEventListener('mouseenter', showCompInfo);

function hideCompInfo()
{
    ci.style.display = "none";
    comp.style.backgroundImage = "url(images/icon-arrow-down.svg)"
}

comp.addEventListener('mouseleave', hideCompInfo);
