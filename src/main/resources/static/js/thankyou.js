(function() {

    setUpPage();

    function setUpPage() {
        addModalEventListeners();
    }

// Modal can be opened
    function addModalEventListeners() {

        const modalTriggerElement = document.querySelector('#modal-trigger');

        const modalTriggerClickHandler = function() {
            document.body.classList.add('modal-open');
        };

        modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

        // Modal can be closed
        const modalCloseButton = document.querySelector('#modal button');

        const modalCloseButtonClickHandler = function() {
            document.body.classList.remove('modal-open');
        };

        modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
    }
})();
