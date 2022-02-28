const profileShare = document.querySelector('.section-preview .profile-share');

profileShare.addEventListener('click', e => {
    activate();
    e.stopPropagation();
});

document.addEventListener('click', e => {
    // checking wheather share is active and if so closing on clicking outside of it
    if (document.querySelector('.section-preview .wrapper-share').classList.contains('active')) {

        // get the bubbled elements to check wheather wrappperShare element among them
        const elements = e.composedPath();
        let isWrapperShare = false;

        // here the 'elements.length - 2' is for ignoring last two element (document and window) 
        for (let index = 0; index < elements.length - 2; index++) {
            if (elements[index].classList.contains('wrapper-share')) {
                isWrapperShare = true;
                break;
            }
        }
        if (!isWrapperShare) {
            deactivate();
        }
    }
});

function activate() {
    const wrapperShare = document.querySelector('.section-preview .wrapper-share');
    const wrapperProfile = document.querySelector('.section-preview .wrapper-profile');
    if (!wrapperShare.classList.contains('active')) {
        wrapperShare.classList.add('active');
        document.querySelector('.profile-share').src = 'images/icon-share-white.svg';
    }
    if (!wrapperProfile.classList.contains('active')) {
        wrapperProfile.classList.add('active');
    }
}

function deactivate() {
    const wrapperShare = document.querySelector('.section-preview .wrapper-share');
    const wrapperProfile = document.querySelector('.section-preview .wrapper-profile');
    if (wrapperShare.classList.contains('active')) {
        wrapperShare.classList.remove('active');
        document.querySelector('.profile-share').src = 'images/icon-share.svg'; 
    }
    if (wrapperProfile.classList.contains('active')) {
        wrapperProfile.classList.remove('active');
    }
}

