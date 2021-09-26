



const desktopFrame = document.getElementById('desktop'),
mobileFrame = document.getElementById('mobile'),
postFrame = document.getElementById('post'),
navigation = document.getElementById('navigation');

desktopFrame.goBtn = document.getElementById('git-over-here');
desktopFrame.mobilePostGo = document.getElementById('mobilePostGo');
desktopFrame.goBlog = document.getElementById('goBlog');
navigation.navBlog = document.getElementById('navBlog');

desktopFrame.goBtn.addEventListener('click', () => {
    showHide([postFrame], [desktopFrame,mobileFrame])
});
desktopFrame.goBlog.addEventListener('click', () => {
    showHide([desktopFrame,mobileFrame], [postFrame])
});
desktopFrame.mobilePostGo.addEventListener('click', () => {
    showHide([postFrame], [desktopFrame,mobileFrame])
});
navigation.navBlog.addEventListener('click', () => {
    if(!postFrame.classList.contains('hide')){
        showHide([desktopFrame,mobileFrame],[postFrame]);
    }
});


function showHide(show=[], hide=[]){
    hide.map(i => {
        i.classList.add('hide');
    });
    show.map(i => {
        i.classList.remove('hide');
    });
}