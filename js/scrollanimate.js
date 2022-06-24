AOS.init({
    // Настройки:
    disable: 'phone', // Если мы не хотим чтобы анимация была на телефоне, тогда прописываем вместо fals: 'phone', 'tablet', 'mobile', boolean.
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', // скрипт работает только с этими классами
    animatedClassName: 'aos-animate', // имя класса анимации
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    
    offset: 100, // появления элемента в пикселях
    delay: 0, // задержка исполнения анимации
    duration: 600, // скорость анимации
    easing: 'ease', // тип анимации
    once: true, // если поставим true тогда анимация будет проигрываться только один раз 
    mirror: false,
    anchorPlacement: 'top-bottom', //  откуда будет анимация 
    
});
