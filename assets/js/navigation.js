(() => {
    const initNavigation = () => {
        const header = document.querySelector('.header');
        const toggle = document.querySelector('.menu-toggle');
        const navigation = document.querySelector('.header_navigation');

        if (!header || !toggle || !navigation || toggle.dataset.navigationReady === 'true') {
            return;
        }

        toggle.dataset.navigationReady = 'true';

        const setOpen = (open) => {
            header.classList.toggle('is-menu-open', open);
            document.body.classList.toggle('is-menu-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
        };

        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            setOpen(!header.classList.contains('is-menu-open'));
        });

        navigation.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                setOpen(false);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 820) {
                setOpen(false);
            }
        }, { passive: true });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation, { once: true });
    } else {
        initNavigation();
    }
})();
