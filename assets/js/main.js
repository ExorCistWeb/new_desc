document.addEventListener("DOMContentLoaded", () => {
    const STAGE_DURATION = 3500;
    const PROJECT_DURATION = 1500;
    const STAGE_IMAGE_DURATION = 720;

    const currentYear = document.querySelector('[data-current-year]');
    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobileMotion = window.matchMedia('(max-width: 820px)').matches;
    const heroBird = document.querySelector('.main_block .calibri_main');

    if (heroBird && mobileMotion && !reducedMotion) {
        heroBird.classList.add('hero-bird-enter');
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => heroBird.classList.add('is-visible'));
        });
    }

    const revealTargets = mobileMotion ? document.querySelectorAll([
        '.anatomy__intro',
        '.anatomy-mobile-card h3',
        '.anatomy-mobile-card p',
        '.process-heading',
        '.process-card__content',
        '.process-proof__message',
        '.process-voice__quote'
    ].join(',')) : [];

    revealTargets.forEach((target, index) => {
        target.classList.add('reveal-text');
        target.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`);
    });

    if (reducedMotion || !('IntersectionObserver' in window)) {
        revealTargets.forEach((target) => target.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -7% 0px'
        });

        revealTargets.forEach((target) => revealObserver.observe(target));
    }

    const projects = [{
            title: "NORDAR",
            logo: "",
            description: "Производство и реализация мороженого в Республике Беларусь",
            type: "Корпоративный сайт",
            year: "2024",
            url: "#",
            stages: [{
                    name: "Структура",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                },
                {
                    name: "Дизайн",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "WordPress",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                },
                {
                    name: "Тексты",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "SEO",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                }
            ]
        },
        {
            title: "NANOMEIKKI",
            logo: "",
            description: "Студия перманентного макияжа в Финляндии",
            type: "Корпоративный сайт",
            year: "2025",
            url: "#",
            stages: [{
                    name: "Структура",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "Дизайн",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                },
                {
                    name: "WordPress",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "Тексты",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                },
                {
                    name: "SEO",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                }
            ]
        },
        {
            title: "CARBIT",
            logo: "",
            description: "Автомобильный сервис и детейлинг в Финляндии",
            type: "Корпоративный сайт",
            year: "2025",
            url: "#",
            stages: [{
                    name: "Структура",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                },
                {
                    name: "Дизайн",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                },
                {
                    name: "WordPress",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "Тексты",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "SEO",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                }
            ]
        },
        {
            title: "MIRLAY",
            logo: "",
            description: "Производство стеклянных конструкций и изделий",
            type: "Интернет-каталог",
            year: "2026",
            url: "#",
            stages: [{
                    name: "Структура",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "Дизайн",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name: "WordPress",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                },
                {
                    name: "Тексты",
                    image: "https://i.pinimg.com/originals/fb/48/30/fb483049343fc50bc007a663b23d5e9a.jpg"
                },
                {
                    name: "SEO",
                    image: "https://yt3.googleusercontent.com/OtXny_Gcwk6tmmu7eUTbE2uxuUiPtcPC1LhFGRTDlb31LjO1g_B40WkUQVbNoczb-kxxQxVU=s900-c-k-c0x00ffffff-no-rj"
                }
            ]
        }
    ];

    const slider =
        document.querySelector(
            "#projects_slider"
        );

    if (!slider || !projects.length) {
        return;
    }

    const info =
        slider.querySelector(
            ".project_info"
        );

    const visuals =
        slider.querySelector(
            ".project_visuals"
        );

    const currentCounter =
        slider.querySelector(
            ".project_counter-current"
        );

    const totalCounter =
        slider.querySelector(
            ".project_counter-total"
        );

    const title =
        slider.querySelector(
            ".project_title"
        );

    const logo =
        slider.querySelector(
            ".project_logo"
        );

    const description =
        slider.querySelector(
            ".project_description"
        );

    const type =
        slider.querySelector(
            ".project_type"
        );

    const year =
        slider.querySelector(
            ".project_year"
        );

    const projectLink =
        slider.querySelector(
            ".project_link"
        );

    const stagesContainer =
        slider.querySelector(
            ".project_stages"
        );

    const nextButton =
        slider.querySelector(
            ".project_next-button"
        );

    let mainCard =
        slider.querySelector(
            ".project_card--main"
        );

    let nextCard =
        slider.querySelector(
            ".project_card--next"
        );

    let currentProjectIndex = 0;
    let currentStageIndex = 0;

    let stageTimer = null;
    let imageSwapTimer = null;
    let contentSwapTimer = null;

    let isSliderVisible = false;
    let isProjectChanging = false;
    let isLastStageComplete = false;

    let dragData = null;

    function formatNumber(number) {
        return String(number).padStart(
            2,
            "0"
        );
    }

    function clamp(value, min, max) {
        return Math.min(
            Math.max(value, min),
            max
        );
    }

    function interpolate(
        start,
        end,
        progress
    ) {
        return start +
            (end - start) * progress;
    }

    function getCurrentProject() {
        return projects[
            currentProjectIndex
        ];
    }

    function getNextProjectIndex() {
        return (
            currentProjectIndex + 1
        ) % projects.length;
    }

    function getCardCurrentImage(card) {
        return card.querySelector(
            ".project_image--current"
        );
    }

    function getCardIncomingImage(card) {
        return card.querySelector(
            ".project_image--incoming"
        );
    }

    function setCardImage(
        card,
        source,
        alt = ""
    ) {
        const currentImage =
            getCardCurrentImage(card);

        const incomingImage =
            getCardIncomingImage(card);

        card.classList.remove(
            "is-stage-changing"
        );

        currentImage.src = source;
        currentImage.alt = alt;

        incomingImage.removeAttribute(
            "src"
        );

        incomingImage.alt = "";
    }

    function preloadProjectImages(project) {
        project.stages.forEach(
            (stage) => {
                const preloadImage =
                    new Image();

                preloadImage.src =
                    stage.image;
            }
        );
    }

    function prepareNextCard() {
        const nextIndex =
            getNextProjectIndex();

        const nextProject =
            projects[nextIndex];

        setCardImage(
            nextCard,
            nextProject.stages[0].image,
            nextProject.title
        );

        preloadProjectImages(
            nextProject
        );
    }

    function renderProjectText() {
        const project =
            getCurrentProject();

        currentCounter.textContent =
            formatNumber(
                currentProjectIndex + 1
            );

        totalCounter.textContent =
            formatNumber(
                projects.length
            );

        title.textContent =
            project.title;

        description.textContent =
            project.description;

        type.textContent =
            project.type;

        year.textContent =
            project.year;

        projectLink.href =
            project.url;

        if (project.logo) {
            logo.src = project.logo;
            logo.alt = project.title;
            logo.hidden = false;
            title.hidden = true;
        } else {
            logo.hidden = true;

            logo.removeAttribute(
                "src"
            );

            title.hidden = false;
        }

        renderStages();
        updateNextButton();

        preloadProjectImages(
            project
        );
    }

    function renderStages() {
        const project =
            getCurrentProject();

        stagesContainer.innerHTML =
            project.stages
            .map((stage, index) => {
                const isComplete =
                    index <
                    currentStageIndex ||
                    isLastStageComplete;

                const isActive =
                    index ===
                    currentStageIndex &&
                    !isLastStageComplete;

                const classes = [
                        "project_stage",
                        isComplete ?
                        "is-complete" :
                        "",
                        isActive ?
                        "is-active" :
                        ""
                    ]
                    .filter(Boolean)
                    .join(" ");

                return `
                        <button
                            class="${classes}"
                            type="button"
                            role="tab"
                            data-stage-index="${index}"
                            aria-selected="${isActive}"
                            style="--stage-duration:${STAGE_DURATION}ms"
                        >
                            <span class="project_stage-name">
                                ${stage.name}
                            </span>

                            <span class="project_stage-track">
                                <span class="project_stage-progress"></span>
                            </span>
                        </button>
                    `;
            })
            .join("");

        stagesContainer
            .querySelectorAll(
                ".project_stage"
            )
            .forEach((button) => {
                button.addEventListener(
                    "click",
                    handleStageClick
                );
            });
    }

    function handleStageClick(event) {
        if (isProjectChanging) {
            return;
        }

        const index = Number(
            event.currentTarget
            .dataset
            .stageIndex
        );

        if (
            Number.isNaN(index) ||
            index === currentStageIndex
        ) {
            return;
        }

        stopStageProgress();

        currentStageIndex = index;
        isLastStageComplete = false;

        renderStages();
        changeStageImage();
        scheduleStageProgress();
    }

    function changeStageImage() {
        const project =
            getCurrentProject();

        const stage =
            project.stages[
                currentStageIndex
            ];

        const currentImage =
            getCardCurrentImage(
                mainCard
            );

        const incomingImage =
            getCardIncomingImage(
                mainCard
            );

        clearTimeout(
            imageSwapTimer
        );

        incomingImage.src =
            stage.image;

        incomingImage.alt =
            `${project.title}: ${stage.name}`;

        mainCard.classList.remove(
            "is-stage-changing"
        );

        void mainCard.offsetWidth;

        mainCard.classList.add(
            "is-stage-changing"
        );

        imageSwapTimer =
            setTimeout(() => {
                currentImage.src =
                    stage.image;

                currentImage.alt =
                    `${project.title}: ${stage.name}`;

                mainCard.classList.remove(
                    "is-stage-changing"
                );

                incomingImage
                    .removeAttribute(
                        "src"
                    );

                incomingImage.alt = "";
            }, STAGE_IMAGE_DURATION);
    }

    function finishPendingStageImage() {
        clearTimeout(
            imageSwapTimer
        );

        const currentImage =
            getCardCurrentImage(
                mainCard
            );

        const incomingImage =
            getCardIncomingImage(
                mainCard
            );

        const incomingSource =
            incomingImage.getAttribute(
                "src"
            );

        if (incomingSource) {
            currentImage.src =
                incomingSource;

            currentImage.alt =
                incomingImage.alt;
        }

        mainCard.classList.remove(
            "is-stage-changing"
        );

        incomingImage.removeAttribute(
            "src"
        );

        incomingImage.alt = "";
    }

    function stopStageProgress() {
        clearTimeout(stageTimer);

        stageTimer = null;

        stagesContainer.classList.remove(
            "is-progressing"
        );
    }

    function scheduleStageProgress() {
        stopStageProgress();

        if (!isSliderVisible ||
            isProjectChanging ||
            isLastStageComplete
        ) {
            return;
        }

        void stagesContainer.offsetWidth;

        stagesContainer.classList.add(
            "is-progressing"
        );

        stageTimer = setTimeout(
            completeCurrentStage,
            STAGE_DURATION
        );
    }

    function completeCurrentStage() {
        const project =
            getCurrentProject();

        const isLastStage =
            currentStageIndex ===
            project.stages.length - 1;

        stopStageProgress();

        if (!isLastStage) {
            currentStageIndex += 1;

            renderStages();
            changeStageImage();
            scheduleStageProgress();

            return;
        }

        const isLastProject =
            currentProjectIndex ===
            projects.length - 1;

        if (isLastProject) {
            isLastStageComplete = true;

            renderStages();
            updateNextButton();

            return;
        }

        startProjectTransition(
            currentProjectIndex + 1
        );
    }

    function updateNextButton() {
        const isLastProject =
            currentProjectIndex ===
            projects.length - 1;

        nextButton.classList.toggle(
            "is-restart",
            isLastProject
        );

        nextButton.setAttribute(
            "aria-label",
            isLastProject ?
            "Вернуться к первому проекту" :
            "Следующий проект"
        );
    }

    function getTransitionGeometry() {
        const mainStart = {
            left: mainCard.offsetLeft,

            top: mainCard.offsetTop,

            width: mainCard.offsetWidth,

            height: mainCard.offsetHeight
        };

        const nextStart = {
            left: nextCard.offsetLeft,

            top: nextCard.offsetTop,

            width: nextCard.offsetWidth,

            height: nextCard.offsetHeight
        };

        return {
            mainStart,
            nextStart,

            mainEnd: {
                left:
                    -mainStart.width -
                    50,

                top: mainStart.top + 18,

                width: mainStart.width,

                height: mainStart.height
            },

            nextEnd: {
                left: mainStart.left,

                top: mainStart.top,

                width: mainStart.width,

                height: mainStart.height
            }
        };
    }

    function getTransitionStyles(
        geometry,
        progress
    ) {
        const mainRotation =
            interpolate(
                1.3, -1.9,
                progress
            );

        const nextRotation =
            1.3 -
            Math.sin(
                progress * Math.PI
            ) *
            1.1;

        return {
            main: {
                left: `${interpolate(
                        geometry
                            .mainStart
                            .left,
                        geometry
                            .mainEnd
                            .left,
                        progress
                    )}px`,

                top: `${interpolate(
                        geometry
                            .mainStart
                            .top,
                        geometry
                            .mainEnd
                            .top,
                        progress
                    )}px`,

                width: `${interpolate(
                        geometry
                            .mainStart
                            .width,
                        geometry
                            .mainEnd
                            .width,
                        progress
                    )}px`,

                height: `${interpolate(
                        geometry
                            .mainStart
                            .height,
                        geometry
                            .mainEnd
                            .height,
                        progress
                    )}px`,

                transform: `rotate(${mainRotation}deg)`
            },

            next: {
                left: `${interpolate(
                        geometry
                            .nextStart
                            .left,
                        geometry
                            .nextEnd
                            .left,
                        progress
                    )}px`,

                top: `${interpolate(
                        geometry
                            .nextStart
                            .top,
                        geometry
                            .nextEnd
                            .top,
                        progress
                    )}px`,

                width: `${interpolate(
                        geometry
                            .nextStart
                            .width,
                        geometry
                            .nextEnd
                            .width,
                        progress
                    )}px`,

                height: `${interpolate(
                        geometry
                            .nextStart
                            .height,
                        geometry
                            .nextEnd
                            .height,
                        progress
                    )}px`,

                transform: `rotate(${nextRotation}deg)`
            }
        };
    }

    function setMotionStyles(
        card,
        styles
    ) {
        card.style.left =
            styles.left;

        card.style.top =
            styles.top;

        card.style.width =
            styles.width;

        card.style.height =
            styles.height;

        card.style.transform =
            styles.transform;
    }

    function clearMotionStyles(card) {
        card.style.removeProperty(
            "left"
        );

        card.style.removeProperty(
            "top"
        );

        card.style.removeProperty(
            "width"
        );

        card.style.removeProperty(
            "height"
        );

        card.style.removeProperty(
            "transform"
        );
    }

    function applyTransitionProgress(
        geometry,
        progress
    ) {
        const styles =
            getTransitionStyles(
                geometry,
                progress
            );

        setMotionStyles(
            mainCard,
            styles.main
        );

        setMotionStyles(
            nextCard,
            styles.next
        );
    }

    async function returnCardsToStart(
        geometry,
        progress
    ) {
        if (isProjectChanging) {
            return;
        }

        isProjectChanging = true;

        const startStyles =
            getTransitionStyles(
                geometry,
                progress
            );

        const endStyles =
            getTransitionStyles(
                geometry,
                0
            );

        const duration =
            Math.max(
                180,
                320 * progress
            );

        const options = {
            duration,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            fill: "forwards"
        };

        const mainAnimation =
            mainCard.animate(
                [
                    startStyles.main,
                    endStyles.main
                ],
                options
            );

        const nextAnimation =
            nextCard.animate(
                [
                    startStyles.next,
                    endStyles.next
                ],
                options
            );

        await Promise.allSettled([
            mainAnimation.finished,
            nextAnimation.finished
        ]);

        clearMotionStyles(mainCard);
        clearMotionStyles(nextCard);

        mainAnimation.cancel();
        nextAnimation.cancel();

        visuals.classList.remove(
            "is-dragging"
        );

        isProjectChanging = false;

        scheduleStageProgress();
    }

    async function startProjectTransition(
        targetProjectIndex,
        startProgress = 0,
        suppliedGeometry = null
    ) {
        if (isProjectChanging) {
            return;
        }

        isProjectChanging = true;

        stopStageProgress();
        finishPendingStageImage();

        clearTimeout(
            contentSwapTimer
        );

        const targetProject =
            projects[
                targetProjectIndex
            ];

        setCardImage(
            nextCard,
            targetProject
            .stages[0]
            .image,
            targetProject.title
        );

        const geometry =
            suppliedGeometry ||
            getTransitionGeometry();

        const progress =
            clamp(
                startProgress,
                0,
                0.95
            );

        const startStyles =
            getTransitionStyles(
                geometry,
                progress
            );

        const endStyles =
            getTransitionStyles(
                geometry,
                1
            );

        const remainingDuration =
            Math.max(
                260,
                PROJECT_DURATION *
                (1 - progress)
            );

        setMotionStyles(
            mainCard,
            startStyles.main
        );

        setMotionStyles(
            nextCard,
            startStyles.next
        );

        info.style.setProperty(
            "--project-change-duration",
            `${remainingDuration}ms`
        );

        info.classList.remove(
            "is-project-changing"
        );

        void info.offsetWidth;

        info.classList.add(
            "is-project-changing"
        );

        let isContentUpdated = false;

        function updateContent() {
            if (isContentUpdated) {
                return;
            }

            isContentUpdated = true;

            currentProjectIndex =
                targetProjectIndex;

            currentStageIndex = 0;
            isLastStageComplete =
                false;

            renderProjectText();
        }

        const contentChangePoint =
            0.42;

        const contentDelay =
            progress >=
            contentChangePoint ?
            0 :
            remainingDuration *
            (
                (
                    contentChangePoint -
                    progress
                ) /
                (1 - progress)
            );

        contentSwapTimer =
            setTimeout(
                updateContent,
                contentDelay
            );

        const options = {
            duration: remainingDuration,

            easing: "cubic-bezier(0.65, 0, 0.2, 1)",

            fill: "forwards"
        };

        const mainAnimation =
            mainCard.animate(
                [
                    startStyles.main,
                    endStyles.main
                ],
                options
            );

        const nextAnimation =
            nextCard.animate(
                [
                    startStyles.next,
                    endStyles.next
                ],
                options
            );

        await Promise.allSettled([
            mainAnimation.finished,
            nextAnimation.finished
        ]);

        clearTimeout(
            contentSwapTimer
        );

        updateContent();

        const oldMainCard =
            mainCard;

        const oldNextCard =
            nextCard;

        oldMainCard.classList.remove(
            "project_card--main"
        );

        oldMainCard.classList.add(
            "project_card--next"
        );

        oldNextCard.classList.remove(
            "project_card--next"
        );

        oldNextCard.classList.add(
            "project_card--main"
        );

        mainCard =
            oldNextCard;

        nextCard =
            oldMainCard;

        setCardImage(
            mainCard,
            targetProject
            .stages[0]
            .image,
            targetProject.title
        );

        prepareNextCard();

        clearMotionStyles(mainCard);
        clearMotionStyles(nextCard);

        mainAnimation.cancel();
        nextAnimation.cancel();

        visuals.classList.remove(
            "is-dragging"
        );

        info.classList.remove(
            "is-project-changing"
        );

        isProjectChanging = false;

        scheduleStageProgress();
    }

    nextButton.addEventListener(
        "click",
        () => {
            if (isProjectChanging) {
                return;
            }

            const isLastProject =
                currentProjectIndex ===
                projects.length - 1;

            const targetIndex =
                isLastProject ?
                0 :
                currentProjectIndex + 1;

            startProjectTransition(
                targetIndex
            );
        }
    );

    visuals.addEventListener(
        "pointerdown",
        (event) => {
            if (
                isProjectChanging ||
                event.target.closest(
                    ".project_next-button"
                )
            ) {
                return;
            }

            if (
                currentProjectIndex ===
                projects.length - 1
            ) {
                return;
            }

            stopStageProgress();
            finishPendingStageImage();

            const geometry =
                getTransitionGeometry();

            dragData = {
                pointerId: event.pointerId,

                startX: event.clientX,

                startY: event.clientY,

                startedAt: performance.now(),

                progress: 0,

                geometry
            };

            try {
                visuals.setPointerCapture(
                    event.pointerId
                );
            } catch (error) {
                /* Старые браузеры */
            }

            visuals.classList.add(
                "is-dragging"
            );
        }
    );

    visuals.addEventListener(
        "pointermove",
        (event) => {
            if (!dragData ||
                dragData.pointerId !==
                event.pointerId
            ) {
                return;
            }

            const differenceX =
                dragData.startX -
                event.clientX;

            const differenceY =
                Math.abs(
                    dragData.startY -
                    event.clientY
                );

            if (
                differenceY >
                Math.abs(
                    differenceX
                ) &&
                dragData.progress === 0
            ) {
                return;
            }

            const progress =
                clamp(
                    differenceX /
                    (
                        dragData
                        .geometry
                        .mainStart
                        .width *
                        0.72
                    ),
                    0,
                    1
                );

            dragData.progress =
                progress;

            applyTransitionProgress(
                dragData.geometry,
                progress
            );
        }
    );

    async function finishPointerGesture(
        event
    ) {
        if (!dragData ||
            dragData.pointerId !==
            event.pointerId
        ) {
            return;
        }

        const currentDrag =
            dragData;

        dragData = null;

        const gestureTime =
            performance.now() -
            currentDrag.startedAt;

        const fastSwipe =
            currentDrag.progress > 0.08 &&
            gestureTime < 280;

        const shouldChangeProject =
            currentDrag.progress >= 0.18 ||
            fastSwipe;

        if (shouldChangeProject) {
            await startProjectTransition(
                currentProjectIndex + 1,
                currentDrag.progress,
                currentDrag.geometry
            );
        } else {
            await returnCardsToStart(
                currentDrag.geometry,
                currentDrag.progress
            );
        }
    }

    visuals.addEventListener(
        "pointerup",
        finishPointerGesture
    );

    visuals.addEventListener(
        "pointercancel",
        finishPointerGesture
    );

    const observer =
        new IntersectionObserver(
            ([entry]) => {
                isSliderVisible =
                    entry.isIntersecting &&
                    entry.intersectionRatio >=
                    0.2;

                if (isSliderVisible) {
                    scheduleStageProgress();
                } else {
                    stopStageProgress();
                }
            }, {
                threshold: [
                    0,
                    0.2,
                    0.5
                ]
            }
        );

    observer.observe(slider);

    document.addEventListener(
        "visibilitychange",
        () => {
            if (document.hidden) {
                stopStageProgress();
            } else if (
                isSliderVisible
            ) {
                scheduleStageProgress();
            }
        }
    );

    renderProjectText();

    setCardImage(
        mainCard,
        projects[0]
        .stages[0]
        .image,
        projects[0].title
    );

    prepareNextCard();


    document.querySelectorAll('.process-section').forEach((section) => {
        const voice = section.querySelector('.process-voice');
        const waveElement = section.querySelector('.process-voice__wave');
        const button = section.querySelector('.process-voice__play');
        const time = section.querySelector('.process-voice__time');
        const audio = section.dataset.audio;

        if (!voice ||
            !waveElement ||
            !button ||
            !time ||
            !audio ||
            typeof WaveSurfer === 'undefined'
        ) {
            return;
        }

        const wavesurfer = WaveSurfer.create({
            container: waveElement,
            url: audio,
            height: 28,
            waveColor: 'rgba(13, 69, 225, 0.32)',
            progressColor: '#000000',
            cursorColor: 'transparent',
            cursorWidth: 0,
            barWidth: 2,
            barGap: 2,
            barRadius: 2,
            normalize: true,
            interact: true,
            dragToSeek: true,
            hideScrollbar: true
        });

        const formatTime = (seconds) => {
            if (!Number.isFinite(seconds)) {
                return '00:00';
            }

            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);

            return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        };

        wavesurfer.on('ready', () => {
            time.textContent = formatTime(wavesurfer.getDuration());
        });

        button.addEventListener('click', () => {
            document.dispatchEvent(
                new CustomEvent('processVoicePlay', {
                    detail: wavesurfer
                })
            );

            wavesurfer.playPause();
        });

        document.addEventListener('processVoicePlay', (event) => {
            if (
                event.detail !== wavesurfer &&
                wavesurfer.isPlaying()
            ) {
                wavesurfer.pause();
            }
        });

        wavesurfer.on('play', () => {
            voice.classList.add('is-playing');
        });

        wavesurfer.on('pause', () => {
            voice.classList.remove('is-playing');
        });

        wavesurfer.on('timeupdate', (currentTime) => {
            if (wavesurfer.isPlaying()) {
                time.textContent = formatTime(currentTime);
            }
        });

        wavesurfer.on('finish', () => {
            voice.classList.remove('is-playing');
            time.textContent = formatTime(wavesurfer.getDuration());
        });
    });

});
