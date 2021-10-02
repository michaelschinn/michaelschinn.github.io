



const desktopFrame = document.getElementById('desktop'),
mobileFrame = document.getElementById('mobile'),
postFrame = document.getElementById('post'),
navigation = document.getElementById('navigation');

desktopFrame.post1Btn = document.getElementById('post1Btn');
desktopFrame.post2Btn = document.getElementById('post2Btn');
desktopFrame.post3Btn = document.getElementById('post3Btn');
desktopFrame.post4Btn = document.getElementById('post4Btn');
desktopFrame.post5Btn = document.getElementById('post5Btn');

desktopFrame.mobilePostGo = document.getElementById('mobilePostGo');
desktopFrame.goBlog = document.getElementById('goBlog');
navigation.navBlog = document.getElementById('navBlog');

desktopFrame.post1.addEventListener('click', () => {
    showHide([postFrame,], [desktopFrame,mobileFrame])
});
desktopFrame.goBlog.addEventListener('click', () => {
    showHide([desktopFrame,mobileFrame], [postFrame])
});
desktopFrame.mobilePostGo.addEventListener('click', () => {
    showHide([postFrame], [desktopFrame,mobileFrame])
});

postFrame.posts = [
    {
        id:"",
        img:"",
        date:"",
        votes:"",
        rating: 3,
        keywords:"",
        views:25,
        html:""
    }
]


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