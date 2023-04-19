
document.getElementById('sideNavBtn').addEventListener('click',()=>{
    document.getElementById('sideNav').style.width = '250px';
    document.getElementsByTagName('body')[0].style.marginLeft = '250px';
});

document.getElementById('closeSide').addEventListener('click',()=>{
    document.getElementById('sideNav').style.width = '0px';
    document.getElementsByTagName('body')[0].style.marginLeft = '0px';
});



