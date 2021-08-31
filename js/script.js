window.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll('.info-header-tab'),
        tabsContent = document.querySelectorAll('.info-tabcontent'),
        tabsParent = document.querySelector('.info-header')

    let hoursItem = document.querySelector('.hours'),
        minutesItem = document.querySelector('.minutes'),
        secondsItem = document.querySelector('.seconds'),
        secondsRemaining = 0;

    let moreBtn = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupCloseBtn = document.querySelector('.popup-close')

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        /*
        tabs.forEach(tab => {
            tab.classList.remove("tabheader__item_active");
        });
        */
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        // tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    function getSeconds() {
        let hours = parseInt(hoursItem.textContent),
        minutes = parseInt(minutesItem.textContent),
        seconds = parseInt(secondsItem.textContent);
        seconds = (hours*60*60) + (minutes*60) + seconds;
        return seconds;
    }
    
    secondsRemaining = getSeconds()

    function timer() {
        let seconds = secondsRemaining;
        let hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        let minutes = Math.floor(seconds / 60);
        seconds %= 60;

        hoursItem.textContent = hours;
        minutesItem.textContent = minutes;
        secondsItem.textContent = seconds;

        if (hoursItem.textContent.length == 1) {
            hoursItem.textContent = '0' + hoursItem.textContent
        }
        if (minutesItem.textContent.length == 1) {
            minutesItem.textContent = '0' + minutesItem.textContent
        }
        if (secondsItem.textContent.length == 1) {
            secondsItem.textContent = '0' + secondsItem.textContent
        }

        secondsRemaining--;
    } 
    
    setInterval(timer, 1000)

    function showPopUp () {
        overlay.classList.remove('d-none')
        moreBtn.classList.add('more-splash')
        document.querySelector('body').classList.add('stop-scrolling')
    }
    
    function hidePopUp () {
        overlay.classList.add('d-none')
        moreBtn.classList.remove('more-splash')
        document.querySelector('body').classList.remove('stop-scrolling')
    }

    moreBtn.addEventListener('click', showPopUp)
    popupCloseBtn.addEventListener('click', hidePopUp)
})