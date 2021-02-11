export function post() {
    
}

export function collapseWidgets() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-collapse'), function(elem) {
        var firstCollapse = elem.querySelector('*:first-child');
        var lastCollapse = elem.querySelector('*:nth-child(2)');
        firstCollapse.onclick = function(e) {
            e.preventDefault();
            firstCollapse.classList.toggle('border-bottom-0');
            lastCollapse.classList.toggle('pd-hide');
            if(elem.querySelector('.calendar_wrap #wp-calendar caption')){
                elem.querySelector('.calendar_wrap #wp-calendar caption').classList.toggle('border-bottom-0');
                elem.querySelector('.calendar_wrap #wp-calendar caption').classList.toggle('mb-0');
            }
            if(elem.querySelector('.calendar_wrap #wp-calendar tfoot')){
                elem.querySelector('.calendar_wrap #wp-calendar tfoot').classList.toggle('pd-hide');
            }
            if(elem.querySelector('.calendar_wrap #wp-calendar tbody')){
                elem.querySelector('.calendar_wrap #wp-calendar tbody').classList.toggle('pd-hide');
            }
        }
    });
}

export function backToTop() {
    const scrollContainerIsBody = document.body
    const scrollDocumentElement = scrollContainerIsBody && document.documentElement
    const backtop = document.querySelector('.pd-back-to-top') || ''
    const scrollEmitter = scrollContainerIsBody ? window : document.body
    let hidden = true
    
    if(backtop != ''){
        if(backtop.classList.contains('hidden')){ } else {
            backtop.classList.add('hidden')
        }
        scrollEmitter.addEventListener('scroll', adapt)
        adapt()
        backtop.addEventListener('click', event => {
            event.preventDefault()
            scrollUp()
        })
    }

    function adapt () {
      if(getScrollTop() >= 1){
        if (!hidden) { return }
        if(backtop.classList.contains('hidden')){
            backtop.classList.remove('hidden')
        }
        hidden = false
      } else{
        if (hidden) { return }
        backtop.classList.add('hidden')
        hidden = true
      }
    }

    function scrollUp () {
        const onClickScrollTo = 0
        const scrollTo = typeof onClickScrollTo === 'function' ? onClickScrollTo() : onClickScrollTo
        const { performance, requestAnimationFrame } = window
        if (1000 <= 0 || typeof performance === 'undefined' || typeof requestAnimationFrame === 'undefined') {
            return setScrollTop(scrollTo)
        }
        const start = performance.now()
        const initScrollTop = getScrollTop()
        const pxsToScrollBy = initScrollTop - scrollTo

        requestAnimationFrame(step)

        function step (timestamp) {
            const progress = Math.min((timestamp - start) / 1000, 1)
            setScrollTop(initScrollTop - Math.round(inOutSine(progress) * pxsToScrollBy))
            if (progress < 1) { requestAnimationFrame(step) }
        }
    }
    function getScrollTop () {
        return document.body.scrollTop || (scrollDocumentElement && document.documentElement.scrollTop || 0)
    }
  
    function setScrollTop (value) {
        document.body.scrollTop = value
        if (scrollDocumentElement) {
          document.documentElement.scrollTop = value
        }
    }

    function inOutSine (n) {
        return 0.5 * (1 - Math.cos(Math.PI * n))
    }
  
}