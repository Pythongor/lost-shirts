(function() {
    console.info('Hi');

    const sidebar = document.querySelector('.sidebar');
    const sidebarOpener = document.querySelector('.sidebar__hamburger');
    const sidebarCloser = document.querySelector('.sidebar__close');

    sidebarOpener.addEventListener('click', function() {
        sidebar.classList.add('sidebar--opened');
    });

    sidebarCloser.addEventListener('click', function() {
        sidebar.classList.remove('sidebar--opened');
    });
}) ();

